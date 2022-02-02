let clouds = [];

for (let c=0; c <5;c++){
    let cloud = new Cloud(1);
    clouds.push(cloud);
}

function drawSky(){
    for (let i=0;i<clouds.length;i++) {
        clouds[i].draw();
        clouds[i].move();

    }

}