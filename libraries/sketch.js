var backgroundImg;
var snow,snow2;
var images = [];


function preload(){
  backgroundImg = loadImage("images/snow3.jpg");
  images.push(loadImage("images/snow4.webp"));
  images.push(loadImage("images/snow5.webp"));
}

function setup() {
  createCanvas(1300,700);

   snow = new Snow(random(10,1200),10,50,50);
   snow.velocityY = 2;

   snow2 = new Snow2(random(10,1200),10,50,50);
   snow2.velocityY = 2;

}

function draw() {
  background(backgroundImg); 
  
  snow.display();
  snow2.display();

  snow.rotation += 0.01;
  snow2.rotation += 0.01;
}