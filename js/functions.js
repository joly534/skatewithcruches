document.addEventListener('keypress', event => {
    if (event.keyCode == 32) {
            skater.jump();
            skater.draw()
            console.log(event)
    }
})

document.addEventListener('keyup', event => {
    if (event.keyCode == 32) {
            skater.land();
            console.log(event)
    }

})