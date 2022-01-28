class Skater {
    constructor(gravity, floor,x,y,width,height){
        this.elevation = 1;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.elevation = 0;
        this.draw = function(){
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'red';
            ctx.fill();
            //ctx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, dx, dy, dWidth, dHeight);
        };

        this.jump = function(){ 
            if (this.y  != floor){
                this.elevation += .5;
                setInterval(() => {
                    this.y -= 11 * (gravity - this.elevation) ;
                    this.elevation += .5;
    
                    
                }, 15);
            } else {console.log('stop')}    
        }
        
        this.land = function(){
            if (this.y <= floor){
                this.y += gravity;
        
            }
        }

    } 
}