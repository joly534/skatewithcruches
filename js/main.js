// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');
canvas.width = '640';
canvas.height= window.innerHeight;

// à propos de l'interface
let container_commandes = document.getElementById('container_buttons');
container_commandes.width = 640;

let imageBackground = new Image();
imageBackground.src = 'assets/img/background.jpg';

let imageSkater = new Image();
imageSkater.src = 'assets/img/skater.png';

let index = 0;
//vitesse de défilement
let speed = 5;
//hauteur du sol
let floorY = 635;

const gravity = 3.5;

// on crée un nouveau skater
let skater = new Skater(imageSkater,gravity,floorY,128,128);
// on crée le sol
let sol = new Floor(floorY,canvas.width, canvas.height);

let score = 0;
function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    index ++;
    
    drawBackground(imageBackground, index, speed);
    //le skater vie
    skater.draw();
    sol.draw();
    drawSky();
    drawText(score);
    drawMoney();
    console.log(index)
    


    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);