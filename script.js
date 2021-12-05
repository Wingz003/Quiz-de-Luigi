const questions = [
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct: "PC"
    },
    {
        question: "What is the best gaming console2?",
        choices: ["Xbox1", "Playstation1", "PC1", "Switch1"],
        correct: "PC1"
    },
    {
        question: "What is the best gaming console3?",
        choices: ["Xbox2", "Playstation2", "PC2", "Switch2"],
        correct: "PC2"
    },
    {
        question: "What is the best gaming console4?",
        choices: ["Xbox3", "Playstation3", "PC3", "Switch3"],
        correct: "PC3"
    },
    {
        question: "What is the best gaming console5?",
        choices: ["Xbox4", "Playstation4", "PC4", "Switch4"],
        correct: "PC4"
    },
];

let start = document.getElementById("start");
let startBtn = document.getElementById("startBtn");
let question = document.getElementById("question");
let choiceList = document.getElementById("choices");
let timer = document.getElementById("timer");
let choiceBtn = document.querySelector(".choice-button");
let resultBanner = document.getElementById("result-banner");
let inputResult = document.getElementById("input-result");
let endScreen = document.getElementById("endScreen");
let endBtn = document.getElementById("endBtn");
let initials = document.getElementById("initials");
let finalScore = document.getElementById("finalScore");
let currentQuestion;
let count = 75;
let gameInProgress = false;

if (!localStorage.getItem("highScores")) {
    localStorage.setItem("highScores", JSON.stringify([]));
}

function startCountdown() {
    count = 75;
    gameInProgress = true;


    const interval = setInterval(() => {
        if (gameInProgress) {
            count--;
        };

        timer.textContent = "Time: " + count;

        if (count <= 0) {
            clearInterval(interval);
            showEndScreen();
        }
    }, 1000);

}

choiceList.addEventListener('click', nextQuestion);
startBtn.addEventListener('click', startQuiz);
endBtn.addEventListener('click', endQuiz);

function endQuiz() {
    let highScores = JSON.parse(localStorage.getItem("highScores"));
    highScores.push(initials.value + " - " + count);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    location.href = "highscore.html";
}
function startQuiz() {
    currentQuestion = 0;
    start.setAttribute("hidden", true);
    question.removeAttribute("hidden");
    renderQuestion();
    startCountdown();
}


function renderQuestion() {
    let newQuestion = questions[currentQuestion];
    let picks = newQuestion.choices;

    let qtitle = document.getElementById("qTitle");
    qtitle.textContent = newQuestion.question;

    for (let i = 0; i < picks.length; i++) {
        let currentChoice = picks[i];
        let choiceBtn = document.getElementById("choice" + [i]);
        choiceBtn.textContent = currentChoice;


    }

};

function correctAnswer(choiceBtn) {
    return choiceBtn.textContent === questions[currentQuestion].correct;
}


function nextQuestion(event) {

    let element = event.target;

    if (element.matches(".choice-button")) {

        if (correctAnswer(element)) {
            resultBanner.removeAttribute("hidden");
            inputResult.textContent = "Correct!";
            setTimeout(() => resultBanner.setAttribute("hidden", true), 500);


        } else {
            resultBanner.removeAttribute("hidden");
            inputResult.textContent = "Git Gud!";
            setTimeout(() => resultBanner.setAttribute("hidden", true), 500);
            count -= 10;
        }

        currentQuestion++;
        if (currentQuestion === questions.length) {
            showEndScreen();
        } else {
            renderQuestion();
        }
    }
}

function showEndScreen() {
    gameInProgress = false;
    finalScore.innerText = "Your final score is: " + count;
    question.setAttribute("hidden", true);
    endScreen.removeAttribute("hidden");
}


