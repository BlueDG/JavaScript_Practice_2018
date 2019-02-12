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







////////////////////////////////////////////////////// Essai ///////////////////////////////////////////////////////////////////////

// Commence par la création des variables + fonctions, le visuel on verra plus tard :)
// Je n'ai aucune idée de comment m'y prendre. 
// Tu suis les étapes lignes 26-29, donc d'abord créer un tableau dans une variable (comme les jours de la semaine)


/*var toBuy = ["Pain", "Oeufs", "Broccoli", "Carrottes"];  // Le tableau est créé, il faut maintenant faire la fonction ajouter

function add(product /* le paramètre est ici product *//*)
{
    // Ajouter ce "nom" (string) à ton tableau toBuy
    toBuy.push(product);// On "pousse" l'élément product dans le tableau toBuy
}
// toBuy : 4 produits On utilise ici la fonction ajouter
add("Pâtes");
// 5 produits
add("Eau");
add("Amandes");
add("Gingembre");
add("Citrons");
// 9 produits

console.log(toBuy); // ici on check le tableau dans l'affichage web




function remove (product)
{
    // Ici ça se fait en deux étapes
    // 1 : récupération la position du produit dans ta liste
    // 2 : supprimer la case à la position trouvée
    
    toBuy.pop(product); 
}


function removeAll (product)
{
    // toBuy.splice(0,toBuy.length);  // Ca marche mais y'a plus simple
    toBuy = [];// ok
}

function display (product)
{
    // while
    toBuy.display(product);
}



document.write('<table border="1" style="width:100%">'); // création d'un tableau JS

 
document.write('</table>');*/




////////////////////////////////////////////////////////  Correction prof /////////////////////////////////////////////////////////////


var list = ["Eau","Nutella", "Compote", "Pain"];

function display()
{
    document.write('<ul>');
    var i = 0; // il arrête la boucle et parcoure le tableau par élément un par un
    while (i < list.length) // 
    {
        //document.write('<li>'+list[i]+'</li>'); // ces 3 blocks de code sont la même chose
        //document.write(`<li>${list[i]}</li>`);
        document.write('<li>');
        document.write(list[i]);
        document.write("(i = "+i+")"); // ici on ajoute la valeur de i ce qui permet d'afficher sa place en nombre
        document.write('</li>');
        i++;
    }
    document.write('</ul>');
}



function add(product)
{
    list.push(product);// push : ajouter a la FIN de la liste
    // pour ajouter au début : unshift
    // enlever au début: shift
    // enlever à la fin: pop
    display(); // ça permet d'afficher le résultat
}


function removeAll()
{
    list = [];
    display(); // on met ça car ça renvoie le résultat, on affiche le résultat, on montre que la liste est vide
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
add("Peanut Butter");
add("Whey");
add("Tomates");
add("Riz");
add(prompt("Quel produit souhaitez-vous ajouter ?"));
remove(prompt("Quel produit souhaitez-vous supprimer ?"));
