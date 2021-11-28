const questions = [
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
];

const start = document.getElementById("start");
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz"); 
const question = document.getElementById("question");
const timer = document.getElementById("timer");


startBtn.addEventListener('click', startQuiz)

let currentQuestion;

function startQuiz() {
    currentQuestion = 0;
    start.setAttribute("hidden" , true);
    question.removeAttribute("hidden");
    renderQuestion();

}


function renderQuestion() {
    let newQuestion = questions[currentQuestion];
    let picks = newQuestion.choices;
    
    let qtitle = document.getElementById("qTitle");
    qtitle.textContent = newQuestion.question;
   
    for (let i = 0; i < picks.length; i++) {
        let currentChoice = picks[i];
        let choiceBtn = document.getElementById("choice" + i);
        choiceBtn.textContent = currentChoice;
        
    }
   
        };