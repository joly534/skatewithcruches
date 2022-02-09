
//il est ou le trésor ? au pied de l'arc en ciel !!!
let treasure = [];
let money = new Money();
treasure.push(money);

function drawGain(gain) {
    for (let i = 0; i < treasure.length; i++) {
        treasure[i].draw();
        treasure[i].move();

        //si les pièces ne sont pas récupérées
        if (treasure[i].x + treasure[i].radius == 0) {
            console.log('ok');
            treasure.shift();
            let coin = new Money();
            treasure.push(coin);
        } 

        //si les pièces sont récupérees par le joueur
        else if (getDistance((skater.dx+skater.dwidth),treasure[i].x) == 0){
                        
            console.log('piece touchée');
            treasure.splice(i, 1);
            let coin = new Money();
            gain += 1;
            treasure.push(coin);
        }
    }
}

