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

import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: "",
      isOpen: false,
      isMobile: window.innerWidth < 760,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  

  componentDidMount() {
    this.updateCurrentPath();
    window.addEventListener("popstate", this.updateCurrentPath);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.updateCurrentPath);
  }

  updateCurrentPath = () => {
    const currentPath = window.location.pathname;
    this.setState({ currentPath });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize); // add event listener
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize); // remove event listener
  }

  handleResize() {
    this.setState({ isMobile: window.innerWidth < 760 }); // update isMobile on resize
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    const { currentPath } = this.state;

    const isMobile = window.innerWidth < 760;
    
    return (
      <div>
      

        <div>
          {isMobile && (
            <button
              className={`hamburger-button${this.state.isOpen ? " open" : ""}`}
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          )}

          {isMobile && this.state.isOpen ? (
            <nav className="navbarOpen">
              {/* <div
                className={`${isMobile && !this.state.isOpen ? "navbarOpen" : ""}`}
              > */}
                <ul className="navbarOpenUl">
                  <li className={currentPath === "/" ? "active" : ""}>
                    <a href="/">Home</a>
                  </li>
                  <li
                    className={
                      currentPath === "/article-category" ? "active" : "" &&
                      navbarOpenLi
                    }
                  >
                    <a href="/article-category">Articles</a>
                  </li>
                  <li
                    className={currentPath === "/detect-page" ? "active" : ""}
                  >
                    <a href="/detect-page">Detect</a>
                  </li>
                  <li className={currentPath === "/quiz" ? "active" : ""}>
                    <a href="/quiz">Quiz</a>
                  </li>
                </ul>
              {/* </div> */}
            </nav>
          ) : (
            <nav className="navbar">
              <ul className={`${isMobile && !this.state.isOpen ? "show" : ""}`}>
                <li className={currentPath === "/" ? "active" : ""}>
                  <a href="/">Home</a>
                </li>
                <li
                  className={
                    currentPath === "/article-category" ? "active" : ""
                  }
                >
                  <a href="/article-category">Articles</a>
                </li>
                <li className={currentPath === "/detect-page" ? "active" : ""}>
                  <a href="/detect-page">Detect</a>
                </li>
                <li className={currentPath === "/quiz" ? "active" : ""}>
                  <a href="/quiz">Quiz</a>
                </li>
              </ul>
            </nav>
          )
        }
        </div>

        {/* <span class="hidden-sm">小型设备不可见</span>
        <span class="visible-sm">✔ 在小型设备上可见</span>
        <Container>
          <Row>
            <Col md={4}>Column 1</Col>
            <Col md={4}>Column 2</Col>
            <Col md={4}>Column 3</Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Navbar;
