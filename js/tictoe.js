// Assigning Variable to Card Element
var card = document.getElementsByClassName("card");

// Turn Counter
var turn = 0;

// Adding Event Listeners
for (i = 0; i < card.length; i++) {
	card.item(i).addEventListener("click", handleClass);
}

function handleClass(event) {
}