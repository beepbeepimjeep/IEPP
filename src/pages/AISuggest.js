import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./AISuggest.css";
import Header from "../components/global/Header";
import { useForm } from 'react-hook-form';

const AiSuggest = () => {
  const [deviceType, setDeviceType] = useState("");
  const [onlineActivities, setOnlineActivities] = useState([]);
  const [knowledgeLevel, setKnowledgeLevel] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("");
  const [convenienceSecurityRatio, setConvenienceSecurityRatio] = useState(50);
  const [result, setResult] = useState("");

  const [isLoading, setIsLoading] = useState(false); // 新增 isLoading 状态

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (deviceType.length === 0) {
      alert('At least one device type must be selected.');
      return;
    }
    if (onlineActivities.length === 0) {
      alert('At least one online activity must be selected.');
      return;
    }
    if (!knowledgeLevel) {
      alert('A knowledge level must be selected.');
      return;
    }
    if (!riskTolerance) {
      alert('A risk tolerance must be selected.');
      return;
    }
    try {
      setIsLoading(true); // 设置为正在加载状态
      const response = await fetch("https://api.trustonlinevictoria.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "message": {
            "Device": deviceType,
            "Common_online activity": onlineActivities,
            "User_base_knowledge": knowledgeLevel,
            "Risk tolerance": riskTolerance,
            "Convenience vs risk ratio":convenienceSecurityRatio,
          }
        }),
      });
      const data = await response.json();
      setResult(data.response);
      
    } catch (error) {
      console.error(error);
    }finally {
      setIsLoading(false); // 加载完成后设置为非加载状态
    }
  };
 

  return (
    <>
      <Header />
      <Container>
        <div className="FormBackground">
          <Form onSubmit={handleSubmit}>
            <h3>Get your personal suggestion from AI</h3> <br></br>
            <p>Match your selection closest to your current situation to get a customized result</p>
            <Form.Group className="mb-3">
              <Form.Label>Select the type of mobile device:</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Apple"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "Apple"]
                          : prev.filter((d) => d !== "Apple")
                      )
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    label="Samsung"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "Samsung"]
                          : prev.filter((d) => d !== "Samsung")
                      )
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    label="Huawei"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "Huawei"]
                          : prev.filter((d) => d !== "Huawei")
                      )
                    }
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Xiaomi"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "Xiaomi"]
                          : prev.filter((d) => d !== "Xiaomi")
                      )
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    label="OPPO"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "OPPO"]
                          : prev.filter((d) => d !== "OPPO")
                      )
                    }
                  />
                  <Form.Check
                    type="checkbox"
                    label="Vivo"
                    onChange={(e) =>
                      setDeviceType((prev) =>
                        e.target.checked
                          ? [...prev, "Vivo"]
                          : prev.filter((d) => d !== "Vivo")
                      )
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Select one or more online activities that you do:
              </Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Use search engine to find information"
                  onChange={(e) =>
                    setOnlineActivities((prev) =>
                      e.target.checked
                        ? [...prev, "Use search engine to find information"]
                        : prev.filter(
                            (a) => a !== "Use search engine to find information"
                          )
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Buy products"
                  onChange={(e) =>
                    setOnlineActivities((prev) =>
                      e.target.checked
                        ? [...prev, "Buy products"]
                        : prev.filter((a) => a !== "Buy products")
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Watch video / music"
                  onChange={(e) =>
                    setOnlineActivities((prev) =>
                      e.target.checked
                        ? [...prev, "Watch video / music"]
                        : prev.filter((a) => a !== "Watch video / music")
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Play games"
                  onChange={(e) =>
                    setOnlineActivities((prev) =>
                      e.target.checked
                        ? [...prev, "Play games"]
                        : prev.filter((a) => a !== "Play games")
                    )
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Social Media"
                  onChange={(e) =>
                    setOnlineActivities((prev) =>
                      e.target.checked
                        ? [...prev, "Social Media"]
                        : prev.filter((a) => a !== "Social Media")
                    )
                  }
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                How would you rate your current knowledge regarding scams and
                fraud online?
              </Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Very low"
                  name="knowledgeLevel"
                  value="Very low"
                  onChange={(e) => setKnowledgeLevel(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Low"
                  name="knowledgeLevel"
                  value="Low"
                  onChange={(e) => setKnowledgeLevel(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Medium"
                  name="knowledgeLevel"
                  value="Medium"
                  onChange={(e) => setKnowledgeLevel(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="High"
                  name="knowledgeLevel"
                  value="High"
                  onChange={(e) => setKnowledgeLevel(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Very high"
                  name="knowledgeLevel"
                  value="Very high"
                  onChange={(e) => setKnowledgeLevel(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                What would be your risk tolerance regarding your information /
                privacy online?
              </Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Very Low - Need everything safe and secure"
                  name="riskTolerance"
                  value="Very Low - Need everything safe and secure"
                  onChange={(e) => setRiskTolerance(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Low - Tries to reduce online footprint"
                  name="riskTolerance"
                  value="Low - Tries to reduce online footprint"
                  onChange={(e) => setRiskTolerance(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Medium - Take risks every now and then"
                  name="riskTolerance"
                  value="Medium - Take risks every now and then"
                  onChange={(e) => setRiskTolerance(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="High - Does not mind at all"
                  name="riskTolerance"
                  value="High - Does not mind at all"
                  onChange={(e) => setRiskTolerance(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                In ratios, how would you rate having convenience against
                security?
              </Form.Label>
              <div>
                <Form.Range
                  type="range"
                  min={0}
                  max={100}
                  step={10}
                  value={convenienceSecurityRatio}
                  onChange={(e) => setConvenienceSecurityRatio(e.target.value)}
                />
                <div>
                  Convenience: {convenienceSecurityRatio}% Security:{" "}
                  {100 - convenienceSecurityRatio}%
                </div>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>

          {isLoading ? <div className="spinner"></div> : null}
          {result && (
            <div className="result-box">
              <h5>Result:</h5>
              <p>{result}</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default AiSuggest;