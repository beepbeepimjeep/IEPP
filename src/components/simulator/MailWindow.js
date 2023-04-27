// EmailSimulator.js
import React, { useState } from 'react';
import './EmailSimulator.css';
import { Tab, Tabs, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPaperclip, faTag, faUsers, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'

const CardIcon = require('../../assets/img/credit-card-icons.png');

function EmailSimulator() {
  const [stage, setStage] = useState(0);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cw, setCw] = useState('');
  const [expirationDate, setexpirationDate] = useState('');
  const [activeTab, setActiveTab] = useState("primary");

  const packageCode = Math.floor(Math.random() * 1000000);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }
  const startSimulation = () => {
    setStage(1);
  };

  const openEmail = () => {
    setStage(2);
  };

  const submitPayment = () => {
    if (cardNumber && firstName && lastName && cw && expirationDate) {
      setStage(4);
    } else {
      alert('Please fill in all fields.');
    }
  };
  

  const goToPayment = (e) => {
    e.preventDefault();
    setStage(3);
  };

  const goBack = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  return (
    <div className="email-simulator">
      {stage > 0 && (
        <button className="btn back-button" style={{marginBottom: '10px'}} onClick={goBack}>
          Back
        </button>
      )}

   
      {stage === 0 && (
        <div className="startPage">
        <h3 className="text-center mb-4">Spam Email Simulation</h3>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <p className="lead">We want to mimic a real life situation here</p>
            <p className="lead">Here you will be presented with series of emails and try to interact with them as if they were real</p>
            <p className="lead">Your goal is to reach the end and identify different ways you are able to tell a spam email from a good email</p>
            <p className="lead">Good luck and have fun</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <button className="btn btn-danger" onClick={startSimulation}>
              Start
            </button>
          </div>
        </div>
      </div>
      
      )}

    {stage === 1 && (
        /*<ul className="email-list">
          {fakeEmails.map((email) => (
            <li
              key={email.id}
              className="email-list-item"
              onClick={() => openEmail(email)}
            >
            <div>
              <strong>{email.from}</strong>
            </div>
            <div>{email.subject}</div>
            </li>
        ))}
      </ul>*/
      <div className="container">
      <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
        <Nav variant="tabs" className="mb-3 pageNav">
          <Nav.Item>
            <Nav.Link eventKey="primary">
              <FontAwesomeIcon icon={faInbox} /> Primary
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="promotions">
              <FontAwesomeIcon icon={faTag} /> Promotions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="social">
              <FontAwesomeIcon icon={faUsers} /> Social
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="primary">
            <div className="list-group" style={{display: 'flex'}}>
              <a href="#" className="list-group-item emailElement" style={{display: 'flex'}} onClick={openEmail}>
                  <label style={{marginRight: '10px'}}>
                    <input type="checkbox" />
                  </label>
                <FontAwesomeIcon icon={faStar} style={{alignSelf: "center", marginRight: '10px'}}/>
                <span className="name" style={{ minWidth: "200px", display: "inline-block",  marginRight: '5px', fontWeight: 'bold'}}>AU-servicePOst!</span>
                <span className="title" style={{marginRight: '10px', fontWeight: 'bold'}}>VERiFiCatiOn-990031</span>
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - #meera20040517</span>
                <span className="rightItem badge">12:10 AM</span>
                <span className="pull-right">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </a>
              <a href="#" className="list-group-item emailElement" style={{display: 'flex'}}>
                  <label style={{marginRight: '10px'}}>
                    <input type="checkbox" />
                  </label>
                <FontAwesomeIcon icon={faStar} style={{alignSelf: "center", marginRight: '10px'}}/>
                <span className="name" style={{ minWidth: "200px", display: "inline-block",  marginRight: '5px'}}>Monash Online</span>
                <span className="title" style={{marginRight: '10px'}}>Monash Online enrolments close this Friday</span>
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - Call now to avoid missing out.</span>
                <span className="rightItem badge">07:15 PM</span>
                <span className="pull-right">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </a>
              <a href="#" className="list-group-item emailElement" style={{display: 'flex'}}>
                  <label style={{marginRight: '10px'}}>
                    <input type="checkbox" />
                  </label>
                <FontAwesomeIcon icon={faStar} style={{alignSelf: "center", marginRight: '10px'}}/>
                <span className="name" style={{ minWidth: "200px", display: "inline-block",  marginRight: '5px'}}>McDonald's Account</span>
                <span className="title" style={{marginRight: '10px'}}>Order Drive Thru</span>
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - TAX INVOICE Hey Meera, Thank you for ordering with the MyMacca's app.</span>
                <span className="rightItem badge">05:15 PM</span>
                <span className="pull-right">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </a>
              <a href="#" className="list-group-item emailElement" style={{display: 'flex'}}>
                  <label style={{marginRight: '10px'}}>
                    <input type="checkbox" />
                  </label>
                <FontAwesomeIcon icon={faStar} style={{alignSelf: "center", marginRight: '10px'}}/>
                <span className="name" style={{ minWidth: "200px", display: "inline-block",  marginRight: '5px'}}>Do not reply to thi.</span>
                <span className="title" style={{marginRight: '10px'}}>This is your Turnitin Digital Receipt</span>
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - Dear Meera Mala, you have successfully submitted the file</span>
                <span className="rightItem badge">02:40 PM</span>
                <span className="pull-right">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </a>
              <a href="#" className="list-group-item emailElement" style={{display: 'flex'}}>
                  <label style={{marginRight: '10px'}}>
                    <input type="checkbox" />
                  </label>
                <FontAwesomeIcon icon={faStar} style={{alignSelf: "center", marginRight: '10px'}}/>
                <span className="name" style={{ minWidth: "200px", display: "inline-block",  marginRight: '5px'}}>noreply</span>
                <span className="title" style={{marginRight: '10px'}}>Payslip for Meera Mala for Week ending 16 Apr 2023</span>
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - Your payslip is ready!</span>
                <span className="rightItem badge">01:31 PM</span>
                <span className="pull-right">
                  <FontAwesomeIcon icon={faPaperclip} />
                </span>
              </a>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="social">
            Empty
          </Tab.Pane>
          <Tab.Pane eventKey="promotions">
            Empty
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
    )}
          
    {stage === 2 && (
      <div className="email-content">
        <div className="email-header">
          <h4>VERiFiCatiOn-990031</h4>
          <p>From: rp.LTBpKOYY0x@mail.vxiedz8in8.com</p>
          <p>To: meeramala@gmail.com</p>
          <p>Date: 26 April 2023, 12:10 AM</p>
        </div>
        <div className="email-body">
          <p>Dear Meera,</p>
          <p>This is just a quick update to let you know that your order is now in the mail and on its way to you. To track your shipment and view the delivery status, click on the link below.</p>
          <p>However, keep in mind that constantly updating the tracking number will not speed up the delivery of your package.
            Estimated shipping: ~ 1 - 2 days
            The order is being prepared for shipment and your confirmation is required.</p>
          <button className='alert' onClick={goToPayment} style={{fontWeight: 'bold'}}>Click to Tract Your Order  
            <FontAwesomeIcon icon={faArrowRight} style={{paddingLeft: '10px'}}/>
          </button>
          <p>Best regards,</p>
          <p>Your Post Service Team</p>
        </div>
      </div>
      
    )}

      {stage === 3 && (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Package Code</h4>
          </div>
          <div className="col-md-6">
            <h4>AG001962212CN</h4>
          </div>
        </div>

        <div className="row">
        <div className="col-md-6">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        </div>

        <div className="row">
        <div className="col-md-6">
          <label className="form-label" htmlFor="cardName">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            placeholder="Card Number"
            required
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="cw">
            CW
          </label>
          <input
            type="text"
            id="cw"
            className="form-control"
            placeholder="CW"
            required
            value={cw}
            onChange={(e) => setCw(e.target.value)}
          />
        </div>

          
          
        </div>

        <div className="row">
        <div className="col-md-6">
              <img src={CardIcon} alt="Payment logos" />
            </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="expirationDate">
          Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            className="form-control"
            placeholder="MM/YY"
            required
            value={expirationDate}
            onChange={(e) => setexpirationDate(e.target.value)}
          />
        </div>
        <button className="btn" onClick={submitPayment} 
        style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                padding: "8px 16px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "8px",
              }}>

            Submit
          </button>
        </div>      

        </div>
      )}

      {stage === 4 && (
        <div className="report content-spacing">
          <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
            Report
          </h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            You have made the following mistakes during the simulation:
          </p>
          <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
            <li>
              1. You did not recognize the incorrect sender.
            </li>
            <li>
              2. You easily clicked on the incorrect link.
            </li>
            <li>
              3. You entered your card number and password without verifying
              the source.
            </li>
          </ul>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '15px' }}>
            Please be more cautious in the future.
          </p>
        </div>
      )}
    </div>
  );
}
          
export default EmailSimulator;
          
