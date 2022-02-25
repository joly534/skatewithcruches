
//il est ou le trésor ? au pied de l'arc en ciel !!!
let treasure = [];
// il a quel gueule le butin ?
let imageCoin = new Image();
imageCoin.src = 'assets/img/spritesheet.png';
let bord = 0;

setInterval(() => {
    let money = new Money(imageCoin);
    treasure.push(money);            
}, 500);


function drawCoins() {
    
    for (let i = 0; i < treasure.length; i++) {
        treasure[i].draw();
        treasure[i].move();
        drawScoreGain(gain);

        //si les pièces ne sont pas récupérées
        if (treasure[i].x <= 0) {
            console.log('ok');
            treasure.shift();
        } 

        //si les pièces sont récupérees par le joueur
        else if ( (getDistance((skater.dx+skater.dwidth-35),treasure[i].x) >= 0)
        &&(getDistance(skater.dx,(treasure[i].x + treasure[i].radius)) < -20)
        &&(getDistance((skater.dy+skater.dheight-20),treasure[i].y) >= 0)) {      
            treasure.splice(i, 1);
            gain += 1;
        }
    }
}

 