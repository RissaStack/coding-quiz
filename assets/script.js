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


 var timeLeft = 120;

//variables to refrence DOM elements
var pageContainer = document.getElementById("page-container"); 

var startQuizEl = document.getElementsByClassName("start-quiz");

var quesContainer = document.getElementById("ques-container");

var question = document.getElementById("question");

var choices = document.getElementById("choices");

var paragraphEl = document.createElement("p")

paragraphEl.textContent = " Welcome to the fullstack coding quiz where you can put your knowledge to the test by answering these questions."



/* function for starting quiz:
    - hide the start-quiz section
    - reveal the ques-container section
    - start the timer
    - call to function to get question
*/
function quesRendered(){
   var questions = document.createElement("h2")
   questions.textContent = quesArray[0].question
   document.querySelector(".ques-container").append(questions)
}

function hideHomePage(){
   document.querySelector("#home-page").style.display="none"
};

function startQuiz(){
   document.querySelector(".ques-container").style.display="block"
   quesRendered()
}

/* function to get question from array of questions. Do I use a loop here?
*/

/*function to create the timer to go down*/

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
document.querySelector(".start-button").addEventListener("click", function() {
   console.log("start buttone clicked")
   hideHomePage();
   startQuiz();
})