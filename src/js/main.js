import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// rad*(cos(t)));///68
// y=(rad*(sin(t)));///80
//   x+centr+25*cos(rlk))  , y+odstup_horu_nuzu+25*sin(rlk))
var c = document.getElementById("myCanvas");
if (c) {
    var ctx = c.getContext("2d");
    var rad = 3.14
    const step = 0.1
    const sizeCanvas = 1000
    c.width = sizeCanvas;
    c.height = sizeCanvas;
    const innerWidth = sizeCanvas;
    const innerHeight = sizeCanvas;

    function draw() {
        requestAnimationFrame(draw);
        // ctx.clearRect(0, 0, sizeCanvas, sizeCanvas);
        // ctx.clearRect(0, 0, 300, 300); // clear canvas

        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.fillRect(0, 0, sizeCanvas, sizeCanvas);
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.lineTo(250 + 100 * Math.sin(rad), 250 + 100 * Math.cos(rad));
        ctx.stroke();
        rad -= step;
    }
    draw();

}
// setInterval(() => {
//     draw()
// }, 100)






// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const innerWidth = window.innerWidth;
// const innerHeight = window.innerHeight;

// console.log(innerWidth)
// console.log(innerHeight)

// canvas.width = 500;
// canvas.height = 500;
// var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, 0.5";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5";
// c.fillRect(100, 300, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5";
// c.fillRect(400, 300, 100, 100);
// console.log(canvas);

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// for (var i = 0; i < 3; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }
// var mouse = {
//     x: undefined,
//     y: undefined
// }

// var maxRadius = 50;
// // var minRadius = 2;

// var colorArray = [
//     '#2c3e50',
//     '#e74c3c',
//     '#ecf0f1',
//     '#3498db',
//     '#2980b9',
// ];

// window.addEventListener('mousemove',
//     function(event){
//         mouse.x = event.x;
//         mouse.y = event.y;
// })

// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     init();
// });

// function Circle(x, y, dx, dy, radius, number){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

//     this.draw = function(){

//     }

//     this.update = function() {
//         // console.log(window.innerHeight + "  " + window.innerWidth)
//         if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
//             this.dx = -this.dx
//         }

//         if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
//             this.dy = -this.dx;
//         }

//         this.x += this.dx;
//         this.y += this.dy;

//         //interativity
//         if (Math.abs(mouse.x - this.x) < 50  && Math.abs(mouse.y - this.y) < 50) {
//         // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//                 if (this.radius < maxRadius) {
//                     this.radius += 1;
//                 }
//         } else if (this.radius > this.minRadius) {
//             this.radius -= 1;
//         }

//         this.draw();
//     }
// }

// var circleArray = [];

// function init(){
//     circleArray = [];
//     for (var i = 0; i < 800; i++){
//         var radius = Math.random() * 3 + 1;
//         var x = Math.random() * (window.innerWidth - radius * 2) + radius;
//         var y = Math.random() * (window.innerHeight - radius * 2) + radius;
//         var dx = (Math.random() - 0.5) * 5;
//         var dy = (Math.random() - 0.5) * 5;
//         if(i>0)circleArray.push(new Circle(x, y, dx, dy, radius, i));
//     }
// }

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     for (var i = 0; i < circleArray.length; i++ ){
//         circleArray[i].update();
//     }

// }
// init();
// var x = 200;
// var dx = 5;
// var y = 200;
// var radius = 30;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.fillStyle = 'blue';
//     c.stroke();

//     if (x + radius > innerWidth) {
//         dx = -dx;
//     }
//     if (x - radius < 0) {
//         dx = -dx;
//     }

//     x += dx;
// }


// animate();

