class Log extends BaseClass{
  constructor(x,y,height,angle){ var options = {
    'restitution':0.8,
    'friction':.7,
    'density':1.0
}
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}