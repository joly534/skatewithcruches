let sound = new Audio();
sound.src ='assets/sounds/You_So_Zany.ogg';

let buttonMute = document.getElementById('button_mute');
let buttonUnmute = document.getElementById('buttonUnmute');

let volumeMusic = document.getElementById('range_volume');
let stateMusic = false;

let showVolume = document.getElementById('show_volume');

function getVolume(){
    showVolume.textContent = 'VOLUME : ' + volumeMusic.value;
}

getVolume()

buttonMute.disabled = true;

function playMusic(){
    if (stateMusic == true) {
        console.log(volumeMusic.value/100)
        sound.currentTime = 0;
        sound.volume = volumeMusic.value/100;
        sound.play();
        getVolume()
        

    } else {
        sound.pause();
        console.log('music pause');
        getVolume()
    }
}
function mute(){
    stateMusic = false;
    buttonMute.disabled = true;
}

function unMute(){
    stateMusic = true;
    buttonMute.disabled = false;
}