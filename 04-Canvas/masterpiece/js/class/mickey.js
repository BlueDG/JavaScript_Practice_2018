/* Création de la classe Mickey */

// Constructeur
var Mickey = function()
{
    // Définition et initialisation des propriétés
    this.color = 'black'; // Couleur par défaut
    this.size  = 20; // Rayon du cercle principal pour la tête
    this.position = {x:0, y:0}; // Coordonnées du centre du cercle principal (tête)
    this.head = new Disk(); // Objet de la classe Disk qui représentera la tête de Mickey (cercle principal)
    this.leftEar = new Disk();
    this.rightEar = new Disk();
}

// Définition d'autres méthodes de la classe Disk
Mickey.prototype.setColor = function(color)
{
    // On affecte à la propriété color de l'objet courant (this) la valeur du paramètre color 
    this.color = color;
};

Mickey.prototype.setPosition = function(position)
{
    // On affecte à la propriété position de l'objet courant (this) la valeur du paramètre position 
    this.position = position;
};

Mickey.prototype.setSize = function(size)
{
    // On affecte à la propriété size de l'objet courant (this) la valeur du paramètre size 
    this.size = size;
};

Mickey.prototype.draw = function(ctx)
{
    // Dessiner le cercle principal pour la tête
    this.head.setColor(this.color);
    this.head.setPosition(this.position);
    this.head.setRadius(this.size);
    this.head.draw(ctx);
    
    
    // Dessiner l'oreille gauche
    this.leftEar.setColor(this.color);
    this.leftEar.setRadius(this.size/2);
    this.leftEar.setPosition({
        x: this.position.x - this.size,
        y: this.position.y - this.size,
    });
    this.leftEar.draw(ctx);
    
    // Dessiner l'oreille droite
    this.rightEar.setColor(this.color);
    this.rightEar.setRadius(this.size / 2);
    this.rightEar.setPosition({
    x: this.position.x + this.size,
    y: this.position.y - this.size
    });
    this.rightEar.draw(ctx);
}