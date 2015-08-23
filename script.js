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

// 2)  Duplicate --> Slice --> Concat

var doubleTiles = tiles.concat(tiles.slice());

console.log(doubleTiles[0].getAttribute("data-tile"));


// 3) Shuffle

_.shuffle(doubleTiles);

console.log(doubleTiles.length);

// 4) Add tiles to board

doubleTiles.forEach(function(tile){

document.body.appendChild(tile);

});





// 5) Loop and add Listener

doubleTiles.forEach(function(tile){

	tile.addEventListener("click", checkTile);

});




function checkTile()
{
	console.log(this);
}







	// Append to parent












};// End onload