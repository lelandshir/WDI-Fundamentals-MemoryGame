const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("Great, you found a match.");
} else {
	console.log("Sorry, please try again.");
}
};

function flipCard(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
};

flipCard(0);
flipCard(2);






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