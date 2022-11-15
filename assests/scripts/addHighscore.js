//IMPORTS
import { endScore, endTime } from "./main.js"
// localStorage.setItem('score1', 0)
// localStorage.setItem('time1', 0)

export function addHighscore(){
    console.log('score ' , endScore)
    console.log('time ' , endTime / 10)
    localStorage.getItem('score1') === null ? localStorage.setItem('score1', 0) : null
    localStorage.getItem('time1') === null ? localStorage.setItem('time1', 0) : null
    localStorage.getItem('initials1') === null ? localStorage.setItem('initials1', 0) : null
    let initialsInput = document.getElementById("initials-input")
    let initials = initialsInput.value
    let highscoreElm1 = document.getElementById("highscore1")
    let highscoreElm2 = document.getElementById("highscore2")
    let highscoreElm3 = document.getElementById("highscore3")
    let highscoreElm4 = document.getElementById("highscore4")
    let highscoreElm5 = document.getElementById("highscore5")
    let score1 = localStorage.getItem('score1')

    if(localStorage.getItem('scoreEntered') === 'no'){
        localStorage.setItem('scoreEntered', 'yes') //this is so the score can only be entered once every time you play the game
        if(score1 <= endScore){
            console.log('checkpoint1')
            if(localStorage.getItem('time1') < endTime / 10){
                localStorage.setItem('score1', endScore)
                localStorage.setItem('time1', endTime / 10)
                localStorage.setItem('initials1', initials)
                highscoreElm1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${localStorage.getItem('time1')} seconds`
            }
        }
    }
    console.log(localStorage.getItem('score1'), localStorage.getItem('time1'), localStorage.getItem('initials1'))
}