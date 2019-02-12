/**
 * Au clic sur un <li> il obtient la classe "selected" si il ne l'a pas
 * 
 * => element.classList.toggle("selected")
 * /
 * 
 * Nous voulons sélectionner tous les <li>
 * 
 * => document.querySelectorAll("li")
 * 
 * 
 * 
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let nombre = 0;
let total = document.querySelector('p span');


var elements = document.querySelectorAll("li"); // elements = li

// elements[0]
// elements[1]
// ...

for(let i = 0; i < 10; i++) {
    var li = elements[i];
    li.addEventListener("click", selectionner);
    
}


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function selectionner(){
    this.classList.toggle("selected");
    
    // si la classe selected est utilisée, alors on augmente le nombre de 1
    
    if(this.classList.contains("selected") == true){
        nombre++;
    }
    
    // sinon on diminue le nombre de 1
    else{
        nombre--;
    }
    
    
    
    // on affiche le nombre dans la page
    total.textContent = nombre;
    
}




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


