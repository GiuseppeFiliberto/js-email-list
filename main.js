/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailList = document.getElementById('list');


// creo una funzione per prendere la mail dall'API

function takeEmail() {
    return fetch ('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then (data => data.response)

}



const emailTest = takeEmail()
console.log(emailTest);
