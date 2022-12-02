import { readFileSync } from "fs";

const input = readFileSync('day2.txt', 'utf-8');

const games = input.split("\r\n");
let score = 0;
for (let game of games) {
    let signs = game.split(" ");
    let abc = signs[0];
    let xyz = signs[1];
    if (xyz === "X") { // A
        // Rock
        score += 1
    } else if (xyz === "Y") { // B
        // Paper 
        score += 2
    } else { // C
        // Scissors
        score += 3
    }
    if ((abc === "A" && xyz === "Y") || 
    (abc === "B" && xyz === "Z") || 
    (abc === "C" && xyz === "X")) {
        // X,Y,Z wins
        score += 6
    } else if ((abc === "A" && xyz === "Z") || 
    (abc === "B" && xyz === "X") || 
    (abc === "C" && xyz === "Y")) {
        // A,B,C wins
        score += 0
    } else {
        // DRAW
        score += 3
    }
}
console.log(score);