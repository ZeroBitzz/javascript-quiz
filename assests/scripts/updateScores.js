export function updateScores(){
    let highscore1 = document.getElementById("highscore1")
    let highscore2 = document.getElementById("highscore2")
    let highscore3 = document.getElementById("highscore3")
    let highscore4 = document.getElementById("highscore4")
    let highscore5 = document.getElementById("highscore5")

    if(localStorage.getItem('score1') > 0){
        highscore1.innerHTML = `#1 - ${localStorage.getItem('initials1')} / score: ${localStorage.getItem('score1')} / time: ${localStorage.getItem('time1')} seconds`
    }
}