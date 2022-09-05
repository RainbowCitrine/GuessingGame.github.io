/*
console.log(document.querySelector('.message').textContent);  //Reading the element

document.querySelector('.message').textContent = 'Corret Answer! 💕' //Changed the text of the element

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10; 

 
document.querySelector('.guess').value = 23

*/ 

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Generates a random Number 
let score = 20; 
let highscore = 0;  
document.querySelector('.btn-ans').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); 

    if(!guess)
    {
        document.querySelector('.message').textContent = '🙈 Please enter a Number! ERROR!'
    }
    else if(guess == secretNumber)
    {
        document.querySelector('.message').textContent = 'Corret Answer! 💕' 
        score++; 
        document.querySelector('.score').textContent = score; 
        
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30 rem'; 
        document.querySelector('.number').textContent = secretNumber; 

        if(score > highscore)
        {
            highscore = score; 
            document.querySelector('.highscore').textContent = highscore; 
        }

    }
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = '🥵 Too High!';
            score--; 
            document.querySelector('.score').textContent = score;
        }
        else if(score <= 1)
        {
            score--; 
            document.querySelector('.message').textContent = '💀 GameOver!';
            document.querySelector('.score').textContent = '0'; 
        }
    }
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = '🥶 Too Low!'
            score--; 
            document.querySelector('.score').textContent = score; 
        }
        else if(score <= 1)
        {
            score--; 
            document.querySelector('.message').textContent = '💀 GameOver!';
            document.querySelector('.score').textContent = '0'; 
        }
    }
});

document.querySelector('.btn_again').addEventListener('click', function(){
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Playing...';
    document.querySelector('body').style.backgroundColor = '#FFB6C1'; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ''; //Btns use value or inputs use value not text content
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').style.width = '15 rem'; 
}); 
