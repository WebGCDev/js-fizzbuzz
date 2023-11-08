/*
- Utilizzo loop for per raggruppare tutti i numeri che vanno da 1 a 100
- Con il modulo eseguo un controllo per le categorie richieste Fizz Buzz FizzBuzz
- Con la variabile const inserisco nel "contenitore box" tutti i box creati
- Utilizzando Bootstrap aggiungo le classi ai box cosi' da poter cambiare colore.
*/

for (let i = 1; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log(i + ' FizzBuzz');
  } else if (!(i % 3)) {
    console.log(i + ' Fizz');
  } else if (!(i % 5)) {
    console.log(i + ' Buzz');
  }

  console.log(i);
}
