////////////// DONNEES ////////////////

// Déclaration de variables globales (déclarée en dehors de toutes fonctions)
/*var canvas;
var context;*/


////////////// FONCTIONS ///////////////
/*function getMouseLocation(mouseEvent)
{
    var x, y;
    var offset;
    var styles;
    var location;
    
    // Récupération de l'offset (marges) du canvas
    offset = canvas.getBoundingClientRect();
    
    // On récupère les propriétés CSS "calculées" du canvas
    styles = getComputedStyle(canvas);
    
    /**
     * Pour obtenir les coordonnées du clic par rapport à l'origine du canvas :
     * -> On récupère les coordonnées du clic par rapport au client (fenêtre du navigateur) 
     * -> On soustrait l'offset au dessus et à gauche du canvas
     * -> On soustrait les bordures top et left du canvas
     */ 
    /*x = mouseEvent.clientX - offset.left - parseInt(styles.borderLeftWidth);
    y = mouseEvent.clientY - offset.top - parseInt(styles.borderTopWidth);
    
    // Construction du résultat : un objet (classe Object) avec les propriétés x et y
    location = {
        x: x,
        y: y
    } 
    
    // On retourne en résultat les coordonnées (x,y)
    return location;
} */


/*function onClickCanvas(event)
{
    // console.log('onClickCanvas');
    var radius;
    var color;
    var location;
    var disk;
    
    // On tire le rayon au hasard entre 5 et 50 pixels
    radius = getRandomInteger(5, 50);
   
    // On tire une couleur au hasard
    color = getRandomColor();
    
    // Récupération des coordonnées (x,y) du clic de souris
    location = getMouseLocation(event);
    
    // Dessin du disque
    // drawDisc(color, location, radius);
    
    // Création d'un objet de la classe Disk = instanciation de la classe Disk (objet = instance)
    disk = new Disk(); // Ici c'est le constructeur qui est appelé
    disk.setColor(color); // Appel de la méthode setColor sur notre objet disk
    disk.setPosition(location);
    disk.setRadius(radius);
    disk.draw(context);
}*/

// function drawDisc(color, location, radius)
// {
//     context.fillStyle = color;
//     context.beginPath();
//     context.arc(location.x, location.y, radius, 0, 2 * Math.PI);
//     context.fill();
    
//     // context.fillStyle = 'black';
//     // context.beginPath();
//     // context.arc(location.x - (radius/3), location.y - (radius/3), radius/5, 0, 2 * Math.PI);
//     // context.fill();
    
//     // context.fillStyle = 'black';
//     // context.beginPath();
//     // context.arc(location.x + (radius/3), location.y - (radius/3), radius/5, 0, 2 * Math.PI);
//     // context.fill();
    
// }








///////////// CODE PRINCIPAL //////////////
document.addEventListener('DOMContentLoaded', function(){
    
   /*// Ici on est sûr que le DOM est bien chargé
   
   // Sélection du canvas
   canvas = document.querySelector('#masterpiece');
   
   // Sélection du contexte de dessin
   context = canvas.getContext('2d');
   
   // Installation d'un gestionnaire d'événement au clic sur l'objet canvas
   canvas.addEventListener('click', onClickCanvas);*/

    // Ici on est sûr que le DOM est bien chargé
   
   var app;
   
   app = new App(); // Création d'un objet de la classe App 
   app.init(); // Initialisation de l'objet app (appel de la méthode init() )


}); 









