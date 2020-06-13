const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var piglet,piglet2;
var loglet,loglet2,log,log2;
var angrybird;

function setup(){
    var canvas = createCanvas(1250,551);
    engine = Engine.create();
    world = engine.world;

wall = new Wall(300,355,21,351);
wall1 = new Wall(758,355,21,351);
wall2 = new Wall(339,366,21,329);
wall3 = new Wall(359,366,21,329);
wall4 = new Wall(379,366,21,329);
wall5 = new Wall(399,366,21,329);
wall6 = new Wall(419,366,21,329);
wall7 = new Wall(439,366,21,329);
wall8 = new Wall(459,366,21,329);
wall9 = new Wall(479,366,21,329);
wall10 = new Wall(499,366,21,329);
wall11 = new Wall(519,366,21,329);
wall12 = new Wall(539,366,21,329);
wall13 = new Wall(559,366,21,329);
wall14 = new Wall(579,366,21,329);
wall15 = new Wall(599,366,21,329);
wall16 = new Wall(619,366,21,329);
wall17 = new Wall(639,366,21,329);
wall18 = new Wall(659,366,21,329);
wall19 = new Wall(679,366,21,329);
wall20 = new Wall(699,366,21,329);
wall21 = new Wall(719,366,21,329);
flag1 = new Flag(299,93,99,99);
flag2 = new Flag(750,93,99,99);
ground = new Ground(625,541,1250,20);
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   wall.display();
   wall1.display();
   wall2.display();
   wall3.display();
   wall4.display();
   wall5.display();
   wall6.display();
   wall7.display();
   wall8.display();
   wall9.display();
   wall10.display();
   wall11.display();
   wall12.display();
   wall13.display();
   wall14.display();
   wall15.display();
   wall16.display();
   wall17.display();
   wall18.display();
   wall19.display();
   wall20.display();
   wall21.display();
   flag1.display();
   flag2.display();
}