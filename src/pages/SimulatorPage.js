import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarNew from "../components/navbarNew";
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";
import MailWindow from "../components/simulator/MailWindow";


const SimulatorPage = () => {

  return (
    <>
      <Header />
      <Banner 
        pageTitle="Test How Much You Know About Internet Fraud"
        smTitle="Simulator"
        breadcrumb="Home / Simulator"
      />
        <MailWindow />

     {/*  <Footer /> */}

      </>
  )
};
export default SimulatorPage;
