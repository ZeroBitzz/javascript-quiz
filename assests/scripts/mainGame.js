// IMPORTS
import { askQuestion } from './askQuestion.js'

// PREVENTS PAGE FROM RELOADING WHEN YOU ENTER YOUR INITIALS
let form = document.getElementById("initials-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)


// GLOBAL VARIABLES
let highscoresSection =         document.getElementById("highscores-section")
let timerElement =              document.getElementById("time")
let timerScore =                document.getElementById("time-score")
let gameSection =               document.getElementById("game-content-section")
let incorrectAnswerElement =    document.getElementById("incorrect-score")
let correctAnswerElement =      document.getElementById("correct-score")
let timer = 300
let timeInterval

// EXPORTS FOR ASK QUESTIONS MODULE AND THIS ONE
export let questionsLeft = 7
export let incorrectAnswers = 0
export let correctAnswers = 0

export function incorrectAnswer(){ // function if answer selected is incorrect
    console.log('wrong')
    console.log()
    timer -= 50
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

export function correctAnswer(){ // function if answer selected is correct
    console.log('right')
    console.log()
    timer += 20
    questionsLeft -= 1
    correctAnswers += 1
    askQuestion()
}

export let questionIndex = { // object containing questions and answers for game
    questions: [
        "What type is this: \"word\"",
        "What type is this: 42",
        "What type is true or false?",
        "Java and Javascript are the same thing.",
        "I want to repeat a complex set of tasks, I should use a",
        "I want to save the value 3.14 for later, I should use a",
        "I want to scan each value in an array, I should use a",
        "I want to log the alternate realities I have been to, I should use a",
    ],
    
    answers: [
        ["String", "Integer", "Boolean", "Ternary"],
        ["Integer", "String", "Boolean", "Ternary"],
        ["Boolean", "Integer", "String", "Ternary"],
        ["False", "True", "I dont know", "Obscure question"],
        ["Function", "Interdimensional Portal", "Method", "Constructor"],
        ["Variable", "Array", "A box", "Function"],
        ["Loop", "Function", "Scanner", "Constructor"],
        ["Array", "String", "Toilet", "Method"]
    ]
}   

// MAIN JS GAME FUNCTION
function jsGame(){
    highscoresSection.style.display = "none"
    timeInterval = setInterval(refreshTime, 100); // sets the timer going, also in a variable so it can easily be disabled/logged
    document.getElementById("initial-screen-section").style.display = "none"
    gameSection.style.display = "flex"
    askQuestion()   
}

// TIMER FUNCTION
function refreshTime(){
    // REFRESHES THE TIME THEN CHECKS IF THE TIME HAS RAN OUT
    timerElement.innerHTML = "Time left: " + timer
    if(timer <= 0){
        timerElement.innerHTML = "Time left: 0"
        clearInterval(timeInterval) // clears timer
        endGame()
    }else{
        timer -= 1
    }
}

// END GAME FUNCTION, RELOAD PAGE HELPER FUNCTION, AND VARIABLES FOR END GAME FUNCTION
function reloadPage(){location.reload()}
let initialsForm = document.getElementById("initials-form")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")
export function endGame(){
    retryButtonElement.addEventListener("click", reloadPage) // reloads the page when button is clicked
    initialsForm.style.display = "flex"
    endGameSectionElm.style.display = "flex"
    highscoresSection.style.display = "flex"
    timerElement.style.display = "none"
    gameSection.style.display = "none"
    scoreElement.style.display = "flex"
    let endtime = timer / 10 // divided by ten to display in seconds for simplicity
    endtime < 0 ? endtime = 0 : null //makes sure the time cannot go under 0
    timerScore.innerHTML = "Time left: " + endtime + " seconds"
    correctAnswerElement.innerHTML = "correct answers: " + correctAnswers
    incorrectAnswerElement.innerHTML = "incorrect answers: " + incorrectAnswers
    clearInterval(timeInterval) // clears timer
    timerElement.innerHTML = endtime
}