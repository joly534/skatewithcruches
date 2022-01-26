class Skater {
    constructor(image, sx,sy,sWidth,sHeight){
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.gravity = 1;
        this.elevation = 0;

        this.draw = function(dx,dy,dWidth,dHeight){
            ctx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, dx, dy, dWidth, dHeight);
        };

        this.gravity = function(){
            if (this.elevation != 0) {
                this.sy += 1 * this.gravity;
                console.log('tombe')
            }
        }

        this.jump = function(){
            this.sy += 1;
            this.elevation += 1;
            console.log(this.elevation)
        };

        this.land = function(){
            this.sy -= 1; 
            this.elevation -= 1;
            console.log(this.elevation + 'tombne')
        }

    } 
}