class Ball{
    constructor(x,y,radius){
        //this.visibility = 255;
       var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        if(mousePressedOver(pinkball)){
            image(pinkballImg, 0, 0, this.radius, this.radius);
        } else if(mousePressedOver(yellowball)){
            image(yellowballImg, 0, 0, this.radius, this.radius);
        } else if(mousePressedOver(greenball)){
            image(greenballImg, 0, 0, this.radius, this.radius);
        } else if(mousePressedOver(blueball)){
            image(blueballImg, 0, 0, this.radius, this.radius);
        } else if(mousePressedOver(purpleball)){
            image(purpleballImg, 0, 0, this.radius, this.radius);
        }

        pop();
    }
}