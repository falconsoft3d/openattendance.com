import React from 'react';
import BasicFeatures from './BasicFeatures';
import Cta from './Cta';
import Features from './Features';
import Footer from './Footer';
import GetApp from './GetApp';
import MyHeader from './MyHeader';
import Testimonial from './Testimonial';
import MyNavBar from './MyNavBar';

export default function FrontLayout() {
  return (
    <>

     <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>OAtt - Open Attendance</title>
        <link rel="icon" type="image/x-icon" href="frontend/assets/favicon.ico" />
        {/* <!-- Bootstrap icons--> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        {/* <!-- Google fonts--> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="frontend/css/styles.css" rel="stylesheet" />
    </head>


    <body id="page-top">
        <MyNavBar />
        
        <MyHeader />
        <Testimonial />
        <Features />
        <BasicFeatures/>
        <Cta />
        <GetApp />
        {/* <!-- Footer--> */}
        <Footer/>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="frontend/js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>


    </>
  );
}
