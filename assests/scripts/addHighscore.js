//IMPORTS
import { endScore, endTime, zeroEndTime } from "./main.js"
import { updateScores } from "./updateScores.js"


let playerTime
export function addHighscore(){
    endTime < 0 ? zeroEndTime() : null // makes sure the endtime is not negative, if it is, it sets it to zero

    // LOCAL STORAGE VARIABLES
    let time1 = Number(localStorage.getItem('time1'))
    let time2 = Number(localStorage.getItem('time2'))
    let time3 = Number(localStorage.getItem('time3'))
    let time4 = Number(localStorage.getItem('time4'))
    let time5 = Number(localStorage.getItem('time5'))

    let score1 = Number(localStorage.getItem('score1'))
    let score2 = Number(localStorage.getItem('score2'))
    let score3 = Number(localStorage.getItem('score3'))
    let score4 = Number(localStorage.getItem('score4'))
    let score5 = Number(localStorage.getItem('score5'))
    
    //SETS VALUES FOR HIGHSCORE1 
    localStorage.getItem('score1') === null ? localStorage.setItem('score1', 0) : null
    localStorage.getItem('time1') === null || localStorage.getItem('time1') < 0 ? localStorage.setItem('time1', 0) : null
    localStorage.getItem('initials1') === null ? localStorage.setItem('initials1', 0) : null

    //SETS VALUES FOR HIGHSCORE2
    localStorage.getItem('score2') === null ? localStorage.setItem('score2', 0) : null
    localStorage.getItem('time2') === null || localStorage.getItem('time2') < 0 ? localStorage.setItem('time2', 0) : null
    localStorage.getItem('initials2') === null ? localStorage.setItem('initials2', 0) : null

    //SETS VALUES FOR HIGHSCORE3
    localStorage.getItem('score3') === null ? localStorage.setItem('score3', 0) : null
    localStorage.getItem('time3') === null || localStorage.getItem('time3') < 0 ? localStorage.setItem('time3', 0) : null
    localStorage.getItem('initials3') === null ? localStorage.setItem('initials3', 0) : null

    //SETS VALUES FOR HIGHSCORE4 
    localStorage.getItem('score4') === null ? localStorage.setItem('score4', 0) : null
    localStorage.getItem('time4') === null || localStorage.getItem('time4') < 0 ? localStorage.setItem('time4', 0) : null
    localStorage.getItem('initials4') === null ? localStorage.setItem('initials4', 0) : null

    //SETS VALUES FOR HIGHSCORE5 
    localStorage.getItem('score5') === null ? localStorage.setItem('score5', 0) : null
    localStorage.getItem('time5') === null || localStorage.getItem('time5') < 0 ? localStorage.setItem('time5', 0) : null
    localStorage.getItem('initials5') === null ? localStorage.setItem('initials5', 0) : null

    // DOM VARIABLES
    let initialsInput = document.getElementById("initials-input")
    let initials = initialsInput.value
    playerTime = endTime
    let statusElement = document.getElementById("status-element")
    let highscoreElm1 = document.getElementById("highscore1")
    let highscoreElm2 = document.getElementById("highscore2")
    let highscoreElm3 = document.getElementById("highscore3")
    let highscoreElm4 = document.getElementById("highscore4")
    let highscoreElm5 = document.getElementById("highscore5")

    if(localStorage.getItem('scoreEntered') === 'no'){ // this line only allows you to submit a highscore once for each playthrough
        if(endScore === 0){
            statusElement.innerHTML = "You can't submit a score when you got zero correct."
        }else if(initials === ''){
            statusElement.innerHTML = "Please enter a name/initials."
        }else{
            console.log('checkpoint 1')
            localStorage.setItem('scoreEntered', 'yes') //this is so the score can only be entered once every time you play the game
            if(score1 <= endScore){ // this line checks the score, then the next if statement checks the time, for each highscore
                if(time1 < playerTime / 10 || time1 === 0){
                    // RESETS THE HIGHSCORE LIST, NEEDS REFACTORING
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', time4)
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${time5} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', time3)
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${time4} seconds`

                    localStorage.setItem('score3', localStorage.getItem('score2'))
                    localStorage.setItem('time3', time2)
                    localStorage.setItem('initials3', localStorage.getItem('initials2'))
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${time3} seconds`

                    localStorage.setItem('score2', localStorage.getItem('score1'))
                    localStorage.setItem('time2', time1)
                    localStorage.setItem('initials2', localStorage.getItem('initials1'))
                    highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${time2} seconds`

                    localStorage.setItem('score1', endScore)
                    localStorage.setItem('time1', playerTime / 10)
                    localStorage.setItem('initials1', initials)
                    highscoreElm1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${time1} seconds`
                }
            }else if(score2 <= endScore){
                if(time2 < playerTime / 10 || time2 === 0){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', time4)
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${time5} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', time3)
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${time4} seconds`

                    localStorage.setItem('score3', localStorage.getItem('score2'))
                    localStorage.setItem('time3', time2)
                    localStorage.setItem('initials3', localStorage.getItem('initials2'))
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${time3} seconds`

                    localStorage.setItem('score2', endScore)
                    localStorage.setItem('time2', playerTime / 10)
                    localStorage.setItem('initials2', initials)
                    highscoreElm2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${time2} seconds`
                }
            }else if(score3 <= endScore){
                if(time3 < playerTime / 10 || time3 === 0){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', time4)
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${time5} seconds`

                    localStorage.setItem('score4', localStorage.getItem('score3'))
                    localStorage.setItem('time4', time3)
                    localStorage.setItem('initials4', localStorage.getItem('initials3'))
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${time4} seconds`

                    localStorage.setItem('score3', endScore)
                    localStorage.setItem('time3', playerTime / 10)
                    localStorage.setItem('initials3', initials)
                    highscoreElm3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${time3} seconds`
                }
            }else if(score4 <= endScore){
                if(time4 < playerTime / 10 || time4 === 0){
                    localStorage.setItem('score5', localStorage.getItem('score4'))
                    localStorage.setItem('time5', time4)
                    localStorage.setItem('initials5', localStorage.getItem('initials4'))
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${time5} seconds`
                    
                    localStorage.setItem('score4', endScore)
                    localStorage.setItem('time4', playerTime / 10)
                    localStorage.setItem('initials4', initials)
                    highscoreElm4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${time4} seconds`
                }
            }
            else if(score5 <= endScore){
                if(time5 < playerTime / 10 || time5 === 0){
                    localStorage.setItem('score5', endScore)
                    localStorage.setItem('time5', playerTime / 10)
                    localStorage.setItem('initials5', initials)
                    highscoreElm5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${time5} seconds`
                }
            }
        }

        updateScores()
    }
}