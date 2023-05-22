//alert
alert('clicca per tirare i dadi');

//numero utente
let utente = Math.floor(Math.random() * 6 + 1);

//numero computer
let computer = Math.floor(Math.random() * 6 + 1);

//sconfitta
if(computer > utente){
    alert(`${utente} ${computer} Hai perso`);
}

//pareggio
else if(computer === utente){
    alert(`${utente} ${computer} Pareggio`);
}

//vittoria
else{
    alert(`${utente} ${computer} Hai vinto`);
}