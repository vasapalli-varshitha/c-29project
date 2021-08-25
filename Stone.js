class Stone {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: false
      };
      this.r = 40;
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
  
    
  
    show() {
      var angle = this.body.angle;
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      pop();
      
    }
  }
  