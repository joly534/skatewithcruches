document.addEventListener('keydown', event => {
    if (event.keyCode == 32){ 
        console.log('ok')
            skater.jump();
            setTimeout(() => {
                skater.land()
                
            }, 100);
        
    }
})

// document.addEventListener('keyup', event => {
//     if (event.keyCode == 32) {
//             skater.land();
//             console.log(event)
//     }

// })

function getDistance(valOne, valTwo) {
    let value = valOne - valTwo;
    return value;
}

