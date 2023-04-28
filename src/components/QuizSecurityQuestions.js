import QuizSecurity from "../pages/QuizSecurity";

var QuizSecurityQuestions = [
    {
      questionId:"1",
      question: "Which of the following is a way to protect your online security?",
      answers: 
      [
        {
          answerID: "1",
          content: "Use the same password for multiple accounts",
        },
        {
          answerID: "2",
          content: "Click on links from unknown sources",
        },
        {
          answerID: "3",
          content: "Use two-factor authentication",
        },
        {
          answerID: "4",
          content: "Share your personal information freely",
        }
      ],
      CorrectAnswer: "3"
  
    },
    {questionId:"2",
      question: "Which of the following can help you avoid phishing scams?",
      answers: [
        {
          answerID: "1",
          content: "Always click on links in unsolicited emails",
        },
        {
          answerID: "2",
          content: "Hover over links to see the URL before clicking on them",
        },
        {
          answerID: "3",
          content: "Respond to emails that request personal information",
        },{
          answerID: "4",
          content: "Use the same password for multiple accounts",
        }
      ],CorrectAnswer: "2",
    },
    {questionId:"3",
      question:
        "How can you protect your online security when using public Wi-Fi?",
      answers: [
        {
          answerID: "1",
          content: "Share personal information freely",
        },
        {
          answerID: "2",
          content: "Use a virtual private network (VPN)",
        },
        {
          answerID: "3",
          content: "Use the same password for multiple accounts",
        },
        {
          answerID: "4",
          content: "Click on links from unknown sources",
        }
      ],CorrectAnswer: "4",
    },
    {questionId:"4",
      question: "How can you protect yourself from identity theft online?",
      answers: [
        {
          answerID: "1",
          content: "Use easy-to-guess passwords",
        },
        {
          answerID: "2",
          content: "Share personal information on social media",
        },
        {
          answerID: "3",
          content: "Check your credit report regularly",
        },
      ],CorrectAnswer: "3",
    },
    {questionId:"5",
      question: "How can you protect your online security when shopping online?",
      answers: [
        {
          answerID: "1",
          content: "Click on links from unsolicited emails",
        },
        {
          answerID: "2",
          content: "Use a public Wi-Fi network",
        },
        {
          answerID: "3",
          content: "Shop on websites that do not have a secure connection",
        },{
          answerID: "4",
          content: "Look for secure payment options and websites with HTTPS in the URL",
        }
      ],
      CorrectAnswer: "4",
    },
  ];
  
  export default QuizSecurityQuestions;
  