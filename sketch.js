var canvas;
var backgroundImage;
var database;
var placesImg,Ggirl,Pgirl,Gboy,Rboy;
var goldcoin,cop1Img,cop2Img;
var form,game,player, playerCount,gameState;
var Rboy1, Gboy2, Pgirl1, Ggirl2;
var allPlayers;
var bgimg;
var gamers=[];

function preload() {
 backgroundImage=loadImage("imagess/background.png")
 placesImg=loadImage("imagess/gamebg.png");
 Ggirl=loadAnimation("imagess/greengirl1.png","imagess/greengirl2.png","imagess/greengirl3.png","imagess/greengirl4.png","imagess/greengirl5.png","imagess/greengirl6.png")
 Pgirl=loadAnimation("imagess/pinkgirl1.png","imagess/pinkgirl2.png","imagess/pinkgirl3.png","imagess/pinkgirl4.png","imagess/pinkgirl5.png","imagess/pinkgirl6.png")
 Gboy = loadAnimation("imagess/greenboy1.png", "imagess/greenboy2.png", "imagess/greenboy3.png", "imagess/greenboy4.png", "imagess/greenboy5.png", "imagess/greenboy6.png")
 Rboy = loadAnimation("imagess/boy1.png", "imagess/boy2.png", "imagess/boy3.png", "imagess/boy4.png", "imagess/boy5.png", "imagess/boy6.png")
 cop1Img = loadImage("imagess/cop1.png")
 cop2Img = loadImage("imagess/cop2.png")
 goldcoin = loadImage("imagess/goldCoin.png")
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game=new Game();
  game.getState();
  game.start();
 bgimg=backgroundImage;
}

function draw() {
  background(bgimg);

 if(playerCount===4) {
   game.update(1)
 }

 if(gameState === 1){
  game.play();
}}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
