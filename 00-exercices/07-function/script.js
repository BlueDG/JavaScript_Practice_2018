console.log("verif si ça marche");

let greet = function(name){
    document.write("<p>Bonjour " + name + ".</p>"); /* ça c'est le fonctionnement de la fonction */
    /* elle affiche avec doc.write ce que tu as en bleu + ce qu'il y a dans la fonction */ 
}


greet("Guillaume"); /* ça c'est ce que tu choisis de faire avec la fonction */ 
greet("Lior");
greet("Magalie"); 

/* ce qu'il y a entre parenthèses est variable mais entre les accolades est définitif */ 
/* entre les accolades c'est le fonctionnement, et entre les parenthèses c'est les infos, les paramètres spécifiques */
/* greet est le nom d'une fonction; qui prend un paramètre intitulé name */ 



/////////*********************************///////// autre exercice /////////


let EntrerOuPas = function(age){  
/* on crée une fonction nommée EntrerOuPas qui travaille sur un paramètre nommé age */
/* son fonctionnement selon le paramètre choisi est en dessous */ 
    if(age >= 18){
        document.write("<p>Tu peux rentrer</p>");
    }
    else{
        document.write("<p>Tu ne peux pas rentrer</p>");
    }
}


EntrerOuPas(28);
EntrerOuPas(15);

/////////*********************************///////// autre exercice /////////


let calcul = function(nombre1, nombre2, operation){ /* double égal pr poser la question */
    if(operation == "multiplier"){
        document.write(`<p>Le résultat est : ${nombre1 * nombre2}</p>`);
    }
    else if(operation == "diviser"){
        document.write(`<p>Le résultat est : ${nombre1 / nombre2}</p>`);
    }
    else if(operation == "soustraire"){
        document.write(`<p>Le résultat est : ${nombre1 - nombre2}</p>`);
    }
    else{
        document.write(`<p>Le résultat est: ${nombre1 + nombre2}</p>`);
    }
}

calcul(25, 12, "soustraire");

/* cette fonction accepte 3 paramètres, deux nombres et un mot */ 


/////////*********************************///////// autre exercice /////////



// let habiller = function(temperature){
function habiller(temperature) {
    if(temperature > 20){
        return "short";
    }
    else{
        return "pantalon";
    }
}


let habit = habiller(29); 
/* habit contient le résulat du fonctionnement d'habiller */
/* habit est donc une variable alors qu'habiller est une fonction */ 
/* la variable contient le résultat et donc le fonctionnement de la fonction */
    document.write(`<p>Tu dois porter un ${habit}`);



/////////*********************************///////// autre exercice /////////
/**
 * 1) Créer une fonction demanderNombre
 * 2) Elle demande un nombre à l'utilisateur (window.prompt)
 * 3) Elle transforme la réponse en un vrai nombre (parseFloat)
 * 4) Elle retourne le nombre
 *
 * 5) Appelez la fonction demanderNombre et stockez le résultat dans une variable
 * 6) Affichez le résultat !
 */

// On créé une fonction demanderNombre qui prend un paramètre question
let demanderNombre = function(question){
    // On demande à l'utilisateur d'entrer une info et on la stocke dans nombre
    let nombre = window.prompt(question);
    // On transfrome le nombre en vrai nombre et on stocke dans nombre
    nombre = parseFloat(nombre);
    // La fonction retourne le nombre
    return nombre;
}

let age = demanderNombre("Quel est votre âge ?");
let poids = demanderNombre("Quel est votre poids ?");

document.write(`<p>votre âge est ${age} ans</p>`);
document.write(`<p>votre poids est ${poids} kg</p>`);


