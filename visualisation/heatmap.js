import { dataBase } from "../database/readDataBase.js"
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < dataBase.equilibrium.length; i++) {
    dataBase.equilibrium[i] *= -1
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium) / 21), 0, 2 * Math.PI, false);
    let grd
    grd = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium) / 21), canvas.width / 2, canvas.height / 2, (canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium) / 21) / 10);
    grd.addColorStop(1, "red");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    grd.addColorStop(0.1, `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.1)`);
    ctx.fillStyle = grd;
    ctx.fill();
}

ctx.stroke();