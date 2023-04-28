import React from 'react';
import AboutSerivces from '../components/articles/Article1';
import Article2 from '../components/articles/Article2';
import Article3 from '../components/articles/Article3';
import Article4 from '../components/articles/Article4';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCategory.css";
import Navbar from '../components/Navbar'
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";
import Footer from "../components/global/Footer";
import Hero from "../components/global/Hero";

function Services() {
  // Title dynamic

  return (
      <>
        <Header />
          {/* <Banner
              pageTitle="Useful information to help you stay safe online. "
              smTitle="Article Category"
              breadcrumb="Home / Article"
          /> */}
          <AboutSerivces />
          <Article2/>
          <Article3/>
          <Article4/>

          <Footer />
      </>
  );
}

export default Services;
