class PapierPeint {
    constructor(image, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;

        this.draw = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height );
            if (this.x == -this.width) {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
                console.log('ok')
            }
        };

        this.move = function() {
            this.x -= 1;
            if (this.x == -this.width){
                this.x = 0;
            }
        }
    }
}