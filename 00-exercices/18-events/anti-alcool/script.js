/* 1. Créer un minijeu anti-alcool
Afficher une alert de "début de jeu"
Au bout d'un temps aléatoire (entre 1 et 5 secondes)
Changer la couleur du body puis lancer un chronomètre
L'utilisateur doit cliquer sur le body pour stoper le chrono
On affiche son score ! (le temps)
*/
alert("Ready ?");// alert c'est pour prévenir le joueur que ça commence
var temps = 0;// c'est le chronomètre qui calcule le temps de réaction
var rand = Math.floor(Math.random() * 5) + 1;// Le nombre aléatoire avant le changement de couleur : [1;5]
/*
Math.random()   : [0;1[     (0.000000000 à 0.99999999999999999999999)
* 5             : [0;5[     (0.000000000 à 4.99999999999999999999999)
Math.floor      : [0;4]     (0 à 4)
+ 1             : [1;5]     (1 à 5)
*/
function start()// Pour démarrer le "serious game"
{
    document.body.style.backgroundColor = "red";// Etape 1 on change la couleur
    var chrono = setInterval(function()// Etape 2 on démarre le chrono
    {
        temps++;// On incrémente le chrono toutes les
    }, 100);// 100ms
    document.body.addEventListener("click", function()// Etape 3 On attend le click de l'utilisateur
    {
        // Quand l'utilisateur click
        clearInterval(chrono);// On stop le chrono
        alert((temps / 10)+" secondes");// On affiche son score (son temps de réaction), "the lower, the better"
    });
}
setTimeout(start, rand * 1000);// On lance le jeu au bout d'un temps aléatoire entre 1 et 5 secondes