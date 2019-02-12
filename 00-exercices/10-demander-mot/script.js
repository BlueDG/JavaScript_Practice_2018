console.log("vérif");

/**
 * 1) Créer une fonction demanderMot qui reçoit un paramètre question 
 * 2) Elle demande un mot ou une phrase à l'utilisateur (window.prompt)
 * 3) Elle stocke la réponse
 * 4) Elle transforme la réponse en minuscules
 * 5) Elle retourne le résultat

 * 6) Appelez la fonction demanderMot en demandant à l'utilisateur son prenom
 * 7) Affichez le prénom de la personne sur la page
 */
 
let demanderMot = function(question){ // "Quel est ton prénom ?"
    let reponse = window.prompt(question);
    // let mot = window.prompt("Quel est ton prénom ?");
    let minuscule = reponse.toLowerCase();
    return minuscule;
};

/**
 * Première chose qu'on veut faire c'est connaitre le choix de l'ordinateur
 * -> On fait intervenir le hasard
 * -> Math.random()
 */

let choixOrdinateur;
let hasard = Math.random();

if(hasard < 0.33) {
    choixOrdinateur = "pierre";
} else if(hasard < 0.66) {
    choixOrdinateur = "papier";
} else {
    choixOrdinateur = "ciseaux";
}

document.write(`<p>L'ordinateur a choisi <strong>${choixOrdinateur}</strong></p>`)

/**
 * 2ème chose : connaitre le choix de l'utilisateur !
 */
let choixUtilisateur = demanderMot("Quel est votre choix (pierre, papier ou ciseaux ) ?");
document.write(`<p>Vous avez choisi <strong>${choixUtilisateur}</strong></p>`);

/**
 * Est-ce que la réponse est cohérente 
 */
if(choixUtilisateur != "pierre" && choixUtilisateur != "ciseaux" && choixUtilisateur != "papier") {
    document.write(`<h2>Vous avez entré une valeur incohérente (${choixUtilisateur})</h2>`);    
    document.write(`<p>Veuillez recharger la page !</p>`);    
} else {
    /**
     * 3ème étape : déterminer qui gagne
     */
    if(choixOrdinateur == choixUtilisateur){
        document.write(`<h2>Match nul !</h2>`);
    } else if(choixOrdinateur == "pierre" && choixUtilisateur == "ciseaux") {
        document.write(`<h2>Vous avez perdu</h2>`);
    } else if(choixOrdinateur == "papier" && choixUtilisateur == "pierre") {
        document.write(`<h2>Vous avez perdu</h2>`);
    } else if(choixOrdinateur == "ciseaux" && choixUtilisateur == "papier") {
        document.write(`<h2>Vous avez perdu</h2>`);
    } else {
        document.write(`<h2>Vous avez gagné !</h2>`);
    }    
}
