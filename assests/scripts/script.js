// let initialButton = document.getElementById("initial-button")
// initialButton.addEventListener("click", jsGame)



// TIMER
let timer = 5
let timerElement = document.getElementById("time")
let gameOver = false
function refreshTime(){
    timerElement.innerHTML = "Time left: " + timer
    console.log(timer)
    if(timer === 0){
        clearInterval(timeInterval)
        gameOver = true
    }else{
        timer -= 1
    }
}
timeInterval = setInterval(refreshTime, 1000);

function askQuestion(){
    
}

function jsGame(){
    // document.getElementById("initial-screen-section").style.display = "none"
    let gameSection = document.getElementById("game-content-section")
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
            ["String", "Integer", "Boolean", "Ternary"],
            ["Boolean", "Integer", "String", "Ternary"],
            ["False", "True", "I dont know", "All of the above"],
            ["Function", "Interdimensional Portal", "Method", "Constructor"],
            ["Variable", "Array", "A box", "Function"],
            ["Loop", "Function", "Scanner", "Constructor"],
            ["Array", "String", "Toilet", "Object"]
        ]
    }
        indexSelect = Math.floor(Math.random() * questionIndex.questions.length)
        gameSection.style.display = "flex"
        questionEl.innerHTML = questionIndex.questions[indexSelect]
        answer1.innerHTML = questionIndex.answers[indexSelect][0]
        answer2.innerHTML = questionIndex.answers[indexSelect][1]
        answer3.innerHTML = questionIndex.answers[indexSelect][2]
        answer4.innerHTML = questionIndex.answers[indexSelect][3]
    
}
jsGame()