// pour le sol
class Floor {
    constructor(floorY,width, height, color) {
        this.x = 0;
        this.y = floorY;
        this.width = width;
        this.height = height;
        this.color = color;

        this.draw = function() {
            ctx.fillStyle = this.color;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
    }
}