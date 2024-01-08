const opts = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    //return 'Rock' || 'Paper' || 'Scissors'
    return opts[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    //case insensitive
    //if tie call playRound()
    console.log(`Player chooses: ${playerSelection}`)
    console.log(`Computer chooses: ${computerSelection}`)
    if(playerSelection == computerSelection) return;

    if(playerSelection == 'rock'){
        if(computerSelection == 'paper') return 'paper';
        if(computerSelection == 'scissors') return 'rock';
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') return 'scissors';
        if(computerSelection == 'rock') return 'paper';
    }
    if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') return 'rock';
        if(computerSelection == 'paper') return 'paper';
    }
    //return 'Winner' || 'Loser'
}

function game(){
    //best of 5
    //prompt() player input
    let plyScore = 0;
    let cmpScore = 0;
    let opt;
    let winner;
    while(plyScore != 3 && cmpScore != 3){
        opt = prompt('Choose your weapon; Rock, Paper, Scissors:').toLowerCase();
        while(!opts.includes(opt)){
            opt = prompt('Choose your weapon AGAIN; Rock, Paper, Scissors:').toLowerCase();
        }
        winner = playRound(opt, getComputerChoice());
        if(winner == undefined) continue;
        winner == opt ? ++plyScore : ++cmpScore;
        console.log(`Player Score: ${plyScore}`);
        console.log(`Computer Score: ${cmpScore}`);
    }

    return (plyScore == 3) ? 'Player wins' : 'Computer wins';
}

const weapon = document.querySelector('.weapon');

weapon.addEventListener('click', (e)=>{
    let target = e.target.id;

    if(target !== ''){
        playRound(target, getComputerChoice());
    }
})