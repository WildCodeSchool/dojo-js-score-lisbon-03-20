const scores = [
    {
        "player": "Maggie",
        "score": 762
    },
    {
        "player": "Annie",
        "score": 102
    },
    {
        "player": "Sanchez",
        "score": 882
    },
    {
        "player": "Dee",
        "score": 609
    }
];

function updateScore(scores, player, modifier) {
    // write your code here
    const who = scores.findIndex(el => el.player === player)
    const oldScore = scores[who].score
    scores[who].score = oldScore + modifier
    return scores
}

updateScore(scores, "Sanchez", 100)

console.log(scores)

module.exports = updateScore;

//the function will pass an object as parameter
//find index of player in the array
//get his score
//apply modification of his score
//return scores (arraw) updated
