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
var currentQuestionIndex= 0
var time = questions.length = 15
var timerId

// DOM elements
var startBtn = document.querySelector("#start")
var questionsElement = document.querySelector("#questions")
var timerElement = document.querySelector("#time")
var questionChoices = document.querySelector("#choices")

// Function to start the quiz
function startQuiz() {
    var startScreen = document.querySelector("start-screen")
    startScreen.setAttribute("class", "hide")
    // unhide elements
    questionsElement.removeAttribute("class")

    getCurrentQuestions()
}

// gets currents questions/choices
function getCurrentQuestions() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.querySelector("#question-title")

    questionChoices.textContent = ""

    // to create each question
    for (var i=0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class", "choice")
        choiceNode.setAttribute("value", currentQuestion.choice[i])

        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i]

        questionChoices.appendChild(choiceNode)
    }

    startBtn.addEventListener("click", startQuiz)

}
