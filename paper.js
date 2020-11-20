class paper{
    constructor(x,y){
        var options={
          isStatic: false,
          restitution: 0.3,
          friction: 0.5, 
          density:1.2 
        }
        this.body = Bodies.circle(x,y,40,options);
        this.r = 40;
        this.img = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill('white')
       
        image(this.img,0,0,this.r,this.r);
        pop();
             }
}