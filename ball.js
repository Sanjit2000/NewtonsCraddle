class Ball {
    constructor (x,y,r){
    var options = {
    restitution : 0.9,
    density : 1,
    friction : 0.5,
     isStatic : false
    }
    this.body = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    
    display(){
    
    var pos =this.body.position;
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,40,40)
    
    }
    
    }