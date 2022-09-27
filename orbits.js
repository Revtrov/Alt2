import { dataBase } from "readDataBase.js"
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let totalOfOrbits = 0;
for (let i = 0; i < dataBase.orbits.length; i++) {
    if (dataBase.orbits[i] == "" && dataBase.orbits[i] != undefined) {
        continue
    } else {
        totalOfOrbits += parseFloat(dataBase.orbits[i])
    }
}
let averagePlanetOrbits = totalOfOrbits / dataBase.orbits.length

// dataBase.orbits.sort()
// let medianPlanetorbits = (parseFloat(dataBase.orbits[Math.floor(dataBase.orbits.length / 2) + 1]) + parseFloat(dataBase.orbits[Math.floor(dataBase.orbits.length / 2) - 1])) / 2
console.log(Math.max.apply(Math, dataBase.orbits))
for (let i = 0; i < dataBase.orbits.length; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.orbits) / dataBase.orbits[i]), 0, 2 * Math.PI, false);
    if (dataBase.orbits == Math.max.apply(Math, dataBase.orbits)) {
        ctx.fillStyle = 'rgba(135, 0, 125)';
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
    } else {
        ctx.fillStyle = 'rgba(135, 0, 125)';
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#333300';
    }
    ctx.stroke();
}
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.orbits) / 365.25), 0, 2 * Math.PI, false);
ctx.fillStyle = 'rgba(135, 0, 0)';
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.fillStyle = 'rgba(135, 0, 0)';
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';

ctx.stroke();

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.orbits) / averagePlanetOrbits), 2 * Math.PI, false);
ctx.fillStyle = 'rgba(135, 0, 0)';
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.fillStyle = 'rgba(135, 0, 0)';
ctx.lineWidth = 5;
ctx.strokeStyle = '#0000ff';

ctx.stroke();