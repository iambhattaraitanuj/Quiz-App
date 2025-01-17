const quizQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Application Process Interface",
      "Automated Programming Interaction",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    question: "Who invented JavaScript?",
    options: [
      "Brendan Eich",
      "Tim Berners-Lee",
      "James Gosling",
      "Linus Torvalds",
    ],
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which HTTP status code indicates 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: "404",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "8080", "443", "21"],
    correctAnswer: "80",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    correctAnswer: "MongoDB",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Object Model",
      "Document Oriented Module",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which of the following is used to style a React component?",
    options: ["CSS", "Inline Styles", "Styled Components", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Who is Tanuj Bhattarai",
    options: ["Coder", "Musician", "Ai Developer", "All of the above"],
    correctAnswer: "Coder",
  },
];

const container = document.querySelector(".container");
const quiz_Questions = document.querySelector(".quiz-questions");
const quiz_options = document.querySelector(".quiz-options");
const timer = document.querySelector(".timer");
const playAgainButton = document.querySelector(".button");
const startButton = document.querySelector(".start-button");

let index = 0;
let score = 0;
let time = quizQuestions.length * 6;

startButton.addEventListener("click", () => {
  startButton.classList.add('hidden')
  question();
  let interval = setInterval(() => {
    if (index !== quizQuestions.length) {
      time--;
      quizTime();
    }
  }, 1000);

  const quizTime = () => {
    if (time <= 0) {
      timer.innerText = "Time Up";
      quiz_Questions.remove();
      quiz_options.remove();
      playAgainButton.classList.remove("hidden");
      clearInterval(interval);
    } else {
      timer.innerText = time;
    }
  };
});

const question = () => {
  if (index !== quizQuestions.length) {
    let questionDiv = document.createElement("div");
    questionDiv.innerText = quizQuestions[index].question;
    questionDiv.classList.add("text-[20px]", "font-bold", "mx-4");
    quiz_Questions.appendChild(questionDiv);

    options();
  } else {
    let scoreDiv = document.createElement("div");
    container.appendChild(scoreDiv);
    scoreDiv.classList.add("text-[18px]", "text-center", "mt-4");
    timer.innerText = "You finished on time";
    scoreDiv.innerText = `Your total score: ${score}`;
    playAgainButton.classList.remove("hidden");
  }
};

const options = () => {
  let ul = document.createElement("ul");
  ul.classList.add("mt-2", "mx-4");

  quiz_options.appendChild(ul);
  let option = quizQuestions[index].options;
  for (let i = 0; i < option.length; i++) {
    const li = document.createElement("li");
    li.classList.add(
      "text-[14px]",
      "py-3",
      "pl-2",
      "my-3",
      "border-[1px]",
      "focus:bg-slate-400",
      "border-gray-300",
      "rounded-md",
      "bg-slate-100",
      "md:cursor-pointer",
      "md:bg-white",
      "md:hover:bg-slate-100",
      "md:text-[16px]"
    );
    li.innerText = option[i];
    ul.appendChild(li);
  }
};

quiz_options.addEventListener("click", (e) => {
  let answer = e.target.innerText;
  if (answer === quizQuestions[index].correctAnswer) {
    score++;
  }
  index++;
  quiz_Questions.firstElementChild.remove();
  quiz_options.firstElementChild.remove();

  question();
});
