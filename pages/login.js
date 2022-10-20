import React from 'react';
import Link from 'next/link';
import LoginLayout from '../components/login/LoginLayout';
import Head from 'next/head';

export default function Login() {
        return (
          <>
          <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
          <div class="text-center">
                                <h1>OpenAttendance</h1>
                                <h1 class="h4 text-gray-900 mb-4">Login</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password" />
                                </div>
                                
                                <a href="index.html" class="btn btn-primary btn-user btn-block">
                                    Login
                                </a>
                                
                            </form>
                            <hr/>
                            <div class="text-center">
                              <Link href="/forgotpassword">
                                <a class="small">Forgot Password?</a>
                              </Link>
                            </div>

                            <div class="text-center">
                                <Link href="/register">
                                    <a class="small">Create an Account!</a>
                                </Link>
                            </div>
          </LoginLayout>
          </>
        )
      }