import { readFileSync } from "fs";

const input = readFileSync('day1.txt', 'utf-8');

const elves = input.split("\r\n\r\n");
const calorieCounts : number[] = []; 
for (let elf of elves) {
    let calorieSum = elf.split("\r\n")
        .map(calorie => parseInt(calorie))
        .reduce((a, b) => a+b);
    calorieCounts.push(calorieSum);
}

calorieCounts.sort((a, b) => b-a);

console.log(calorieCounts[0] + calorieCounts[1] +  calorieCounts[2]);

