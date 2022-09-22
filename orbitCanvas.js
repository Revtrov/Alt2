import { dataBase } from "./readDataBase"
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
let averagePlanetOrbits = totalOfRadii / dataBase.radii.length

dataBase.orbits.sort()
let medianPlanetorbits = (parseFloat(dataBase.orbits[Math.floor(dataBase.orbits.length / 2) + 1]) + parseFloat(dataBase.orbits[Math.floor(dataBase.orbits.length / 2) - 1])) / 2