class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 0.1
      }
      this.body = Bodies.circle(x, y, 30, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("green");
      ellipse(0,0, 30, 30);
      pop();

    }
};
