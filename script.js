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

function checkGuess(userChoice) {
    if (userChoice === questions[currentQuestionIndex].answer) {
        alert("Correct!!!")
    } else {
        secondsLeft = secondsLeft - penalty
        alert("Incorrect Answer!")
    }
}

// allows to check answer
var options = document.querySelector("#choices")
options.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(event.target.value)
    checkGuess(event.target.value)
    currentQuestionIndex++
    console.log(currentQuestionIndex)
    getCurrentQuestions()
})



// gets currents questions/choices
function getCurrentQuestions() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.querySelector("#question-title")
    titleElement.textContent = currentQuestion.title

    questionChoices.innerHTML = ""


    // to create each question
    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class", "choice")
        choiceNode.setAttribute("value", currentQuestion.choice[i])

        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i]

        // To check next answer

        questionChoices.appendChild(choiceNode)
    }


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
            if (currentQuestionIndex === 5) {
                alert("You've answered all questions!")
                clearInterval(holdInterval)
                score()
            }

            if (secondsLeft <= 0) {
                clearInterval(holdInterval)
                // will need to add a score function
                score()
                timerElement.textContent = "Time's up!"
            }
        }, 1000)
    }
}

var endScreenEl = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var submitBtn = document.querySelector("#submit")

function score() {
    questionsElement.setAttribute("class", "hide")
    endScreenEl.removeAttribute("class")
    finalScore.textContent = secondsLeft
    submitBtn.addEventListener("click", highScore)
}

const highScoreArray = JSON.parse(localStorage.getItem("savedScores")) ? JSON.parse(localStorage.getItem("savedScores")) : []

function highScore() {
    console.log(document.querySelector("#initials").value)
    const scoreSet = {
        initials: document.querySelector("#initials").value,
        endScore: secondsLeft
    }
    
    highScoreArray.push(scoreSet)

    localStorage.setItem("savedScores", JSON.stringify(highScoreArray))
    scoreHolder()
}


// target the id in the HS.html and loop over the highscores
// and create li for each initial and score set
// ref line 92
// var finalScoreHolder = document.querySelector("#holdScores")

function scoreHolder(highScoreArray) {
    localStorage.getItem("savedScores", JSON.parse(highScoreArray))
    console.log(savedScores)
    let finalScoreHolder = document.createElement("div")
    playerDiv.classList.add("holdScores")
       playerDiv.innerHTML= `<p>${localStorage.getItem("savedScores", JSON.parse(highScoreArray))}
       </p>`
}

startBtn.addEventListener("click", startQuiz)