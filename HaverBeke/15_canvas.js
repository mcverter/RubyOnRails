/**
 * Created by mitchell_verter on 8/9/16.
 */

 var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10,10,100,50);

var cx = document.querySelector("canvas").getContext("2d");
cx.strokeStyle = "blue";
cx.strokeRect(5,5,50,50);
cx.lineWidth = 5;
cx.strokeRect(135,5,50,50);

cx.beginPath();
for (var y=10; y<100; y += 10) {
    cx.moveTo(10,y);
    cx.lineTo(90,y);
}
cx.stroke()

cx.beginPath();
cx.moveTo(50,10);
cx.lineTo(10,70);
cx.lineTo(90,70);
cx.fill();

cx.beginPath();
cx.moveTo(10,90);
cx.quadraticCurveTo(60,10,90,90);
cx.lineTo(60,10);
cx.closePath();
cx.stroke();

var results = [];
var total = results.reduce (function(sum, choice) {
    return sum + choice.count;
}, 0);
var currentAngle = 0.5 * Math.PI;
results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(100, 100);
    cx.fillStyle = result.color;
    cx.fill();
})

cx.font = "28px Georgia";
cx.fillStyle = "fuchsia";
cx.fillText("blah blah", 10, 50);


var img = document.createElement('img');
img.src = 'img/hat.png';

img.addEventListener("load", function() {
    for (var x=10; x<200; x+= 30) {
        cx.drawImage(img, x, 10);
    }
});

img.src = "img/player.png";
var spriteW = 24,
    spriteH = 30;
img.addEventListener("load", function(){
    var cycle = 0;
    setInterval(cx.clearRect(0,0,spriteW, spriteH));
    cx.drawImage(cycle * spriteW, 0, spriteW, spriteH, 0, 0, spriteW, spriteH);
    cycle = (cycle + 1) % 8;
}, 120);





function branch (length, angle, scale) {
    cx.fillRect(0,0,1,length);
    if (length < 8) return;
    cx.save();
    cx.translate(0, length);
    cx.rotate(-angle);
    branch (length*scale, angle, scale);
    cx.rotate(2*angle);
    branch (length*scale, angle, scale);
    cx.restore();
}

cx.translate(300,0);
branch(60,0.5, 0.8);