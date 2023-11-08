/*
- Utilizzo loop for per raggruppare tutti i numeri che vanno da 1 a 100
- Con il modulo eseguo un controllo per le categorie richieste Fizz Buzz FizzBuzz
- Con la variabile const inserisco nel "contenitore box" tutti i box creati
- Utilizzando Bootstrap aggiungo le classi ai box cosi' da poter cambiare colore.
*/

const containerBox = document.querySelector('.container-box');

for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  containerBox.append(box);
  if (!(i % 3) && !(i % 5)) {
    box.append('FizzBuzz');
    box.classList.add('fizzbuzz');
  } else if (!(i % 3)) {
    box.append('Fizz');
    box.classList.add('fizz');
  } else if (!(i % 5)) {
    box.append('Buzz');
    box.classList.add('buzz');
  } else {
    box.append(i);
  }
  console.log(box);
}
