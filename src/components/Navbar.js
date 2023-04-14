// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();


//   const onArticlesTextClick = useCallback(() => {
//     navigate("/article-category");
//   }, [navigate]);

//   const onDetectTextClick = useCallback(() => {
//     navigate("/detect-page");
//   }, [navigate]);

//   const onQuizTextClick = useCallback(() => {
//     navigate("/quiz");
//   }, [navigate]);

//   return (

//       <div className="header">
//         <i className="home">Home</i>
//         <i className="articles" onClick={onArticlesTextClick}>
//           Articles
//         </i>
//         <i className="articles" onClick={onDetectTextClick}>
//           Detect
//         </i>
//         <i className="quiz" onClick={onQuizTextClick}>
//           Quiz
//         </i>
//       </div>

//   );
// };

// export default Navbar;


import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentPath: '',
      };
    }
  
    componentDidMount() {
      this.updateCurrentPath();
      window.addEventListener('popstate', this.updateCurrentPath);
    }
  
    componentWillUnmount() {
      window.removeEventListener('popstate', this.updateCurrentPath);
    }
  
    updateCurrentPath = () => {
      const currentPath = window.location.pathname;
      this.setState({ currentPath });
    }
  
    render() {
        const { currentPath } = this.state;
      
        return (
          <nav className="navbar">
            <ul>
              <li className={currentPath === '/' ? 'active' : ''}><a href="/">Home</a></li>
              <li className={currentPath === '/article-category' ? 'active' : ''}><a href="/article-category">Articles</a></li>
              <li className={currentPath === '/detect-page' ? 'active' : ''}><a href="/detect-page">Detect</a></li>
              <li className={currentPath === '/quiz' ? 'active' : ''}><a href="/quiz">Quiz</a></li>
            </ul>
          </nav>
        );
      }
  }

  export default Navbar;
