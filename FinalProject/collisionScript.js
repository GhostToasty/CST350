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

// let player = document.querySelector("#player");
// let objects = document.querySelectorAll(".gameObject")

// console.log(checkOverlap(player, gameObject));
