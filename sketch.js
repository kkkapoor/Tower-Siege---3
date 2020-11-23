//Renaming..
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Declared the variables here.

var bg_color = "";
var bg = "black";

//declaring the variable of polygon.
var polygon;

//declaring grounf=d variable.
var ground;

//stands
var stand1;
var stand2;

//25 blocks
var block1;

var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;

//declaring teh variable of slingshot
var slingShot;

//Declaring variable score..
var score = 0;

function preload()
{
  getBgCol();
  bg_color = bg;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Create the ground here.
	ground = new Ground(400,690,width,20);

	//create stands here.
	stand1 = new Ground(350, 550, 210,10);
	stand2 = new Ground(650, 350,150,10);

	//level 1 of stand1.
	block1 = new Box1(260, 525,30,40);
	block2 = new Box1(290, 525,30,40);
	block3 = new Box1(320, 525,30,40);
	block4 = new Box1(350, 525,30,40);
	block5 = new Box1(380, 525,30,40);
	block6 = new Box1(410, 525,30,40);
	block7 = new Box1(440, 525,30,40);

	//level 2 of stand1.
	block8  = new Box2(290, 485,30,40);
	block9  = new Box2(320, 485,30,40);
	block10 = new Box2(350, 485,30,40);
	block11 = new Box2(380, 485,30,40);
	block12 = new Box2(410, 485,30,40);

	//level 3 of stand1.
	block13  = new Box3(320, 445,30,40);
	block14 = new Box3(350, 445,30,40);
	block15 = new Box3(380, 445,30,40);

	//top of stand1.
	block16 = new Box4(350,405,30,40);

	//level 1 of stand2.
	block17 = new Box1(590,325,30,40);
	block18 = new Box1(620,325,30,40);
	block19 = new Box1(650,325,30,40);
	block20 = new Box1(680,325,30,40);
	block21 = new Box1(710,325,30,40);
	
	//level2 of stand2.
	block22 = new Box2(620,285,30,40);
	block23 = new Box2(650,285,30,40);
	block24 = new Box2(680,285,30,40);

	//top of stand2.
	block25 = new Box3(650,245,30,40);

	//polygon
	polygon = new Polygon(100,450,15);

	//slings
	slingShot = new SlingShot(polygon.body,{x:100,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  if (bg_color)
  background(bg_color);
  
  textSize(20);
  fill("gold");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 70,70);
  fill("red");
  text("SCORE: "+ score, 650,40);
 
  //Display the bodies here.
  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block1.score1();
  block2.score1();
  block3.score1();
  block4.score1();
  block5.score1();
  block6.score1();
  block7.score1();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block8.score2();
  block9.score2();
  block10.score2();
  block11.score2();
  block12.score2();

  block13.display();
  block14.display();
  block15.display();

  block13.score3();
  block14.score3();
  block15.score3();

  block16.display();

  block16.score4();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block17.score1();
  block18.score1();
  block19.score1();
  block20.score1();
  block21.score1();

  block22.display();
  block23.display();
  block24.display();

  block22.score2();
  block23.score2();
  block24.score2();

  block25.display();

  block25.score3();

  polygon.display();

  slingShot.display();
 
 

}

//Making the mouseDragged function...

function mouseDragged()
	{
		Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
	}

//Making the mouseReleased function...

function mouseReleased()
	{
		slingShot.fly();
	}

//Making the keyPressed function...
function keyPressed()
	{
    Matter.Body.setPosition(polygon.body,{x: 150, y:520 });
		slingShot.attach(polygon.body);
  }
  
 async function getBgCol(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >=06 && hour<=19){
      bg = "lightSkyBlue";
    } else {
      bg = "MidnightBlue";
    }
    bg_color = bg;
  
  
  }

