document.write("<h2>Hôtel Spa Martinez</h2>");


let nettoyer = function(chambre) {
    document.write(`<h3>J'entre dans la ${chambre}</h3>`);
    // document.write(`<p>Je nettoie les toilettes de la ${chambre}</p>`);
    document.write(`<p>Je nettoie le sol de la ${chambre}</p>`);
    document.write(`<p>Je nettoie la salle de bain de la ${chambre}</p>`);
    document.write(`<p>Je fais le lit de la ${chambre}</p>`);    
}

// Un bloc réutilisable autant que l'on souhaite grâce à la création d'une fonction.
// On peut modifier l'intérieur de ce bloc en entourant un terme par le ${ et}…
// On lance ce bloc en faisant "nom du bloc" puis (nom spécifique du terme)

nettoyer(212);

nettoyer(213);

nettoyer(6892);

nettoyer(101);

nettoyer(58);

nettoyer(13);


}