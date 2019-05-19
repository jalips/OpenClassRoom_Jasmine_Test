const CANDY_CHAMALLOWS = 0;
const CANDY_DRAGIBUS = 1;

var CandyStore = function() {

    this.candiesBox = []
};

CandyStore.prototype.getCandies = function(numberOfCandies, typeOfCandies) {
    console.log("type: " + typeOfCandies);
    console.log("before: " + this.candiesBox[typeOfCandies]);
    this.candiesBox[typeOfCandies] = this.candiesBox[typeOfCandies] - numberOfCandies;
    console.log("after: " + this.candiesBox[typeOfCandies]);
};

CandyStore.prototype.addCandies = function(numberOfCandies, typeOfCandies) {
    console.log("before: " + this.candiesBox[typeOfCandies]);
    this.candiesBox[typeOfCandies] = this.candiesBox[typeOfCandies] + numberOfCandies;
    console.log("after: " + this.candiesBox[typeOfCandies]);
};