//dom traversal variables
var highscore = document.querySelector(".highscore");
var timerEl = document.querySelector(".timer");
var questionText = document.querySelector(".question");
var multipleChoice = document.querySelector(".multiple-choice");
var answerEval = document.querySelector(".answer-eval")
var quizButton = document.querySelector("#start-quiz");
//GLOBAL VARIABLES
var timer = 75
var gameOver = false
const question1 ={
    question: "Commonly used data types DO NOT include:",
    optionA: "Strings",
    optionB: "Booleans",
    optionC: "Numbers",
    optionD: "Alerts",
}
const question2 ={
    question: "The condition in an if / else statement is enclosed within ______.",
    optionA: "Quotes",
    optionB: "Curly Brackets",
    optionC: "Parentheses",
    optionD: "Square Brackets"
}
const question3 ={
    question: "Arrays in JavaScript can be used to store ______.",
    optionA: "numbers and strings",
    optionB: "other arrays",
    optionC: "booleans",
    optionD: "all of the above"
}
const question4 ={
    question: "String values must be enclosed within _____ when being assigned to variables.",
    optionA: "commas",
    optionB: "curly brackets",
    optionC: "quotes",
    optionD: "parentheses"
}
const question5 ={
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    optionA: "JavaScript",
    optionB: "terminal / bash",
    optionC: "for loops",
    optionD: "console.log"
}



//multiple choice maker


//start quiz starts a timer DONE
//check if the game over function works later though
function setTime() {
    var timerInterval = setInterval(function() {
      timer--;
      timerEl.textContent = timer;
  
      if(timer === 0) {
        clearInterval(timerInterval);
        //when the time hit zero the game is over
        gameOver = true;
        return gameOver;
      }
    }, 1000);
  }
//delete the html for the text already in the html section
//start a function for asking the first question 
//then the second question
//etc.

//check time function??
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


//ask question function that erases previous text and asks the newest thing
function askQuestion( question , optionA, optionB, optionC , optionD){
    //erase previous text
    multipleChoice.innerHTML = "";
    //asks the question in the h1
    questionText.textContent = question;
    makeQuestions(optionA);
    makeQuestions(optionB);
    makeQuestions(optionC);
    makeQuestions(optionD);
//creates child elements in the ul 
    function makeQuestions(option){
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = option
        multipleChoice.appendChild(li)
        li.appendChild(button);
    }
}


//start quiz function
quizButton.addEventListener("click" , ()=> {
    setTime();
    startQuiz()
});
function startQuiz(){ 
    askQuestion( question1.question , question1.optionA , question1.optionB , question1.optionC , question1.optionD);
    //need to make a way to selct each of the button elements and the add an event listener to it
}

//check time
//first question
//check time function
//second question
//etc.
//last question
//timer amount = high schore
//locally save high score
//get the save and attatch to view high score class

