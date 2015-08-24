window.onload = function(){

var tiles = [];  //array of td's
var rows = document.getElementsByTagName("tr");
var gameBoard = document.querySelector("table");


// Keeps track if 1/2 images have been clicked
var firstClicked = false;
var secondClicked = false;

//Refers to the current 2 clicked objects

var firstObject;
var secondObject;

// Tracks total matches --> if matches = 8 --> WIN
var matchCount = 0;

//Time count
var timeCount = 60;
document.querySelector("#time").innerText = timeCount;
var timerId;

//Displays the matchCount in html
document.querySelector("#matches").innerText = matchCount;

// Reset Button
var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", clearBoard);

//creates gameBoard w/ duplicate tiles
createTiles();

// shuffle tiles, set tiles to equal the shuffled set
tiles = shuffle(tiles);

//add tiles to the board
addTilesToBoard(tiles);

//add click listeners to each tile
addListeners(tiles);

//start timer
timerId = startTimer();

function createTiles()
{
	// need 8 tiles in an array.. THATS IT
	for(var i = 0; i<8;i++)
	{
		//create a new td (game tile)
		var tile = document.createElement("td");
		//set it's data atr to i
		tile.setAttribute("data-tile",i);
		// Push it into the gameboard array
		tiles.push(tile);


		//Style the tiles
		tile.style.width = "120px";
		tile.style.paddingBottom = "120px";
		tile.style.cssFloat = "left";

		
		 // tile.style.backgroundColor = "white";	
		  tile.style.backgroundImage = "url(./images/start.jpg)";
		  // Scales images to the container
		  tile.style.backgroundSize = "100% 100%";
	
		  tile.style.backgroundRepeat = "no-repeat";	
	}

	//create 8 duplicate tiles... matching data-tile id's
	for(var i = 0; i<8;i++)
	{
		//create a new td (game tile)
		var tile = document.createElement("td");
		//set it's data atr to i
		tile.setAttribute("data-tile",i);
		// Push it into the gameboard array
		tiles.push(tile);

		//Style the tiles
		tile.style.width = "120px";
		tile.style.paddingBottom = "120px";
		tile.style.cssFloat = "left";
	
		//tile.style.backgroundColor = "white";	
		tile.style.backgroundImage = "url(./images/start.jpg)";
		  // Scales images to the container
		tile.style.backgroundSize = "100% 100%";
	
		tile.style.backgroundRepeat = "no-repeat";
	}
}

//Shuffle
function shuffle(tiles)
{
  return _.shuffle(tiles);
}

//Add tiles to board
function addTilesToBoard(tiles)
{
	var rowCounter = 0;
	tiles.forEach(function(tile){
		if(rowCounter < 4)
		{
			rows[0].appendChild(tile);
		}
		else if(rowCounter < 8)
		{
			rows[1].appendChild(tile);
		}
		else if(rowCounter < 12)
		{
			rows[2].appendChild(tile);
		}
		else
		{
			rows[3].appendChild(tile);
		}
	rowCounter++;
	});
}

// 5) Loop and add Listener
function addListeners(tiles)
{
	tiles.forEach(function(tile){
	tile.addEventListener("click", checkTile);
	});
}

function flipOver(that)
{
	var tileNumber = that.getAttribute("data-tile");

	if(!firstClicked)
	{
		firstClicked = tileNumber;
		firstObject = that;
		that.removeEventListener("click",checkTile);
	}
	else
	{
		secondClicked = tileNumber;
		secondObject = that;
		that.removeEventListener("click",checkTile);

	}
	// console.log("first-clicked is: " + firstClicked);
	// console.log("second-clicked is: " + secondClicked);
	// Set background image to the data-tile number.  Saved each image as n.jpg
	that.style.backgroundImage = "url(./images/" + tileNumber + ".jpg)";
	that.style.backgroundImage = "transparent url(./images/" + tileNumber + ".jpg)";

	// Scales images to the container
	that.style.backgroundSize = "100%";
	
	that.style.backgroundRepeat = "no-repeat";
}

function checkTile()
{
	// gives me access to the number inside each td
	var that = this;
	var tileNumber = this.getAttribute("data-tile");

	// trigger the classlist to be the data tile
	this.classList.add(tileNumber);
	//console.log(that.classList[0]);

	// Check to see how many tiles are flipped over
	flipOver(that);

	//allows for cards to stay revealed for a second

	//Changing this to 300ms vs 1000ms prevents a third tile to be selcted while 2 tiles are being evaluated!!
	setTimeout(checkMatch,150);

function checkMatch()
{
	// //freeze all panes from being touched while checkMatch evaluates
	// removeListeners(tiles);
	// setTimeout(addListeners(tiles),600);

	//If two tiles are flipped over
	if(firstClicked && secondClicked)
	{
		// Check if they are match
		if(firstClicked === secondClicked)
		{
			//console.log("A match!!!");

			//Increment matchCounter
			matchCount++;
			document.querySelector("#matches").innerText = matchCount;

			console.log("Total matches: " + matchCount);

			if(matchCount == 8)
			{
				document.getElementById("you").innerText = "YOU";
				document.getElementById("win").innerText = "WIN!!";

				//stop timer
				clearInterval(timerId);
				document.querySelector("#time").innerText = timeCount;
			}
			// set clicked values to false
			firstClicked = false;
			secondClicked = false;
			//reset object values
			firstObject = null;
			secondObject = null;
		}
		else
		{
			// Set background images to ""
			firstObject.style.backgroundImage = "url(./images/start.jpg)";
			firstObject.style.backgroundSize = "100% 100%";
			firstObject.style.backgroundRepeat = "no-repeat";

			secondObject.style.backgroundImage = "url(./images/start.jpg)";
			secondObject.style.backgroundSize = "100% 100%";
			secondObject.style.backgroundRepeat = "no-repeat";

			// set clicked values to false
			firstClicked = false;
			secondClicked = false;

			//add listeners back to both tiles
			firstObject.addEventListener("click",checkTile);
			secondObject.addEventListener("click",checkTile);
		}
	}	
  }
}

function clearBoard()
{
	//Clear matches
	matchCount = 0;
	document.querySelector("#matches").innerText = matchCount;

	// set clicked values to false
	firstClicked = false;
	secondClicked = false;

	//iterate through the board, set all tiles to ?.
	tiles.forEach(function(tile)
	{
		tile.style.backgroundImage = "url(./images/start.jpg)";
		tile.style.backgroundSize = "100% 100%";
		tile.style.backgroundRepeat = "no-repeat";
	});

	//reset object values
	firstObject = null;
	secondObject = null;

	tiles = shuffle(tiles);

	addTilesToBoard(tiles);

	addListeners(tiles);

	//stop timer
	clearInterval(timerId);
	//set display to equal 80
	timeCount = 60;
	document.querySelector("#time").innerText = timeCount;

	//remove win/lose message
	document.getElementById("you").innerText = "";
	document.getElementById("win").innerText = "";

	//set timer again capture ID
	timerId = startTimer();
}

function startTimer()
{
	timerID = setInterval(function()
	{
		timeCount--;
		document.querySelector("#time").innerText = timeCount;

		if(timeCount === 0)
		{
			//prompt lose message
			document.getElementById("you").innerText = "YOU";
			document.getElementById("win").innerText = "LOSE!!";
			//stop clock
			clearInterval(timerId);

			//remove listeners
			removeListeners(tiles);
		}

	},1000);

	return timerID;
}

function removeListeners(tiles)
{
	tiles.forEach(function(tile){
	tile.removeEventListener("click", checkTile);
	});
}

	
};// End onload