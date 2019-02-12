console.log("ça marche?")


// 1. Demander l'âge de la personne
let age = window.prompt ("Quel est ton âge?");
let fils = window.prompt ("Es tu le fils du patron?");

if (age >= 18 || fils == "oui" || fils == "ouais"){
    
    if (fils != "oui" && fils !=  "ouais"){
        window.alert ("Fais pas le malin !");
    }
    
    window.alert ("tu peux rentrer.");   
}
else {
    window.alert ("Rentre chez ta mère!");
}

/*let chaussures = window.prompt ("Quelles chaussures portez-vous?")


if ((age == 18) && (chaussures != "baskets")){
    window.alert ("Tu peux rentrer mais tu bois pas.");
} 
else if ((age > 18) && (chaussures != "baskets")){
   window.alert ("Tu peux rentrer et consommer."); 
}
else if (age < 12){
    window.alert ("J'appelle ton daron.")
}


else {
    window.alert("Casse toi de là");
}*/


