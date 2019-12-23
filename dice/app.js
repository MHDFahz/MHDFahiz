var user1,user2;
var x;
var ttscore,prescore;
var dice;
var game;
var gamerules

gamerules=alert('GAME RULES: The game has 2 players, playing in rounds.In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score BUT, if the player rolls a 1, all his ROUND score gets lost. After that, its the next players turn.The player can choose to Hold, which means that his ROUND score gets added to his TOTAL score. After that, its the next players turn.The first player to reach 100 points on TOTAL score wins the game');

user1=prompt('Enter name of user 1');
user2=prompt('Enter name of user 2');

play();

function play(){
	game=true;
	prescore=0;
	ttscore=[0,0];
	x=0;

	document.querySelector('.dice');
	document.getElementById('name-0').textContent=user1;
	document.getElementById('name-1').textContent=user2;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;	
	document.getElementById('score-0').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.querySelector('.player-0-panel').classList.add('active');
}

function nxtplyr(){
	prescore=0;
	x===0?x=1:x=0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-0-panel').classList.toggle('active');  
	document.querySelector('.player-1-panel').classList.toggle('active');  
	document.querySelector('.dice').style.display='none';
}
 
document.querySelector('.btn-roll').addEventListener('click',function(){
	if(game){
	dice=Math.floor(Math.random()*6)+1;


	var diceImg=document.querySelector('.dice');
	diceImg.style.display='block';
	diceImg.src='dice-'+dice+'.png';
	if(dice!==1){
		prescore+=dice;
		document.querySelector('#current-'+x).textContent=prescore;
	}
	else{
		
		nxtplyr();
	}
	}
	
});

	

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(game)
	{
	ttscore[x]+=prescore;
	document.querySelector('#score-'+x).textContent=ttscore[x];
	var input=document.querySelector('#score-'+x).value;
	var winningScore=100;
	if(input){
		winningScore=input;
	}
	else{
		winningScore=100;
	}

	
	if(ttscore[x]>=winningScore)
	{
		
		document.querySelector('#name-'+x).textContent='Winner!'
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+x+'-panel').classList.add('winner');
		document.querySelector('.player-'+x+'-panel').classList.remove('active');
		game=false; 
	}
	else
		nxtplyr();
	}
});



document.querySelector('.btn-new').addEventListener('click',function(){
	play();
});

