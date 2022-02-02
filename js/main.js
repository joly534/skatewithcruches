// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');
canvas.width = '640';
canvas.height= '480';

// on instancie le sprite du skater
// let imageSkater = new Image();
// imageSkater.src ='assets/img/sprite_skater.png';

let image = new Image();
image.src = 'assets/img/background.jpg';

let papierPeint = new PapierPeint(image, 0,-15,2060,1080);
let index = 0;
//vitesse de défilement
let speed = 5;
let floorY = 335;

const gravity = 3.5;

// on crée un nouveau skater
let skater = new Skater(gravity,floorY, 25, 25);
// on crée le sol
let sol = new Floor(floorY,canvas.width, canvas.height);

let score = 0;
function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    index ++;
    // background first part 
    ctx.drawImage(image, 0, 1500, 8584, 4500, -((index * (speed / 2)) % 8584) + 8584, 0,8584, 4500);
    // background second part
    ctx.drawImage(image, 0, 1500, 8584, 4500, -(index * (speed / 2)) % 8584, 0, 8584, 4500);
    
    //le skater vie
    skater.draw();
    sol.draw();
    drawSky();
    drawScore(score);

    


    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);