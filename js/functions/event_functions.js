document.addEventListener('keydown', event => {
    if (event.keyCode == 32){ 
        skater.jump();
        setTimeout(() => {
            skater.land();                
        }, 100);        
    }
})

function getDistanceXfromSkater(val) {
    let value = val - (skater.x + skater.width);
    return value;
}

function getDistanceYfromSkater(val) {
    let value = val - (skater.y + skater.height);
    return value;
}

