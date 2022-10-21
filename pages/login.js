import React, { useState } from 'react';
import Link from 'next/link';
import LoginLayout from '../components/login/LoginLayout';
import Head from 'next/head';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { useRouter } from 'next/router';

export default function Login() {
        const [loading, setLoading] = useState(false);
        const { push } = useRouter();

        const formik = useFormik({
          initialValues: initialValues(),
          validationSchema: Yup.object(validationSchema()),
          onSubmit: async (formData) => {
            setLoading(true);

            let password = formData.password
            let email = formData.email

            if (email === "" || password === "") {
              toast.error("Error: All fields are required");
              return;
             }

            try {
              await signInWithEmailAndPassword(auth, 
                  email, 
                  password
                  );
                  toast.success("You have successfully logged in");
                  push('/dashboard');
          } catch (error) { 
              toast.error("Error: " + error.message);
          }

            
          
            
          
            setLoading(false);
          },
        });

        return (
          <>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />

            <title>OAtt - Open Attendance</title>

            {/* <!-- Custom fonts for this template--> */}
            <link href="backend/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet" />

            {/* <!-- Custom styles for this template--> */}
            <link href="backend/css/sb-admin-2.min.css" rel="stylesheet" />
          </Head>  

          <LoginLayout>
          <div className="text-center">
                                <h1>OpenAttendance</h1>
                                <h1 className="h4 text-gray-900 mb-4">Login</h1>
                            </div>
                            <form className="user" onSubmit={formik.handleSubmit}>
                              
                                <div className="form-group">
                                    <input type="email" className={`form-control form-control-user ${formik.errors.email ? "is-invalid" : "is-valid"}`}
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        placeholder="Email Address"/>
                                </div>
                                
                               
                                <div className="form-group">
                                    <input type="password" className={`form-control form-control-user ${formik.errors.password ? "is-invalid" : "is-valid"}`}
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        placeholder="Password" />
                                </div>

                               
                                {!loading ? (
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Login
                                    </button>
                                ): <p>Loading...</p>}
                                
                                <Link href={"/"}>
                                <a type="submit" className="btn btn-secondary btn-user btn-block">
                                        Home
                                 </a>
                                 </Link>
                                
                            </form>
                            <hr/>
                            <div className="text-center">
                              <Link href="/forgotpassword">
                                <a className="small">Forgot Password?</a>
                              </Link>
                            </div>
                            
                            <div className="text-center">
                              <Link href="/register">
                                <a className="small" >Register</a>
                              </Link>  
                            </div>
          </LoginLayout>
          </>
        )
      }



function initialValues() {
        return {
          email: "",
          password: "",
        };
      }
      
function validationSchema() {
        return {
          email: Yup.string().email(true).required(true),
          password: Yup.string().required(true),
        };
      }