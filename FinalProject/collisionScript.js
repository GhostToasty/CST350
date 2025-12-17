//adds collision function to make info box popups appear and dissappear

/*copy this function into your code */
function checkOverlap(element1, element2) {
	let rect1 = element1.getBoundingClientRect();
	let rect2 = element2.getBoundingClientRect();

	return (
		rect1.left < rect2.right &&
		rect1.right > rect2.left &&
		rect1.top < rect2.bottom &&
		rect1.bottom > rect2.top
	);
}

// /*this is how you use it */
// let blue = document.querySelector("#box_blue");
// let orange = document.querySelector("#box_orange");
// let purple = document.querySelector("#box_purple");

// console.log("Are blue/orange overlapping?: " + checkOverlap(blue, orange)); // this should be true
// console.log("Are blue/purple overlapping?: " + checkOverlap(blue, purple)); // this should be false


/* */


let player = document.querySelector("#player");

//loops through and hides all info boxes 
for(let object of appData.interactable){
	let itemInfo = document.querySelector("#" + object.idInfo)
	itemInfo.style.display = "none"
}


//runs every time the player moves 
function checkCollision(){ 
	for (let object of appData.interactable){

		//gets IDs of a new item every time it loops 
		let itemID = document.querySelector("#" + object.idGame)
		let itemInfo = document.querySelector("#" + object.idInfo)

		//checks if player is colliding with item 
		if (checkOverlap(player, itemID)){
			if (itemInfo.style.display === "none")
				//displays item if they are colliding
				itemInfo.style.display = "block"
				//marks item as discovered
				object.discovered = true
			break;
		}
		else
			//keeps items hidden or rehides item is player is no longer colliding 
			itemInfo.style.display = "none"
	}
}
