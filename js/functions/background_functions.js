function drawBackground(image, index, speed){
    
    
    // background first part 
    ctx.drawImage(image, 0, 1500, 8584, 4500, -((index * (speed / 2)) % 8584) + 8584, 0,8584, 4500);
    // background second part
    ctx.drawImage(image, 0, 1500, 8584, 4500, -(index * (speed / 2)) % 8584, 0, 8584, 4500);

}