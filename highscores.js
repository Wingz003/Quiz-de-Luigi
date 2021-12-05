let highScores = document.getElementById("savedScores");
let localScores = JSON.parse(localStorage.getItem("highScores"));

for (let i = 0; i < localScores.length; i++) {
    highScores.innerHTML += "<li>" + localScores[i] + "</li>";
    
}


