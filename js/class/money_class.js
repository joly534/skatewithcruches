class Money {
    constructor() {
        this.x = window.innerWidth;
        this.y = 620;
        this.radius = 10;

        this.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = '#ffd700';
            ctx.arc(this.x, this.y, this.radius, 0, 360);
            ctx.fill();
        }

        this.move = function() {
            this.x -= 4;
        }
    }
}