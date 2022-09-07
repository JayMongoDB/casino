var dealerSum =0;
var yourSum =0;

var dealerAceCount =0;
var yourAceCount=0;

var hidden;
var deck;
var hitted =0;
var canHit = true; //allows the player to draw while yourSum is <= 21


window.onload = function(){
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck()
{
    let values =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C","D","H","S"]
    deck = [];

    for (let i =0;i <types.length;i++){
     for (let j =0; j<values.length;j++)
     {
       deck.push(values[j] + "-" +types[i]);}
     }
    
}

function shuffleDeck(){
     for (let i =0; i < deck.length;i++)
     {
          let j = Math.floor(Math.random()*deck.length)
          let temp =deck[i];
          deck[i]=deck[j];
          deck[j] = temp;
     }
     
     console.log(deck);
}

function startGame(){

hidden = deck.pop();
dealerSum += getValue(hidden);
dealerAceCount += checkAce(hidden);



 let cardImg = document.createElement("img");
 let card = deck.pop();
 cardImg.src = "./cards/"+card + ".png"
 dealerSum += getValue(card);
 dealerAceCount += checkAce(card);
 document.getElementById("dealer-cards").append(cardImg);


console.log(dealerSum);

for (let i=0; i <2;i++){
  let cardImg = document.createElement("img");
  let card = deck.pop();
  cardImg.src = "./cards/"+card + ".png"
  yourSum += getValue(card);
  yourAceCount += checkAce(card);
  document.getElementById("your-cards").append(cardImg);

}
if(yourSum==21)
{
stay();  
}

document.getElementById("hit").addEventListener("click",hit);
document.getElementById("stay").addEventListener("click",stay);

}

function stay()
{

yourSum = reduceAce(yourSum,yourAceCount);
dealerSum = reduceAce(dealerSum,dealerAceCount);
 canHit = false;


 while(dealerSum < 17)
 {
 let cardImg = document.createElement("img");
 let card = deck.pop();
 cardImg.src = "./cards/"+card + ".png"
 dealerSum += getValue(card);
 dealerAceCount += checkAce(card);
 document.getElementById("dealer-cards").append(cardImg);
 dealerSum = reduceAce(dealerSum,dealerAceCount);
 }
 
 if (yourSum > 21)
 {
  message = "You Lose!";
 }
 else if (dealerSum >21)
 {
  message ="Dealer busts, you win!";
 }
 else if (yourSum==dealerSum)
 {
 message = "Push!"; 
 }
 else if(yourSum==21 && dealerSum !=21 && hitted==0)
 {
 message = "BLACKJACK!....YOU WIN 3/2 OF YOUR WAGER.." 
 }
 else if (yourSum > dealerSum)
 {
 message = "You win!"; 
 }
 else if (yourSum < dealerSum)
 {
 message = "You lose!"; 
 }

 document.getElementById("hidden").src = "./cards/"+hidden+".png";
 document.getElementById("dealer-sum").innerText = dealerSum;
 document.getElementById("your-sum").innerText = yourSum;
 document.getElementById("results").innerText = message;
 return;

 }

function hit(){

hitted +=1;

if(!canHit)
{
  return;
}

yourSum=reduceAce(yourSum,yourAceCount);

if(yourSum<21){
let cardImg = document.createElement("img");
let card = deck.pop();
cardImg.src = "./cards/"+card + ".png"
yourSum += getValue(card);
yourAceCount += checkAce(card);
document.getElementById("your-cards").append(cardImg);
yourSum=reduceAce(yourSum,yourAceCount);

if(yourSum==21)
{
stay();
}

else if(yourSum> 21)
{
  message=yourSum;
  canHit = false
   
    message = "You busted, you lose!";
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
    document.getElementById("hidden").src = "./cards/"+hidden+".png";
    document.getElementById('stay').disabled = true;
  
    return;

}

}

}

function getValue(card){

    let data = card.split("-")
    let value = data[0];
    
    if (isNaN(value)){
      if(value =='A'){
        return 11;
      }
      return 10;

    }
return parseInt(value);

}

function checkAce(card)
{
if(card[0] =='A')
 return 1;
else
 return 0;

}

function reduceAce(playerSum,playerAceCount){

   while (playerSum > 21 && playerAceCount >0){

    playerSum -=10;

    playerAceCount -=1;

   }
   return playerSum;
}

function refreshPage(){
  window.location.reload();
} 

