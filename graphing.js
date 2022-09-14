var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 66;
canvas.height = window.innerHeight - 11;
var w = window.innerWidth - 66;
var h = window.innerHeight - 11;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255,255,255)"
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.moveTo(50, h - 50);
ctx.lineTo(w, h - 50);
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(50, h - 50);
ctx.lineTo(50, 0);
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.stroke();
//marks y
let drawYMarks = (color) => {
    for (let i = 0; i <= 700; i++) {
        ctx.beginPath();
        ctx.moveTo(47.5, h - (i * 10 + 50));
        ctx.lineTo(52.5, h - (i * 10 + 50));
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
drawYMarks("red")
let drawXMarks = (color) => {
    for (let i = 0; i <= w; i++) {
        ctx.beginPath();
        ctx.moveTo((i * 10 + 50), h - 52.5);
        ctx.lineTo((i * 10 + 50), h - 47.5);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.beginPath();
    }
}
drawXMarks("red")
    //marks x
let xCoordPE,
    xCoordPS,
    yCoordPE,
    yCoordPS

xCoordPS = 0
yCoordPS = 0
xCoordPE = 900
yCoordPE = 300

var lineColor = "red";



function draw() {
    ctx.beginPath();
    ctx.moveTo(xCoordPS + 50, h - yCoordPS - 50);
    ctx.lineTo(xCoordPE + 50, h - yCoordPE - 50);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    ctx.stroke();
}
draw()

console.log(planets)