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

class Cloud {
    constructor(index){
        this.skyX = window.innerWidth;
        this.x = Math.floor(Math.random()*this.skyX);
        this.y = 100;
        this.radius = Math.floor(Math.random()*30);
        this.opacity=[0.4,0.5,0.6,0.7,0.8,0.9];
        this.randomOpacity = this.opacity[Math.floor(Math.random()*this.opacity.length)];
        this.color = 'rgba(255,255,255,' + this.randomOpacity + ')';

        this.draw = function(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x,this.y,this.radius,0,360);
            ctx.fill();

        }

        this.move = function(){
            this.x -= index;
            if (this.x< 0 - this.radius){
                this.x = this.skyX;
            }
        }

    }
}

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

class Money {
    constructor(image) {
        this.x = window.innerWidth;
        this.y = 550;
        this.radius = 10;
        this.image = image;
        this.step = 0;

        //ANIMATION DE LA PIECE
        setInterval(() => {
            this.step ++;
            if (this.step >= 6 ){this.step = 0}
        }, 150);


        this.draw = function() {
            ctx.drawImage(this.image, 200 * this.step, 0, 210, 210, this.x, this.y, 40, 40);
        }

        this.move = function() {
            this.x -= 4;
        }
    }
}