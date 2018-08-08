// Variables

var wins = 0;
var losses = 0;
var targetVal;
var totalScore = 0;
var gem1;
var gem2;
var gem3;
var gem4;

// Call randNumGenTarget
var targetVal = randNumGenTarget();


// Transfer JS values to HTML
$("#winsSpan").text(wins);
$("#lossesSpan").text(losses)
$("#targetNum").text(targetVal);
$("#totalScore").text(totalScore);

// Assign values to each gem
gem1 = randNumGenGem();
gem2 = randNumGenGem();
gem3 = randNumGenGem();
gem4 = randNumGenGem();

// Random number generator function for target value
function randNumGenTarget() {
    return Math.floor(Math.random() * 102) + 19;
}

// Random number generator function for gems
function randNumGenGem() {
    return Math.floor(Math.random() * 12) + 1;
}

// Gem click events
$("#gem1Id").click(function () {
    totalScore += gem1;
    $("#totalScore").text(totalScore);
    gameLogic(totalScore, targetVal);
});

$("#gem2Id").click(function () {
    totalScore += gem2;
    $("#totalScore").text(totalScore);
    gameLogic(totalScore, targetVal);
});

$("#gem3Id").click(function () {
    totalScore += gem3;
    $("#totalScore").text(totalScore);
    gameLogic(totalScore, targetVal);
});

$("#gem4Id").click(function () {
    totalScore += gem4;
    $("#totalScore").text(totalScore);
    gameLogic(totalScore, targetVal);
});

// Game logic function
function gameLogic(x, y) {
    if (x > y) {
        losses++;
        $("#lossesSpan").text(losses)
        targetVal = randNumGenTarget();
        $("#targetNum").text(targetVal);
        gem1 = randNumGenGem();
        gem2 = randNumGenGem();
        gem3 = randNumGenGem();
        gem4 = randNumGenGem();
        totalScore = 0;
        $("#totalScore").text(totalScore);
    } else if (x === y) {
        wins++;
        $("#winsSpan").text(wins);
        targetVal = randNumGenTarget();
        $("#targetNum").text(targetVal);
        gem1 = randNumGenGem();
        gem2 = randNumGenGem();
        gem3 = randNumGenGem();
        gem4 = randNumGenGem();
        totalScore = 0;
        $("#totalScore").text(totalScore);
    }
}










