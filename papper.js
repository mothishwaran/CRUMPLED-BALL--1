class Papper{
constructor(x,y){
    var options={
   isStatic:false,
   friction:0.5,
   density:1.2,
   restitution:0.3


    }
    this.body=Matter.Bodies.circle(x,y,20,options);
    this.radius=20;
     
    
   World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    fill ("yellow");
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
   
   

  
}
}