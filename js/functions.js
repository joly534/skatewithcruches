document.addEventListener('keypress', event => {
    if (event.keyCode == 32){
        skater.jump();
        setTimeout(() => {
            skater.land();
            
        }, 100 );
    } else { 
        //
    }
})