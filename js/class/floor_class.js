// pour le sol
class Floor {
    constructor(floorY,width, height) {
        this.x = 0;
        this.y = floorY;
        this.width = width;
        this.height = height;

        this.draw = function() {
            ctx.fillStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
    }
}