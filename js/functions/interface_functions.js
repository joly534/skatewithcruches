//BUTTONS
let buttonWallet = document.getElementById('bouton_wallet');
let buttonSocial = document.getElementById('bouton_social');
let buttonShop = document.getElementById('bouton_shop');
let buttonSettings = document.getElementById('bouton_settings');
// SCREENS CONTROL
let wallet = document.getElementById('wallet');
let social = document.getElementById('social');
let shop = document.getElementById('shop');
let settings = document.getElementById('settings');

//VISUALIZE WALLET
function show_wallet(){
    if (wallet.style.display == 'block') {
        wallet.style.display = 'none';
        buttonWallet.className = 'inactive_button';
        //put out the focus
        buttonWallet.blur();

    } else {
        wallet.style.display = 'block';
        social.style.display = 'none';
        shop.style.display = 'none';
        settings.style.display = 'none';
        buttonWallet.className = 'active_button';
        buttonSocial.className = 'inactive_button';
        buttonShop.className = 'inactive_button';
        buttonSettings.className = 'inactive_button';
    }
}

//POUR VISUALISER LES RESEAUX SOCIAUX
function show_social(){
    if (social.style.display == 'block') {
        social.style.display = 'none';
        buttonSocial.className = 'inactive_button';
        //put out the focus
        buttonSocial.blur();

    } else {
        social.style.display = 'block';
        wallet.style.display = 'none';
        shop.style.display = 'none';
        settings.style.display = 'none';
        buttonWallet.className = 'inactive_button';
        buttonSocial.className = 'active_button';
        buttonShop.className = 'inactive_button';
        buttonSettings.className = 'inactive_button';
    }
}

//POUR VISUALISER LE MAGASIN
function show_shop(){
    if (shop.style.display == 'block') {
        shop.style.display = 'none';
        buttonShop.className = 'inactive_button';
        //put out the focus
        buttonShop.blur();

    } else {
        shop.style.display = 'block';
        wallet.style.display = 'none';
        social.style.display = 'none';
        settings.style.display = 'none';
        buttonWallet.className = 'inactive_button';
        buttonSocial.className = 'inactive_button';
        buttonShop.className = 'active_button';
        buttonSettings.className = 'inactive_button';
    }
}

//POUR VISUALISER LES PARAMETRES
function show_settings(){
    if (settings.style.display == 'block') {
        settings.style.display = 'none';
        buttonSettings.className = 'inactive_button';
        //put out the focus
        buttonSettings.blur();

    } else {
        settings.style.display = 'block';
        wallet.style.display = 'none';
        social.style.display = 'none';
        shop.style.display = 'none';
        buttonWallet.className = 'inactive_button';
        buttonSocial.className = 'inactive_button';
        buttonShop.className = 'inactive_button';
        buttonSettings.className = 'active_button';
    }
}


let screenFollowers = document.getElementById('followers');
let screenGain = document.getElementById('gain');

function drawFollowers(value) {     
    screenFollowers.innerHTML= value + ' FOLLOWERS' ;

}

function drawScoreGain(value) {     
    screenGain.innerHTML= 'GAIN : ' + value + ' CRUTCHES';

}