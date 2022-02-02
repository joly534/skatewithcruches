let treasure=[];
let money = new Money(1);
treasure.push(money);

function drawMoney() {
    for (let i=0;i<treasure.length; i++) {
        treasure[i].draw();
        treasure[i].move();
        
        if (treasure[i].x == 0){
            treasure.splice(i, 1);
            let coin = new Money(1);
            treasure.push(coin);
        } else if (getDistanceXfromSkater(treasure[i].x-treasure[i].radius) == 0) {
            treasure.splice(i, 1);
            let coin = new Money(1);
            score += 1;
            treasure.push(coin);
            
        }
    }

}

