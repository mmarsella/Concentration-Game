window.onload = function(){

var tiles = [];  //array of td's
var rows = document.getElementsByTagName("tr");
var gameBoard = document.querySelector("table");


// Keeps track if 1/2 images have been clicked
var firstClicked = false;
var secondClicked = false;


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
		tile.style.width = "150px";
		tile.style.paddingBottom = "150px";
		tile.style.cssFloat = "left";

		if(i % 2 === 0)
		{
		  tile.style.backgroundColor = "red";	
		}
		else
		{
		   tile.style.backgroundColor = "green";	
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
		tile.style.width = "150px";
		tile.style.paddingBottom = "150px";
		tile.style.cssFloat = "left";

		if(i % 2 === 0)
		{
		  tile.style.backgroundColor = "purple";	
		}
		else
		{
		   tile.style.backgroundColor = "blue";	
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


function checkTile()
{
	// gives me access to the number inside each td
	console.log(this.getAttribute("data-tile"));
	console.log(this.classList[0]);
}

	
};// End onload