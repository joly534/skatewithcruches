// pour le sol
class Floor {
    #color
    constructor(floorY,width, height) {
        this.x = 0;
        this.y = floorY;
        this.width = width;
        this.height = height;
        this.#color = 'green';

        this.draw = function() {
            ctx.fillStyle = this.#color;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
    }
}