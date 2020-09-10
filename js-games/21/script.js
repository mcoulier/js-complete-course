let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function createDeck() {
    let deck = []
    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < values.length; x++) {
            let card = {
                suit: suits[i],
                value: values[x]
            };
        deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck) {
    for (let i = 0; i < 1000; i++){
        const location1 = Math.floor((Math.random() * deck.length));
        const location2 = Math.floor((Math.random() * deck.length));
        const tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}