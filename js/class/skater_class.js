class Skater {
    constructor(gravity,floorY,width,height, color){
        this.elevation = 1;
        this.x = canvas.width/ 5;
        this.y =  floorY- height;
        this.width = width;
        this.height = height;
        this.color = color;
        this.elevation = 0;
        this.state = false;
        this.hauteur = this.y- this.height;
        this.calcul = 22 * (gravity - this.elevation);
        this.draw = function(){
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fill();
            //ctx.drawImage(image, this.sx, this.sy, this.sWidth, this.sHeight, dx, dy, dWidth, dHeight);
        };

        this.jump = function(){ 
                this.y -= this.calcul ;
                this.elevation += .5; 

        }
        this.land = function(){
                this.y += this.calcul ;
                this.elevation -= .5; 

        }
    } 
}