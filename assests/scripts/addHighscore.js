//IMPORTS
import { endScore, endTime } from "./main.js"
import { updateScores } from "./updateScores.js"
// localStorage.clear()
let playerScore
let playerTime
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
    playerTime = endTime
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

    if(localStorage.getItem('scoreEntered') === 'no'){
        if(endScore === 0){
            statusElement.innerHTML = "You can't enter a score when you got zero correct."
        }else if(initials === ''){
            statusElement.innerHTML = "Please enter a name/initials."
        }else{
            localStorage.setItem('scoreEntered', 'yes') //this is so the score can only be entered once every time you play the game
            if(score1 <= endScore){
                if(localStorage.getItem('time1') < playerTime / 10){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', localStorage.getItem('time4'))
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', localStorage.getItem('time3'))
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`

                    localStorage.setItem('score3', localStorage.getItem('score2'))
                    localStorage.setItem('time3', localStorage.getItem('time2'))
                    localStorage.setItem('initials3', localStorage.getItem('initials2'))
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${localStorage.getItem('time3')} seconds`

                    localStorage.setItem('score2', localStorage.getItem('score1'))
                    localStorage.setItem('time2', localStorage.getItem('time1'))
                    localStorage.setItem('initials2', localStorage.getItem('initials1'))
                    highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${localStorage.getItem('time2')} seconds`

                    localStorage.setItem('score1', endScore)
                    localStorage.setItem('time1', playerTime / 10)
                    localStorage.setItem('initials1', initials)
                    highscoreElm1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${localStorage.getItem('time1')} seconds`
                }
            }else if(score2 <= endScore){
                if(localStorage.getItem('time2') < playerTime / 10){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', localStorage.getItem('time4'))
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', localStorage.getItem('time3'))
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`

                    localStorage.setItem('score3', localStorage.getItem('score2'))
                    localStorage.setItem('time3', localStorage.getItem('time2'))
                    localStorage.setItem('initials3', localStorage.getItem('initials2'))
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${localStorage.getItem('time3')} seconds`

                    localStorage.setItem('score2', endScore)
                    localStorage.setItem('time2', playerTime / 10)
                    localStorage.setItem('initials2', initials)
                    highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${localStorage.getItem('time2')} seconds`
                }
            }else if(score3 <= endScore){
                if(localStorage.getItem('time3') < playerTime / 10){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', localStorage.getItem('time4'))
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', localStorage.getItem('time3'))
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`

                    localStorage.setItem('score3', endScore)
                    localStorage.setItem('time3', playerTime / 10)
                    localStorage.setItem('initials3', initials)
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${localStorage.getItem('time3')} seconds`
                }
            }else if(score4 <= endScore){
                if(localStorage.getItem('time4') < playerTime / 10){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', localStorage.getItem('time4'))
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`
                    
                    localStorage.setItem('score4', endScore)
                    localStorage.setItem('time4', playerTime / 10)
                    localStorage.setItem('initials4', initials)
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`
                }
            }
            else if(score5 <= endScore){
                if(localStorage.getItem('time5') < playerTime / 10){
                    localStorage.setItem('score5', endScore)
                    localStorage.setItem('time5', playerTime / 10)
                    localStorage.setItem('initials5', initials)
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`
                }
            }
        }

        updateScores()
    }
}