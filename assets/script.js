//global variables: The let quesArray is used for all of the questions that will be asked during the quiz. They have objects in them to add all the options the user can chose from. 
let quesArray = [
   {
      question: "What does 'HTML' stand for?",
      options: ["Hypertext Markup Language", "Hypertype Makeup Language", "Hypertone Markup Library", "Hypertext Makeup Library"],
      correct: "Hypertext Markup Language"
   }, 
   {
      question: "What is a variable?",
      options: ["A name of a storage location.", "A script.", "An array of informtaion.", "A coding language."],
      correct: "A name of a storage location."
   },
   {
      question: "What character does an HTML tag use?",
      options: ["''", "[]", "<>", "="],
      correct: "<>"
   },
   {
      question: "What does the 'i' stand for in a for loop?",
      options: ["italics", "index", "identifier", "item"],
      correct: "index"
   },
   {
      question: "What is the box on the outter edge of the box model in CSS?",
      options: ["Boarder", "Margin", "Padding", "Space"],
      correct: "Margin"
   },
   {
      question: "In Javascript, how do you write the 'and'?",
      options: ["\\", "||", "==", "&&"],
      correct: "&&"
   },
   {
      question: "What answers can you get from a boolean?",
      options: ["Numeric", "alphabet", "True/False", "Undefined"],
      correct: "True/False"
   }
];

/*This is to create the timer for the quiz*/
var count = 150;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}

//variables to refrence DOM elements
var pageContainerEl = document.getElementById("page-container"); 

var startQuizEl = document.getElementsByClassName("start-quiz");

var quesContainerEl = document.getElementById("ques-container");

var questionEl = document.getElementById("question");

var choicesEl = document.getElementById("choices");

var paragraphEl = document.createElement("p")

/* function for starting quiz:
    - hide the start-quiz section
    - reveal the ques-container section
    - start the timer
    - call to function to get question
*/
/*hideHomePage will get rid of the h2, p, and button when start button is clicked.*/
function hideHomePage(){ 
   document.querySelector("#home-page").style.display="none"
};

/*quesRendered shows the first question when the start button is clicked.*/
function quesRendered(){
   var questions = document.createElement("h2")
   questions.textContent = quesArray[0].question
   document.querySelector(".ques-container").append(questions)
};

/*optRendered shows the choices from the let array.*/
function optRendered(){
   var opt = document.createElement("h4")
   opt.textContent = quesArray[0].options
   document.querySelector(".choices").append(opt)
   options.splice
};



function startQuiz(){
   document.querySelector(".ques-container").style.display="block"
   quesRendered(),
   document.querySelector(".choices").style.display="block"
   optRendered()
}

/* function to get question from array of questions. Do I use a loop here?
*/

/*function to create the timer to go down*/
function startTimer(){

}

/*function for checking answers*/
/*alert to show correct or incorrect?*/

function answerCorrect() {
   alert("CORRECT")
};

function answerWrong() {
   alert("WRONG")
};

/*Function to save high score*/

/* Function to Retrieve local storage for high score*/

/*event listeners for the button*/
document.querySelector(".start-button").addEventListener("click", function() {
   console.log("start buttone clicked")
   hideHomePage();
   startQuiz();
})
document.querySelector(".choices").addEventListener("click", function() {
   
})