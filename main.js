/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailList = document.getElementById('list');


// creo una funzione per prendere la mail dall'API

function takeEmail() {
    return fetch ('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then ((data) => {

        const emailEl = data.response;
        console.log(emailEl);
        
    })
        
    
}

//creo una funzione che generi casualmente 10 email che prenderà grazie alla funzione elaborata in precedenza


function emailGenerator() {


    for (let index = 0; index < 10; index++) {
        const emailTest = takeEmail()
        thisEmail = emailTest[index]
        let liEl = document.createElement('li');
        emailList.appendChild(liEl);
        
    }
}



const emailTest = takeEmail()
console.log(emailTest);

let test = emailGenerator()
console.log(test);

