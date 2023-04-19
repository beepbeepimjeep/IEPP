// import React, { useState } from 'react';
// import "./navbarNew.css";
// // import 'bootstrap/dist/css/bootstrap.min.css';

// function NavbarNew() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const currentPath = window.location.pathname;

//   function handleMenuClick() {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <nav className="navbar">
//       <div className="navbar-header">
//         <button className="navbar-toggle" onClick={handleMenuClick}>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//       </div>
//       <ul className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
//         <li className={currentPath === "/" ? "active" : ""}>
//           <a href="/">Home</a>
//         </li>
//         <li className={currentPath === "/article-category" ? "active" : ""}>
//           <a href="/article-category">Articles</a>
//         </li>
//         <li className={currentPath === "/detect-page" ? "active" : ""}>
//           <a href="/detect-page">Detect</a>
//         </li>
//         <li className={currentPath === "/quiz" ? "active" : ""}>
//           <a href="/quiz">Quiz</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavbarNew;

import React from "react";
import "./navbarNew.css";

class NavbarNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: "",
      isOpen: false,
    };
  }

  render() {
    const { currentPath, isOpen } = this.state;
    const isMobile = window.innerWidth < 760;

    return (
      <nav className="navbar">
        {isMobile && (
          <button
            className={`navbar-toggle${isOpen ? " open" : ""}`}
            onClick={() => this.setState({ isOpen: !isOpen })}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        )}

        <ul className={`${isMobile && !isOpen ? "hidden" : ""}`}>
          <li className={currentPath === "/" ? "active" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={currentPath === "/article-category" ? "active" : ""}>
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
    );
  }
}

export default NavbarNew;