document.addEventListener('keydown', event => {
    if (event.keyCode == 32){ 
        skater.jump();
        setTimeout(() => {
            skater.land();                
        }, 100);        
    }
})

function getDistance(valOne, valTwo) {
    let value = valOne - valTwo;
    return value;
}


