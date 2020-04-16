console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped a " + cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped a " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log(true);
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("Great, you found a match.");
} else {
	alert("Sorry, please try again.");
};




//Memory Card Game Logic 
//User flips a card a card, is told what card they flipped --> "User flipped queen (or king)"
//The card that the user has flipped gets added to the cardsInPlay array
//User flips a second card, is told what card they flipped once again---"User flipped king (or queen)"
//The csecond card that the user flipped gets added to the cardInPlay array once again
//When the cardInPlay array length is equal to 2, we check to see if those two cards are equal
//if those cards are equal, "You found a match!"
//otherwise, "Sorry Try Again!"






//  function checkForMatch() {
//   //if (cardsInPlay.length == 2) {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//           alert("You found a match!");
 
//       } else {
//           alert("Sorry, try again");
//         };

//   };
// function flipCard(cardId) {
// 	console.log("User flipped " + cards[cardId]);
// 	cardsInPlay.push(cards[cardId]);
	

// if(cardsInPlay.length === 2 && cards[0] === cards[2]) {
// 	alert("You Found A Match!");
// } else {
// 	alert("Sorry, try again!");
// } return;
// };