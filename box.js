class box {
  constructor(x,y,width,height){
    
    var options = {
      
      restitution: 0.1,
      friction: 0.3,
      density: 1.0
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add (world, this.body);
    
    
    }
  
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      strokeWeight(5);
      stroke("white");
      
      fill("brown");
      rect(0, 0,this.width,this.height);
      pop();
      
      
      
    }
    }
    