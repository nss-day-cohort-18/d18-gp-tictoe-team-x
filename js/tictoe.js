// Assigning Variable to Elements
var card = document.getElementsByClassName("card");
var playView = document.getElementById("playView");
var playButton = document.getElementById("playButton")
var singleButton = document.getElementById("singleButton")
var multiButton = document.getElementById("multiButton")
var menu = document.getElementById("menu")

// Turn Counter
var turn = 0;

// Adding Event Listeners


singleButton.addEventListener("click", handleSingle)
multiButton.addEventListener("click", handleMulti)


//Multiplayer function
function handleMulti (e) {
	playView.classList.remove("hidden")
	menu.classList.add("hidden")
	for (i = 0; i < card.length; i++) {
		card.item(i).addEventListener("click", handleClass);
	}
	// Handle Functions
	function handleClass(event) {
		turn++;
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
		}
		else if (c2.classList.contains(x) && c5.classList.contains(x) && c8.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c3.classList.contains(x) && c6.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c1.classList.contains(x) && c2.classList.contains(x) && c3.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c4.classList.contains(x) && c5.classList.contains(x) && c6.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c7.classList.contains(x) && c8.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c1.classList.contains(x) && c5.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c3.classList.contains(x) && c5.classList.contains(x) && c7.classList.contains(x)) {
			alert("X You Won!");
		}

	// o check
		else if (c1.classList.contains(o) && c4.classList.contains(o) && c7.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c2.classList.contains(o) && c5.classList.contains(o) && c8.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c3.classList.contains(o) && c6.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c1.classList.contains(o) && c2.classList.contains(o) && c3.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c4.classList.contains(o) && c5.classList.contains(o) && c6.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c7.classList.contains(o) && c8.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c1.classList.contains(o) && c5.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c3.classList.contains(o) && c5.classList.contains(o) && c7.classList.contains(o)) {
			alert("O You Won!");
		}

		else if ( turn == 9 ) {
			alert("It is a Tie!");
		}

	}
	//Play again reload
	playButton.addEventListener("click", handleReload)
	function handleReload (e) {
		window.location.reload();
	}
}


//Singleplayer functions
function handleSingle (e) {
	playView.classList.remove("hidden")
	menu.classList.add("hidden")
	for (i = 0; i < card.length; i++) {
		card.item(i).addEventListener("click", handleClass);
	}
	// Handle Functions
	function handleClass(event) {
		turn++;
		if (this.classList.contains("filled")) {
			alert("THIS SPACE IS TAKEN! CLICK SOMEWHERE ELSE!!!");
			turn--;
		}
		this.classList.add("x");
		this.classList.add("filled");
		winloseLogic();
		compTurn();
		
	}



	//AI random function
	function compTurn () {
		var spaceNum = Math.floor((Math.random() * 9) + 1);
		var compSpace = document.getElementById(spaceNum.toString())
		if (compSpace.classList.contains("filled")) {
			compTurn();
		} else {
			compSpace.classList.add("o")
			compSpace.classList.add("filled")
			turn++;
		}
	}


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
		}
		else if (c2.classList.contains(x) && c5.classList.contains(x) && c8.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c3.classList.contains(x) && c6.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c1.classList.contains(x) && c2.classList.contains(x) && c3.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c4.classList.contains(x) && c5.classList.contains(x) && c6.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c7.classList.contains(x) && c8.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c1.classList.contains(x) && c5.classList.contains(x) && c9.classList.contains(x)) {
			alert("X You Won!");
		}
		else if (c3.classList.contains(x) && c5.classList.contains(x) && c7.classList.contains(x)) {
			alert("X You Won!");
		}

	// o check
		else if (c1.classList.contains(o) && c4.classList.contains(o) && c7.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c2.classList.contains(o) && c5.classList.contains(o) && c8.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c3.classList.contains(o) && c6.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c1.classList.contains(o) && c2.classList.contains(o) && c3.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c4.classList.contains(o) && c5.classList.contains(o) && c6.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c7.classList.contains(o) && c8.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c1.classList.contains(o) && c5.classList.contains(o) && c9.classList.contains(o)) {
			alert("O You Won!");
		}
		else if (c3.classList.contains(o) && c5.classList.contains(o) && c7.classList.contains(o)) {
			alert("O You Won!");
		}

		else if ( turn == 9 ) {
			alert("It is a Tie!");
		}

	}
	//Play again reload
	playButton.addEventListener("click", handleReload)
	function handleReload (e) {
		window.location.reload();
	}
}


















