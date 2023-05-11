import QuizSecurity from "../pages/QuizSecurity";

var QuizSecurityQuestions = [
    {
      questionId:"1",
      question: "Which of the following is a common way that attackers use to initiate phishing attacks on teenagers?",
      answers: 
    [
      {
        answerID: "1",
        content: "Sending suspicious links via text messages",
      },
      {
        answerID: "2",
        content: "Creating fake social media accounts",
      },
      {
        answerID: "3",
        content: " Impersonating a trusted entity, such as a bank or e-commerce platform",
      },
      {
        answerID: "4",
        content: "All of the above",
      }
    ],
    CorrectAnswer: "4",

    recommendation: {
      title:
        "Teenagers’ Awareness and Their Experiences of Phishing Attacks: A Study of Nigerian Secondary Schools.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7781741/",
      description:
        "Investigated the awareness and experiences of Nigerian teenagers regarding phishing attacks in secondary schools.",
    },

    },
    {
      questionId:"2",
      question: "Which of the following measures can help teenagers protect themselves from phishing attacks?",
      answers: [
        {
          answerID: "1",
          content: "Clicking on links from unknown sources",
        },
        {
          answerID: "2",
          content: "Sharing personal information with strangers",
        },
        {
          answerID: "3",
          content: "Checking the authenticity of emails and messages before taking any action",
        },{
          answerID: "4",
          content: "Using the same password for multiple accounts",
        }
      ],CorrectAnswer: "3",

      recommendation: {
        title:
          "Teenagers’ Awareness and Their Experiences of Phishing Attacks: A Study of Nigerian Secondary Schools.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7781741/",
        description:
          "Investigated the awareness and experiences of Nigerian teenagers regarding phishing attacks in secondary schools.",
      },

    },
    {questionId:"3",
      question:
        "What is the most common way for malware to infect a computer or device?",
      answers: [
        {
          answerID: "1",
          content: "Downloading an infected file",
        },
        {
          answerID: "2",
          content: "Clicking on a suspicious link",
        },
        {
          answerID: "3",
          content: "Visiting an unsafe website",
        },
        {
          answerID: "4",
          content: "All of the above",
        }
      ],CorrectAnswer: "4",

      recommendation: {
        title:
          "A survey of emerging threats in cybersecurity.",
        url: "https://www.sciencedirect.com/science/article/pii/S0022000014000178        ",
        description:
          "The exponential growth of the Internet interconnections has led to a significant growth of cyber attack incidents often with disastrous and grievous consequences.",      
      },

    },
    {questionId:"4",
      question: "What can parents do to protect their children from online threats?",
      answers: [
        {
          answerID: "1",
          content: "Monitor their online activity",
        },
        {
          answerID: "2",
          content: "Install antivirus software on their devices",
        },
        {
          answerID: "3",
          content: "Teach them about safe online behavior",
        },
        {
          answerID: "4",
          content: "All of the above",
        }
      ],CorrectAnswer: "4",

      recommendation: {
        title:
          "A survey of emerging threats in cybersecurity.",
        url: "https://www.sciencedirect.com/science/article/pii/S0022000014000178        ",
        description:
          "The exponential growth of the Internet interconnections has led to a significant growth of cyber attack incidents often with disastrous and grievous consequences.",      
      },

    },
    {questionId:"5",
      question: "What are some ways to prevent identity theft?",
      answers: [
        {
          answerID: "1",
          content: "Shared personal documents before throwing them away",
        },
        {
          answerID: "2",
          content: "Use strong and unique passwords",
        },
        {
          answerID: "3",
          content: " Avoid giving out personal information online or over the phone",
        },{
          answerID: "4",
          content: "All of the above",
        }
      ],
      CorrectAnswer: "4",

      recommendation: {
        title:
          "Identity Theft and Identity Fraud",
        url: "https://www.justice.gov/criminal-fraud/identity-theft/identity-theft-and-identity-fraudD8E8B8:D8C8:D8B8:D8E8B8:D8A8:D8  ",
        description:
          " identity theft and fraud, including common methods and prevention tips. ",      
      },

    },

    {questionId:"6",
    question: "What should you do if you suspect identity theft?",
    answers: [
      {
        answerID: "1",
        content: "Contact your bank or credit card company",
      },
      {
        answerID: "2",
        content: "Freeze your credit",
      },
      {
        answerID: "3",
        content: " File a report with the Federal Trade Commission",
      },{
        answerID: "4",
        content: "All of the above",
      }
    ],
    CorrectAnswer: "4",

    recommendation: {
      title:
        "Identity Theft and Identity Fraud",
      url: "https://www.justice.gov/criminal-fraud/identity-theft/identity-theft-and-identity-fraudD8E8B8:D8C8:D8B8:D8E8B8:D8A8:D8  ",
      description:
        " identity theft and fraud, including common methods and prevention tips. ",      
    },

  },
  ];
  
  export default QuizSecurityQuestions;
  