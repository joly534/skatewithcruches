//des boutons ...
let buttonWallet = document.createElement('button');
buttonWallet.textContent = 'WALLET';
buttonWallet.className = 'button_interface';
buttonWallet.addEventListener('click', test)
//des boutons ...
let buttonShop = document.createElement('button');
buttonShop.textContent = 'SHOP';
buttonShop.className = 'button_interface';
//des boutons ...
let buttonSettings = document.createElement('button');
buttonSettings.textContent = 'SETTINGS';
buttonSettings.className = 'button_interface';
//les boutons du haut
container_commandes.appendChild(buttonWallet);
container_commandes.appendChild(buttonShop);
container_commandes.appendChild(buttonSettings);


function drawText(score) {     
    ctx.fillStyle= 'white';
    ctx.font = '30px VT323';
    ctx.fillText(score + ' Crutches', 500, 50)

}

function test(){
    console.log('ok')
}