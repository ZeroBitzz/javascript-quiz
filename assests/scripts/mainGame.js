// PREVENTS PAGE FROM RELOADING WHEN YOU ENTER YOUR INITIALS
let form = document.getElementById("initials-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)

// HIGHSCORE FUNCTION AND ELEMENTS
let highscoresSection = document.getElementById("highscores-section")
localStorage.setItem('highscore1', 0)
localStorage.setItem('highscoreTime1', 0)
localStorage.setItem('highscore2', 0)
localStorage.setItem('highscoreTime2', 0)
localStorage.setItem('highscore3', 0)
localStorage.setItem('highscoreTime3', 0)
localStorage.setItem('highscore4', 0)
localStorage.setItem('highscoreTime4', 0)
localStorage.setItem('highscore5', 0)
localStorage.setItem('highscoreTime5', 0)
let localHighscore1 = localStorage.getItem('highscore1')
let localHighscore2 = localStorage.getItem('highscore2')
let localHighscore3 = localStorage.getItem('highscore3')
let localHighscore4 = localStorage.getItem('highscore4')
let localHighscore5 = localStorage.getItem('highscore5')
let localHighscoreTime1 = localStorage.getItem("highscoreTime1")
let localHighscoreTime2 = localStorage.getItem("highscoreTime2")
let localHighscoreTime3 = localStorage.getItem("highscoreTime3")
let localHighscoreTime4 = localStorage.getItem("highscoreTime4")
let localHighscoreTime5 = localStorage.getItem("highscoreTime5")

// TIMER INITIALIZATION
let timer = 300
let timerElement = document.getElementById("time")
let timerScore = document.getElementById("time-score")
function refreshTime(){
    // REFRESHES THE TIME THEN CHECKS IF THE TIME HAS RAN OUT
    timerElement.innerHTML = "Time left: " + timer
    if(timer <= 0){
        timerElement.innerHTML = "Time left: 0"
        clearInterval(timeInterval)
        endGame()
    }else{
        timer -= 1
    }
}

// DECREASES TIME ON INCORRECT ANSWER THEN ASKS ANOTHER QUESTION
let incorrectAnswers = 0
let incorrectAnswerElement = document.getElementById("incorrect-score")
function incorrectAnswer(){
    console.log('wrong')
    console.log()
    timer -= 50
    questionsLeft -= 1
    incorrectAnswers += 1
    askQuestion()
}

// INCREASES TIME ON CORRECT ANSWER THEN ASKS ANOTHER QUESTION
let correctAnswers = 0
let correctAnswerElement = document.getElementById("correct-score")
function correctAnswer(){
    console.log('right')
    console.log()
    timer += 20
    questionsLeft -= 1
    correctAnswers += 1
    askQuestion()
}

// INITIALS FUNCTION
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", addUpdateHighscore)
let initialInput = document.getElementById("initials-input")
let highscore1Element = document.getElementById("highscore1")
let highscore2Element = document.getElementById("highscore2")
let highscore3Element = document.getElementById("highscore3")
let highscore4Element = document.getElementById("highscore4")
let highscore5Element = document.getElementById("highscore5")

function addUpdateHighscore(){
    let initialsText = initialInput.innerHTML
    let correctScore = correctAnswerElement.innerHTML
    if(correctAnswers > localHighscore1){
        if(timer > localHighscoreTime1){
            localStorage.setItem('highscore1', correctScore)
            localStorage.setItem('highscoreTime1', timer)
            highscore1Element.innerHTML = localStorage.getItem('highscore1')
        }
    }
}

// ENDS THE GAME
function reloadPage(){location.reload()}
let initialsForm = document.getElementById("initials-form")
let endGameSectionElm = document.getElementById("end-game-section")
let scoreElement = document.getElementById("score-span")
let retryButtonElement = document.getElementById("retry-button")
function endGame(){
    retryButtonElement.addEventListener("click", reloadPage)
    initialsForm.style.display = "flex"
    endGameSectionElm.style.display = "flex"
    highscoresSection.style.display = "flex"
    timerElement.style.display = "none"
    gameSection.style.display = "none"
    scoreElement.style.display = "flex"
    let endtime = timer / 10
    endtime < 0 ? endtime = 0 : null
    timerScore.innerHTML = "Time left: " + endtime + " seconds"
    correctAnswerElement.innerHTML = "correct answers: " + correctAnswers
    incorrectAnswerElement.innerHTML = "incorrect answers: " + incorrectAnswers
    clearInterval(timeInterval)
    timerElement.innerHTML = endtime
}

// REMOVES SPECIFIC ELEMENTS FROM AN ARRAY
function removeElmFromArr(removeElmArr, elmToRemove){
    newArr = []
    for(let i=0; i<removeElmArr.length; i++){
        if(removeElmArr[i] === elmToRemove){
            continue
        }
        else{
            newArr.push(removeElmArr[i])
        }
    }
    return newArr
}

// GLOBAL INITIALIZATIONS FOR GAME
let questionsLeft = 7
let questionEl = document.getElementById("game-question")
let gameSection = document.getElementById("game-content-section")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let answer1Correct, answer2Correct, answer3Correct, answer4Correct = false

let questionIndex = {
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

function askQuestion(){
    // CHECKS IF THERE ARE NO QUESTIONS LEFT TO ASK
    questionsLeft <= 0 ? endGame() : null
    
    // RAND ARR INDEX KEEPS THE QUESTION AND ANSWER VARIABLES TALKING ABOUT THE SAME THING
    let randArrIndex = Math.floor(Math.random() * questionIndex.questions.length)

    // SETS WHICH CURRENT ARRAYS ARE BEING USED FOR QUESTION AND ANSWER, AND REMOVES THE QUESTION FROM THE ARRAY SO IT DOESNT REPEAT
    let currentAnswerArr = questionIndex.answers[randArrIndex]
    let currentQuestionArr = questionIndex.questions[randArrIndex]
    questionIndex.questions = removeElmFromArr(questionIndex.questions, currentQuestionArr)

    // SETS THE ELEMENT FOR THE QUESTION ON PAGE
    questionEl.innerHTML = currentQuestionArr
    
    // GETS THE CORRECT ANSWER IN THE ARRAY BEFORE THE ARRAY IS RANDOMIZED(WHICH IS ALWAYS THE FIRST ELEMENT IF YOU TAKE A LOOK ABOVE)
    let correctAnswerVal = 0
    correctAnswerVal = currentAnswerArr[0]
    
    // REMOVES EVENT LISTENERS SO THEY DONT OVERLAP
    answer1Correct === true ? answer1.removeEventListener("click", correctAnswer) : answer1.removeEventListener("click", incorrectAnswer)
    answer2Correct === true ? answer2.removeEventListener("click", correctAnswer) : answer2.removeEventListener("click", incorrectAnswer)
    answer3Correct === true ? answer3.removeEventListener("click", correctAnswer) : answer3.removeEventListener("click", incorrectAnswer)
    answer4Correct === true ? answer4.removeEventListener("click", correctAnswer) : answer4.removeEventListener("click", incorrectAnswer)
    
    // RESETS THE VALUES OF THE ANSWERS FOR THE EVENT LISTENERS
    answer1Correct, answer2Correct, answer3Correct, answer4Correct = false

    // GRABS A RANDOM ANSWER TO PUT IN BUTTON ELEMENT, THEN REMOVES THAT ELEMENT SO THERE IS NO DUPLICATES(THIS IS REPEATED FOR EVERY BUTTON WITH AN ANSWER IN IT)
    let randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer1.innerHTML = randAnswer

    // CHECKS IF THE ANSWER IS THE CORRECT ANSWER TO ADD CORRESPONDING EVENT LISTENER(REPEATED FOR EVERY BUTTON)
    if(answer1.innerHTML === correctAnswerVal){
        answer1.addEventListener("click", correctAnswer)
        answer1Correct = true
    }else{
        answer1.addEventListener("click", incorrectAnswer)
    }
    

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer2.innerHTML = randAnswer
    if(answer2.innerHTML === correctAnswerVal){
        answer2.addEventListener("click", correctAnswer)
        answer2Correct = true
    }else{
        answer2.addEventListener("click", incorrectAnswer)
    }
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer3.innerHTML = randAnswer
    if(answer3.innerHTML === correctAnswerVal){
        answer3.addEventListener("click", correctAnswer)
        answer3Correct = true
    }else{
        answer3.addEventListener("click", incorrectAnswer)
    }
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer4.innerHTML = randAnswer
    if(answer4.innerHTML === correctAnswerVal){
        answer4.addEventListener("click", correctAnswer)
        answer4Correct = true
    }else{
        answer4.addEventListener("click", incorrectAnswer)
    }
    
    // REMOVES THE ANSWERS SO THEY DONT REPEAT
    questionIndex.answers.splice(randArrIndex, 1)
}

function jsGame(){
    highscoresSection.style.display = "none"
    timeInterval = setInterval(refreshTime, 100);
    document.getElementById("initial-screen-section").style.display = "none"
    gameSection.style.display = "flex"
    askQuestion()   
}