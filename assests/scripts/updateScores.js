export function updateScores(){
    let highscore1 = document.getElementById("highscore1")
    let highscore2 = document.getElementById("highscore2")
    let highscore3 = document.getElementById("highscore3")
    let highscore4 = document.getElementById("highscore4")
    let highscore5 = document.getElementById("highscore5")

    if(localStorage.getItem('score1') > 0){
        highscore1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${localStorage.getItem('time1')} seconds`
        highscore2.innerHTML = `#2 - ${localStorage.getItem('initials2')} / score: ${localStorage.getItem('score2')} / time: ${localStorage.getItem('time2')} seconds`
        highscore3.innerHTML = `#3 - ${localStorage.getItem('initials3')} / score: ${localStorage.getItem('score3')} / time: ${localStorage.getItem('time3')} seconds`
        highscore4.innerHTML = `#4 - ${localStorage.getItem('initials4')} / score: ${localStorage.getItem('score4')} / time: ${localStorage.getItem('time4')} seconds`
        highscore5.innerHTML = `#5 - ${localStorage.getItem('initials5')} / score: ${localStorage.getItem('score5')} / time: ${localStorage.getItem('time5')} seconds`
    }
}