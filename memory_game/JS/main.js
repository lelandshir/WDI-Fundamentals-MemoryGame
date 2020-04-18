const cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("Great, you found a match.");
} else {
	alert("Sorry, please try again.");
	}
};

function flipCard() {
	const cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2)
		checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	
};

function createBoard() {
	const cardTable = document.getElementById('game-board');
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	cardTable.appendChild(cardElement);
	}
};



createBoard();