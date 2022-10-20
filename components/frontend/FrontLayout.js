import React, {useEffect} from 'react'
import BasicFeatures from './BasicFeatures';
import Cta from './Cta';
import Features from './Features';
import Footer from './Footer';
import GetApp from './GetApp';
import MyHeader from './MyHeader';
import Testimonial from './Testimonial';
import MyNavBar from './MyNavBar';
export default function FrontLayout() {

    // JS de Boostrap
   useEffect(() => { 
        if(typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min');
        }
    });

  return (
    <>
        <MyNavBar />
        <MyHeader />
        <Testimonial />
        <Features />
        <BasicFeatures/>
        <Cta />
        <GetApp />
        <Footer/>
    </>
  );
}
