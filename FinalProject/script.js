

let start = document.querySelector(".start");
let how = document.querySelector(".how");
let game = document.querySelector(".game");
//hides the how page 
how.style.display = "none";
game.style.display = "none";

//
let button = document.querySelector (".linkBottom");
button.addEventListener('click',function() {
console.log("start");


if (how.style.display === "none")
    how.style.display = "block";

 start.style.display = "none";
 game.style.display = "none";


});


let button2 = document.querySelector (".linkBottom2");

//makes it so clicking Start on the how page enters the game
button2.addEventListener('click',function() {
console.log("start2");

//starts game play  
if (game.style.display === "none"){
    game.style.display = "block"
    game.style.display = "flex";
    game.style.flexDirection = "column";
    game.style.width = "100%";
}
    

how.style.display = "none";

});




