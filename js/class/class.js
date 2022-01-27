class Skater {
    constructor(x,y,width,height){
        this.elevation = 1;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gravity = 1;

        this.draw = function(){
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'red';
            ctx.fill();
            //ctx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, dx, dy, dWidth, dHeight);
        };

        this.forced = function(){
            while (this.elevation !=0){
                // this.x += 1;
                this.y += 1;
                this.elevation -= 1;
            }
        }

        this.jump = function(){ 
            this.y -= 1;
            this.elevation += 1;
            //this.elevation += 1;
            console.log('ok');
        }
        
        this.land = function(){
            this.y += 1; 
        }

    } 
}