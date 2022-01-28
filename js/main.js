// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');

canvas.width = '640';
canvas.height= '480';

// on instancie le sprite du skater
// let imageSkater = new Image();
// imageSkater.src ='assets/img/sprite_skater.png';

let image = new Image();
image.src = 'assets/img/desert.jpg';

let papierPeint = new PapierPeint(image, 0,-15,1920,495);
let index = 0;
let speed = 5 ;

const gravity = 3.5;
const floor = 300;

// on crée un nouveau skater
let skater = new Skater(gravity, floor,200,floor-25,25,25);


function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    index ++;
    // background first part 
    ctx.drawImage(image, 0, 0, 1920, 495, -((index * (speed / 2)) % 1920) + 1920, 0,1920, 495);
    // background second part
    ctx.drawImage(image, 0, 0, 1920, 495, -(index * (speed / 2)) % 1920, 0, 1920, 495);
    
    //le skater vie
    skater.draw();



    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);