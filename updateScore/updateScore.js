function updateScore(scores, player, modifier) {
    const scoreFilter = scores.map(element => {
        if(element.player === player){
            element.score += modifier
        }
        return element
    })
    return scoreFilter;
}

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
  
  updateScore(scores, "Sanchez", 100);

module.exports = updateScore;

//iterate the array scores
//find the object player
//change the score of object player by modifier
//return the updated scores array 
