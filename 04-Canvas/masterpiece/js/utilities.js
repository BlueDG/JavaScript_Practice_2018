/////////////// FONCTIONS UTILITAIRES /////////////
function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor()
{
    var red;
    var green;
    var blue;
    var opacity;
    
    // On tire au hasard un entier entre 0 et 255 pour les 3 couleurs Rouge Vert BLeu
    red = getRandomInteger(0, 255);
    green = getRandomInteger(0, 255);
    blue = getRandomInteger(0, 255);
    
    // On tire un nombre entre 0 et 1 pour l'opacité
    opacity = Math.random();
    
    // On retourne le résultat au format rgba
    return 'rgba('+ red +', '+ green +', '+ blue +', '+ opacity +')';
}