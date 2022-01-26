// à propos du canvas
let canvas = document.getElementById('skate_park');
let ctx = canvas.getContext('2d');

// on instancie le sprite du skater
let imageSkater = new Image();
imageSkater.src ='assets/img/sprite_skater.png';
// on crée un nouveau skater
let skater = new Skater(imageSkater, 0,0,600,1920);


function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    skater.draw(50,50 ,125,250);
    if (skater.elevation > 0){
        skater.land();

    }


    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);