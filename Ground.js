class Ground{
    constructor(x,y,width,height,color){
        
        var options={
            isStatic: true
            
        }
        this.width = width;


        this.height = height;

        this.color=color;

        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        console.log(this.color)
        fill(this.color);   
        rect(pos.x,pos.y,this.width,this.height)


    }
}