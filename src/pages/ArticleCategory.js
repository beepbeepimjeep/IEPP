import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCategory.css";
import Navbar from '../components/Navbar'
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";
import Footer from "../components/global/Footer";
import Hero from "../components/global/Hero";
import ArticleList from '../components/articles/ArticleList';

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
          <ArticleList/>
         {/*  <AboutSerivces />
          <Article2/>
          <Article3/>
          <Article4/> */}

          <Footer />
      </>
  );
}

export default Services;
