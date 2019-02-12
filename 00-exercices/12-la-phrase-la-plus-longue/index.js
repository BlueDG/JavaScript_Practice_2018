'use strict';   // Mode strict du JavaScript

/*
JS1.3 - La Phrase la Plus Longue
---- Énoncé ----
Rechercher et afficher en HTML la chaîne ayant le plus grand nombre de caractères dans un tableau de chaînes.

** Construire le programme par étapes :
    faire une boucle qui affiche chaque phrase,
    faire une boucle qui affiche la longueur de chaque phrase,
    afficher un résultat (même s'il est faux),
    etc.
---- Détails ----
Le programme doit à la fin afficher la phrase la plus longue ET la longueur de celle-ci.
Le programme doit être dynamique : le tableau peut s'agrandir ou diminuer sans qu'il y ait besoin de modifier le code.
---- Rappels ----
Les tableaux comme les chaînes de caractères sont des objets et disposent chacun d'une propriété nécessaire pour construire le programme.
while + if
*/

var phrases =
[
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    "Maecenas nec odio et ante tincidunt tempus.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
    "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];




// On affiche le début du ul
document.write('<ul>');
// On commence de la première valeur de la liste
var count = 0; // le compteur fait le tableau
var longueur = 0; // ce compteur récupère la longueur de la phrase
// Tant qu'on est pas arrivé au bout de la liste
while (count < phrases.length)// tant que count < la taille de la liste
{
    let phrase = phrases[count]; // on récupère la phrase actuelle
    // On affiche l'élément numéro count de la liste (dans un li) ; phrase count = telle phrase numéro x ; phrase length = nombre de caractères dans la phrase;
    // document.write('<li>('+phrase.length+') '+phrase+'</li>');
    document.write('<li>'+phrase.length+'</li>');// On affiche la taille de la phrase
    document.write('<li>'+phrase+'</li>');// On affiche le contenu de la phrase
    if (phrase.length > longueur)
    {
        longueur = phrase.length;
    }
    // On incrémente pour passer a l'élément suivant
    count++;
}
// On ferme le ul
document.write('</ul>');


//****************************************************** correction prof **********************************************************//

// Etape 2
document.write('<ul>');
// On commence de la première valeur de la liste
var count = 0;
var position = 0;
// Tant qu'on est pas arrivé au bout de la liste
while (count < phrases.length)// tant que count < la taille de la liste
{
    let phrase = phrases[count];// On récupère la phrase numéro count de notre liste
    // On affiche l'élément numéro count de la liste (dans un li)
    // document.write('<li>('+phrase.length+') '+phrase+'</li>');
    document.write('<li>'+phrase.length+'</li>');// On affiche la taille de la phrase
    document.write('<li>'+phrase+'</li>');// On affiche le contenu de la phrase
    if (phrase.length > phrases[position].length)
    {
        position = count;
    }
    // On incrémente pour passer a l'élément suivant
    count++;
}
// On ferme le ul
document.write('</ul>');
document.write("La phrase la plus grande mesure : "+phrases[position].length);
document.write("Voici sa valeur : "+phrases[position]);


/*
count       phrase              longueur
0       : zadazdazdaz           11
1       : daazdazd              8
2       : dazazdazdazdazd       15
3       : daazda                6
4       : dazazd                6
5       : oooooooooooo          12

count, phrase, longueur, position = 0
position : 2
longueur : phrases[position].length // SI longueur correspond a la taille de la phrase la plus longue
// DONC au meme endroit où on modifie longueur on peut récupérer d'autres infos concernant la phrase la plus longue
pluslongue : phrases[position]
*/