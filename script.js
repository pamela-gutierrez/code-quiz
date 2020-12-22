var quizContainerElement  = document.getElementById("quiz-container");
// either this or start button
var startButton = document.getElementById("start-button")
var questionElement =document.getElementById("question")
// var resultContainer = documet.getElementById("results");
// var submitButton = document.getElementById("submit");

// Event Listeners
startButton.addEventListener('click', startGame)

var Quiz = [
    {
        question: "Where is Central America located?",
        answers: {
            a: "North America",
            b: "South America",
            c: "It's an island in the Pacific",
            d: "It's its own continent"
        },
        correctAnswer: "a"
    },
    {
        questions: "How many countries are in Central America",
        answers: {
            a: "5",
            b: "3",
            c: "7",
            d: "12",
    },
        correctAnswer: "c"
    },
    {
        question: "Which country is not part of Central America?",
        answers: {
            a: "Panama",
            b: "El Salvador",
            c: "Belize",
            d: "Mexico"
        },
        correctAnswer: "d"
    },
    {
        question: "What is Central America known for?",
            a: "Coffee",
            b: "Volcanoes",
            c: "Beaches",
            d: "All of the above"
    },
    {
        question: "Should you visit Central America?",
        answers: {
            a: "No, I watch too much TV so I believe it's extremely dangous",
            b: "No, I've already been to Mexico so I don't need to go there",
            c: "No, I don't like to travel",
            d: "YES!"
        },
        correctAnswer: "d"
    }
];

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    quizContainerElement.classList.remove("hide")
    setNextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}
// If statement to say if they answer "X" then add one point to the total score, else take 10 seconds off timer