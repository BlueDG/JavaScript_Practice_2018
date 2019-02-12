console.log("vérif si ça marche");

/**
 * Créer une fonction DANS l'objet voiture qui s'appelle rouler
 * 1) elle prend un paramètre kms
 * 2) Elle affiche dans la console "J'ai roulé X kms"
 * 
 * 3) Vous appelez voiture.rouler(10);
 */

let voiture = { // les deux points créent des sous variables (aussi nommées propriétés) et agissent comme des variables. 
    marque: "Ford Edge",
    annee: 2014,
    kms: 65000, // pas besoin de virgules si pas de séparation entre différentes propritétés
    klaxonner: function() { 
        console.log("Tutututu");
    },
    rouler: function(kms){
        document.write(`<p>j'ai roulé <strong>${kms}</strong> kilomètres.</p>`);
        this.kms = this.kms + kms; 
        // on ajoute ici "this.kms et son addition" car c'est la fonction rouler qui impacte cette sous variable.
    },
    presentation: function(){
        document.write(`<p>Je suis une ${this.marque} de ${this.annee} et j'ai ${this.kms}kms.</p>`)
    }
    
};

/* ce sont des fonctions qui ne sont pas indépendantes mais qui existent au sein d'un objet */
// On appelle ça des méthodes. 
// on a un objet (voiture) qui possède des sous variables (qui sont des propriétés, des infos) mais aussi des méthodes (qui correspondent à des comportements) Les sous-variables en général peuvent être (des valeurs, des nombres, des phrases, des tableaux, propriétés, méthodes etc)
// DIT méthode DIT fonction AU SEIN D'UN OBJET

// utiliser this est un mot clef, une variable représentant l'objet dans lequel on se trouve.
// on saura directement que this traite d'une sous-variable (propriété) de cet objet "voiture"

voiture.presentation();
voiture.rouler(100);
voiture.presentation();
voiture.rouler(100);

