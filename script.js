const questions = [
    {
        question: "The fastest-running terrestrial animal is:",
        choices: ["1. Lion", "2. Man", "3. Jaguar", "4. Cheetah"],
        correct: "4. Cheetah"
    },
    {
        question: "What is the lightest element in the periodic table?",
        choices: ["1. Helium", "2. Hydrogen", "3. Air", "4. Neutrons"],
        correct: "2. Hydrogen"
    },
    {
        question: "Which street fighter character is the meatiest?",
        choices: ["1. Ehonda", "2. Zangief", "3. Balrog", "4. Bison"],
        correct: "2. Zangief"
    },
    {
        question: "What is the best gaming console?",
        choices: ["1. Xbox", "2. Playstation", "3. PC-Master Race", "4. Switch"],
        correct: "3. PC-Master Race"
    },
    {
        question: "Which planet has a moon almost as big as the planet itself?",
        choices: ["1. Jupiter", "2. Mercury", "3. Pluto", "4. Saturn"],
        correct: "3. Pluto"
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
            inputResult.textContent = "Incorrect!";
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


