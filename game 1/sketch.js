var alien1IMG;
var alien2IMG;
var alien3IMG;
var spaceIMG;
var redSpaceshipIMG;
var blueSpaceshipIMG;
var bulletsIMG;
var alien1;
var alien2;
var alien3;
var redSpaceship;
var blueSpaceship;
var bullet;


function preload(){
    alien1IMG=loadImage("/spacerace/alien 1 acc.png");
    alien2IMG=loadImage("/spacerace/alien 2.png");
    alien3IMG=loadImage("/spacerace/alien 3.png");
    spaceIMG=loadImage("/spacerace/background.jpg");
    bulletsIMG=loadImage("/spacerace/actual bullet.png");
    redSpaceshipIMG=loadImage("/spacerace/red_spaceship.png");
    blueSpaceshipIMG=loadImage("/spacerace/blue spaceship.png");


}

function setup(){
canvas=createCanvas(windowWidth,windowHeight);
alien2=createSprite(200,200);
alien2.addImage("alien2",alien2IMG);
alien2.scale=0.2;
alien1=createSprite(550,250);
alien1.addImage("alien1",alien1IMG);
alien1.scale=0.2;
alien3=createSprite(300,300);
alien3.addImage("alien3",alien3IMG);
alien3.scale=0.07;
redSpaceship=createSprite(600,800);
redSpaceship.addImage("redSp",redSpaceshipIMG);
redSpaceship.scale=0.2;
blueSpaceship=createSprite(800,800);
blueSpaceship.addImage("blueSp",blueSpaceshipIMG);
blueSpaceship.scale=0.09;

}

function draw(){
background(spaceIMG);
drawSprites();
}

