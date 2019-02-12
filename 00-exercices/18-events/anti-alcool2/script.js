/* 3. Anti-alcool 2
- En reprenant l'exercice précédent -
Afficher un bouton au milieu de la page
Démarrer un chrono
Lorsque l'utilisateur clique sur le bouton le déplacer aléatoirement
Au bout de 10 coups, afficher le score (le temps écoulé depuis le début)
*/

// mouseover -> click
// = deplacement aléatoire
// = structure html
// + ajouter un chrono
// + afficher le score
// + limite de 10 coups => variable (compteur) + incrémentation


/////////////////////// MESSAGE START + LE BOUTON QUI SE DEPLACE A CHAQUE CLICK ///////////////////////////

/*
alert("Ready?");
var button = document.querySelector('button');
function move()
{
    // Math.floor(Math.random() * (max - min)) + min
    // entre 3 et 92
    // Math.floor(Math.random() * (92 - 3)) + 3
    // Math.floor(Math.random() * 90) + 1
    // entre 1 et 90 + 1
    var x = Math.floor(Math.random() * 90) + 10;// Donne un nombre aléatoire entre 10 et 90
    var y = Math.floor(Math.random() * 90) + 10;
    button.style.left = x+'%';
    button.style.top = y+'%';
}

button.addEventListener("click", move);

*/


//////////////////////// CREATION D'UN CHRONO ///////////////////////////////////////////////

/* var temps = 0; // c'est le chronomètre qui calcule le temps de réaction

function chrono()
{
    document.body.style.button = "lightpink"; // on change la couleur au premier click
    
    // DEMARRAGE DU CHRONOMETRE
    var chrono = setInterval(function()// Etape 2 on démarre le chrono
    {
        temps++;
    }, 100);
    
    // ARRET DU CHRONOMETRE
    document.body.addEventListener("click", function()// Etape 3 On attend le click de l'utilisateur
    {
        // Quand l'utilisateur click
        clearInterval(chrono);
        alert((temps / 10)+" secondes");// On affiche son score (son temps de réaction), "the lower, the better"
    });
}

setChrono(chrono, );// On lance le chrono dès le premier click

*/
 ///////////////////////////////////////// CORRECTION DU PROF 

var button = document.querySelector('button');
var temps = 0;// c'est le chronomètre qui calcule le temps de réaction
var click = 0;
function generateRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
function move()
{
    var x = generateRandomInt(10, 90);// Donne un nombre aléatoire entre 10 et 90
    var y = generateRandomInt(10, 90);
    button.style.left = x+'%';
    button.style.top = y+'%';
    click++;
    if (click == 1)
    {
        var chrono = setInterval(function()// Etape 2 on démarre le chrono
        {
            temps++;// On incrémente le chrono toutes les
        }, 10);// 10ms
    }
    else if (click == 10)
    {
        clearInterval(chrono);// On stop le chrono
        alert((temps / 100)+" secondes");// On affiche son score (son temps de réaction), "the lower, the better"
    }
}


button.addEventListener("click", move);





