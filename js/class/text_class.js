class Bouton {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.draw = function(){
            ctx.fillstyle = 'white';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
        }
        this.text = function(){
            ctx.fillstyle = 'black';
            ctx.font='10px VT323';
            ctx.fillText('Followers : ', 50,30)

        }
    }
}