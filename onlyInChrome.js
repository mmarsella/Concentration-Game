window.onload = function(){

var tiles = [];  //array of td's
var gameBoard = document.querySelector("table");


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

// work();

// function work()
// {




console.log(tiles);

// 3) Shuffle

_.shuffle(tiles);

console.log(tiles.length);

// 4) Add tiles to board

tiles.forEach(function(tile){

console.log("added " + tile);
document.body.appendChild(tile);

});


// 5) Loop and add Listener

tiles.forEach(function(tile){

	tile.addEventListener("click", checkTile);

});


function checkTile()
{
	console.log(this);
}

	
// }
// 2)  Duplicate --> Slice --> Concat


};// End onload