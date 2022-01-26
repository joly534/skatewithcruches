// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');

canvas.width = '640';
canvas.height= '480';

// on instancie le sprite du skater
// let imageSkater = new Image();
// imageSkater.src ='assets/img/sprite_skater.png';
// on crée un nouveau skater
let skater = new Skater(200,350,25,25);

let image = new Image();
image.src = 'assets/img/desert.jpg';

let papierPeint = new PapierPeint(image, 0,-15,1920,495);


function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //le monde bouge
    papierPeint.draw()
    papierPeint.move()
    //le skater vie
    skater.draw();
    skater.forced()


    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);