let sound = new Audio();
sound.src ='assets/sounds/You_So_Zany.ogg';
let buttonMute = document.getElementById('button_mute');
let buttonUnmute = document.getElementById('buttonUnmute');

buttonMute.disabled = true;
buttonunMute.disabled = false;


function mute(){
    sound.pause();
    console.log('music pause');
    buttonMute.disabled = true;
    buttonunMute.disabled = false;
}

function unmute(){
    sound.currentTime = 0;
    sound.play();
    console.log('music play');
    buttonMute.disabled = false;
    buttonUnmute.disabled = true;
}