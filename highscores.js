let highScores = document.getElementById("savedScores");
let localScores = JSON.parse(localStorage.getItem("highScores"));
let backBtn = document.getElementById("goBack");
let clearScores = document.getElementById("clearScore");

for (let i = 0; i < localScores.length; i++) {
    highScores.innerHTML += "<li>" + localScores[i] + "</li>";
    
}

backBtn.addEventListener("click", function() {
    location.href = "index.html";
} )
clearScores.addEventListener("click", function() {
    localStorage.removeItem("highScores");
    highScores.innerHTML = "";
})