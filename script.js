window.onload = function(){

var tiles = [];  //array of td's
var gameBoard = document.querySelector("table");


//creates gameBoard w/ duplicate tiles
createTiles();

// shuffle tiles, set tiles to equal the shuffled set
tiles = shuffle(tiles);

//add tiles to the board
addTilesToBoard(tiles);

//add click listeners to each tile
addListeners(tiles);





























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
		tile.style.width = "50px";
		tile.style.paddingBottom = "50px";
		tile.style.cssFloat = "left";

		if(i % 2 === 0)
		{
		  tile.style.backgroundColor = "red";	
		}
		else
		{
		   tile.style.backgroundColor = "black";	
		}
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
		tile.style.width = "50px";
		tile.style.paddingBottom = "50px";
		tile.style.cssFloat = "left";

		if(i % 2 === 0)
		{
		  tile.style.backgroundColor = "red";	
		}
		else
		{
		   tile.style.backgroundColor = "black";	
		}
	}
}



// 3) Shuffle
function shuffle(tiles)
{
  return _.shuffle(tiles);
}


// 4) Add tiles to board
function addTilesToBoard(tiles)
{
	tiles.forEach(function(tile){
	gameBoard.appendChild(tile);
	});
}


// 5) Loop and add Listener
function addListeners(tiles)
{
	tiles.forEach(function(tile){
	tile.addEventListener("click", checkTile);
	});
}


function checkTile()
{
	console.log(this);
}

	
};// End onload