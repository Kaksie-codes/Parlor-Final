import React, { useEffect, useState } from 'react'
import Contact from '../../components/contact/Contact'
import './contactpage.css'
import Loading from '../../components/loading/Loading';
import ReactGA from "react-ga4";

const Contactpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const measurementId = "G-KFL5DSSXMF";
  ReactGA.initialize(measurementId);

  // Send pageview with a custom path
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname, 
    title: "Contact Page" 
  });

    useEffect(() => {
      const delay = 2000; // 2 seconds delay
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      {
        isLoading ? (
          <Loading/>
        ) : (
          <div className='contact-page'>
            <section className="container">
              <div className="top-section">
                <span className='blue-span'>Contact Us</span>
                <h1>Join <span>100+</span> Thriving Businesses</h1>
                <p className='sub-heading'>Entrust us with Google Ads, Performance Marketing, Social Media Ads, and Ecommerce strategies. Elevate Your Online Presence.</p>
              </div>
            </section>
          <Contact/>
        </div>
        )
      }
    </>    
  )
}

export default Contactpage