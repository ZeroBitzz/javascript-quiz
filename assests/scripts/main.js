// IMPORTS
import { askQuestion, answer1, answer1Correct, answer2Correct, answer3Correct, answer4Correct,
    answer2, answer3, answer4 } from './askQuestion.js'
import {addHighscore} from './addHighscore.js'

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
    timer -= 50
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

export function correctAnswer(){ // function if answer selected is correct
    console.log('right')
    timer += 20
    questionsLeft -= 1
    correctAnswers += 1
    askQuestion()
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
let initialsFormSubmitButton = document.getElementById("submit-button")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")
export let endTime, endScore
export function endGame(){
    localStorage.setItem('scoreEntered', 'no') //this line is so you only can enter your score once every time you play. Also used in addHighscore.js
    endTime = timer
    endScore = correctAnswers
    initialsFormSubmitButton.addEventListener("click", addHighscore)
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