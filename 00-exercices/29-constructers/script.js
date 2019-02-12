function Car(marque, couleur) {
    this.marque = marque;
    this.couleur = couleur;
    
    this.rouler = function(){
        console.log(`Je suis une ${this.marque} de couleur ${this.couleur}`);
    }
}

Car.prototype.reculer = function(){
    console.log("Je recule");
}

const voiture = new Car('Renault', 'Rouge');
const voiture2 = new Car('Peugeot', 'Bleue');


// voiture.reculer();
// voiture2.reculer();

// voiture.rouler();
// voiture2.rouler();

// console.log(voiture);
// console.log(voiture2);

// const prenom = "Lior";
const prenom = new String("Lior");
const nom = "Chamla";

Car.prototype.reculer = function(){
    console.log("Je recule");
}

String.prototype.fonctionALaCon = function(){
    console.log("Fonction débile");
}

prenom.fonctionALaCon();
nom.fonctionALaCon();

console.log(prenom);
console.log(nom);


// on peut ajouter NIMPORTE QUELLE fonction de notre choix en tapant simplement ton type puis prototype puis ta fonction. on peut ajouter carrément n'importe qu'elle fonction à un type primaire