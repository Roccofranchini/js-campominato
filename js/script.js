/*
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/

// PREPARAZIONE

// 1 - creo un array per contenere le bombe;
// 2 - genero un numero random e lo inserisco nell'array fino a quando non arrivo a 16
// 3 - creo un array per ricordare i numeri scleti dall'utente
// 4 - tengo conto del punteggio

// GIOCO

// 1 - chiedo  il primo numero
// 2 - controllo se è una bomba (se lo è termina la partita)
// 3 - controllo se lo aveva scelto 
// 4 - lo aggiungo ai numeri scelti 
// 5 - incremento punteggio

// PARTITA FINITA
// 1 - messagio game alert
// 2 - punteggio


//PREPARAZIONE
const bombNumber = 16;
let max = 0;
let min = 1;
const display = document.getElementById('display');
const display2 = document.getElementById('display2');

let totalScore = 0;

const bombList = [];
const userNumberList = [];
const difficulty = parseInt(prompt('DIFFICOLTÀ, scegli tra i diversi livelli di difficoltà digitando 0, 1 oppure 2'));


// Difficoltà

while (difficulty !== 0 && difficulty !== 1 && difficulty !== 2) {

    difficulty = parseInt(prompt('DIFFICOLTÀ: scegli tra i diversi livelli di difficoltà digitando 0, 1 oppure 2'));

}

console.log(difficulty);
console.log(typeof (difficulty));

//  Livelli di difficoltà

if (difficulty === 0) {
    max = 100;
} else if (difficulty === 1) {
    max = 80;
} else {
    max = 50;
}

let range = max - bombNumber;

console.log(range);
console.log(max);


// riempiamo la lista delle 'bombe' con i numeri casuali


while (bombList.length < bombNumber) {
    var randomNumber = getRandomNumber(max, min);

    if (!bombList.includes(randomNumber)) {
        bombList.push(randomNumber);
    }
}

console.log(bombList);

// controlliamo

while (userNumberList.length < range) {

    var userChoiche = parseInt(prompt('scegli un numero da ' + min + ' a ' + max));

    console.log(userChoiche);

    console.log(bombList.includes(userChoiche));
    console.log(userNumberList.includes(userChoiche));

    if (!bombList.includes(userChoiche) && !userNumberList.includes(userChoiche)) {
        totalScore++;
        userNumberList.push(userChoiche);

        console.log('vuoto');



    } else if (!bombList.includes(userChoiche) && userNumberList.includes(userChoiche)) {
        alert('Inserisci un numero diverso da quelli già inseriti!');
    } else {
        console.log('sbagliato');

        break;


    }

}

console.log(userNumberList);

// stampiamo punteggio e livello di difficoltà scelto

display.innerHTML = 'Partita finita, il tuo punteggio è : ' + totalScore;
display2.innerHTML = 'DIFFICOLTÀ : ' + difficulty;



// funzione che genere numeri casuali

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}