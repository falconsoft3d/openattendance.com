import React from 'react';
import Sidebar from './Sidebar';
import Head from 'next/head';
import { useAuth } from '../../context/AuthUserContext';
import TopBar from './TopBar';
import Footer from './Footer';

export default function BackLayout({children}) {
  
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
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet" />

            {/* <!-- Custom styles for this template--> */}
            <link href="backend/css/sb-admin-2.min.css" rel="stylesheet" />
          </Head>   

          <div id="page-top">
          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">
              <Sidebar /> 
              <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                       <TopBar />
                      <div className="container-fluid">
                          {children}
                      </div>
                  </div>
                  <Footer />
              </div>
              {/* <!-- End of Content Wrapper --> */}
          </div>
          {/* <!-- End of Page Wrapper -->
          <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
          </a>

          {/* <!-- Logout Modal--> */}
          <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                      </div>
                      <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                      <div className="modal-footer">
                          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                          <a className="btn btn-primary" href="login.html">Logout</a>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Bootstrap core JavaScript--> */}
          <script src="backend/vendor/jquery/jquery.min.js"></script>
          <script src="backend/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          {/* <!-- Core plugin JavaScript--> */}
          <script src="/backend/vendor/jquery-easing/jquery.easing.min.js"></script>

          {/* <!-- Custom scripts for all pages--> */}
          <script src="backend/js/sb-admin-2.min.js"></script>

          </div>
          </>
  );
}
