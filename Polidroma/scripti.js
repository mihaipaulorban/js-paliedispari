/*
Suggerimenti di parole polindrome
radar
livello
anna
otto
osso
riconoscer
rotor
civic
annona
elle
*/

// Creo la funzione
function isPalindroma(parola) {
    // Converti la parola in minuscolo per rendere il confronto senza distinzione tra maiuscole e minuscole
    parola = parola.toLowerCase();

    // Inverti la parola
    let parolaInvertita = parola.split('').reverse().join('');

    // Confronta la parola originale con quella invertita
    if (parola === parolaInvertita) {
        return true; // La parola è palindroma
    } else {
        return false; // La parola non è palindroma
    }
}

// Passo 1: Richiedere all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola:");

// Passo 3: Restituire il risultato all'utente
if (isPalindroma(parolaUtente)) {
    console.log(parolaUtente + " è una parola palindroma!");
} else {
    console.log(parolaUtente + " non è una parola palindroma.");
}
