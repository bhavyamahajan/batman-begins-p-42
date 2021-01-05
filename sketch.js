var men;
var thunder;
var thunderImage;
var thunder2;
var thunder2Image;
var thunder3;
var thunder3Image;
var thunder4;
var thunderImg;
var menImage;
var score;
var rect;
function preload(){
    thunderImg = loadImage("images/thunderbolt/1.png");
    thunder2Image= loadImage("images/thunderbolt/2.png")
    thunder3Image= loadImage("images/thunderbolt/3.png")
    thunder4Image= loadImage("images/thunderbolt/4.png")
    menImage= loadImage("images/Walking Frame/walking_4.png")
}

function setup(){
    createCanvas(400, 400);


    thunder=createSprite(200,0)
    thunder.addImage("thunder" ,thunderImg)
    thunder.scale=.5

    thunder2=createSprite(-200,0)
    thunder2.addImage("thunder" ,thunder2Image)
    thunder2.scale=.5

    thunder3=createSprite(-200,0)
    thunder3.addImage("thunder" ,thunder3Image)
    thunder3.scale=.5

    thunder4=createSprite(-200,0)
    thunder4.addImage("thunder" ,thunder4Image)
    thunder4.scale=.5

    men=createSprite(100,300)
    men.addImage("men",menImage)
    men.scale=.2

    rect=createSprite(200,370,600,10)
    rect.shapeColor="red"


    score=0
}

function draw(){
    background("black")
text("Score:"+score,-200,200)
score=score+1

if(score>200){
    thunder2.x=200
    thunder2.y=0
    thunder.x=-200;
    thunder.y=0;
}
if(score>400){
    thunder2.x=-200
    thunder2.y=0
    thunder3.x=200
    thunder3.y=0

}
if(score>600){
    thunder3.x=-200
    thunder3.y=0
    thunder4.x=200
    thunder4.y=0
}
if(score>800){
    thunder4.x=-200
    thunder4.y=0
    thunder.x=200
    thunder.y=0
}
if(score>1000){
    thunder.x=-200
    thunder.y=0
    thunder2.x=200
    thunder2.y=0
}
if(score>1200){
    thunder2.x=-200
    thunder2.y=0
    thunder3.x=200
    thunder3.y=0
}
if(score>1400){
    thunder3.x=-200
    thunder3.y=0
    thunder4.x=200
    thunder4.y=0
}
if(keyDown("LEFT_ARROW")){
    men.velocityX=-1.5
}
if(keyDown("RIGHT_ARROW")){
    men.velocityX=1.5
}
    drawSprites()
}   

