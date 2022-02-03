class Skater {
    constructor(image,gravity,floorY, dwidth, dheight){
        this.elevation = 1;
        this.dx = canvas.width/ 5;
        this.dy =  floorY- dheight;
        this.dwidth = 128;
        this.dheight = 128;
        this.elevation = 0;
        this.state = false;
        this.hauteur = this.y- this.height;
        this.calcul = 22 * (gravity - this.elevation);
        this.draw = function(){
            ctx.drawImage(image, 0,128,64,64, this.dx, this.dy, this.dwidth, this.dheight);
        };
        this.jump = function(){ 
                this.dy -= this.calcul ;
                this.elevation += .5; 

        }
        this.land = function(){
                this.dy += this.calcul ;
                this.elevation -= .5; 

        }
    } 
}