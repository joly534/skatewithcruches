class Cloud {

    constructor(index){
        this.skyX = 700;
        this.x = Math.floor(Math.random()*this.skyX);
        this.y = 100;
        this.radius = Math.floor(Math.random()*50);
        this.color = 'white';

        this.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x,this.y,this.radius,0,360);
            ctx.fill();

        }

        this.move = function(){
            this.x -= index;
            if (this.x< 0 - this.radius){
                this.x = this.skyX;
                console.log(canvas.width)
            }
        }

    }
}