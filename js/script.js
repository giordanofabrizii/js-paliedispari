// > PALINDROMA
let stringa = prompt("scrivi una parola").toLowerCase()

function palindroma(str) {
    let reverted = "";
    for (let i = stringa.length - 1; i >= 0; i--){
        reverted += stringa[i];
    }
    if (stringa === reverted) {
        console.log("la parola e' palindroma");
    } else {
        console.log("la parola non e' palindroma");
    }
}

palindroma(stringa);


// > PARI E DISPARI
let moneta = prompt("ciao scegli tra pari e dispari").toLowerCase(); // sceglie tra pari e dispari
while (moneta !== "pari" && moneta !== "dispari") {
    moneta = prompt("ciao scegli tra pari e dispari").toLowerCase();
}

let numero = Number.parseInt(prompt("scrivi un numero da 1 a 5")); // chiedo un numero da 1 a 5
while (isNaN(numero) != 0 || numero > 5 || numero < 1) {
    numero = Number.parseInt(prompt("scrivi un numero da 1 a 5"));
}

function pariDispari(scelta, number) {
    let somma = number + Math.floor(Math.random()*5 + 1); // sommo moneta e un numero da 1 a 5

    if ((somma % 2 == 0 && scelta == "pari") || (somma % 2 == 1 && scelta == "dispari")) {
        console.log("hai vinto");
    } else {
        console.log("hai perso")
    }
}

pariDispari(moneta, numero);