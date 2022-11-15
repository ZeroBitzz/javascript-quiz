// IMPORTS
import { 
    questionsLeft, incorrectAnswer, correctAnswer, endGame
} from "./mainGame.js"

// GLOBAL VARIABLES
export let answer1Correct, answer2Correct, answer3Correct, answer4Correct = false
let questionEl = document.getElementById("game-question")
export let answer1 = document.getElementById("answer1")
export let answer2 = document.getElementById("answer2")
export let answer3 = document.getElementById("answer3")
export let answer4 = document.getElementById("answer4")

let questionIndex = { // object containing questions and answers for game
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

// REMOVES SPECIFIC ELEMENTS FROM AN ARRAY
function removeElmFromArr(removeElmArr, elmToRemove){
    let newArr = []
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

// FUNCTION THAT GENERATES RANDOM QUESTION
export function askQuestion(){
    // CHECKS IF THERE ARE NO QUESTIONS LEFT TO ASK
    questionsLeft <= 0 ? endGame() : null
    
    // RESETS EVENT LISTENERS FOR ANSWER BUTTONS
    if(answer1Correct){
        answer1.removeEventListener("click", correctAnswer)
        answer1Correct = false
    }else{answer1.removeEventListener("click", incorrectAnswer)}

    if(answer2Correct){
        answer2.removeEventListener("click", correctAnswer)
        answer2Correct = false

    }else{answer2.removeEventListener("click", incorrectAnswer)}

    if(answer3Correct){
        answer3.removeEventListener("click", correctAnswer)
        answer3Correct = false
    }else{answer3.removeEventListener("click", incorrectAnswer)}

    if(answer4Correct){
        answer4.removeEventListener("click", correctAnswer)
        answer4Correct = false
    }else{answer4.removeEventListener("click", incorrectAnswer)}

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

    // GRABS A RANDOM ANSWER TO PUT IN BUTTON ELEMENT, THEN REMOVES THAT ELEMENT SO THERE IS NO DUPLICATES(THIS IS REPEATED FOR EVERY BUTTON WITH AN ANSWER IN IT)
    let randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer1.innerHTML = randAnswer

    // CHECKS IF THE ANSWER IS THE CORRECT ANSWER TO ADD CORRESPONDING EVENT LISTENER(REPEATED FOR EVERY BUTTON)
    if(answer1.innerHTML === correctAnswerVal){
        answer1Correct = true
        console.log(randAnswer + ' is correct')
        answer1.addEventListener("click", correctAnswer)
    }else{
        answer1.addEventListener("click", incorrectAnswer)
    }
    

    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer2.innerHTML = randAnswer
    if(answer2.innerHTML === correctAnswerVal){
        answer2Correct = true
        console.log(randAnswer + ' is correct')
        answer2.addEventListener("click", correctAnswer)
    }else{
        answer2.addEventListener("click", incorrectAnswer)
    }
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer3.innerHTML = randAnswer
    if(answer3.innerHTML === correctAnswerVal){
        answer3Correct = true
        console.log(randAnswer + ' is correct')
        answer3.addEventListener("click", correctAnswer)
    }else{
        answer3.addEventListener("click", incorrectAnswer)
    }
    
    randAnswer = currentAnswerArr[Math.floor(Math.random() * currentAnswerArr.length)]
    currentAnswerArr = removeElmFromArr(currentAnswerArr, randAnswer)
    answer4.innerHTML = randAnswer
    if(answer4.innerHTML === correctAnswerVal){
        answer4Correct = true
        console.log(randAnswer + ' is correct')
        answer4.addEventListener("click", correctAnswer)
    }else{
        answer4.addEventListener("click", incorrectAnswer)
    }
    
    // REMOVES THE ANSWERS SO THEY DONT REPEAT
    questionIndex.answers.splice(randArrIndex, 1)
}