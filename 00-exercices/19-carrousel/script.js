/* 4. Début du carousel
Afficher un bouton au milieu de la page
Lorsque l'utilisateur passe la souris sur le bouton, déplacer délicatement le bouton vers la droite
Lorsque la souris sort du bouton, arrêter le déplacement
*/
// html/css --> identique
// mouseenter, mouseout
// deux fonctions, start, stop
// var button
// requestAnimationFrame / setInterval

///////////////// LA BASE /////////////////////////////////////////::

/*var button = document.querySelector('button');
var x = 0;
function start()
{
    
    // -> deplacer le button (move d'avant)

    
    // requestAnimationFrame(start)
    
    
    
}
function stop()
{
    
}
button.addEventListener("mouseenter", start);
button.addEventListener("mouseout", stop);*/


////////: PROF

/*var button = document.querySelector('button');
var isMoving = false;
var x = 0;
function move()// va déplacer le bouton
{
    if (isMoving)// SI et SEULEMENT SI le button est en mouvement
    {
        button.style.left = x+'px';
        x++;
    }
    requestAnimationFrame(move)
}
function start()// dire que le button bouge
{
    isMoving = true;// -> TRUE
}
function stop()// dire que le button ne bouge plus
{
    isMoving = false;// -> FALSE
}
button.addEventListener("mouseenter", start);
button.addEventListener("mouseout", stop);
move();*/


/** SANS BOOLEAN **/
/*var button = document.querySelector('button');
var interval;
var x = 0;
function start()// dire que le button bouge
{
    clearInterval(interval);
    interval = setInterval(function()
    {
        button.style.left = x+'px';
        x++;
    }, 10);
}
function stop()// dire que le button ne bouge plus
{
    clearInterval(interval);
}
button.addEventListener("mouseenter", start);
button.addEventListener("mouseout", stop);*/






////////////////////////////////////////////////////////////// ETAPE SUIVANTE EXERCICE CARROUSEL 5

/* 5. Suite
Afficher un bouton au milieu de la page
Afficher une div de 50x50px, bgcolor red (ou autre mais pas blanc...) au milieu de la page
Lorsque l'utilisateur appuie sur le bouton avec le click gauche, déplacer la div vers la gauche de 10px
Lorsque l'utilisateur appuie sur le bouton avec le click droit, déplacer la div vers la droite de 10px
*/
// Commencer à partir de rien
// html -> rajouter une div au milieu 50x50 red
// 2 fonctions : droite et gauche
// event : click, contextmenu donc 2 fonctions
// pas de timers (ni setTimeout, ni setInterval, ni requestAnimationFrame)
// Une variable de plus : div


var div = document.querySelector('div');
var button = document.querySelector('button');
var x = div.offsetLeft;// x par défaut = remet la div à sa place de départ dès le 1er click


function right(info) // on invente le mot info car on veut taper sur la fenêtre poppup du click droit. on aurait pu l'appeler toto, qu'importe. c'est uniquement pour utiliser le prevent.default.
{
    info.preventDefault(); // enlève le cas d'utilisation par défault du click droit
    x += 10;
    div.style.left = x+'px'; // pour aller à droite, on doit taper dans left (toujours) et ajouter(+) des px.
    // | ----------O left de base
    // | -----O moins de left
    // | ---------------O plus de left
}

//pour aller a droite on met + et pour aller a gauche on met -

function left()
{
    x -= 10;
    div.style.left = x+'px'; // pour aller à gauche, on doit taper dans left (toujours) et enlever(-) des px.
}


button.addEventListener("click", left);

button.addEventListener("contextmenu", right);



