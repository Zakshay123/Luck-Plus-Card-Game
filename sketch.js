function preload(){

}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();



}
var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: dice.addImage(Dice1.png);
              break;
      case 2: dice.addImage(Dice2.png);
              break;
      case 3: dice.addImage(Dice3.png);
              break;
      case 4: dice.addImage(Dice4.png);
              break;
      case 5: dice.addImage(Dice5.png);
              break;
      case 6: dice.addImage(Dice6.png);
              break;
      default: break;
    }
    var rand1 = Math.round(random(1,6));
    switch(rand1) {
      case 1: dice1.addImage(Dice1.png);
              break;
      case 2: dice1.addImage(Dice2.png);
              break;
      case 3: dice1.addImage(Dice3.png);
              break;
      case 4: dice1.addImage(Dice4.png);
              break;
      case 5: dice1.addImage(Dice5.png);
              break;
      case 6: dice1.addImage(Dice6.png);
              break;
      default: break;
    }