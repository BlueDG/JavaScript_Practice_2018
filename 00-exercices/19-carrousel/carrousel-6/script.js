/* 6. Start'n'Stop
Afficher un bouton au milieu de la page
Afficher une div de 100x100px, bgcolor red (ou autre mais pas blanc...) au milieu de la page
Lorsque l'utilisateur appuie sur le bouton avec le click gauche, déplacer la div vers la gauche de 1px, 10 fois par seconde
Lorsque l'utilisateur appuie sur le bouton avec le click droit, déplacer la div vers la droite de 1px, 10 fois par seconde
Si l'utilisateur appuie sur le bouton alors qu'un déplacement dans la même direction est déjà en cours, stoper le déplacement
Si l'utilisateur appuie sur le bouton alors qu'un déplacement dans l'autre direction est déjà en cours, stoper le déplacement
    puis repartir dans l'autre sens
*/
// Commencer à partir de l'exercice 5 && 4
// Au lieu de déplacer instantanément la div une fois de 10px à gauche, commencer un déplacement infini vers la gauche
// Au lieu de déplacer instantanément la div une fois de 10px à droite, commencer un déplacement infini vers la droite
// Gérer le start'n'stop
var button = document.querySelector('button');
var div = document.querySelector('div');
var x = div.offsetLeft;// x par défaut = left de la div
var interval;
var direction = "stop";
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
div.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

function moveRight(info)// info sur l'événement
{// ON A CLIQUE A DROITE
    info.preventDefault();
    clearInterval(interval);
    
    // le cas où la div bouge pas -> la div doit aller vers la droite
    if (direction == "stop")// Si la div ne bouge pas, on va a droite
    {
        interval = setInterval(function() // le interval il va faire la fonction deplacer de 1px tous les 100ms.
        {
            x++;
            div.style.left = x+"px";
        }, 100);
        direction = "droite";
    }
    // le cas où la div va a gauche -> la div doit n'aller QUE vers la droite
    else if (direction == "gauche")// Si la div va vers la gauche, on va a droite // else if car on met de côté les autres cas
    {
        interval = setInterval(function()
        {
            x++;
            div.style.left = x+"px";
        }, 100);
        direction = "droite";
    }
    // le cas où la div va a droite -> la div doit s'arreter
    else if (direction == "droite")
    {
        direction = "stop";
    }
}

function moveLeft()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    clearInterval(interval);
    if (direction == true || direction == undefined)// Quand on clique pour aller à gauche,
    {// si la direction précédente c'était droite, on va vers la gauche
        interval = setInterval(function()
        {
            x--;
            div.style.left = x+"px";
        }, 100);
        direction = false;
    }
}

button.addEventListener("click", moveLeft);
button.addEventListener("contextmenu", moveRight);


/*
Quand on clique droit : -> moveRight
- si la div ne bouge pas (encore)
    => on doit lancer le mouvement vers la droite
- si la div va (déjà) vers la droite
    => on doit arrêter le mouvement
- si la div va (déjà) vers la gauche
    => on doit arrêter le mouvement
    => on doit lancer le mouvement vers la droite


Quand on clique gauche : -> moveLeft
clearInterval est commun a tous les cas
- si la div ne bouge pas (encore) -> si direction est stop ->               if (direction == "stop")
    => on doit lancer le mouvement vers la gauche ->                        setInterval
- si la div va (déjà) vers la gauche -> si direction est gauche ->          if (direction == "gauche")
    => on doit arrêter le mouvement ->                                      clearInterval
- si la div va (déjà) vers la droite -> si direction est droite ->          if (direction == "droite")
    => on doit arrêter le mouvement ->                                      clearInterval
    => on doit lancer le mouvement vers la gauche ->                        setInterval

Quand on clique gauche : -> moveLeft
-> si la div va (déjà) vers la gauche ->        si direction est gauche ->          if (direction == "gauche")
    => on doit arrêter le mouvement
-> si la div va (déjà) vers la droite OU si la div ne bouge pas (encore)

Quand on clique à gauche
    1 on stop le mouvement
    2 si on allait déjà vers la gauche
        -> on stop
    3 sinon
        -> on va vers la gauche
*/





///////////////// CODE PLUS SIMPLE pour droite par exemple

function moveRightBis(info)
{
    info.preventDefault();// On évite la popup de contexte
    clearInterval(interval);// On stop tout (ancien) mouvement
    if (direction == "droite")// Si on allait déjà à droite
        direction = "stop";// La nouvelle direction est "arrêt"
    else// Si on allait pas déjà à droite (donc si on était à l'arrêt ou si on allait à gauche)
    {
        interval = setInterval(function()// On démarre le mouvement vers la droite
        {
            x++;// On va vers la droite en augmentant la distance entre la div et la gauche de l'écran
            div.style.left = x+"px";// On applique la valeur
        }, 100);// On répète toutes les 100ms
        direction = "droite";// La nouvelle direction c'est donc droite
    }
}






function moveLeftBis(info)
{
    clearInterval(interval);
    if (direction == "gauche") // == check la valeur
        direction = "stop"; // = on change la valeur
    else
    {
        interval = setInterval(function()
        {
            x--;
            div.style.left = x+"px";
        }, 100);
        direction = "gauche";
    }
}











