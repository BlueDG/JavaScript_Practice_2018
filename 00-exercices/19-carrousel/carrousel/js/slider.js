'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var iconStartStop = document.querySelector('#slider-toggle');// On récupère la balise bouton pour start et stop
var figImg = document.querySelector('#slider>img');// On récupère la balise image
var figCaption = document.querySelector('#slider>figcaption');// On récupère la balise description de l'image

var position = 0;// On commence de la premiere image
var list = [// La liste des images avec, le chemin (path - in english -) et la description
    {src:"1.jpg", description:"Description 1"},
    {src:"2.jpg", description:"Description 2"},
    {src:"3.jpg", description:"Description 3"},
    {src:"4.jpg", description:"Description 4"},
    {src:"5.jpg", description:"Description 5"},
    {src:"6.jpg", description:"Description 6"}
];
var timing = 2500;// On change d'image toutes les 2500ms
var interval;// Notre interval de changement d'image
function toggleAuto()// Quand on clique sur le start / stop
{
    if (iconStartStop.querySelector('i').classList.contains('fa-play'))// si le slider défile pas : je start
        start();
    else// si le slider défile : je stop
        stop();
}
function start()// démarrer l'interval
{
    iconStartStop.querySelector('i').classList.remove('fa-play');// On enleve l'icone play
    iconStartStop.querySelector('i').classList.add('fa-pause');// On ajoute l'icone pause
    interval = setInterval(function()
    {
        next();
    }, timing);
}
function stop()// arrêter l'interval
{
    iconStartStop.querySelector('i').classList.remove('fa-pause');
    iconStartStop.querySelector('i').classList.add('fa-play');
    clearInterval(interval);
}
function next()// afficher l'image suivante
{
    position++;// position > 10 -> pas d'image
    if (position >= list.length)// >= list.length == 6, list[6] existe pas (max list[5])
        position = 0;
    displayImage();
}
function previous()// affichage l'image précédente
{
    position--;// position < 0 -> pas d'image
    if (position < 0)
        position = list.length - 1;// -1 list[-1]
    displayImage();
}
function displayImage()// afficher l'image
{
    // changer la source de l'image
    figImg.src = "images/"+list[position].src;
    figImg.alt = list[position].description;
    // changer la description (figcaption)
    figCaption.innerText = list[position].description;
}
function displayRandom()// afficher une image aléatoire
{
    var rand;
    // donner une "bonne" valeur à rand
    // on sait que rand doit etre différent de l'image actuelle
    do
    {
        rand = Math.floor(Math.random() * list.length);
    }
    while (rand == position);
    position = rand;// On est sûr et certain qu'avant cette ligne position est différent de rand
    displayImage();
}

displayImage();
document.querySelector('#slider-next').addEventListener('click', next);// Quand on clique sur le bouton suivant
document.querySelector('#slider-previous').addEventListener('click', previous);// Quand on clique sur le bouton précédent
document.querySelector('#slider-random').addEventListener('click', displayRandom);// Quand on clique sur le bouton aléatoire
document.querySelector('#slider-toggle').addEventListener('click', toggleAuto);// Quand on clique sur start/stop
document.querySelector('#toolbar-toggle').addEventListener("click", function()// Quand on clique pour afficher la barre d'outils
{
    document.querySelector('.toolbar>ul').classList.toggle('hide');
});