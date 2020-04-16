
const updateScore = require("./updateScore");
const scores = require("../scores");

const expectedResult = [
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
        "score": 982
    },
    {
        "player": "Dee",
        "score": 609
    }
];

describe("Update Scores", () => {
    it("returns the correct result", () => {
        expect(updateScore(scores, "Sanchez", 100)).toEqual(expectedResult);
    });
});