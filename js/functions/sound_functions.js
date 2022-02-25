let sound = new Audio();
sound.src ='assets/sounds/You_So_Zany.ogg';

let buttonMute = document.getElementById('button_mute');
let buttonUnmute = document.getElementById('buttonUnmute');

let volumeMusic = document.getElementById('range_volume');

let showVolume = document.getElementById('show_volume');

function getVolume(){
    showVolume.textContent = 'VOLUME : ' + volumeMusic.value;
}

getVolume()

buttonMute.disabled = true;

function playMusic(){
    
        sound.currentTime = 0;
        sound.volume = volumeMusic.value/100;
        sound.play();
} 


function mute(){
    buttonMute.disabled = true;
    buttonUnmute.disabled = false;
    sound.pause()
}

function unMute(){
    buttonMute.disabled = false;
    buttonUnmute.disabled = true;
    sound.play()
}
