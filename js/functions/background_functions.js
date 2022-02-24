function drawBackground(image, index, speed){
    
    
    // background first part 
    ctx.drawImage(image, 0, 1500, 8584, 4500, -((index * (speed / 2)) % 8584) + 8584, 0,8584, 4500);
    // background second part
    ctx.drawImage(image, 0, 1500, 8584, 4500, -(index * (speed / 2)) % 8584, 0, 8584, 4500);

}

function drawFloor(imageFloor, index, speed) {
    // floor first part 
    ctx.drawImage(imageFloor, 0, 0, 2999, 1050, -((index * (speed / 2)) % 2000) + 1999, 500,2000, 500);
    // floor second part
    ctx.drawImage(imageFloor, 0, 0, 2999, 1050, -(index * (speed / 2)) % 2000, 500, 2000, 500);

}