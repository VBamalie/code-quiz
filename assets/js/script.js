//dom traversal variables
var highscore = document.querySelector(".highscore");
var timerEl = document.querySelector(".timer");
var question = document.querySelector(".question");
var multipleChoice = document.querySelector(".multiple-choice");
var answerEval = document.querySelector(".answer-eval")
//not sure if this startQuiz is working
var startQuiz = document.querySelector(".start-quiz");

//GLOBAL VARIABLES
var timer = 5


//need a start quiz function

//start quiz starts a timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timerEl.textContent = timer;
  
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
    }, 1000);
  }

setTime()
//delete the html for the text already in the html section
//start a function for asking the first question 
//then the second question
//etc.

//check time function
//checks to see if they got the previous question right or wrong
//if wrong lowers time
//then it checks to make sure the user still has time
//if they don't have time make variable game over

//first question function. has to change the html header into a question
//add a list of todos?
//conditional on whether you selected the correct answer
//if incorrect, timer decreases
//returns with a timer decrease and goes to next question
// or if correct just goes to the next question


//second questions works similar as first question



//start quiz function
//check time
//first question
//check time function
//second question
//etc.
//last question
//timer amount = high schore
//locally save high score
//get the save and attatch to view high score class

