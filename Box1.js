class Box1{
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
      restitution: 0.4,
      friction:0.0
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  score1(){
    if(this.Visibility  === 0){
      score = score+1;
    }
  }


  display(){
    console.log(this.body.speed);
    if(this.body.speed < 5){

    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
   
    }else {
      World.remove(world, this.body)
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      pop();
    }
  }
};
