import "./Password.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function PasswordCheck() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  const handlePassword = (passwordValue) => {
    // if (passwordValue.length >= 16) {
    //   setMessage("Strong");
    //   setProgress("100%");
    //   return;
    // }
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
      greatThan16: 0,
    };
    strengthChecks.greatThan16 = passwordValue.length >= 16 ? true : false;
    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length >= 5 | strengthChecks.greatThan16 == true
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

    console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  return (
    <div style={{ width: '18rem' }}>
      <div className="card">
        <div className="card-header">
          <h3 >Password Strength Checker</h3>
        </div>

        <div className="card-body-psw">
          <div className="input-container">
            <div className="input-box">
              <input
                value={password}
                onChange={({ target }) => {
                  handlePassword(target.value);
                }}
                type={hidePassword ? "password" : "text"}
                className="input"
                placeholder="Enter Password"
              />

              <a
                href="#"
                className="toggle-btn"
                onClick={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                <span
                  className="material-icons eye-icon"
                  style={{ color: !hidePassword ? "#FF0054" : "#c3c3c3" }}
                >
                   View 👁‍🗨
                </span>
              </a>
            </div>

            <div className="progress-bg">
              <div
                className="progress"
                style={{
                  width: progress,
                  backgroundColor: getActiveColor(message),
                }}
              ></div>
            </div>
          </div>

          {password.length !== 0 ? (
            // <p className="message" style={{ color: getActiveColor(message) }}>
            //   Your password is {message}
            // </p>
            <div>
            <p className="message" style={{ color: getActiveColor(message) }}>
              Your password is {message}
              {password.length >= 16 && " (16+ characters, strong)"}
            </p>
            {message !== "Strong" ? <p className="p-2" >Tips: Try to add UpperCase or '!@#$'</p>: null}

            </div>

          ) : null}
        

        </div>
      </div>
    </div>
  );
}

export default PasswordCheck;
