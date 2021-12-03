const questions = [
    {
        question: "What is the best gaming console?",
        choices: ["Xbox", "Playstation", "PC", "Switch"],
        correct:  "PC"
    },
    {
        question: "What is the best gaming console2?",
        choices: ["Xbox1", "Playstation1", "PC1", "Switch1"],
        correct:  "PC1"
    },
    {
        question: "What is the best gaming console3?",
        choices: ["Xbox2", "Playstation2", "PC2", "Switch2"],
        correct:  "PC2"
    },
    {
        question: "What is the best gaming console4?",
        choices: ["Xbox3", "Playstation3", "PC3", "Switch3"],
        correct:  "PC3"
    },
    {
        question: "What is the best gaming console5?",
        choices: ["Xbox4", "Playstation4", "PC4", "Switch4"],
        correct:  "PC4"
    },
];

let start = document.getElementById("start");
let startBtn = document.getElementById("startBtn");
let quiz = document.getElementById("quiz"); 
let question = document.getElementById("question");
let choiceList = document.getElementById("choices");
let timer = document.getElementById("timer");
let choiceBtn = document.querySelector(".choice-button");
let resultBanner = document.getElementById("result-banner");
let inputResult = document.getElementById("input-result");
let count;
let currentQuestion;
let intervalID;

function startCountdown() {
    
   
   
    
    const interval = setInterval(() => {
        
        timer.textContent = count;
        count--;
        
        console.log(count);
        if (count < 0) {
            clearInterval(interval);
            console.log("ay");
        }
    }, 1000);
    
}





startBtn.addEventListener('click', startQuiz);
choiceList.addEventListener('click', nextQuestion);


function startQuiz() {

    currentQuestion = 0;
    start.setAttribute("hidden" , true);
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
             
               
                 
                 if(correctAnswer(element)) {
                     resultBanner.removeAttribute("hidden");
                     inputResult.textContent = "Correct!";
                     setTimeout( () => resultBanner.setAttribute("hidden", true), 500);
                    
                     
                    } else {
                        resultBanner.removeAttribute("hidden");
                        inputResult.textContent = "Git Gud!";
                        setTimeout( () => resultBanner.setAttribute("hidden", true), 500);
                        count = count - 10;
                        timer.textContent = count;

                        
                    }
                    

               
               currentQuestion++;
               renderQuestion();
        }}
 
    
    

  