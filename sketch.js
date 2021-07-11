var starImg,bgImg,fairyImg;
var star, starBody;
var fairy, fairyBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice = loadSound("sound/JoyMusic.mp3");

	//create fairy sprite and add animation for fairy
	fairy = createSprite(150, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.20;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  keyPressed();
  if(star.position.y > 470){
	star.y = 470;
	fairy.y = 500;
	fairy.x = star.x - 140;
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	function keyPressed() {
		if(keyDown(LEFT_ARROW)){
			fairy.x -= 5;
		} else if(keyDown(RIGHT_ARROW)){
			fairy.x += 5;
		} else if(keyDown(DOWN_ARROW)){
			star.velocityY = 15;
		}
	}
	
}
