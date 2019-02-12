// Tu sèches ?

// 1) Je déclare une variable et je stocke dedans un objet (donc des accolades ?)
// Interdit de commencer une variable par un nombre
// 3WA n'est pas un nom valide. Pourquoi pas "promo" . Voilà :)
let promo = {
    titre: "Live09", 
    modalite: "Présentiel", 
    dateDebut: "Juin 2018", 
    dateFin: "Septembre 2018", 
    etudiants: ["Guillaume", " Edouard", " Magalie", " Stan", " David", " Louise", " Bertrand"], 
    profs: ["Lior", " Erwvin"],
}

/* technique 1 */
document.write("<h3>Voici la classe Live09 de 3WAcademy</h3>"); 

document.write("<ul>");
document.write("<li>Intitulé de la classe: " +promo["titre"] + "</li>");
document.write("<li>Type de session: " +promo["modalite"] + "</li>");
document.write("<li>Date d'entrée: " +promo["dateDebut"] + "</li>");
document.write("<li>Date de fin: " +promo.dateFin + "</li>");
document.write("<li>Étudiants présents: " +promo.etudiants + "</li>");
document.write("<li>Enseignants: " +promo.profs + "</li>");
document.write("</ul>");

/* technique 2 */
document.write("<h3>Voici la classe Live09 de 3WAcademy</h3>");

document.write(`
    <ul>
        <li>Intitulé de la classe: ${promo["titre"]}</li>
        <li>Type de session: ${promo["modalite"]}</li>
        <li>Date d'entrée: ${promo.dateDebut}</li>
    </ul>
`);

// Pourquoi ne pas utiliser la syntaxe simplifiée promo.titre, plutot
// que promo["titre"] ? :)


