'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores,currentScore,activePlayer,state

const init=function(){
    score0.textContent=0;
    score1.textContent=0;

    diceEl.classList.add('hidden');

    scores=[0,0]; 
    currentScore = 0;
    activePlayer = 0;
    state =true;

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active'); 
    diceEl.classList.remove('hidden');
    currentScore=0;
    document.getElementById(`current--0`).textContent=currentScore;
    document.getElementById(`current--1`).textContent=currentScore;
    
}

const diceEl = document.querySelector('.dice');



const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore =0;
    activePlayer = activePlayer===0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentScore=0;
}
init();

btnRoll.addEventListener('click',function(){
    if(state){
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice!==1){
        currentScore=currentScore+dice;

        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        //current0El.textContent=currentScore;
    }else{

        switchPlayer();
    }
}
});

btnHold.addEventListener('click',function(){
    if(state){
    scores[activePlayer] = scores[activePlayer]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=100){
        state=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
        diceEl.classList.add('hidden');
    }
    else{

    switchPlayer();
    }
}
});

btnNew.addEventListener('click',init);

