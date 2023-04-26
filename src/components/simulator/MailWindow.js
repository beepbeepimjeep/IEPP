// EmailSimulator.js
import React, { useState } from 'react';
import './EmailSimulator.css';
import { Tab, Tabs, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPaperclip, faTag, faUsers, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import { colors } from '@mui/material';


const fakeEmails = [
  {
    id: 1,
    from: 'Wrong Company A',
    subject: 'Payment Notice',
    body: 'Dear customer, please click on this incorrect link to pay your bill.',

  },
  {
    id: 2,
    from: 'Wrong Company B',
    subject: 'Payment Notice',
    body: 'Dear customer, please click on this incorrect link to pay your bill.',

  },
  {
    id: 3,
    from: 'Wrong Company C',
    subject: 'Payment Notice',
    body: 'Dear customer, please click on this incorrect link to pay your bill.',

  }
];

function EmailSimulator() {
  const [stage, setStage] = useState(0);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState("primary");

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
    if (cardNumber && password) {
      setStage(4);
    } else {
      alert('Please enter card number and password before submitting');
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
        <div className="start-button">
          <button className="btn" onClick={startSimulation}>
            Start
          </button>
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
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - #tom19970517</span>
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
                <span className="text-muted" style={{ fontSize: "11px", marginRight: '10px', alignSelf: "center"}}> - TAX INVOICE Hey Tom, Thank you for ordering with the MyMacca's app.</span>
                <span className="rightItem badge">05:15 PM</span>
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
          <p>To: tom@gmail.com</p>
          <p>Date: 26 April 2023, 12:10 AM</p>
        </div>
        <div className="email-body">
          <p>Dear Tom,</p>
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
        <div className="payment-form content-spacing">
          <h3>Payment</h3>
          <div className="form-group">
            <label className="form-label" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="form-control"
              placeholder="Please enter your Card Number"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Please enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" onClick={submitPayment}>
            Submit
          </button>
        </div>
      )}

    {stage === 4 && (
        <div className="report content-spacing">
          <h3>Report</h3>
          <p>
            You have made the following mistakes during the simulation:
          </p>
          <ul>
            <li>You did not recognize the incorrect sender.</li>
            <li>You easily clicked on the incorrect link.</li>
            <li>You entered your card number and password without verifying the source.</li>
          </ul>
          <p>Please be more cautious in the future.</p>
        </div>
      )}

  </div>
);
}
          
export default EmailSimulator;
          
