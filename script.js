import dbstring from "/dbstring.js"
//grab string of all data from external file (abstraction) 
let dbstringr = dbstring.replace(/[\r\n]/gm, "")
    //use regex to find all return characters and remove them from the string
let everyValueArray = dbstringr.split(",")
    //split the string of all data into an array containing each data point
let planets = []
    //create the array that will contain each planets data
for (let i = 0; i < (everyValueArray.length / 91); i++) {
    planets.push([])
}
//use for loop to free up memory for the planets array's upcoming values
for (let i = 0; i <= everyValueArray.length; i++) {
    planets[Math.floor((i) / 92)].push(everyValueArray[i])
        //loop through all data points and add them to an index in the planet
        //the index at which the points go to is determined by there position in the all data points array devided by 
        //the amount of data points a planet has

    //see database_guide.txt for more info on data points relating to planets
}
let orbits = []
for (let i = 0; i < planets.length; i++) {
    orbits.push(planets[i][11])
}

console.log(orbits)








//using a previous project that i created to make graphs using the built in js canvas

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