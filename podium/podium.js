
function podium(scores) {
    let sorted = scores.sort((a,b) => {
        return  b.score - a.score 
    })
    
    return sorted.splice(0, 3);
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

   podium(scores);



module.exports = podium;

//iterate the array 
//find the 3 highest scores
//return the objects with the highest scores