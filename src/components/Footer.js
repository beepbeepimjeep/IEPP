import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FontAwesomeIcon from '../FontAwesome';

export default function Todo() {
    return (
<div className="footer1">
        {/* <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="about-us-group">
                <div className="about-us1">About Us</div>
                <div className="how-are-we1">How are we different?</div>
                <div className="how-are-we1">Pricing</div>
                <div className="how-are-we1">Carreer</div>
                <div className="how-are-we1">Integrate with your system</div>
              </div>
              <i className="domo1">domo</i>
            </div>
            <div className="frame-parent6">
              <div className="about-us-group">
                <div className="how-are-we1">Blog</div>
                <div className="how-are-we1">Case Studies</div>
                <div className="how-are-we1">News</div>
              </div>
              <i className="resources1">Resources</i>
            </div>
            <div className="frame-parent7">
              <div className="about-us-group">
                <div className="how-are-we1">Help Center</div>
                <div className="how-are-we1">Privacy Policy</div>
                <div className="how-are-we1">Privacy Request</div>
              </div>
              <i className="support1">Support</i>
            </div>
            <div className="frame-parent8">
              <div className="spear-st-floor-4-san-francisc-container">
                <div className="spear-st-floor-container1">
                  <p className="by-alvaro-puig">360 Spear St Floor 4,</p>
                  <p className="by-alvaro-puig">San Francisco, CA 94105</p>
                </div>
              </div>
              <i className="contact1">contact</i>
            </div>
            <div className="products-group">
              <i className="products1">Products</i>
              <div className="workforce-management-group">
                <div className="how-are-we1">Workforce Management</div>
                <div className="how-are-we1">{`Productivity & Communication`}</div>
                <div className="how-are-we1">HR Management</div>
                <div className="how-are-we1">Contingent Worker Platform</div>
                <div className="how-are-we1">Contingent Worker Platform</div>
              </div>
            </div>
          </div>
          <div className="copyright-2023-all-rights-res-group">
            <div className="copyright-2023-all1">
              © Copyright 2023. All Rights Reserved.
            </div>
            <img className="frame-item" alt="" src="/group-4791.svg" />
          </div>
        </div> */}

        <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h5>About Us</h5>
              <p className="pr-5 ">We are a non-profit organization in Melbourne, Victoria, Australia. We are committed to helping young people better understand the potential dangers hidden behind the Internet, help them better identify cyber attacks, and protect personal information and property safety. </p>
                <p>
                  <a href="#">
                    <i className="fa fa-facebook-square mr-1"></i>
                  </a>
                  <a href="#">
                      <i className="fa fa-linkedin-square"></i>
                  </a>

  
                </p>

            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h5 className="mt-lg-0 mt-sm-3">Links</h5>
                <ul  className='footerLink'>
                  <li className="p-2"> <a href="#">Lorem ipsum</a></li>
                  <li className="p-2"> <a href="#">Nam mauris velit</a></li>
                  <li className="p-2"> <a href="#">Etiam vitae mauris</a></li>
                  <li className="p-2"> <a href="#">Fusce scelerisque</a></li>
                  <li className="p-2"> <a href="#">Sed faucibus</a></li>
                  <li className="p-2"> <a href="#">Mauris efficitur nulla</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-xs-12 location">
              <h5 className="mt-lg-0 mt-sm-4">Support</h5>
              <p>Help Center</p>
              <p>Privacy Policy</p>
              <p>Privacy Request</p>

            </div>

            <div className="col-lg-2 col-xs-12 location">
              <h5 className="mt-lg-0 mt-sm-4">Location</h5>

              
              <p className="mb-0"><FontAwesomeIcon icon="phone" /> (541) 754-3010</p>
              {/* <FontAwesomeIcon icon="faMailForward" /> */}

              {/* <svg width="24" height="24">
                <use xlinkHref="../../public/mail.svg" />
              </svg> */}

              {/* <img src="../../public/mail.svg" alt="Mail Icon" /> */}


              <p className='p-2'><i className="fa fa-envelope-o mr-3"></i>Email: info@trustonlinevictoria.com</p>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small>© 2023. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
        </div>
       

      </div>

    )
}