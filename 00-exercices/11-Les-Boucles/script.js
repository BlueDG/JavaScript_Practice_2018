




/// Exemple d'un tableau long; 
var weekDays = new Array();     // syntaxe longue
// La syntaxe raccourcie est : weekDays = [];
// Affectation de valeurs au tableau.
weekDays[0] = 'Lundi';
weekDays[1] = 'Mardi';
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';


/// Exemple d'un tableau simplifié;
var weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
//                 [0]      [1]        [2]       ...



/// Exercice de boucle dans un tableau;
// 1 : Récupérer la liste des jours et l'afficher avec une boucle (ul/li)
// 2 : Créer la liste des mois et l'afficher avec une boucle (ul/li)
// 3 : Afficher les 365 jours de la semaine de l'année

// On fait les jours de la semaine
document.write("<ul>");

document.write("<li>"+weekdays[0]+"</li>");
document.write("<li>"+weekdays[1]+"</li>");
document.write("<li>"+weekdays[2]+"</li>");
document.write("<li>"+weekdays[3]+"</li>");
document.write("<li>"+weekdays[4]+"</li>");
document.write("<li>"+weekdays[5]+"</li>");
document.write("<li>"+weekdays[6]+"</li>");

document.write("</ul>");


// création de la boucle

document.write("<ul>"); // début de la liste
var count; // créeons un compteur automatique
for (var count = 365 ; count < weekdays.length ; count++) // tu pars de 0 ; tu vas au bout du tableau et tu ajoutes +1 à chaque fois
{
    document.write("<li>"+weekdays[count]+"</li>"); // On définit la zone à affecter dans le tableau avec "count"
}
document.write("</ul>"); // fin de la liste










/******************************************************** Correction exercice par le prof **************************************************************************/




// 1 : Récupérer la liste des jours et l'afficher avec une boucle (ul/li)
// Création de la liste à parcourir (ici jours de la semaine)
var weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
// On affiche le début du ul
document.write('<ul>');
// On commence de la première valeur de la liste
var count = 0;
// Tant qu'on est pas arrivé au bout de la liste
while (count < weekdays.length)// tant que count < la taille de la liste
{
    // On affiche l'élément numéro count de la liste (dans un li)
    document.write('<li>'+weekdays[count]+'</li>');
    // On incrémente pour passer a l'élément (jour) suivant
    count++;
}
// On ferme le ul
document.write('</ul>');



// 2 : Créer la liste des mois et l'afficher avec une boucle (ul/li)
var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
document.write('<ul>');
var count = 0;
while (count < months.length)
{
    document.write('<li>'+months[count]+'</li>');
    count++;
}
document.write('</ul>');
// incrémentation : count++;
// décrémentation : count--;





// 3 : Afficher les 365 jours de la semaine de l'année
document.write('<ul>');
var count = 0;// count permet d'afficher les 365 jours de l'année 0 -> 365
var jour = 0;// jour permet d'afficher les jours de la semaine 0 -> 6
while (count < 365)// On veut afficher les 365 jours de l'année
{
    document.write('<li>['+count+'] '+weekdays[jour]+'</li>');// 3 : affichage
    jour++;// <-- incrémente le jour pour passer au jour suivant
    // ATTENTION y'a 365j/an, PAR CONTRE y'a que 7j/s
    if (jour >= weekdays.length)// si jour >= 7 [le jour est undefined]
    {// Si on est "après" dimanche, on repart au premier jour de la semaine
        jour = 0;// On recommence de lundi
    }
    count++;// 4 : incrémente le count
}
document.write('</ul>');
// Janvier
//      Lundi
//      Mardi
//      Mercredi
// ...
// Fevrier
//      Jeudi
//      Vendredi
//      Samedi
// ...
// Decembre
// ...
//      Samedi
//      Dimanche
//      Lundi