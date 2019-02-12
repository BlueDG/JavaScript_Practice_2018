document.write("<h2>calculs multiplication et division</h2>");

// Exercice n°1

// 1. créer une fonction multiplier qui recevra 2 nombres et 
// qui retournera la multiplication
// tester la en multipliant 2 et 5 et affichez dans la console
// le résultat

// 2. créer une fonction diviser qui recevra 2 nombres et qui retournera la division
// tester en divisant 10 et 2. 



// technique classique ou historique pour multiplication
// On crée une fonction qui multiplie
function multiplier (nombre1, nombre2){
    return nombre1 * nombre2;
}

// On crée une variante de multiplication
let multiplication = multiplier (2, 5);
document.write(`la multiplication vaut ${multiplication}.`);


// technique fléchée pour division
//On créer une fonction qui divise
let diviser = (nombre1, nombre2) => nombre1 / nombre2;

// On crée un type de division en utilisant la fonction qui divise
let division = diviser (10, 2);
document.write(`la division vaut ${division}.`); 
console.log (division);

// on crée une fonction intitulée diviser qui fait l'action de deux ou trois façons différentes.
// puis on réalise cette action en faisant une variable réalisant l'action.


// Créeons maintenant cette action via une question popup
// on crée une variable intitulée choix1 qui gère une popup
let choix1 = window.prompt("Quel nombre voulez-vous multiplier?");
let choix2 = window.prompt("Par combien?");

//On crée une variable multiplication2 qui utilise la fonction multiplier utilisant des choix
let multiplication2 = multiplier (choix1, choix2);
console.log(multiplication2);

// Même système mais en division
let choix3 = window.prompt("Quel nombre voulez-vous diviser?");
let choix4 = window.prompt("Par combien?")

let division2 = diviser (choix3, choix4);
console.log(division2);