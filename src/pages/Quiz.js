import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarNew from "../components/navbarNew";
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";
import Quiz1 from "../components/quiz/Quiz1";
import Quiz2 from "../components/quiz/Quiz2";

const Quiz = () => {

  return (
    <>
      <Header />
      <Banner 
        pageTitle="Test How Much You Know About Internet Fraud"
        smTitle="QUIZ"
        breadcrumb="Home / Quiz"
      />
      <Quiz1/>
      <Quiz2/>

     {/*  <Footer /> */}

      </>
  )
};
export default Quiz;
