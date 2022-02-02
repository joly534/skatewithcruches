class Skater {
    constructor(gravity,floorY,width,height){
        this.elevation = 1;
        this.x = canvas.width/ 5;
        this.y =  floorY- height;
        this.width = width;
        this.height = height;
        this.elevation = 0;
        this.state = false;
        this.hauteur = this.y- this.height;
        this.calcul = 22 * (gravity - this.elevation);
        this.draw = function(){
            ctx.fillStyle = 'pink';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
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