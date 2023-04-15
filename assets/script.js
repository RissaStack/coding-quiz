 const questions = [
   {
      question: "What does 'HTML' stand for?",
      choices: ["Hypertext Markup Language", "Hypertype Makeup Language", "Hypertone Markup Library", "Hypertext Makeup Library"],
      correct: 0
   }, 
   {
      question: "What is a variable?",
      choices: ["A name of a storage location.", "A script.", "An array of informtaion.", "A coding language."],
      answerIdx: 0
   },
   {
      question: "What character does an HTML tag use?",
      choices: ["''", "[]", "<>", "="],
      answerIdx: 2
   },
   {
      question: "What does the 'i' stand for in a for loop?",
      choices: ["italics", "index", "identifier", "item"],
      answerIdx: 1
   },
   {
      question: "What is the box on the outter edge of the box model in CSS?",
      choices: ["Boarder", "Margin", "Padding", "Space"],
      answerIdx: 1
   },
   {
      question: "In Javascript, how do you write the 'and'?",
      choices: ["\\", "||", "==", "&&"],
      answerIdx: 3
   },
   {
      question: "What answers can you get from a boolean?",
      choices: ["Numeric", "alphabet", "True/False", "Undefined"],
      answerIdx: 2
   }
];

function toggleElementVisibility (id) { 
   const element = document.getElementById(id);
   let displayMode = window.getComputedStyle(element, null).display;

   if (displayMode === "none") {
      displayMode = "flex";
   } else {
      displayMode = "none";
   }

   element.setAttribute('style', `display:${displayMode}`);
};

function renderQuestion (index) {
   document.getElementById("question-title").textContent = `Question ${index + 1}`;
   document.getElementById("question-body").textContent = questions[index].question;
   for (let choiceIdx=0; choiceIdx < 4; choiceIdx++) {
      const element = document.getElementById(`choice-${choiceIdx}`)
      element.textContent = questions[index].choices[choiceIdx];
      element.addEventListener("click", function() {
         handleAnswer(choiceIdx, index)
      })
   }
}

// TODO create render score/initials function
// It should:
// grab score using window.time
// toggle visibility of question parent
// toggle visibility of score/initials parent
// create click event handler for initials submission button
// which should:
// function() {
//    const value = document.getElementById("initials-input").value
// }
// add initials and score in key-value pair to JSON file
// (research using fsrite)
// call render high scores page package to read/w

// TODO create render high scores page
// It should:
// toggle visibility of score/initials
// toggle visibility of high scores
// read from JSON file all the high scores
// iterate over them using Object.keys().forEach and createElement to populate scores

function handleAnswer (answer, index) {
   if (answer === questions[index].answerIdx) {
      document.getElementById("question-result").textContent = "Correct!";
   } else {
      document.getElementById("question-result").textContent = "Wrong";
      window.time = window.time - 5;
   }

   index++;

   if (index < questions.length) {
      renderQuestion(index)
   } else {
      // TODO replace console log with score/initials render function
      console.log("quiz over")
   }
}

document.querySelector(".start-button").addEventListener("click", function() {
   toggleElementVisibility("home")
   toggleElementVisibility("question")

   window.time = 10;

   const timer = setInterval(function() {
      window.time = window.time - 1;
    
      if (window.time <= 0) {
        clearInterval(timer);
        // TODO replace console log with score/initials render function
        console.log('quiz over')
      }

      console.log(window.time);
    }, 1000);

   renderQuestion(0);
}) 