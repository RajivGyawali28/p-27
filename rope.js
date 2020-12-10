class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            body1:body1,
            body2:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.bodyA = body1;
    this.bodyB = body2;
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    display(){
            var bodyB = this.bodyB;
            strokeWeight(4);
            line(rope.bodyA.position.x, rope.bodyA.position.y, bodyB.x, bodyB.y);
    }
}