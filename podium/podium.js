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

function podium(scores) {
    const nom = scores.sort((function (a, b) { return b.score - a.score }))
    let selection = nom.slice(0, 3)
    console.log(selection)
    return selection
}
podium(scores)


//we write a function that passes an array of objects
//we use sort() method to sort out objects by the score 
//(points.sort(function(a, b){return a-b})
//we use slice() method to save 3 objects with the best scores 
//(array.slice(start, end))
//we return an array with 3 selected objects

module.exports = podium;