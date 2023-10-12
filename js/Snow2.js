class Snow2 {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.width = 50;
        this.height = 50;
        this.body = (x , y , this.width , this.height , options);
        this.image = loadImage("images/snow5.webp");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = atan2(pos.y - pmouseY, pos.x - pmouseX);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        image(this.image,random(10,1200),10,50,50);
        pop();
    }

};