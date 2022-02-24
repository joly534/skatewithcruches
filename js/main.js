// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth -1;
canvas.height= window.innerHeight -1;
ctx.imageSmoothingEnabled = false;

//à propos du background
let imageBackground = new Image();
imageBackground.src = 'assets/img/background.jpg';
//on initialise le sprite skater
let imageSkater = new Image();
imageSkater.src = 'assets/img/skater.png';

let index = 0;
//vitesse de défilement
let speed = 5;
//hauteur du sol
let floorY = 635;
//gravité
const gravity = 3.5;
//nombre de followers
let scoreFollowers = 0;
//montant des gains
let gain = 0;

let myStockage = window.localStorage;


// on crée un nouveau skater
let skater = new Skater(imageSkater,gravity,floorY,128,128);
// on crée le sol
let sol = new Floor(floorY,canvas.width, canvas.height);

let skatePos = skater.x + skater.width;
function update(){
    //on rafraichit le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    index ++;
    
    drawBackground(imageBackground, index, speed);
    //le skater vie
    skater.draw();
    sol.draw();
    drawSky();
    
    drawFollowers(scoreFollowers);
    drawGain(gain);
    

    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);