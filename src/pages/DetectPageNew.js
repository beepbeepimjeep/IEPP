// import Nav from "react-bootstrap/Nav";
import "./DetectPageNew.css";
import Header from "../components/global/Header";
import { Nav, Card, Container } from "react-bootstrap";
// import { useState } from "react";
import Banner from "../components/global/Banner";
// copy from previous
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { searchURL, searchArticle } from "../service/urlService";
import PasswordCheck from "../components/PasswordCheck";

import Button from 'react-bootstrap/Button';

const DetectPageNew = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  // copy from previous
  const [urlInput, setUrlInput] = useState("");
  const [articleInput, setArticleInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [urlError, setUrlError] = useState("");
  const [articleError, setArticleError] = useState("");
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);

  const [urlResult, setUrlResult] = useState(null); //保存返回的数据
  const [articleResult, setArticleResult] = useState(null); //保存article的数据
  const [isLoading, setIsLoading] = useState(false); // 新增 isLoading 状态

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className={`container ${activeTab === "home" ? "" : "hidden"} `}>
            <Card className="cardStyle">
              <Card.Body>
                <Card.Title>Detect URL</Card.Title>

                {/* <Card.Text>
                  This is the content for Detect URL tab.
                </Card.Text> */}
                <div className="title-text1">
                  <h3 className="">Detect the URL of website</h3>

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
                  {isLoading ? <div className="spinner"></div> : null}

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

                        {urlResult.result && urlResult.result[1] !== null && (
                          <div className="url-type">
                            This Website might be -{" "}
                            {urlResult.result[1][0].urlType} site
                          </div>
                        )}

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
              </Card.Body>
            </Card>
          </div>
        );
      case "link-1":
        return (
          <div
            className={`container ${activeTab === "link-1" ? "" : "hidden"}`}
          >
            <Card className="cardStyle">
              <Card.Body>
                <Card.Title>Detect Article</Card.Title>
                <div className="title-text1">
                  <h3 className="">Detect the Articles</h3>

                  <div className="inputsearch">
                    <div className="inputsearch-child" />
                    <div className="label-parent">
                      <input
                        className="InputUrl"
                        placeholder="Enter the Article Title"
                        value={articleInput}
                        onChange={handleArticleInputChange}
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            console.log("key is pressed");
                            handleArticleSubmit();
                          }
                        }}
                      />
                      <div className="buttonsecondary1">
                        <div
                          className="iconlybulksend-parent"
                          onClick={handleArticleSubmit}
                        >
                          <img
                            className="iconlybulksend"
                            alt=""
                            src="/iconlybulksend1.svg"
                          />
                          <i className="label3">Detect</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isLoading ? <div className="spinner"></div> : null}

                  {articleError && (
                    <div className="error-message"> Article error</div>
                  )}

                  {/* {urlResult === null ? (
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

                        {urlResult.result && urlResult.result[1] !== null && (
                          <div className="url-type">
                            This Website might be -{" "}
                            {urlResult.result[1][0].urlType} site
                          </div>
                        )}

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
                  )} */}

                  {/* <div className="url-result">
                    <div className="result-title">Results:</div>
                    <ul>
                      {articleResult.result &&
                        articleResult.result[0] &&
                        articleResult.result[0].map((item, index) => (
                          <li className="result-item" key={index}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div> */}

                  <div className="showResult">
                    {articleResult && articleResult.emptyResult && (
                      <p>Your claim did not match any result</p>
                    )}
                    {articleResult &&
                    articleResult.resultArray &&
                    articleResult.resultArray.length > 0 ? (
                      <ul>
                        {articleResult.resultArray.map((item) => (
                          <li key={item.url}>
                            <strong>Claim:</strong> {item.claim}
                            <br />
                            <strong>Result:</strong> {item.result}
                            <br />
                            {/* <strong>URL:</strong> {item.url} */}

                            {/* <Button variant="secondary" size="sm" href={item.url}>
                            Access
                          </Button> */}

                          <Button variant="secondary" size="sm" href={item.url} target="_blank">
                            Access
                          </Button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No results found</p>
                    )}
                  </div>


                </div>
              </Card.Body>
            </Card>
          </div>
        );
      case "link-2":
        return (
          <div
            className={`container ${activeTab === "link-2" ? "" : "hidden"}`}
          >
            <div className="cardStyle">
              <PasswordCheck style={{ left: "0" }} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // copy from previous
  // const [urlInput, setUrlInput] = useState("");
  // const [passwordInput, setPasswordInput] = useState("");
  // const [urlError, setUrlError] = useState("");
  // const navigate = useNavigate();
  // const [showpassword, setShowpassword] = useState(false);

  // const [urlResult, setUrlResult] = useState(null); //保存返回的数据
  // const [isLoading, setIsLoading] = useState(false); // 新增 isLoading 状态

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
  // 改变article 输入状态
  const handleArticleInputChange = (event) => {
    setArticleInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handleUrlSubmit = async () => {
    console.log("Submitted URL:", urlInput);

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
  // handle artcile submit
  const handleArticleSubmit = async () => {
    console.log("Submitted Keywords:", articleInput);
    const articleResult = await searchArticle(articleInput);
    console.log("Article result is ", articleResult);
    // console.log(articleResult);
    setArticleResult(articleResult);
    // console.log("Article result is "+ articleResult);

    if (articleInput === "") {
      window.alert("Please enter your keywords/ Article Title");
    } else {
      setIsLoading(true); // 设置为正在加载状态
      try {
        // const articleResult = await searchArticle(articleInput);
        // console.log(articleResult);
        // // searchArticle(result);
        // setArticleResult(articleResult);
        console.log("Submitted Keywords:", articleInput);
        const articleResult = await searchArticle(articleInput);
        console.log("Article result is ", articleResult);
        // console.log(articleResult);
        setArticleResult(articleResult);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // 加载完成后设置为非加载状态
      }
    }
    // Send URL to backend
    setArticleInput("");
    setArticleError("");
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
    <div className="background">
      <Header />
      <Banner
        // pageTitle="Tools empower yourself "
        smTitle="Tools"
        breadcrumb="Detect"
      />
      {/* <div className="container mt-3">

        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item >
            <Nav.Link href="/home">Detect URL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Detect Article</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Detect Password</Nav.Link>
          </Nav.Item>
        </Nav>

      </div> */}

      <Container className="mt-3">
        <Nav
          justify
          variant="tabs"
          activeKey={activeTab}
          onSelect={handleSelect}
        >
          <Nav.Item>
            <Nav.Link eventKey="home">
              <p>Detect URL</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <p>Detect Article</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <p>Detect Password</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="mt-3">{renderContent()}</div>
      </Container>
    </div>
  );
};

export default DetectPageNew;
