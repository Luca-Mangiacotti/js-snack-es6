// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


//array dell'oggetto bikes
const bikes = [
    {
        name : "Atala",
        weight : 8000
    },
    {
        name : "Bianchi",
        weight : 5000
    },
    {
        name : "Olmo",
        weight : 7000
    },
    {
        name : "Cinelli",
        weight : 9000
    },
    {
        name : "Piaggio",
        weight : 5000
    },
    {
        name : "Ferrari",
        weight : 7000
    },
    {
        name : "Califfone",
        weight : 5000
    }

]

//dichiarazione variabili per il controllo ed il risultato
let weightCheck = bikes[0].weight
let result = ""

//ciclo di controllo
for (let i = 0; i < bikes.length ; i++){

    //SE il peso è minore di quello contenuto nella variabile di controllo 
     //ALLORA salvalo nella var di controllo e salva il nome della bici nel risultato
    if ( bikes[i].weight < weightCheck ){
        result = bikes[i].name
        weightCheck = bikes[i].weight
        //ALTRIMENTI SE il peso della bici è uguale a quello della variabile di controllo
        //aggiungi il nome della bici al risultato delle bici con peso minore
    } else if ( bikes[i].weight === weightCheck ) {
        result += ` , ${bikes[i].name}`
    }
    
}
 //output del risultato
console.log(weightCheck, result)



// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.