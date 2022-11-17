// UPDATE SCORES FUNCTION THAT SIMPLY KEEPS THE HIGHSCORES ON THE PAGE UP TO DATE
export function updateScores(){
    // GETS HTML ELEMENTS FROM PAGE
    let highscore1 = document.getElementById("highscore1")
    let highscore2 = document.getElementById("highscore2")
    let highscore3 = document.getElementById("highscore3")
    let highscore4 = document.getElementById("highscore4")
    let highscore5 = document.getElementById("highscore5")

    // IF THERE IS A HIGHSCORE ALREADY, IT WILL SET THE ELEMENT TO THAT SCORE, OTHERWISE IT DISPLAYS THAT IT HAS NO SCORE YET
    if(localStorage.getItem('score1') > 0){
        highscore1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time left: ${localStorage.getItem('time1')} seconds`
    }else{highscore1.innerHTML = "#1 - No score yet"}

    if(localStorage.getItem('score2') > 0){
        highscore2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time left: ${localStorage.getItem('time2')} seconds`
    }else{highscore2.innerHTML = "#2 - No score yet"}

    if(localStorage.getItem('score3') > 0){
        highscore3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time left: ${localStorage.getItem('time3')} seconds`
    }else{highscore3.innerHTML = "#3 - No score yet"}

    if(localStorage.getItem('score4') > 0){
        highscore4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time left: ${localStorage.getItem('time4')} seconds`
    }else{highscore4.innerHTML = "#4 - No score yet"}

    if(localStorage.getItem('score5') > 0){
        highscore5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time left: ${localStorage.getItem('time5')} seconds`
    }else{highscore5.innerHTML = "#5 - No score yet"}
}