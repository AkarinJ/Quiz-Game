var timer = 30; 
var timeInterval;  
var questionCounter = 0;
var startEl = document.getElementById("start");
var timeHolderEl = document.getElementById("timeHolder");
var questions = [

    { 
        question: "What color is Luke Skywalker's lightsaber?",
        answer1: "blue",
        answer2: "green",
        answer3: "red",
        answer4: "purple",
        answer:  "green",
    },
    {
        question: "What year did Star Wars (retroactively titled Star Wars: Episode IV – A New Hope), premier?",
        answer1: "1978",
        answer2: "1997",
        answer3: "1977",
        answer4: "1981",
        answer:  "1977",
    },
    { 
        question: "What character has appeared in every Star Wars movie?",
        answer1: "R2D2",
        answer2: "Darth Vader",
        answer3: "Chewbacca",
        answer4: "Yoda",
        answer:  "R2D2",
    },
    { 
        question: "Who was used as a clone template for the Grand Army of the Republic?",
        answer1: "Din Djarin",
        answer2: "Bo-Katan Kryze",
        answer3: "Boba Fett",
        answer4: "Jango Fett",
        answer:  "Jango Fett",
    },

];

function start () {
    timeInterval = setInterval(countdown,1000)
    timeHolderEl.textContent = timer 
}
function countdown () {

    timer--;
    timeHolderEl.textContent = timer  


};

startEl.onclick = start
