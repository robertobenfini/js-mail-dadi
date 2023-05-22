//array mail
let mail = ['nome.uno@mail.it', 'nome.due@mail.it', 'nome.tre@mail.it', 'nome.quattro@mail.it', 'nome.cinque@mail.it', 'nome.sei@mail.it', 'nome.sette@mail.it', 'nome.otto@mail.it', 'nome.nove@mail.it', 'nome.dieci@mail.it']

//promt mail
let mail_utente = prompt("Inserire l'indirizzo e-mail")

//veriabile flag
let flag = false;

//ciclo for
for (let i=0; i<mail.length; i++){
    if(mail[i].toLowerCase() === mail_utente.toLowerCase())
    flag = true;
}

//mail trovata
if(flag === true){
    alert("Mail trovata")
}

//mail non trovata
else{
    alert("Mail non trovata")
}