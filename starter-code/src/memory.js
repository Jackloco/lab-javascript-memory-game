var MemoryGame = function (cards) {
    this.cards = cards;

};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var m = cardsArr.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = cardsArr[m];
        cardsArr[m] = cardsArr[i];
        cardsArr[i] = t;
    }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

};

MemoryGame.prototype.finished = function () {
    if((this.cards.length)/2 == this.pickedCards){
        return "Win"
    }
};

MemoryGame.prototype.pickedCards = function () {

};

MemoryGame.prototype.pairsClicked = function () {

};


