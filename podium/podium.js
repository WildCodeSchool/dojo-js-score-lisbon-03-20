// function myFunction() {
// points.sort(function (a, b) { return b - a });
// Separate first three top values
//arr.sort( function ( a, b ) { return b.date - a.date; } );

function podium(scores) {
  scores.sort(
    (firstPerson, secondPerson) => secondPerson.score - firstPerson.score,
  );

  const scoreTop = scores.slice(0, 3);
  return scoreTop;
}

module.exports = podium;
