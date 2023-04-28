import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleCategory from "./pages/ArticleCategory";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleDetails from "./pages/ArticleDetails";
import Quiz from "./pages/Quiz";
import QuizDetail from "./pages/QuizDetail";
import DetectPage from "./pages/DetectPage";
import BackUp from "./pages/BackUp";
import DetectPageNew from "./pages/DetectPageNew";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SimulatorPage from "./pages/SimulatorPage";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import font awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/article-category":
        title = "";
        metaDescription = "";
        break;
      case "/article-detail":
        title = "";
        metaDescription = "";
        break;
      case "/article-details":
        title = "Article Details-TOV";
        metaDescription = "";
        break;
      case "/quiz":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-detail":
        title = "";
        metaDescription = "";
        break;
      case "/detect-page":
        title = "";
        metaDescription = "";
        break;
      case "/simulator-page":
        title = "";
        metaDescription = "";
        break;
      case "/back-up":
        title = "";
        metaDescription = "";
        break;
      case "/DetectPageNew":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-category" element={<ArticleCategory />} />
      <Route path="/article-detail" element={<ArticleDetail />} />
      <Route path="/article-details" element={<ArticleDetails />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz-detail" element={<QuizDetail />} />
      <Route path="/detect-page" element={<DetectPage />} />
      <Route path="/back-up" element={<BackUp />} />
      <Route path="/DetectPageNew" element={<DetectPageNew />} />
      <Route path="/simulator-page" element={<SimulatorPage />} />
    </Routes>
  );
}
export default App;
