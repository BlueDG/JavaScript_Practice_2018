/*
JS1.3 - Saisie Obligatoire
Enoncé
Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

Détails
On peut saisir un nombre entier comme un nombre à virgule.
*/
// Tant que l'utilisateur n'a pas entré un nombre valide, lui redemander un nombre valide

/*
let askNumber = function(question){ // "Entrez un nombre ?"
    let response = window.prompt(question);
    return response;
};
*/


let response = window.prompt("Veuillez entrer un nombre.");
// response = "toto"
if (response < 0)
{
    response = window.prompt("bien joué");
}
if (response >= 0)
{
    response = window.prompt("bien joué");
}
if (response == null)
{
    response = window.prompt("Votre choix est incorrect.");
}

/*********************************************  correction prof   ********************************************/


// exemples de merdes à contrer:
/*
"toto" -> false
"" -> false
42 -> true
37.12 -> true
null (appuie sur echap ou annule) -> false
0 -> true
"2342423.dazoda" -> false
"azijdazi324234" -> false
42e5 -> true
-37 -> true
-37.84 -> true
+76.37 -> true
*/

// VERSION DO WHILE
let response;
do
{
    response = prompt("Veuillez entrer un nombre");
} while (response === null ||// L'utilisateur appuie sur echap ou annuler
    response === "" ||// L'utilisateur appuie sur entrer sans rien écrire
    response.trim() != response ||// L'utilisateur a bourriner les espaces avant ou apres le nombre
    isNaN(response));
// VERSION WHILE
response = prompt("Veuillez entrer un nombre");
// isNaN, parseInt, parseFloat, == "", == " ", == "&, é, ", ', (, §, è, !, ç,à,),-,$'
if (response === null ||// L'utilisateur appuie sur echap ou annuler
    response === "" ||// L'utilisateur appuie sur entrer sans rien écrire
    response.trim() != response ||// L'utilisateur a bourriner les espaces avant ou apres le nombre
    isNaN(response))// L'utilisateur n'a pas entré un chiffre selon isNaN
{
    response = prompt("Veuillez entrer un nombre !");
}
// CODE COMMUN
response = parseFloat(response);// String -> Number
document.write("Le nombre choisis est "+response);