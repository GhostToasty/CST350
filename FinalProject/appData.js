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
            description: "[There are seven species of sea turtles that inhabit the Earth’s oceans: loggerhead, leatherback, green turtle, hawksbill, Kemp’s ridley, olive ridley and flatback...]",
            discovered: false,
            idGame: "turtle-game",
            idInfo:"turtle-info"
        },
        {
            name: "Plastic Bag",
            type: "Pollution",
            description: "[Plastic bags float in the ocean in a way that makes them look like jellyfish. This leads to Sea turtles and other creatures eating them.]",
            discovered: false,
            idGame: "bag-game",
            idInfo: "bag-info"
        },
          {
            name: "Jelly Fish",
            type: "Animal",
            description: "[Jellies are any animals that have a gelatinous body and live in the water column.They have no blood, bones, or brains ]",
            discovered: false,
            idGame: "jellyfish-game",
            idInfo: "jellyfish-info"
        },
        {
            name: "Plastic Straw",
            type: "Pollution",
            description: "[Plastic straws are tiny and light weight. This makes them less likely to be recycled, leading them to become a major source of ocean pollution.",
            discovered: false,
            idGame: "straw-game",
            idInfo: "straw-info"
        },
        {
            name: "Fish",
            type: "Animal",
            description: "[While all fish are vertebrates there is an incredible amount of diversity amoung them.There are over 32,000 varieties of fish, and they have existed on Earth for over 500 million years. ]",
            discovered: false,
            idGame: "fish-game",
            idInfo: "fish-info"
        },
        {
            name: "Oil Spill",
            type: "Pollution",
            description: "[Oil is a fossil fuel that is sometimes spilled into the ocean. It harms sea life by coating feathers and fur, taking away insulation and flight properties, and being overall toxic. ]",
            discovered: false,
            idGame: "oil-game",
            idInfo: "oil-info"
        },
        {
            name: "Hermit Crab",
            type: "Animal",
            description: "[Hermit Crabs are decapods that wear shells to protect their bodies. As they grow older and bigger they will move into bigger shells.]",
            discovered: false,
            idGame: "crab-game",
            idInfo: "crab-info"
        },
        {
            name: "Water Bottle",
            type: "Pollution",
            description: "[Water bottles are a major source or ocean plastic pollution. An easy swap out for using plastic bottles is to replace them with a reusable one.]",
            discovered: false,
            idGame: "bottle-game",
            idInfo: "bottle-info"
        },
    ]
}