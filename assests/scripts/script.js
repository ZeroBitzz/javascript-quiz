// EVENT LISTENER TO START THE GAME
let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)



// TIMER INITIALIZATION
let timer = 300
let timerElement = document.getElementById("time")
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
function incorrectAnswer(){
    console.log('wrong')
    console.log()
    timer -= 50
    questionsLeft -= 1
    askQuestion()
}

// INCREASES TIME ON CORRECT ANSWER THEN ASKS ANOTHER QUESTION
function correctAnswer(){
    console.log('right')
    console.log()
    timer += 50
    questionsLeft -= 1
    askQuestion()
}

// ENDS THE GAME
let scoreElement = document.getElementById("score-span")
function endGame(){
    gameSection.style.display = "none"
    scoreElement.style.display = "flex"
    let endtime = timerElement.innerHTML
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
    timeInterval = setInterval(refreshTime, 100);
    document.getElementById("initial-screen-section").style.display = "none"
    gameSection.style.display = "flex"
    askQuestion()   
}