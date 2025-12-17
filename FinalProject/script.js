
//main screen definitions
let start = document.querySelector(".start");
let how = document.querySelector(".how");
let game = document.querySelector(".game");
let guide = document.querySelector (".guide-content");
let info = document.querySelector(".info-popUp");
//journal definition
let journal = document.querySelector("#scoutGuide");
let animalImage = document.querySelector (".animal-images-popUp");
let trashImage = document.querySelector (".trash-images-popUp");

//hides all but start page 
how.style.display = "none";
game.style.display = "none";
guide.style.display ="none";
info.style.display ="none";



//
let button = document.querySelector (".linkBottom");
button.addEventListener('click',function() {
    console.log("start");


    if (how.style.display === "none")
        how.style.display = "block";
    //hides other pages

    start.style.display = "none";
    game.style.display = "none";
    guide.style.display ="none";
    info.style.display ="none";


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
guide.style.display ="none";
info.style.display ="none";

});

//guide display
//makes the journal clickable
 journal.addEventListener('click',function(){
    console.log("journal clicked");


    if (guide.style.display === "none")
        guide.style.display = "block"
    else guide.style.display = "none";



});

animalImage.addEventListener('click',function(){
  console.log("animal clicked");

  if (info.style.display === "none")
        info.style.display = "block"
    else info.style.display = "none";
});

trashImage.addEventListener('click',function(){
    console.log("trash clicked");
    
      if (info.style.display === "none")
        info.style.display = "block"
    else info.style.display = "none";

});





