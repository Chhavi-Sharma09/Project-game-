
let againbtn=document.querySelector(".again");
let guessnumber =document.querySelector(".number");
let guessvalue = document.querySelector(".guess");
let checkbtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gamescore = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let score =20;
let randomno=Math.trunc(Math.random()*20)+1;
console.log(randomno);

// click event for check 
checkbtn.addEventListener("click", ()=>{
  // 1.want input value
  let val = Number(guessvalue.value);
     // 2. check if input is empty
  if(!val){
 // 2.1 show mssg enter a value
 msg.textContent ="Enter a value!";
  }
  // 3. if random value is same as guess
  else if(val===randomno){
// 3.1 change bg color to green
document.body.style.backgroundColor= "green";
// 3.2 instead of ? put random value 
guessnumber.textContent = randomno;

// 3.3 in mssg show correct num 
msg.textContent = "You guessed it!";
// 3.4.check score is greater than highscore or not
if(score>highscore){
  //3.4.1 update highscore value
  highscore.textContent = score;
}
  }
  //4. if input value is less than random 
  else if(val < randomno){
    //4.1 show mssg too low 
    msg.textContent = "too low";
    //4.2 decrement score by 1
    score--;
  //4.3 update the dom value of score
  gamescore.textContent = score;
  }//5 if input value is greater than random 
  else if(val >randomno){
//5.1 show mssg too high
msg.textContent = "too high";
//5.2 decrement score by 1
score--;
   
//5.3 update the dom value of score
gamescore.textContent = score;
}
});
//functionality for again button 
againbtn.addEventListener("click", ()=>{
// 1. change bg color to #222
document.body.style.backgroundColor = "#222";
//2. change mssg to Start guessing...
msg.textContent = "Start guessing...";
//3. at the place of ? put ? again
guessnumber.textContent = "?";
//4. update to score to 20
score=20;
//5.update in dom also 
gamescore.textContent = score;
//6. generate a random number again
randomno =Math.trunc(Math.random()*20)+1;
console.log(randomno);

})









 











