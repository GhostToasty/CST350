let appData = {
    //menu the game starts on
    gameScreenState: "Start",

    //location of the player when game starts
    playerState: "Start",

    // keeps track  of items in game and their discovered status 
    interactable: [
        {
            name: "Turtle",
            type: "Animal",
            description: "[turtle facts...]",
            discovered: false,
            idGame: "turtle-game",
            idInfo:"turtle-info"
        },
        {
            name: "Plastic Bag",
            type: "Pollution",
            description: "[plastic bag facts...]",
            discovered: false,
            idGame: "bag-game",
            idInfo: "bag-info"
        },
          {
            name: "Jelly Fish",
            type: "Animal",
            description: "[Jelly Fish facts...]",
            discovered: false,
            idGame: "jellyfish-game",
            idInfo: "jellyfish-info"
        },
        {
            name: "Plastic Straw",
            type: "Pollution",
            description: "[plastic straw facts...]",
            discovered: false,
            idGame: "straw-game",
            idInfo: "straw-info"
        },
        {
            name: "Fish",
            type: "Animal",
            description: "[fish facts...]",
            discovered: false,
            idGame: "fish-game",
            idInfo: "fish-info"
        },
        {
            name: "Oil Spill",
            type: "Pollution",
            description: "[oil facts...]",
            discovered: false,
            idGame: "oil-game",
            idInfo: "oil-info"
        },
        {
            name: "Hermit Crab",
            type: "Animal",
            description: "[Hermit Crab facts...]",
            discovered: false,
            idGame: "crab-game",
            idInfo: "crab-info"
        },
        {
            name: "Water Bottle",
            type: "Pollution",
            description: "[water bottle facts...]",
            discovered: false,
            idGame: "bottle-game",
            idInfo: "bottle-info"
        },
    ]
}