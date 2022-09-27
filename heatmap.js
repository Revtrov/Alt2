let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < dataBase.equilibrium.length; i++) {
    dataBase.equilibrium[i] *= -1
}
dataBase.equilibrium.sort().sort(function(a, b) {
    return a - b;
})
let totalEquilibrium = 0;
for (let i = 0; i < dataBase.equilibrium.length; i++) {
    totalEquilibrium += dataBase.equilibrium[i]
}
totalEquilibrium /= dataBase.equilibrium.length
let averageEquilibrium = totalEquilibrium
let opacity;
let equilibriumMap = (radians, i) => {
    ctx.beginPath();
    ctx.strokeStyle = "black"
    ctx.arc(canvas.width / 2, canvas.height / 2, ((canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium))) * dataBase.equilibrium[i], 0, radians, false);
    let grd
    grd = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, ((canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium))) * dataBase.equilibrium[i], canvas.width / 2, canvas.height / 2, ((canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium))) * 1);
    opacity = (dataBase.equilibrium[i] / (Math.max.apply(Math, dataBase.equilibrium)))
    console.log(opacity)
    grd.addColorStop(0, `rgba(${0}, 0, ${255-dataBase.equilibrium[i]},${opacity})`);
    grd.addColorStop(1, `rgba(${255-dataBase.equilibrium[i]}, 0, ${0}, ${opacity})`);
    ctx.fillStyle = grd;
    ctx.fill();
    //ctx.stroke();
}
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width, 0, Math.PI * 2, false);
let grd = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, (Math.max.apply(Math, dataBase.equilibrium)) ** 2);
grd.addColorStop(0, `rgba(0, 0,255 ,0.35)`);
grd.addColorStop(1, `rgba(0, 0, 0,1)`);
ctx.fillStyle = grd;
ctx.fill();
for (let i = 0; i < dataBase.equilibrium.length; i++) {
    equilibriumMap(2 * Math.PI, i)
}
let drawCircle = (color, lineWidth, equilibrium) => {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.arc(canvas.width / 2, canvas.height / 2, ((canvas.height / 2) / (Math.max.apply(Math, dataBase.equilibrium))) * equilibrium, 0, 2 * Math.PI, true);
    ctx.stroke();
}
drawCircle("green", 5, 18)
drawCircle("yellow", 5, averageEquilibrium)