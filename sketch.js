var box1,box2,box3,box4, ball;
function setup () {
    createCanvas(800,400);
    box1=createSprite(100,390,100,20);
    box2=createSprite(300,390,100,20);
    box3=createSprite(500,390,100,20);
    box4=createSprite(700,390,100,20);
    ball=createSprite(Math.round(random(20,750)),200,20,20);
    box1.shapeColor="blue";
    box2.shapeColor="red";
    box3.shapeColor="yellow";
    box4.shapeColor="green";
    ball.velocityY=5   
   // ball.velocityY=-5
   
}
function draw(){
    background("white")
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    box1.collide(edges);
    box2.collide(edges);
    box3.collide(edges);
    box4.collide(edges);
    if(ball.isTouching(box1)&& box1.bounceOff(ball)){
       ball.shapeColor=rgb(100,200,50); 
       ball.velocityY=0
    }
    if(ball.isTouching(box2)&& box2.bounceOff(ball)){
        ball.shapeColor="red" 
        ball.velocityY=0
     }
     if(ball.isTouching(box3)&& box3.bounceOff(ball)){
        ball.shapeColor="yellow" 
        ball.velocityY=0
     }
     if(ball.isTouching(box4)&& box4.bounceOff(ball)){
        ball.shapeColor="green" 
        ball.velocityY=0
     }
    drawSprites();
}
