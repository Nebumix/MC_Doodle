"use strict";
//canvas definition
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var buffer = document.createElement('canvas'); 
buffer.width = cvs.width; 
buffer.height = cvs.height;       
var buffer_context = buffer.getContext('2d'); 


var logo = new Image();
logo.src = "assets/img/logo.png";

var cat = new Image();
cat.src = "assets/img/cat.png";

var catX = -20;
var catLoop = 0;
var catMult = 0;
var catCostum = 0;

function logic(){
    catX+=2;

    if(catX > 1000){
        catX = -50
    }

    catLoop = ((catLoop * 10) + (0.2 * 10))/10;
    if(Number.isInteger(catLoop)){
        catCostum = 336 * catLoop;
        if(catLoop >= 8){
            catLoop = 0;
        }
    }

    // if(catLoop == 5 ){
    //     catCostum = 336 * catMult;
    //     catMult++;
    //     if(catMult > 8){
    //         catMult = 0;
    //     }
    //     catLoop = 0;
    // }
}

function drawLogo(){
    buffer_context.drawImage(logo, cvs.width / 2 - logo.width / 2, cvs.height / 2 - logo.height / 2);
}

function drawCat(){
    buffer_context.drawImage(cat, catCostum, 0, 336, 362, catX, 100, 100, 100);
}

function draw(){

        buffer_context.fillStyle ="#24a2ec";             
        buffer_context.fillRect(0, 0, cvs.width, cvs.height);  
        buffer_context.stroke();     

        drawLogo();
        drawCat();

        ctx.drawImage(buffer, 0, 0); 
}

function gameLoop(){
    logic();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
