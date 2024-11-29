function getComputerChoice(){
    const choice = ['rock' , 'paper' , 'scissors'];
    
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,ComputerSelection){
    const playerSelectionCmp = playerSelection.toLowerCase();
    
    choices.textContent = `Your choice : ${playerSelection} , Computer Choice : ${ComputerSelection} `
    
    if (playerSelectionCmp === 'rock'){

        return rockChoice(ComputerSelection)
    }

    else if(playerSelectionCmp === 'paper'){
        return paperChoice(ComputerSelection)
    }

    else if(playerSelectionCmp === 'scissors'){
        return scissorsChoice(ComputerSelection)
    }
    else{
        return 'wrong input'
    }

    

}

function rockChoice(ComputerSelection){
    if(ComputerSelection === 'rock'){
        return ['draw!',1]
    }
    if(ComputerSelection === 'scissors'){
        return ['You won!, Rock crushes scissors!',2]
    }
    else{
        return ['you lost! , paper slips rock!',0]
    }
}

function paperChoice(ComputerSelection){
    if(ComputerSelection === 'paper'){
        return ['draw!',1]
    }
    else if(ComputerSelection === 'rock'){
        return ['You won! , paper slips rock!',2]
    }
    else{
        return ['you lost! , scissors cut paper!',0]
    }
}

function scissorsChoice(ComputerSelection){
    if(ComputerSelection === 'scissors'){
        return ['draw!',1]

    }
    else if(ComputerSelection === 'paper'){
        return ['You won! , Scissors cuts paper',2]
    }
    else{
        return ['You lost! , rock crushed scissors',0]
    }
}

function gameover(Winner){
    buttons.childNodes.forEach(btn =>{
        btn.disabled = true
    })
    if(Winner == 'P'){
        choices.textContent = 'You won WOOHOOO';
    }
    else{
        choices.textContent = 'You lost booooo'
    }


    let btn = document.createElement('button');
    btn.textContent = 'Play Again Maybe?'
    btn.classList.toggle('remove')
    startNode.appendChild(btn)
    btn.addEventListener('click',(e)=>{
        buttons.childNodes.forEach(btn =>{
            btn.disabled = false
        })
        text.textContent = ''
        choices.textContent = ''
        player.textContent = '0'
        computer.textContent = '0'
        startNode.removeChild(btn)
    })


}


function game(PlayersChoice){
   
        let arr =  playRound(PlayersChoice,getComputerChoice());
        text.textContent = arr[0];
        let score = arr[1]
        if(score === 2){
            let playerScore = Number(player.textContent)
            player.textContent = playerScore+1
            if(player.textContent == '5'){
                gameover('P')
            }
        }
        else if(score == 0){
            let compScore = Number(computer.textContent)
            computer.textContent = compScore+1
            if(computer.textContent == '5'){
                gameover('C')
            }
        }
        
    
    
}



const buttons = document.querySelector('.game');
const text = document.querySelector('.text');
const choices = document.querySelector('.choices')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const message = document.querySelector('.message')
const container2 = document.querySelector('.container-2')
const container1 = document.querySelector('.container-1')
const instructionContainer = document.querySelector('.instructions-container')
const footer = document.querySelector('.footer')
let startNode = document.querySelector('.start')


let container1Children = Array.from(container1.children)
let instructionContainerChildren = Array.from(instructionContainer.children)
let runCount = 0;   
container1Children.forEach(child =>{
    
    child.classList.toggle('hidden')
    
})
instructionContainerChildren.forEach(child =>{
    child.classList.toggle('hidden')
})



 
function addToPage() {
    
    console.log(runCount)
    container1Children[runCount].classList.toggle('hidden')
    runCount++;
    if(runCount  >= container1Children.length) clearInterval(timerId);

    
}

let timerId = setInterval(addToPage, 1000); 


let myRunCount = 0

function addToPageIns() {
    
    console.log(myRunCount)
    instructionContainerChildren[myRunCount].classList.toggle('hidden')
    myRunCount++;
    if(myRunCount  >= instructionContainerChildren.length) clearInterval(timerIdIns);

    
}

let timerIdIns = setInterval(addToPageIns, 1000); 


startNode= container2.removeChild(startNode);


buttons.addEventListener('click', e =>{
    e.target.id === 'rock' ? game('rock') : e.target.id === 'paper' ? game('paper') : e.target.id === 'scissors' ? game('scissors') : '';
    
});

document.addEventListener('keydown',(e)=>{
    if(e.key = 'enter'){
        document.body.removeChild(container1)
        document.body.insertBefore(startNode , footer)
        
    }
},{once:true})


const clickable = document.querySelector('.clickable')
document.addEventListener('click',e=>{

    document.body.removeChild(container1)
    document.body.insertBefore(startNode , footer)
        
},{once:true})

