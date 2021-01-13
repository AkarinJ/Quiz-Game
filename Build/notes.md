# Tasks Note

* var interval; to do the "timed" functionality

* interval = setInterval( function() {}, 1000 )

* clearInterval to stop the timeout 

* VAR currentScore/timeLeft

* VAR questions - Array

* VAR pointer/index = Current position in the question array

* VAR startButton

```
var questions = [
    {
        // Question text
        // List of question answers
        // Correct Answer
        answer: "correct"
    }
]
```

GIVEN I am taking a code quiz

WHEN I click the `start button`

```
function startGame() {  
 
}
```
`start button`.addEventListener("click", startGame);

THEN a timer starts and I am presented with a question

* Set starting score = 100

* Start the interval to begin the score countdown

* Present the question = Create new HTML elements for my question content

    > Set the #question div's innerHTML ="";
    > Append a H2 for the question text
    > Append a new button for each choice
    
    > var button = document.createElement("button");
    > button.textContent = questionText
    > button.setAttribute("data-choice", questionText); `alt method`

WHEN I answer a question

* WHEN the user clicks one of my answer buttons

WHEN I answer a question incorrectly

    event.target.matches("button")
   
    > var clickButtonContent = event.target.textContent;
    > var clickButtonValue = event.target.getAttribute;("data-choice", questionText); 

    > The question is correct when clickButtonValue == questions[pointer].answer

THEN time is subtracted from the clock

    > Subtract points from my current score


THEN I am presented with another question

* Increase our pointer by 1

* Present the next question

WHEN all questions are answered or the timer reaches 0

THEN the game is over
    
    > clearInterval( interval )
    > clear out current question or hide the #question element
    > show our results form for getting the user's initials

WHEN the game is over
THEN I can save my initials and score

    > ON my initials form "submit"

        > var highscore = [];
        > Get the currently saved highscores out localStorage.getItem("highscores")
        > if( stored high scores ) highscores = JSON.parse(stored high scores)
        > else highscores = [];
        > Create a new list
        > Get the value of the initial's input
        > Append an object with the initial's and score
        > Store our list of highscores in localStorage