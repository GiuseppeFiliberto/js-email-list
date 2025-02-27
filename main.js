/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailList = document.getElementById('list');


// creo una funzione per prendere la mail dall'API

function takeEmail() {
    return fetch ('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then ((data) => {
        console.log("qui ho eseguito tuttecose")
        const emailEl = data.response;
        console.log(emailEl);
        let liEl = document.createElement('li');
        liEl.innerText = emailEl;
        
        emailList.appendChild(liEl); 
        
    })
        
    
}

//creo una funzione che generi casualmente 10 email che prenderà grazie alla funzione elaborata in precedenza


function emailGenerator() {


    for (let index = 0; index < 10; index++) {

        console.log('qui entro nella funzione')
        const emailTest = takeEmail()
        console.log("qui proseguo con tuttecose");
       
        
    }
}





let test = emailGenerator()
console.log(test);

