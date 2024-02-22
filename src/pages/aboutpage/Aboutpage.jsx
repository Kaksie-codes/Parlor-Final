import React, { useEffect, useState } from 'react'
import { Services } from '../../components/services/Services'
import './aboutpage.css'
import OurStory from '../../components/ourstory/OurStory';
import Engage from '../../components/engage/Engage';
import { useNavigate } from 'react-router-dom';
import FAQs from '../../components/faqs/FAQs';
import Question from '../../components/question/Question';
import Loading from '../../components/loading/Loading';
import LogosSlide from '../../components/logosslide/LogosSlide';
import ReactGA from "react-ga4";

const Aboutpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const measurementId = "G-8RG82WM011";
  ReactGA.initialize(measurementId);

  // Send pageview with a custom path
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname, 
    title: "About Page" 
  });

    useEffect(() => {
      const delay = 2000; // 2 seconds delay
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      {
        isLoading ? (
          <Loading/>
        ) : (
          <div className='about-page'>        
            <div className="container section">       
              <div className="top">
                <span className="blue-span">About Us</span>
                <h1>At <span>Parlor Digital</span>, we believe that opportunity doesn't knock</h1>
                <p>We eliminate guesswork by providing clear insights into performance marketing, enabling clients to focus on their core business priorities</p>
                <button className="btn btn-secondary" onClick={() => navigate('/contact_us') }>Talk to Us</button>
              </div>       
            </div>
            <OurStory/>
            <Services/>
            <Engage/>
            <LogosSlide title='Portfolio'/>
            <FAQs/>
            <Question/>    
          </div>
        )
      }
    </>    
  )
}

export default Aboutpage