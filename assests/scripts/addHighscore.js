//IMPORTS
import { endTime, endScore } from "./main.js"
import { updateScores } from "./updateScores.js"
// localStorage.clear()
let playerScore
let time
export function addHighscore(score=endScore, time=endTime, name='John Doe'){
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
    let oldScore
    let oldTime
    let oldName

    if(localStorage.getItem('scoreEntered') === 'no'){
        if(score === 0){
            statusElement.innerHTML = "You can't enter a score when you got zero correct."
        }else if(initials === ''){
            statusElement.innerHTML = "Please enter a name/initials."
        }else{
            localStorage.setItem('scoreEntered', 'yes') //this is so the score can only be entered once every time you play the game
            if(score1 <= score){
                if(localStorage.getItem('time1') < time / 10){
                    localStorage.setItem('score1', score)
                    localStorage.setItem('time1', time / 10)
                    localStorage.setItem('initials1', initials)
                    highscoreElm1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${localStorage.getItem('time1')} seconds`
                }
            }else if(score2 <= score){
                if(localStorage.getItem('time2') < time / 10){
                    oldScore = localStorage.getItem('score2')
                    oldTime = localStorage.getItem('time2')
                    oldName = localStorage.getItem('name2')
                    localStorage.setItem('score2', score)
                    localStorage.setItem('time2', time / 10)
                    localStorage.setItem('initials2', initials)
                    highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${localStorage.getItem('time2')} seconds`
                    addHighscore()
                }
            }else if(score3 <= score){
                if(localStorage.getItem('time3') < time / 10){
                    localStorage.setItem('score3', score)
                    localStorage.setItem('time3', time / 10)
                    localStorage.setItem('initials3', initials)
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${localStorage.getItem('time3')} seconds`
                }
            }else if(score4 <= score){
                if(localStorage.getItem('time4') < time / 10){
                    localStorage.setItem('score4', score)
                    localStorage.setItem('time4', time / 10)
                    localStorage.setItem('initials4', initials)
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`
                }
            }
            else if(score5 <= score){
                if(localStorage.getItem('time5') < time / 10){
                    localStorage.setItem('score5', score)
                    localStorage.setItem('time5', time / 10)
                    localStorage.setItem('initials5', initials)
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`
                }
            }
        }

        updateScores()
    }
}