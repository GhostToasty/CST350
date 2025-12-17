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
        // subtracts movement increment from style.top position to bring player closer to the top (up)
        player.style.top = currPosVer - movement + "px"

        // vertical position is saved so that it doesn't restart at top 
        currPosVer = currPosVer - movement
    }

    // DOWN - hold S or Down Arrow
    else if (event.key === "s" || event.key === "ArrowDown"){
        // adds movement increment to style.top position to bring player farther from the top (down)
        player.style.top = currPosVer + movement + "px"
        currPosVer = currPosVer + movement
    }

    // LEFT - hold A or Left Arrow
    else if (event.key === "a" || event.key === "ArrowLeft"){
        // subtracts movement increment from style.top position to bring player closer to left side (left)
        player.style.left = currPosHor - movement + "px"
        
        // horizontal position is saved so that it doesn't restart at left
        currPosHor = currPosHor - movement 
    }

    // RIGHT - hold D or Right Arrow 
    else if (event.key === "d" || event.key === "ArrowRight"){
        // adds movement increment to style.left position to bring player farther to the left side (right)
        player.style.left = currPosHor + movement + "px"
        currPosHor = currPosHor + movement
    } 

    checkCollision()

    // console.log("style: " + player.style.top)
    // console.log("currHor: " + currPosVer)

    // console.log("style: " + player.style.left)
    // console.log("currHor: " + currPosHor)
});