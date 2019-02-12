var Img = function()
{
    this.src = null; // source du fichier image
    this.position = {x:0, y:0};
    this.width = 0;
    this.height = 0;
};

Img.prototype.setSrc = function(src)
{
    this.src = src;
};

Img.prototype.setPosition = function(position)
{
    this.position = position;
};

Img.prototype.setSize = function(width, height)
{
    this.width = width;
    this.height = height;
};

Img.prototype.draw = function(context)
{
    var img;
    
    img = new Image();  // CRéation d'un objet d ela classe Image de javascript
    img.src = this.src; // Affectation de la source de l'image à partir de la propriété src de l'objet courant
    
    img.addEventListener('load', function(){
       
        // Ce code sera exécuté lorsque l'événement 'load' aura lieu pour l'image (lorsque l'image sera chargée en mémoire)
        context.drawImage(
            img, // objet image créé au dessus
            this.position.x - this.width/2, // Coordonnées du coint haut gauche de l'image (x)
            this.position.y - this.height/2, // Coordonnées du coint haut gauche de l'image (y)
            this.width, // largeur
            this.height // hauteur
        );
    });
    
    
};