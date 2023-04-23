// EmailSimulator.js
import React, { useState } from 'react';
import './EmailSimulator.css';

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

  const startSimulation = () => {
    setStage(1);
  };

  const openEmail = (email) => {
    setSelectedEmail(email);
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
        <button className="btn back-button" onClick={goBack}>
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
        <ul className="email-list">
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
      </ul>
    )}
          
    {stage === 2 && selectedEmail && (
      <div className="email-content text-spacing">
        <h3>{selectedEmail.subject}</h3>
        <p>{selectedEmail.body}</p>
        <a href="#" onClick={goToPayment} style={{ textDecoration: 'none' }}>
            www.fakelink.com
          </a>
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
          
