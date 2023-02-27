//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 30;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Melyik iPhone használt először Touch ID technológiát?",
    options: ["iPhone 4", "iPhone 3G", "iPhone 6S", "iPhone 5S"],
    correct: "iPhone 5S",
  },
  {
    id: "1",
    question: "A lenti opciók közül melyik iPhone funkció?",
    options: [
      "Helyadatok megosztása internet nélkül ismerősöknek",
      "Reverse charging",
      "4 kamera",
      "Ultrared sugarak létrehozása",
    ],
    correct: "Helyadatok megosztása internet nélkül ismerősöknek",
  },
  {
    id: "2",
    question: "Mire használható az AirDrop?",
    options: ["Médiatartalmak azonnali megosztására", "A telefon esésének csökkentésére", "Étel rendelésre", "Csillagok megvizsgálására"],
    correct: "Médiatartalmak azonnali megosztására",
  },
  {
    id: "3",
    question: "Mi volt a legelső iPhone neve?",
    options: ["iPhone 1", "iPhone 2", "iPhone 2G", "iPhone"],
    correct: "iPhone 2G",
  },
  {
    id: "4",
    question: "Mikor alapult meg az Apple?",
    options: ["1980", "1976", "2000", "1989"],
    correct: "1976",
  },
  {
    id: "5",
    question: "Melyik iPhone modell használta először a Face ID technológíát?",
    options: ["iPhone X", "iPhone 7", "iPhone 5S", "iPhone 11"],
    correct: "iPhone X",
  },
  {
    id: "6",
    question: "Melyik iPhone modellen tűnt el a jack csatlakozó?",
    options: ["iPhone 12", "iPhone SE 2020", "iPhone 8", "iPhone 7"],
    correct: "iPhone 7",
  },
  {
    id: "7",
    question: "Melyik iPhone modellen mutatták be először a dupla-kamerás rendszert?",
    options: ["iPhone 14", "iPhone 6S", "iPhone 8", "iPhone 7 plus"],
    correct: "iPhone 7 plus",
  },
  {
    id: "8",
    question: "Hány méterig vizálló az iPhone X?",
    options: ["1m", "2m", "20m", "50m"],
    correct: "1m",
  },
  {
    id: "9",
    question: "Melyik iPhone modellen vált lehetővé legelőször az 5G-s mobilhálózat használata? ",
    options: ["iPhone 12", "iPhone 8", "iPhone X", "iPhone 13"],
    correct: "iPhone 12",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "A pontszámod: " + scoreCount + "/" + quizArray.length;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " / " + quizArray.length + " Kérdés";
      //display quiz
      quizDisplay(questionCount);
      count = 30;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " / "+ quizArray.length + " Kérdés";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 30;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
