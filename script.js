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

    let winner;

    if(playerSelection == computerSelection) console.log('Tie');

    if(playerSelection == 'rock'){
        if(computerSelection == 'paper') winner = 'cmp';
        if(computerSelection == 'scissors') winner = 'ply';
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') winner = 'cmp';
        if(computerSelection == 'rock') winner = 'ply';
    }
    if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') winner = 'cmp';
        if(computerSelection == 'paper') winner = 'ply';
    }

    updateWinner(winner);
}

const plyScore = document.querySelector('.plyScore');
const cmpScore = document.querySelector('.cmpScore');

function updateWinner(winner){
    winner == 'ply' ? plyScore.textContent++ : cmpScore.textContent++
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