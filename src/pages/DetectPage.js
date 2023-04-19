import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DetectPage.css";
import { searchURL } from "../service/urlService";
import PasswordCheck from "../components/PasswordCheck";
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar'
import Header from "../components/global/Header";

const DetectPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [urlError, setUrlError] = useState("");
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);

  const [urlResult, setUrlResult] = useState(null); //保存返回的数据
  const [isLoading, setIsLoading] = useState(false); // 新增 isLoading 状态

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArticlesTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onQuizTextClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const handleUrlInputChange = (event) => {
    setUrlInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handleUrlSubmit = async () => {
    console.log("Submitted URL:", urlInput);
    // Check if the URL starts with http
    // if (urlInput.startsWith("http://")) {
    //   windows.alert("All http website might not safe ");
    //   return;
    // } else if (urlInput === "") {
    //   window.alert("Please enter a URL");
    // }else {
    //   try {
    //     const result = await searchURL(urlInput);
    //     console.log(result);
    //     setUrlResult(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // // Send URL to backend
    // setUrlInput("");
    // setUrlError("");

    if (urlInput.startsWith("http://")) {
      
      const result = await searchURL(urlInput);
        console.log(result);
        setUrlResult(result);
        window.alert("All http website might not safe ");
      return;
    } else if (urlInput === "") {
      window.alert("Please enter a URL");
    } else {
      setIsLoading(true); // 设置为正在加载状态
      try {
        const result = await searchURL(urlInput);
        console.log(result);
        setUrlResult(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // 加载完成后设置为非加载状态
      }
    }
    // Send URL to backend
    setUrlInput("");
    setUrlError("");
  };

  const handlePasswordSubmit = () => {
    console.log("Submitted password:", passwordInput);
    // Send password to backend
    setPasswordInput("");
  };

  const HandleshowPasswordCheck = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div>
      <div className="detect-page">
        {/* Test your password strength */}
        {/* <div className="newsletter">
          <div className="title-text">
            <i className="test-your-password">Test your password strength</i>
            <div className="inputsearch">
              <div className="inputsearch-child" />
              <div className="label-parent">
                <input
                  className="input2"
                  placeholder="Enter a password"
                  value={passwordInput}
                  onChange={handlePasswordInputChange}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handlePasswordSubmit();
                    }
                  }}
                />
                <div className="buttonsecondary1">
                  <div
                    className="iconlybulksend-parent"
                    onClick={handlePasswordSubmit}
                  >
                    <img
                      className="iconlybulksend"
                      alt=""
                      src="/iconlybulksend.svg"
                    />
                    <i className="label3">Test</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Detect the URL of website */}
        <div className="newsletter1">

          <div className="buttontertiary pswchecker" onClick={HandleshowPasswordCheck}>
                  <Button className="primary" variant="info">Password checker</Button>
                </div>

          <div className="title-text1">
            <i className="test-your-password">Detect the URL of website</i>
            <div className="inputsearch">
              <div className="inputsearch-child" />
              <div className="label-parent">
                <input
                  className="InputUrl"
                  placeholder="Enter the URL..."
                  value={urlInput}
                  onChange={handleUrlInputChange}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      console.log("key is pressed");
                      handleUrlSubmit();
                    }
                  }}
                />
                <div className="buttonsecondary1">
                  <div
                    className="iconlybulksend-parent"
                    onClick={handleUrlSubmit}
                  >
                    <img
                      className="iconlybulksend"
                      alt=""
                      src="/iconlybulksend1.svg"
                    />
                    <i className="label3">Detect</i>
                  </div>
                </div>
                
                {/* <div className="buttonsecondary1">
                  <div
                    className="iconlybulksend-parent"
                    onClick={HandleshowPasswordCheck}
                  >
                    <img
                      className="iconlybulksend"
                      alt=""
                      src="/iconlybulksend1.svg"
                    />
                    <i className="label3">Password checker</i>
                  </div>
                </div> */}


                {/* Detect password strength */}

                {/* <div className="buttontertiary pswchecker" onClick={HandleshowPasswordCheck}>
                  <Button className="primary" variant="info">Password checker</Button>
                </div> */}


              </div>

            </div>
            {isLoading ? ( <div className="spinner"></div> ) : null}
          
            {urlError && <div className="error-message"> url error</div>}

            
            {urlResult === null ? (
              <div></div>
            ) : urlResult.result[0].length == 0 &&
              urlResult.result[1].length == 0 &&
              Object.keys(urlResult.result[2]).length === 0 ? (
              <div className="url-result">
                <div className="result-title"></div>
                <p>Result: URL is safe.</p>
              </div>
            ) : (
              <div className="url-result">
                <div className="result-title">Results:</div>
                <ul>
                  {urlResult.result &&
                    urlResult.result[0] &&
                    urlResult.result[0].map((item, index) => (
                      <li className="result-item" key={index}>
                        {item}
                      </li>
                    ))}


                    {urlResult.result &&
                      urlResult.result[1] !== null &&
                      <div className="url-type">
                        This Website might be - {urlResult.result[1][0].urlType} site
                      </div>
                    }

                    
                  {urlResult.result &&
                    urlResult.result[2] &&
                    urlResult.result[2].matches &&
                    urlResult.result[2].matches.map((item, index) => (
                      <li className="result-item" key={index}>
                        {item.threatType}
                      </li>
                    ))}
                </ul>
              </div>
            )}

          </div>
        </div>
        {/* password check */}
        {showpassword && (
          <div className="PasswordCheck" >
            <PasswordCheck />
          </div>
        )}             
        


        {/* <div className="header5">
          <i className="home5" onClick={onHomeTextClick}>
            Home
          </i>
          <i className="home5" onClick={onArticlesTextClick}>
            Articles
          </i>
          <i className="detect5">Detect</i>
          <i className="quiz6" onClick={onQuizTextClick}>
            Quiz
          </i>
        </div> */}
        {/* <Navbar /> */}
        <Header />
      </div>
      
    </div>
  );
};

export default DetectPage;
