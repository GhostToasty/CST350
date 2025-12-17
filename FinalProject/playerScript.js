// adds keyboard controls and allows player movement 


// sets movement amount (speed)
let movement = 10

// sets initial position to zero when page is loaded 
let currPosHor = 0
let currPosVer = 0


// runs when a player presses or holds down on a key 
document.addEventListener("keydown", function(event){

    // UP - hold W or Up Arrow
    if (event.key === "w" || event.key === "ArrowUp"){
        //sets boundaries
        if (currPosVer > 0){
            // subtracts movement increment from style.top position to bring player closer to the top (up)
            player.style.top = currPosVer - movement + "px"
            // vertical position is saved so that it doesn't restart at top 
            currPosVer = currPosVer - movement
        }
    }

    // DOWN - hold S or Down Arrow
    else if (event.key === "s" || event.key === "ArrowDown"){
        //sets boundaries
        if (currPosVer < (document.body.clientHeight - player.height)){
            // adds movement increment to style.top position to bring player farther from the top (down)
            player.style.top = currPosVer + movement + "px"
            // vertical position is saved so that it doesn't restart at top 
            currPosVer = currPosVer + movement
        }
    }

    // LEFT - hold A or Left Arrow
    else if (event.key === "a" || event.key === "ArrowLeft"){
        //sets boundaries
        if (currPosHor > 0){
            // subtracts movement increment from style.top position to bring player closer to left side (left)
            player.style.left = currPosHor - movement + "px"
            // horizontal position is saved so that it doesn't restart at left
            currPosHor = currPosHor - movement 
        }
    }

    // RIGHT - hold D or Right Arrow 
    else if (event.key === "d" || event.key === "ArrowRight"){
        //sets boundaries
        if(currPosHor < (window.innerWidth- player.width)){
            // adds movement increment to style.left position to bring player farther to the left side (right)
            player.style.left = currPosHor + movement + "px"
            // horizontal position is saved so that it doesn't restart at left
            currPosHor = currPosHor + movement
        }
    } 

    //when player is halfway down the screen, screen will start scrolling with player 
    if(currPosVer > window.innerHeight / 2){
        window.scrollTo(0, currPosVer - window.innerHeight / 2)
    }

    checkCollision()
});