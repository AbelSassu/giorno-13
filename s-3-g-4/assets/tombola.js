// Array per contenere le celle e numeri estratti
const celleArray = [];
const numeriEstratti = [];

// Funzione per creare il tabellone della Tombola
function creaTabellone() {
    const container = document.createElement("div");
    container.className = "tabellone";

    // Crea 9 righe
    for (let i = 1; i <= 9; i++) {
        const riga = document.createElement("div");
        riga.className = "riga";

        // Crea 10 celle per ogni riga
        for (let j = 1; j <= 10; j++) {
            const numero = (i - 1) * 10 + j;
            const cella = document.createElement("div");
            cella.className = "cella";
            cella.innerText = numero;

            // Aggiungi la cella all'array
            celleArray.push(cella);

            riga.appendChild(cella);
        }

        container.appendChild(riga);
    }

    document.body.appendChild(container);
}
// Funzione per gestire il click del bottone di estrazione
function estraiNumero() {
    if (numeriEstratti.length === 90) {
        alert("ARIDAJE, NUOVO GIRO NUOVA CORSA!");
        // Resetta l'array dei numeri estratti per un nuovo gioco
        numeriEstratti.length = 0;

        // Ricarica la pagina per iniziare un nuovo gioco
        location.reload();
    } else {
        let numeroEstratto;
        do {
            numeroEstratto = Math.floor(Math.random() * 90) + 1;
        } while (numeriEstratti.includes(numeroEstratto));

        // Aggiungi il numero estratto all'array
        numeriEstratti.push(numeroEstratto);

        alert("Numero estratto: " + numeroEstratto);

        // Trova la cella corrispondente al numero estratto nell'array e evidenziala
        const cellaCorrispondente = celleArray.find(cella => cella.innerText == numeroEstratto);

        if (cellaCorrispondente) {
            // Evidenzia la cella cambiandone il colore di sfondo
            cellaCorrispondente.style.backgroundColor = "yellow";
            evidenziaCellaGiocatore(numeroEstratto);
        }
    }
}

// Aggiungi un bottone per simulare l'estrazione
const bottoneEstrazione = document.createElement("button");
bottoneEstrazione.innerText = "Estrai Numero";
bottoneEstrazione.addEventListener("click", estraiNumero);
document.body.appendChild(bottoneEstrazione);

// Funzione per generare numeri casuali unici da 1 a 90 per la tabellina del giocatore
function generaNumeriCasualiGiocatore() {
    const numeriCasuali = [];
    while (numeriCasuali.length < 15) {
        const numeroCasuale = Math.floor(Math.random() * 90) + 1;
        if (!numeriCasuali.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
        }
    }
    return numeriCasuali;
}

// Funzione per creare la tabellina piccola del giocatore
function creaTabellinaGiocatore() {
    const container = document.createElement("div");
    container.className = "tabellina-giocatore";

    // Genera numeri casuali unici per la tabellina del giocatore
    const numeriCasualiGiocatore = generaNumeriCasualiGiocatore();

    // Crea una riga con 15 celle per il giocatore
    const riga = document.createElement("div");
    riga.className = "riga-giocatore";

    for (let i = 0; i < 15; i++) {
        const numero = numeriCasualiGiocatore[i];
        const cella = document.createElement("div");
        cella.className = "cella-giocatore";
        cella.innerText = numero;

        riga.appendChild(cella);
    }

    container.appendChild(riga);
    document.body.appendChild(container); 
}
    function evidenziaCellaGiocatore(numero) {
        const celleGiocatore = document.querySelectorAll('.tabellina-giocatore .cella-giocatore');
    
        celleGiocatore.forEach(cella => {
            if (parseInt(cella.innerText) === numero) {
                cella.style.backgroundColor = 'yellow';
                cella.classList.add('estratto'); // Aggiungi la classe "estratto"
            }
        });
    }
// Seleziona il bottone
const nuovaCartellaBtn = document.getElementById('nuovaCartellaBtn');

// Aggiungi un gestore di eventi al bottone
nuovaCartellaBtn.addEventListener('click', function() {
    // Genera e aggiungi la nuova cartella giocatore
    creaTabellinaGiocatore();
});
creaTabellinaGiocatore();
//Funzione per creare il tabellone
creaTabellone();

