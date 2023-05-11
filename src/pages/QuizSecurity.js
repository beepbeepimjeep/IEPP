import "./QuizDetail.css";
import Header from "../components/global/Header";
import QuizSecurityQuestions from "../components/QuizSecurityQuestions";
import { useState } from "react";


import "bootstrap/dist/css/bootstrap.min.css";


const QuizSecurity = () => {
  const [currentQuizCount, setCurrentQuizCount] = useState(1);
  const [QuizCount, setQuizCount] = useState(1);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isShow, setIsShow] = useState(true); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
 // 添加一个新的 state 来保存用户未正确回答的问题
 const [failedQuestions, setFailedQuestions] = useState([]);

  const handleAnswerChange = (questionId, answerId) => {
    const newAnswers = [...answers];
    // newAnswers[questionId - 1] = answerId;
    newAnswers[questionId -1] = answerId;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  

  // 使用Array.find()查找与当前QuizCount匹配的问题
  const currentQuestion = QuizSecurityQuestions.find(
    (question) => question.questionId === QuizCount.toString()
  );

  const handleNext = () => {
    const options = document.querySelectorAll(
      `input[name="question-${currentQuestion.questionId}"]`
    );

    // 检查是否至少选择了一个选项
      let hasSelectedOption = false;
      options.forEach((option) => {
        if (option.checked) {
          hasSelectedOption = true;
        }
      });

      // 如果没有选择任何选项，则提示用户并返回
      if (!hasSelectedOption) {
        alert("Please select an answer.");
        return;
      }


    if (QuizCount <= QuizSecurityQuestions.length) {
      setQuizCount(QuizCount + 1);
    }
  
    console.log("当前quiz的答案"+currentQuestion.CorrectAnswer);
    console.log("当前选择的答案"+answers[QuizCount - 1]);
    console.log("当前得分"+score);

    if (answers[QuizCount - 1] === currentQuestion.CorrectAnswer) {
      setScore(score + 1);
    }

    options.forEach((option) => {
      if (option.checked) {
        option.checked = false;
      }
    });

 
    console.log("next 被调用")
  };

     const handleSubmit = () => {
      if (answers[QuizCount - 1] === currentQuestion.CorrectAnswer) {
        setScore((prevScore) => prevScore + 1);
      }

      if (QuizCount === QuizSecurityQuestions.length) {
        console.log("提交 被调用")
        console.log("quiz count is "+QuizCount);
        setIsShow(false)
        console.log({isShow})
      }
      console.log("your scores are: "+score);

       // 添加一个新的数组来收集用户错误答案的题目信息
      let failedQuestionsArray = [];
      QuizSecurityQuestions.forEach((question, index) => {
        if (answers[index] !== question.CorrectAnswer) {
          failedQuestionsArray.push({
            questionId: question.questionId,
            url: question.recommendation.url,
            //description: question.recommendation.description,
            title: question.recommendation.title,
          });
        }
      });

      setFailedQuestions(failedQuestionsArray);
      };

  
  return (
    <div>
    <Header />
    <div className="quiz-detail">
      {isShow ? (
      <div className="detailedquiz ">
        {/* quiz count */}
        {QuizCount <= QuizSecurityQuestions.length ? (
          <div className="quizCount">
            {QuizCount} / {QuizSecurityQuestions.length}
            {/* Question <span>{QuizCount}</span> of <span>{QuizSecurityQuestions.length}</span> */}
          </div>
          ) : (
            ""
          )}

        {/* Quiz details */}
        <div className="detailedquiz-child" />
        <div className="quizCount">
          {QuizCount} / {QuizSecurityQuestions.length}
        </div>


        <div className="what-is-a-container">
          {/* quiz Title */}

          {/* {QuizCount} < {QuizSecurityQuestions.length}  */}
          {QuizCount <= QuizSecurityQuestions.length ? (
            <div className="EvenythingQuiz">
              

              <span className="QuizContainer">
                <div className="QuizTitle">
                  {/* 找到与当前进度一样的Quiz */}
                  {currentQuestion.question}
                </div>
              </span>
              
            </div>
          ) : (
            null
          )}
        </div>
        {/* Quiz options */}
        
        
        {QuizCount <= QuizSecurityQuestions.length ? (
          <div className="quizOption">
                    <div className="quiz-options">Quiz Options:</div>
                    
                    <div className="quizOptionsList">
                      {currentQuestion.answers.map((answers) => (
                        // <div key={answers.answerID}>
                        <div className="container" key={answers.answerID}>
                          <label>
                            <input
                              // className="pt-3"
                              type="radio"
                              name={`question-${currentQuestion.questionId}`}
                              value={answers.answerID}
                              onChange={() =>
                                handleAnswerChange(
                                  currentQuestion.questionId,
                                  answers.answerID
                                )
                              }
                              
                            />
                            {" " + answers.content}
                          </label>
                        </div>
                      ))}

                      {/* <p>Your score: {score}</p> */}
                    </div> 
                    <div className="submitbutton" />
                    <div className="nextbutton" />

                    
                    <div className="next" >
                      {QuizCount === QuizSecurityQuestions.length ? (
                        <p onClick={handleSubmit}>submit</p>
                      ) : (
                        <p onClick={handleNext}>Next</p>
                      )}
                    </div>

                    </div>
                  
        ) : (
          ""
        )}
        </div>
        ) :
        
        
        <div className="detailedquiz">
          <div className="detailedquiz-child" >
            
          {/* <img className="resultImage" src='https://s1.ax1x.com/2023/04/11/ppOioUs.png'></img> */}
            <div className="resultDetail">
           
              <span>
                You have completed the quiz<br/>
                Your results: {score}/{QuizSecurityQuestions.length}
              </span>

              {/* 显示用户未正确回答的问题 */}
              {failedQuestions.map((failedQuestion) => (
                  <div key={failedQuestion.questionId} className="recommended-article">
                    You got question {failedQuestion.questionId} wrong. To learn more, read{" "}
                    <a
                      href={failedQuestion.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Click to read the article"
                    >
                      <span className="recommended-article-title">
                        {failedQuestion.title}
                      </span>
                    </a>
                    : {failedQuestion.description}
                    </div>
                ))}
            </div>
          </div>
        </div>
        
        }  
    </div>
    </div>

  );
};

export default QuizSecurity;
