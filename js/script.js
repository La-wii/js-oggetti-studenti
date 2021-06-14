// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: 'Stefano',
    cognome: 'Rossi',
    eta: 32
}



// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente){
    console.log(studente[key]);
}

// Creare un array di oggetti di studenti.

var arrayOggettiStudenti = [
    {
        nome: 'Francesca',
        cognome: 'Bianchi',
        eta: 23  
    },
    {
        nome: 'Paolo',
        cognome: 'Gialli',
        eta: 32
    },
    {
        nome: 'Marta',
        cognome: 'Verdi',
        eta: 32
    },
    {
        nome: 'Andrea',
        cognome: 'Viola',
        eta: 32
    }
];


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i = 0; i < arrayOggettiStudenti.length; i++){
    console.log(arrayOggettiStudenti[i].nome);
    console.log(arrayOggettiStudenti[i].cognome);
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

