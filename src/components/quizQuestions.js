var quizQuestions = [
  {
    questionId:"1",
    question: "What is the best practice for creating strong passwords?",
    answers: 
    [
      {
        answerID: "1",
        content: "Use dictionary words or phrases",
      },
      {
        answerID: "2",
        content: "Include personal information like birth dates or names",
      },
      {
        answerID: "3",
        content: "Use a combination of uppercase and lowercase letters, numbers, and symbols",
      },
      {
        answerID: "4",
        content: "Use the same password for multiple accounts",
      }
    ],
    CorrectAnswer: "3"

  },
  {questionId:"2",
    question: "What is the purpose of password protection?",
    answers: [
      {
        answerID: "1",
        content: "To keep your computer running smoothly",
      },
      {
        answerID: "2",
        content: "To prevent unauthorized access to your personal information",
      },
      {
        answerID: "3",
        content: "To protect against malware and viruses",
      },
    ],CorrectAnswer: "2",
  },
  {questionId:"3",
    question:
      "How often should you change your password?",
    answers: [
      {
        answerID: "1",
        content: "Every day",
      },
      {
        answerID: "2",
        content: "Every week",
      },
      {
        answerID: "3",
        content: "Every month",
      },
      {
        answerID: "4",
        content: "Every few months",
      }
    ],CorrectAnswer: "4",
  },
  {questionId:"4",
    question: "What is two-factor authentication?",
    answers: [
      {
        answerID: "1",
        content: "A way to protect your password from being stolen by using a physical token or smartphone app",
      },
      {
        answerID: "2",
        content: "A way to allow multiple users to access the same account",
      },
      {
        answerID: "3",
        content: "A way to encrypt your password and personal data",
      },
    ],CorrectAnswer: "1",
  },
  {questionId:"5",
    question: "What should you do if you suspect that your password has been compromised?",
    answers: [
      {
        answerID: "1",
        content: "Do nothing, as changing your password can cause more problems",
      },
      {
        answerID: "2",
        content: "Immediately change your password and notify any affected parties",
      },
      {
        answerID: "3",
        content: "Wait for a few weeks to see if anything suspicious happens",
      },{
        answerID: "4",
        content: "Contact customer support for advice",
      }
    ],
    CorrectAnswer: "2",
  },
];

export default quizQuestions;
