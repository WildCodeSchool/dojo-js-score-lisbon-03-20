const updateScore = require("./podium");
const scores = require("../scores");

const expectedResult = [
    {
        "player": "Sanchez",
        "score": 882
    },
    {
        "player": "Maggie",
        "score": 762
    },
    {
        "player": "Dee",
        "score": 609
    }
];


describe("Podium", () => {
    it("returns the correct result", () => {
        expect(updateScore(scores)).toEqual(expectedResult);
    });
});
