const getUserChoice=userInput=>{
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput=='scissors' ||userInput=='bomb') {
  return userInput;
} 
  else {
  console.log('Error!');
}
}
//console.log(getUserChoice('paper'));

var getComputerChoice=()=>{
  randomNumber=Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
      break;
  case 1:
    return 'paper';
        break;
  case 2:
    return 'scissors';  
        break;
}
} 
//console.log(getComputerChoice());

const determineWinner=(userChoice,computerChoice) =>{
  if(userChoice===computerChoice)
   { return 'The game is a tie!';}
  
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'the computer won';
    }
    else{
      return 'user won'
    }
      
  }
  
   if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'the computer won';
    }
    else{
      return 'user won'
    }
      
  }
  
   if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'the computer won';
    }
    else{
      return 'user won'
    }   
  }
   if(userChoice==='bomb')
    return 'the user won';
 
}
const playGame=()=>{
  const userChoice=getUserChoice('bomb');
  const computerChoice=getComputerChoice();
  
 
  console.log(`The users input is ${userChoice}.\nThe computers input is ${computerChoice}`)
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();

