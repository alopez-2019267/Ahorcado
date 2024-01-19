"use strict"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // lo pone en un plano 2d que puedo empezar a dibujar
ctx.lineWidth = 8; // cuanto de ancho tiene la linea
var startx= 480; // la posicion inicial de x 
var starty = 200; // la posicion inicial de y
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(480, 200, 20, 0, 2 * Math.PI); // La cabeza
ctx.stroke();

const marco = () =>{
    contexto.beginPath()
    contexto.lineWidth=4
    contexto.moveTo(25, 25)
    contexto.lineTo(100,25)
    contexto.lineTo(100,40)
    contexto.moveTo(25,25)
    contexto.lineTo(25,125)
    contexto.stroke()
}

const cabeza = () =>{
    ctx.beginPath();
    ctx.lineWidth=2
    ctx.arc(480, 200, 20, 0, 2 * Math.PI); // La cabeza
    ctx.stroke();
}

marco()
