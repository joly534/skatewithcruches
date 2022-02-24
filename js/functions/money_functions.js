
//il est ou le trésor ? au pied de l'arc en ciel !!!
let treasure = [];
// il a quel gueule le butin ?
let imageCoin = new Image();
imageCoin.src = 'assets/img/coin.png';

setInterval(() => {
    let money = new Money(imageCoin);
    treasure.push(money);            
}, 1000);


function drawCoins(gain) {
    
    for (let i = 0; i < treasure.length; i++) {
        treasure[i].draw();
        treasure[i].move();
        //si les pièces ne sont pas récupérées
        if (treasure[i].x == 0) {
            console.log('ok');
            treasure.shift();
        } 

        //si les pièces sont récupérees par le joueur
        else if (getDistance((skater.dx+skater.dwidth),treasure[i].x) == 0){                        
            console.log('piece touchée');
            treasure.splice(i, 1);
            gain += 1;
        }
    }
}

 