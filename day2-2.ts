import { readFileSync } from "fs";

const input = readFileSync('day2.txt', 'utf-8');

const games = input.split("\r\n");
let score = 0;
for (let game of games) {
    let signs = game.split(" ");
    let abc = signs[0];
    let xyz = signs[1];

    if (xyz === "X") { // should lose
        score += 0
    } else if (xyz === "Y") { // should draw
        score += 3
    } else { // should win
        score += 6
    }
    if ((abc === "A" && xyz === "Y") || 
    (abc === "B" && xyz === "X") || 
    (abc === "C" && xyz === "Z")) {
        // Rock
        score += 1
    } else if ((abc === "A" && xyz === "Z") || 
    (abc === "B" && xyz === "Y") || 
    (abc === "C" && xyz === "X")) {
        // Paper
        score += 2
    } else {
        // Scissors
        score += 3
    }
}
console.log(score);