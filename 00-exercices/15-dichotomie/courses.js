/*
**** JS1.4 - Liste de Courses ****
---- Enoncé ----
Gérer une liste de courses en affichant les informations dans la
console du navigateur web.
---- Détails ----
La liste de courses est stockée dans une seule variable.
Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
Les fonctionnalités de gestion de la liste de courses sont :
// CRUD Create, Read, Update, Delete : Créer, Lire, Modifier, Supprimer
- Ajouter un produit par son nom
- Supprimer un produit ayant un nom spécifique
- Supprimer tous les produits
- Afficher la taille et le contenu de la liste
Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de
cette classe pour implémenter les fonctionnalités
Pour vérifier le bon fonctionnement du programme il faut écrire du code de test,
par exemple :
Tests Unitaires
- Ajouter 4 produits simples puis afficher les informations
- Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci
puis afficher les informations
- Supprimer tous les produits puis afficher les informations
*/
// Un tableau (1 dimension) : variable
// remplir le tableau avec des strings (cf ligne 21)
// Une boucle (tableau 1 dimension = 1 boucle)
// Fonctions (Ajouter, Supprimer 1 Produit, Supprimer tous les produits, Afficher) 11-14
// console => intéraction

var list = ["Eau", "Nutella", "Compote", "Pain"];

function display()// Affichage
{
    document.write('<h3>Liste de courses</h3>');
    document.write('<ul>');
    var count = 0;// i ou count c'est l'itérateur, qui permet de se promener dans tout le tableau
    while (count < list.length)// tant que count < 4
    {
        //document.write('<li>'+list[count]+'</li>');
        //document.write(`<li>${list[count]}</li>`);
        document.write('<li>');
        document.write(list[count]);
        //document.write(" (count = "+count+")");// (count = 1)
        document.write('</li>');
        count++;
    }
    document.write('</ul>');
}

function add(product)
{
    list.push(product);// push : ajouter a la FIN de la liste
    // pour ajouter au début : unshift
    // Enlever au début : shift
    // Enlever a la fin : pop
    display();
}

function removeAll()
{
    list = [];
    display();
}

function remove(product)
{
    var position = list.indexOf(product);// Si l'élément existe pas, il retourne -1
    if (position != -1)// position différent de -1 : DANS CE CAS : l'élément que l'utilisateur veut supprimer n'existe pas
    {
        list.splice(position, 1);// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
        // list.splice(position à partir duquel on modifie, nombre d'élément(s) à supprimer, liste d'éléments à ajouter [à la place])
        // Si on donne -1 comme position à splice, il va partir de la fin du tableau
        display();
    }
    else
        alert('Attention le produit "'+product+'" n\'existe pas !');
}

display();
removeAll();
add("Toto");
add("Titi");
add("Tutu");
add("Toto");
add(prompt("Quel produit souhaitez-vous ajouter ?"));
remove(prompt("Quel produit souhaitez-vous supprimer ?"));
// --display();