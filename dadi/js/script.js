//alert
alert('clicca per tirare i dadi');

//numero utente
let utente = Math.floor(Math.random() * 6 + 1);

//numero computer
let computer = Math.floor(Math.random() * 6 + 1);

//sconfitta
if(computer > utente){
    alert(`UTENTE: ${utente} COMPUTER: ${computer} /Hai perso`);
}

//pareggio
else if(computer === utente){
    alert(`UTENTE: ${utente} COMPUTER: ${computer} /Pareggio`);
}

//vittoria
else{
    alert(`UTENTE: ${utente} COMPUTER: ${computer} /Hai vinto`);
}