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
	if (this.classList.contains("filled")) {
		alert("THIS SPACE IS TAKEN! CLICK SOMEWHERE ELSE!!!");
		turn--;
	}
	else if (turn%2 !== 0) {
		this.classList.add("x");
		this.classList.add("filled");
	} else {
		this.classList.add("o");
		this.classList.add("filled");
	}
	winloseLogic();
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


function winloseLogic() {
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
	var o = "o";

// X 
	if (c1.classList.contains(x) && c4.classList.contains(x) && c7.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c2.classList.contains(x) && c5.classList.contains(x) && c8.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c3.classList.contains(x) && c6.classList.contains(x) && c9.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c1.classList.contains(x) && c2.classList.contains(x) && c3.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c4.classList.contains(x) && c5.classList.contains(x) && c6.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c7.classList.contains(x) && c8.classList.contains(x) && c9.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c1.classList.contains(x) && c5.classList.contains(x) && c9.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}
	if (c3.classList.contains(x) && c5.classList.contains(x) && c7.classList.contains(x)) {
		alert("X You Won!");
		window.location.reload();
	}

// o check
	if (c1.classList.contains(o) && c4.classList.contains(o) && c7.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c2.classList.contains(o) && c5.classList.contains(o) && c8.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c3.classList.contains(o) && c6.classList.contains(o) && c9.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c1.classList.contains(o) && c2.classList.contains(o) && c3.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c4.classList.contains(o) && c5.classList.contains(o) && c6.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c7.classList.contains(o) && c8.classList.contains(o) && c9.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c1.classList.contains(o) && c5.classList.contains(o) && c9.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}
	if (c3.classList.contains(o) && c5.classList.contains(o) && c7.classList.contains(o)) {
		alert("O You Won!");
		window.location.reload();
	}

	if ( turn == 9 ) {
		alert("It is a Tie!");
	}

}

