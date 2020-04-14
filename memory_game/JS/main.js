//arrays
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
//variables for alerts below
const noMatch = "Sorry, try again.";
const match = "You found a match!";
//variables for cards below
const cardOne = cards[0];
const cardTwo = cards[2];
//push
cardsInPlay.push(cardOne, cardTwo);
//console.logs
console.log("User flipped a " + cardOne);
console.log("User flipped a " + cardTwo);
//if else statement
if(cardsInPlay.length === 2) {
	console.log("true");
} if(cards[0] === cards[0]) {
	alert(match);
} else {
	alert(noMatch);
}