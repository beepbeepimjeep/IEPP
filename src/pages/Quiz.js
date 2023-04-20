import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarNew from "../components/navbarNew";
import Header from "../components/global/Header";
import Banner from "../components/global/Banner";

const Quiz = () => {
  const navigate = useNavigate();

/*   const onButtonClick = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onSTARTTextClick = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onSTARTText2Click = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);
 */
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArticlesTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onDetectTextClick = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);

  const onQuizTextClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <>
      <Header />
      <Banner 
        pageTitle="Test How Much You Know About Internet Fraud"
        smTitle="QUIZ"
        breadcrumb="Home / Quiz"
      />
      </>
  )
};
export default Quiz;
