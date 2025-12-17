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
let gameInfo = document.querySelector(".gameInfo");
gameInfo.style.display = "none"

for(let object of appData.interactable){
	let itemInfo = document.querySelector("#" + object.idInfo)
	itemInfo.style.display = "none"
}


console.log(player)
// let objects = document.querySelectorAll(".gameObject");
// console.log(appData.interactable[0])

function checkCollision(){ 
	let item = 0
	for (let object of appData.interactable){
		console.log("new")
		// console.log(appData.interactable[item].idGame);

		// let itemID = document.querySelector("#" + appData.interactable[item].idGame)
		let itemID = document.querySelector("#" + object.idGame)
		let itemInfo = document.querySelector("#" + object.idInfo)

		// console.log("#" + appData.interactable[item].idGame)
		// console.log("#" + appData.interactable[item].idGame)
		// console.log("#" + appData.interactable[0].idGame)
		// console.log(itemID)

		// appData.interactable[item].idGame;
		if (checkOverlap(player, itemID)){
			console.log("true: " + itemID);
			if (itemInfo.style.display === "none")
				itemInfo.style.display = "block"
			break;
		}
		else
			itemInfo.style.display = "none"

		

		// item += 1;

	}
}
