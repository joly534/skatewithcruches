//il est ou le farfadet ? au pied de l'arc en ciel !!!
let treasure = [];
let money = new Money();
treasure.push(money);

function drawMoney() {
    for (let i = 0; i < treasure.length; i++) {
        treasure[i].draw();
        treasure[i].move();
        //si les pièces ne sont pas récupérées
        if (treasure[i].x == 0) {
            treasure.shift();
            let coin = new Money();
            treasure.push(coin);
        } 
        //si les pièces sont récupérees par le joueur
        else if ((getDistanceXfromSkater(treasure[i].x - treasure[i].radius) == 0) && 
                    (getDistanceYfromSkater(treasure[i].y) == 0)) {
            treasure.splice(i, 1);
            let coin = new Money();
            score += 1;
            treasure.push(coin);
        }
    }
}

