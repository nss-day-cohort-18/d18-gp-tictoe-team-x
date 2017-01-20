// Assigning Variable to Card Element
var card = document.getElementsByClassName("card");

// Turn Counter
var turn = 0;

// Adding Event Listeners
for (i = 0; i < card.length; i++) {
	card.item(i).addEventListener("click", handleClass);
}

function handleClass(event) {
	turn++;
	console.log(this);
	if (turn%2 !== 0) {
		this.classList.add("x");
	} else {
		this.classList.add("o");
	}
}

/* var winningCombo = [
    [1, 4, 7], x
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
]; */
function winloseLogic ()
	// grab Elements and name 
	var c1 = document.getElementById("1");
	var c2 = document.getElementById("2");
	var c3 = document.getElementById("3");
	var c4 = document.getElementById("4");
	var c5 = document.getElementById("5");
	var c6 = document.getElementById("6");
	var c7 = document.getElementById("7");
	var c8 = document.getElementById("8");
	var c9 = document.getElementById("9");
	var x = "x";
	var o = "o;"

// X 
	if (c1.classList.contains(x) && c4.classList.contains(x) && c7.classList.contains(x)) {
		alert("you won");
	}
