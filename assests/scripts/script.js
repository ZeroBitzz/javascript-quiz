let initialButton = document.getElementById("initial-button")
initialButton.addEventListener("click", jsGame)



// TIMER INITIALIZATION
let timer = 60
let timerElement = document.getElementById("time")
let gameOver = false
function refreshTime(){
    timerElement.innerHTML = "Time left: " + timer
    if(timer <= 0){
        timerElement.innerHTML = "Time left: 0"
        clearInterval(timeInterval)
        gameOver = true
    }else{
        timer -= 1
    }
}

function incorrectAnswer(){
    timer -= 5
    questionsLeft -= 1
    askQuestion()
}

function correctAnswer(){
    timer += 5
    questionsLeft -= 1
    askQuestion()
}

function removeElmFromArr(removeElmArr, elmToRemove){
    newArr = []
    for(let i=0; i<removeElmArr.length; i++){
        if(removeElmArr[i] === elmToRemove){
            continue
        }else{
            newArr.push(removeElmArr[i])
        }
    }
    return newArr
}


let questionsLeft = 7
let questionEl = document.getElementById("game-question")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let questionIndex = {
    questions: [
        "What type is this: \"word\"",
        "What type is this: 42",
        "What type is true or false?",
        "Java and Javascript are the same thing.",
        "I want to repeat a complex set of tasks, I should use a",
        "I want to save the value 3.14 for later, I should use a",
        "I want to scan each value in an array, I should use a",
        "I want to log the Eldritch Gods I have defeated, I should use a",
    ],
    
    answers: [
        ["String", "Integer", "Boolean", "Ternary"],
        ["Integer", "String", "Boolean", "Ternary"],
        ["Boolean", "Integer", "String", "Ternary"],
        ["False", "True", "I dont know", "Obscure question"],
        ["Function", "Interdimensional Portal", "Method", "Constructor"],
        ["Variable", "Array", "A box", "Function"],
        ["Loop", "Function", "Scanner", "Constructor"],
        ["Array", "String", "Toilet", "Object"]
    ]
}   
function askQuestion(){

    // RAND ARR INDEX KEEPS THE QUESTION AND ANSWER VARIABLES CONNECTED
    let randArrIndex = Math.floor(Math.random() * questionIndex.questions.length)

    // SETS WHICH CURRENT ARRAYS ARE BEING USED FOR QUESTION AND ANSWER, AND REMOVES THE QUESTION FROM THE ARRAY
    let currentAnswerArr = questionIndex.answers[randArrIndex]
    let currentQuestion = questionIndex.questions[randArrIndex]
    questionIndex.questions = removeElmFromArr(questionIndex.questions, currentQuestion)

    // SETS THE ELEMENT FOR THE QUESTION ON PAGE
    questionEl.innerHTML = currentQuestion

    // GETS THE CORRECT ANSWER IN THE ARRAY BEFORE THE ARRAY IS CHANGED(WHICH IS ALWAYS THE FIRST)
    let correctAnswerVal = currentAnswerArr[0]

    // GRABS A RANDOM ANSWER TO PUT IN BUTTON ELEMENT, THEN REMOVES THAT ELEMENT SO THERE IS NO DUPLICATES
    let randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    questionIndex.answers = removeElmFromArr(questionIndex.answers, randAnswer)

    // SETS THE BUTTON TEXT TO THE ANSWER ON PAGE, THEN ADDS EVENT LISTENER
    answer1.innerHTML = randAnswer
    answer1.addEventListener("click", correctAnswer)
    console.log(randArrIndex)
    console.log(currentQuestion)
    console.log(correctAnswerVal)
    console.log()
    console.log(questionIndex.answers)
    console.log(questionIndex.questions)

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer2.innerHTML = randAnswer
    answer2.addEventListener("click", incorrectAnswer)

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer3.innerHTML = randAnswer
    answer3.addEventListener("click", incorrectAnswer)

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer4.innerHTML = randAnswer
    answer4.addEventListener("click", incorrectAnswer)
    console.log(questionsLeft)
}

function jsGame(){
    timeInterval = setInterval(refreshTime, 1000);
    document.getElementById("initial-screen-section").style.display = "none"
    let gameSection = document.getElementById("game-content-section")
    gameSection.style.display = "flex"
    askQuestion()
    
}