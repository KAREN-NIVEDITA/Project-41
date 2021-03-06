class Rain{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.05           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 4;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("teal")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        
    }
}