// > PALINDROMA
let stringa = prompt("scrivi una parola")// inizializzo una variabile con prompt

function palindroma(str) {
    let reverted = "";
    for (let i = stringa.length - 1; i >= 0; i--){
        reverted += stringa[i];
    }
    console.log(reverted)
}

palindroma(stringa);
//     inizializzo una variabile che rappresenta la stringa girata
//     creo un ciclo for dalla length della stringa a 0
//         stringaGirata + stringa[index]
//     se sono uguali
//         return true
//     return false