class Cloud {
    #color
    constructor(index){
        this.skyX = window.innerWidth;
        this.x = Math.floor(Math.random()*this.skyX);
        this.y = 100;
        this.radius = Math.floor(Math.random()*30);
        this.opacity=[0.4,0.5,0.6,0.7,0.8,0.9];
        this.randomOpacity = this.opacity[Math.floor(Math.random()*this.opacity.length)];
        this.color = 'rgba(255,255,255,' + this.randomOpacity + ')';

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
            }
        }

    }
}