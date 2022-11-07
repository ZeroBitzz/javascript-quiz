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

function jsGame(){
    // document.getElementById("initial-screen-section").style.display = "none"
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
            ["String", "Integer", "Boolean", "Ternary"],
            ["False", "True"],
            ["Function", "Interdimensional Portal", "Method", "Constructor"],
            ["Variable", "Array", "A box", "Function"],
            ["Loop", "Function", "Scanner", "Constructor"],
            ["Array", "String", "Toilet", "Object"]
        ]
    }
    
}
jsGame()