let trials = 5;

let highscore = 0;
let score =  0;


let number = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click',function(){
let guess = Number(document.querySelector('.guess').value)

if(!guess){
    if(trials>0 && highscore>=0){
        document.querySelector('.message').textContent = 'no valid guess';
        document.querySelector('.trials').textContent = trials;
        trials--;   
        
    }

}
else if(guess< number){
    if(trials>0 && highscore>=0)
    document.querySelector('.trials').textContent = trials;
    trials--;
    document.querySelector('.message').textContent = 'too Low...';
  document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
  
   

}

else if(guess>number){
    if(trials>0 && highscore>=0){
        document.querySelector('.trials').textContent = trials;
    trials--;
    document.querySelector('.message').textContent = 'too High...';
      document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';

   
    }
}
else if(guess === number){
    if(trials>0 && highscore>=0)
    
    document.querySelector('.score').textContent = score;
    score = score + 1;
    document.querySelector('.message').textContent = 'correct guess...';
  document.querySelector('.highscore').textContent = highscore;
    highscore++;
   document.querySelector('.trials').textContent = trials;
    trials++;
    
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';
   
    
    
}
else if(guess !== number){
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
}
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 0;
  
       
}) 