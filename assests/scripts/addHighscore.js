//IMPORTS
import { endScore, endTime } from "./main.js"
import { updateScores } from "./updateScores.js"
// localStorage.clear()
let playerScore
let playerTime
console.log(3.14 < 3.04)
export function addHighscore(){
    //SETS VALUES FOR HIGHSCORE1 
    localStorage.getItem('score1') === null ? localStorage.setItem('score1', 0) : null
    localStorage.getItem('time1') === null ? localStorage.setItem('time1', 0) : null
    localStorage.getItem('initials1') === null ? localStorage.setItem('initials1', 0) : null
    //SETS VALUES FOR HIGHSCORE2
    localStorage.getItem('score2') === null ? localStorage.setItem('score2', 0) : null
    localStorage.getItem('time2') === null ? localStorage.setItem('time2', 0) : null
    localStorage.getItem('initials2') === null ? localStorage.setItem('initials2', 0) : null
    //SETS VALUES FOR HIGHSCORE3
    localStorage.getItem('score3') === null ? localStorage.setItem('score3', 0) : null
    localStorage.getItem('time3') === null ? localStorage.setItem('time3', 0) : null
    localStorage.getItem('initials3') === null ? localStorage.setItem('initials3', 0) : null
    //SETS VALUES FOR HIGHSCORE4 
    localStorage.getItem('score4') === null ? localStorage.setItem('score4', 0) : null
    localStorage.getItem('time4') === null ? localStorage.setItem('time4', 0) : null
    localStorage.getItem('initials4') === null ? localStorage.setItem('initials4', 0) : null
    //SETS VALUES FOR HIGHSCORE5 
    localStorage.getItem('score5') === null ? localStorage.setItem('score5', 0) : null
    localStorage.getItem('time5') === null ? localStorage.setItem('time5', 0) : null
    localStorage.getItem('initials5') === null ? localStorage.setItem('initials5', 0) : null

    let initialsInput = document.getElementById("initials-input")
    let initials = initialsInput.value
    playerScore = endScore
    endTime === 0 ? playerTime = 0 : playerTime = endTime / 10
    let statusElement = document.getElementById("status-element")
    let highscoreElm1 = document.getElementById("highscore1")
    let highscoreElm2 = document.getElementById("highscore2")
    let highscoreElm3 = document.getElementById("highscore3")
    let highscoreElm4 = document.getElementById("highscore4")
    let highscoreElm5 = document.getElementById("highscore5")
    let score1 = localStorage.getItem('score1')
    let score2 = localStorage.getItem('score2')
    let score3 = localStorage.getItem('score3')
    let score4 = localStorage.getItem('score4')
    let score5 = localStorage.getItem('score5')
    console.log('player time ',playerTime)
    console.log('time1 ', localStorage.getItem('time1'))
    console.log('time2 ', localStorage.getItem('time2'))
    console.log('time3 ', localStorage.getItem('time3'))
    console.log('time4 ', localStorage.getItem('time4'))
    console.log('time5 ', localStorage.getItem('time5'))
    if(endScore === 0){
        statusElement.innerHTML = "You can't submit a score when you got zero correct."
    }else if(initials === ''){
        statusElement.innerHTML = "Please enter a name/initials."
    }else if(initials.length > 15){
        statusElement.innerHTML = "Value cannot exceed 15 characters long."
    }else{
        if(localStorage.getItem('scoreEntered') === 'no'){
            if(score1 < endScore || ((score1 === endScore) && (parseInt(localStorage.getItem('time1')) <= playerTime))){
                localStorage.setItem('score5', localStorage.getItem('score4'))
                localStorage.setItem('time5', localStorage.getItem('time4'))
                localStorage.setItem('initials5', localStorage.getItem('initials4'))
                highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
    
                localStorage.setItem('score4', localStorage.getItem('score3'))
                localStorage.setItem('time4', localStorage.getItem('time3'))
                localStorage.setItem('initials4', localStorage.getItem('initials3'))
                highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time left: ${localStorage.getItem('time4')} seconds`
    
                localStorage.setItem('score3', localStorage.getItem('score2'))
                localStorage.setItem('time3', localStorage.getItem('time2'))
                localStorage.setItem('initials3', localStorage.getItem('initials2'))
                highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time left: ${localStorage.getItem('time3')} seconds`
    
                localStorage.setItem('score2', localStorage.getItem('score1'))
                localStorage.setItem('time2', localStorage.getItem('time1'))
                localStorage.setItem('initials2', localStorage.getItem('initials1'))
                highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time left: ${localStorage.getItem('time2')} seconds`
    
                localStorage.setItem('score1', endScore)
                localStorage.setItem('time1', playerTime)
                localStorage.setItem('initials1', initials)
                highscoreElm1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time left: ${localStorage.getItem('time1')} seconds`
                localStorage.setItem('scoreEntered', 'yes')
                
            }else if(score2 < endScore || ((score2 === endScore) && (parseInt(localStorage.getItem('time2')) <= playerTime))){
                localStorage.setItem('score5', localStorage.getItem('score4'))
                localStorage.setItem('time5', localStorage.getItem('time4'))
                localStorage.setItem('initials5', localStorage.getItem('initials4'))
                highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
    
                localStorage.setItem('score4', localStorage.getItem('score3'))
                localStorage.setItem('time4', localStorage.getItem('time3'))
                localStorage.setItem('initials4', localStorage.getItem('initials3'))
                highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time left: ${localStorage.getItem('time4')} seconds`
    
                localStorage.setItem('score3', localStorage.getItem('score2'))
                localStorage.setItem('time3', localStorage.getItem('time2'))
                localStorage.setItem('initials3', localStorage.getItem('initials2'))
                highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time left: ${localStorage.getItem('time3')} seconds`
    
                localStorage.setItem('score2', endScore)
                localStorage.setItem('time2', playerTime)
                localStorage.setItem('initials2', initials)
                highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time left: ${localStorage.getItem('time2')} seconds`
                localStorage.setItem('scoreEntered', 'yes')
    
            }else if(score3 < endScore || ((score3 === endScore) && (parseInt(localStorage.getItem('time3')) <= playerTime))){
                localStorage.setItem('score5', localStorage.getItem('score4'))
                localStorage.setItem('time5', localStorage.getItem('time4'))
                localStorage.setItem('initials5', localStorage.getItem('initials4'))
                highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
    
                localStorage.setItem('score4', localStorage.getItem('score3'))
                localStorage.setItem('time4', localStorage.getItem('time3'))
                localStorage.setItem('initials4', localStorage.getItem('initials3'))
                highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time left: ${localStorage.getItem('time4')} seconds`
    
                localStorage.setItem('score3', endScore)
                localStorage.setItem('time3', playerTime)
                localStorage.setItem('initials3', initials)
                highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time left: ${localStorage.getItem('time3')} seconds`
                localStorage.setItem('scoreEntered', 'yes')
    
            }else if(score4 < endScore || ((score4 === endScore) && (parseInt(localStorage.getItem('time4')) <= playerTime))){
                localStorage.setItem('score5', localStorage.getItem('score4'))
                localStorage.setItem('time5', localStorage.getItem('time4'))
                localStorage.setItem('initials5', localStorage.getItem('initials4'))
                highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
                
                localStorage.setItem('score4', endScore)
                localStorage.setItem('time4', playerTime)
                localStorage.setItem('initials4', initials)
                highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time left: ${localStorage.getItem('time4')} seconds`
                localStorage.setItem('scoreEntered', 'yes')
    
            }
            else if(score5 < endScore || ((score4 === endScore) && (parseInt(localStorage.getItem('time5')) <= playerTime))){
                localStorage.setItem('score5', endScore)
                localStorage.setItem('time5', playerTime)
                localStorage.setItem('initials5', initials)
                highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
                localStorage.setItem('scoreEntered', 'yes')
            }
        }
    }

    updateScores()
}