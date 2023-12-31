function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

//Stabilisco se la somma è pari o dispari
function isPari(somma) {
    return somma % 2 === 0;
}

// Richiedo all'utente di scegliere pari o dispari e inserire un numero
let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Genero un numero casua.....le per il computer
let numeroComputer = generaNumeroCasuale();

// Sommo i due numeri
let somma = numeroUtente + numeroComputer;

console.log('Hai scelto ' + sceltaUtente + ' e inserito il numero ' + numeroUtente);
console.log('Il computer ha generato il numero ' + numeroComputer);

// Stabilisco se la somma é pari o dispari
let risultatoPari = isPari(somma);

// Dichiarare il vincitore in console
if ((risultatoPari && sceltaUtente.toLowerCase() === 'pari') || (!risultatoPari && sceltaUtente.toLowerCase() === 'dispari')) {
    console.log("Hai vinto!");
} else {
    console.log("Il computer ha vinto!");
}
