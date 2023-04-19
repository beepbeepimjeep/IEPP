import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

import Navbar from '../components/Navbar'
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";
import Footer from "../components/global/Footer";
import Hero from "../components/global/Hero";

const HomePage = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onLabelTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onButtonsContainer1Click = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);

  const onLabelText1Click = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);


  return (
    <>
      <Header />
      <Banner 
        pageTitle="Find Potential Fraud"
        smTitle="Trust online Victoria"
        breadcrumb="Home"
      />
      <Hero />
      {/* <div className="buttons">
          <div className="buttons1" onClick={onButtonsContainerClick}>
            <div className="buttonprimary">
              <i className="label" onClick={onLabelTextClick}>
                Lern More About internet fraud
              </i>
            </div>
          </div>
          <div className="buttons2" onClick={onButtonsContainer1Click}>
            <div className="buttonprimary">
              <i className="label" onClick={onLabelText1Click}>
                Detect Web URL for free
              </i>
            </div>
          </div>
        </div> */}

      <Footer />
     
    </>
  );
};

export default HomePage;
