// variable for holding questions
const questions = [

    {
        title: "Commonly used data types DO NOT include:",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store ____.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },

    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choice: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

]

// Keeping track of quiz stats
var currentQuestionIndex = 0
var time = questions.length = 15
var timerId

// DOM elements
var startBtn = document.querySelector("#start")
var questionsElement = document.querySelector("#questions")
var timerElement = document.querySelector("#time")
var questionChoices = document.querySelector("#choices")
// maybe delete
var ulCreate = document.createElement("ul")

// Function to start the quiz
function startQuiz() {
    var startScreen = document.querySelector("#start-screen")
    startScreen.setAttribute("class", "hide")
    // unhide elements
    questionsElement.removeAttribute("class")

    getCurrentQuestions()
    timerStart()
}

// gets currents questions/choices
function getCurrentQuestions() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.querySelector("#question-title")
    titleElement.textContent = currentQuestion.title
    var ulCreate = document.createElement("ul")

    questionChoices.textContent = ""

    // to create each question
    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class", "choice")
        choiceNode.setAttribute("value", currentQuestion.choice[i])

        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i]

        questionChoices.appendChild(choiceNode)
        // var userQuestion = questions[currentQuestionIndex].title
        // var userChoices = questions[questionChoices].choice
        // questionsDiv.textContent = userQuestion;
    }



    // To accecpt user answers
    // userQuestion.forEach(function (newItem) {
    //     var listItem = document.createElement("li")
    //     listItem.textContent = newItem
    //     questionsDiv.appendChild(ulCreate)
    //     ulCreate.appendChild(listItem)
    // var userChoiceBtn = document.querySelector("value")
    // console.log(value)
    // })


    // compare user answer with real answer
//     function compare(event) {
//         var element = event.target

//         if (element.matches("li")) {

//             var createDiv = document.createElement("div")
//             createDiv.setAttribute("id", "createDiv")
//             // Correct condition 
//             if (element.textContent == questions[currentQuestionIndex].answer) {
//                 score++
//                 createDiv.textContent = "Correct! The answer is:  " + questions[currentQuestionIndex].answer
//                 // Correct condition 
//             } else {
//                 // Will deduct -5 seconds off secondsLeft for wrong answers
//                 secondsLeft = secondsLeft - penalty
//                 createDiv.textContent = "Wrong! The correct answer is:  " + questions[currentQuestionIndex].answer
//             }

//         }
//     }
}

// timer
// checking zero because its originally set to zero
var secondsLeft = 76
// Holds interval time
var holdInterval = 0
// Holds penalty time
var penalty = 10

function timerStart() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--
            timerElement.textContent = "Time: " + secondsLeft

            if (secondsLeft <= 0) {
                clearInterval(holdInterval)
                // will need to add a score function
                score();
                timerElement.textContent = "Time's up!"
            }
        }, 1000)
    }
}


startBtn.addEventListener("click", startQuiz)