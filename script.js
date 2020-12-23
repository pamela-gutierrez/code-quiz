// Setting the variables to be used in functions that will call on specific elements from the HTML
var quizContainerElement = document.getElementById("quiz-container");
var startButton = document.querySelector(".startBtn")
var buttonA = document.getElementById('a')
var buttonB = document.getElementById('b')
var buttonC = document.getElementById('c')
var buttonD = document.getElementById('d')
var questionElement = document.getElementById("question")
var buttons = document.getElementById("answer-buttons")
var startingDiv = document.querySelector(".startingDiv")
// var resultContainer = documet.getElementById("results");

// Setting the variables to be used in functions but that are not called specifically from the HTML. They will instead be defined and re-defined by the functions executed
var currentQuestion = 0
var results;
var totalSeconds;
var timeElapsed;
var timer
var correctAnswerCount;

// Event Listeners that will "react" to different buttons being clicked and set off the next function
startButton.addEventListener('click', startQuiz)
buttonA.addEventListener('click', answerSelected)
buttonB.addEventListener('click', answerSelected)
buttonC.addEventListener('click', answerSelected)
buttonD.addEventListener('click', answerSelected)

// Functions that will actually execute the changes on page and keep track of data
function startQuiz() {
    startingDiv.style.display = "none"
    quizContainerElement.style.display = "block"
    showQuestion(quiz[currentQuestion])

}

//create timer

//onclick for answer buttons
//if this button's textContent === my correct answer, add one to current question and show next question
//else (once timer is set up, subtract from timer)

//display score once all questions have been answered

function showQuestion(object) {
    questionElement.innerText = object.question
    buttonA.textContent = object.answers[0]
    buttonB.textContent = object.answers[1]
    buttonC.textContent = object.answers[2]
    buttonD.textContent = object.answers[3]

    // currentQuestion = currentQuestion + 1
}

function answerSelected() {
    // if (buttonA.textContent === quiz[currentQuestion].correctAnswer) {
    currentQuestion = currentQuestion + 1
    showQuestion(quiz[currentQuestion])



}


function displayScore() {

}
var quiz = [
    {
        question: "Where is Central America located?",
        answers: [
            "North America",
            "South America",
            "It's an island in the Pacific",
            "It's its own continent"
        ],
        correctAnswer: "North America"
    },
    {
        question: "How many countries are in Central America",
        answers: [
            "5",
            "3",
            "7",
            "12",
        ],
        correctAnswer: "7"
    },
    {
        question: "Which country is not part of Central America?",
        answers: [
            "Panama",
            "El Salvador",
            "Belize",
            "Mexico"
        ],
        correctAnswer: "Mexico"
    },
    {
        question: "What is Central America known for?",
        answers: [
            "Coffee",
            "Volcanoes",
            "Beaches",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Should you visit Central America?",
        answers: [
            "No, I watch too much TV so I believe it's extremely dangous",
            "No, I've already been to Mexico so I don't need to go there",
            "No, I don't like to travel",
            "YES!"
        ],
        correctAnswer: "YES!"
    }
];


// If statement to say if they answer "X" then add one point to the total score, else take 10 seconds off timer