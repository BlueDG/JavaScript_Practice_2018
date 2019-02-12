/* 2. Le jeu du chat et de la souris
Afficher un bouton au milieu de la page
Lorsque la souris s'approche du bouton, le déplacer aléatoirement
*/
// mouseover
// une page web c'est du x et du y
// générer un x aléatoire : [10;90]
// générer un y aléatoire : [10;90]
// deplacer le button selon x et y (style.left, style.top)


function generateRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}


var button = document.querySelector('button');
function move()
{
    // Math.floor(Math.random() * (max - min)) + min
    // entre 3 et 92
    // Math.floor(Math.random() * (92 - 3)) + 3
    // Math.floor(Math.random() * 90) + 1
    // entre 1 et 90 + 1
    var x = Math.floor(Math.random() * 80) + 10;// Donne un nombre aléatoire entre 10 et 90
    var y = Math.floor(Math.random() * 80) + 10;
    button.style.left = x+'%';
    button.style.top = y+'%';
}


/* ou plus simplement avec Int:

var button = document.querySelector('button');
function move()
{
    // Math.floor(Math.random() * (max - min)) + min
    // entre 3 et 92
    // Math.floor(Math.random() * (92 - 3)) + 3
    // Math.floor(Math.random() * 90) + 1
    // entre 1 et 90 + 1
    var x = generateRandomInt(10, 90);// Donne un nombre aléatoire entre 10 et 90
    var y = generateRandomInt(10, 90);
    button.style.left = x+'%';
    button.style.top = y+'%';
}

*/

button.addEventListener("mouseover", move);