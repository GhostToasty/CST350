
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
let popUp = document.querySelector(".popUp");
let X = document.querySelector (".X-button");

//gets IDs for all parts of secondary journal pop up 
let infoPopUpImage = document.querySelector("#info-popUp-image");
let infoPopUpText = document.querySelector("#info-popUp-text")
let infoPopUpName = document.querySelector("#info-popUp-name")
//gets IDs for all the clickable pop up compontents
let turtlePopUp = document.querySelector("#turtle-popUp")
let jellyfishPopUp = document.querySelector("#jellyfish-popUp")
let fishPopUp = document.querySelector("#fish-popUp")
let crabPopUp = document.querySelector("#crab-popUp")
let bagPopUp = document.querySelector("#bag-popUp")
let strawPopUp = document.querySelector("#straw-popUp")
let oilPopUp = document.querySelector("#oil-popUp")
let bottlePopUp = document.querySelector("#bottle-popUp")

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
//re styles the format of the game play screen
if (game.style.display === "none"){
    game.style.display = "block"
    game.style.display = "flex";
    game.style.flexDirection = "column";
    game.style.width = "100%";
}
    
//hides other pages
how.style.display = "none";
guide.style.display ="none";
info.style.display ="none";

});

//guide display
//makes the journal clickable
 journal.addEventListener('click',function(){
    console.log("journal clicked");

    //unhides the journal 
    if (guide.style.display === "none"){
        guide.style.display = "block"
        
        //
        for (let object of appData.interactable){
            //loops through all objects to check if it has been discovered
            let popID = document.querySelector("#" + object.popID)
            console.log(object.discovered)
            if (object.discovered){
                //replaces silouette with full image of object 
                popID.src = object.popImage
            }
	    }
    }
        
    else guide.style.display = "none";


});


//makes the X clickable to close the page
X.addEventListener('click', function(){
    console.log("X clicked");
    if (info.style.display === "block")
        info.style.display = "none";
});


//controls pop up information 
turtlePopUp.addEventListener('click', function(){
    //checks if object has been discovered, pop up will not display if it hasn't been 
    if (appData.interactable[0].discovered)
        changePopUp(0)
});

jellyfishPopUp.addEventListener('click', function(){
    if (appData.interactable[2].discovered)
        changePopUp(2)
});

fishPopUp.addEventListener('click', function(){
    if (appData.interactable[4].discovered)
        changePopUp(4)
});

crabPopUp.addEventListener('click', function(){
    if (appData.interactable[6].discovered)
        changePopUp(6)
});

bagPopUp.addEventListener('click', function(){
    if (appData.interactable[1].discovered)
        changePopUp(1)
});
strawPopUp.addEventListener('click', function(){
    if (appData.interactable[3].discovered)
        changePopUp(3)
});

oilPopUp.addEventListener('click', function(){
    if (appData.interactable[5].discovered)
        changePopUp(5)
});
bottlePopUp.addEventListener('click', function(){
    if (appData.interactable[7].discovered)
        changePopUp(7)
});


//runs every time an object within the journal is clicked 
function changePopUp(num){
    console.log("pop up clicked");
    
    //unhides pop up
    if (info.style.display === "none"){
        info.style.display = "block"
        
        //replaces all the components in the html with their image, description, and name
        infoPopUpImage.src = appData.interactable[num].popImage;
        console.log(infoPopUpImage.src)
        infoPopUpText.textContent = appData.interactable[num].description;
        console.log(infoPopUpImage.textContent)
        infoPopUpName.textContent = appData.interactable[num].name;
    }
        
    else info.style.display = "none";
}





