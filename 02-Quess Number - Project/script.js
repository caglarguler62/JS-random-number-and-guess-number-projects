let randomNumber = Math.ceil(Math.random() * 25)

let checkButton = document.querySelector('button')

let guess = document.querySelector('.guess')

let point = 10
let highScore = 0
checkButton.onclick = () =>{
  let number = document.querySelector('.number')
  let message = document.querySelector('.message')
  if(point >= 1){
    if(randomNumber < guess.value * 1){
      message.innerHTML = "it is high"
      point--;
   } else if (randomNumber > guess.value * 1){
     message.innerHTML = "it is low"
     point--;
   } else if (randomNumber === guess.value * 1){
     number.innerHTML = randomNumber;
     message.innerHTML = 'You are winner';
     document.querySelector('body').style.backgroundColor = "green";
   } else {
     message.innerHTML = 'Enter valid value'
   }
   document.querySelector('.score').innerHTML = point
  }
  else if( point === 0){
    message.innerHTML = 'you are loser'
  }
}

let target = document.querySelector('.again')

target.addEventListener('click', function(){
  random = Math.floor(Math.random() * 25) + 1;
  point=  document.querySelector('.guess').value = document.querySelector('.score').innerHTML = 10;
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.message').innerHTML = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  if(point > highScore) {
    highScore = point;
    document.querySelector(".highscore").innerHTML = highScore;
  }

})