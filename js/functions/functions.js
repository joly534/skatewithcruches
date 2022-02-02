document.addEventListener('keydown', event => {
    if (event.keyCode == 32){ 
        skater.jump();
        setTimeout(() => {
            skater.land();                
        }, 100);        
    }
})

document.addEventListener('keypress', event => {
    if (event.keyCode == 32){ 
        skater.draw();         
    }
})

function getDistance(valOne, valTwo) {
    let value = valOne - valTwo;
    return value;
}

