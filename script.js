var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); // lo pone en un plano 2d que puedo empezar a dibujar
ctx.lineWidth = 8; // cuanto de ancho tiene la linea
var startx= 480; // la posicion inicial de x 
var starty = 200; // la posicion inicial de y
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(startx, starty, 20, 0, 2 * Math.PI); // La cabeza
ctx.stroke();
