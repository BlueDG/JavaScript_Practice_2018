// Création de la classe Disk qui fera elle même des disks. c'est comme une usine qui fabriquent des objets à savoir ici des disks.
// je crée mon propre objet

// Constructeur
var Disk = function()
{
    // Création et initialistion des propriétés communes à tous les objets de la classe
    // mes disk auront ces propriétés de base
    this.color = 'black';
    this.position = {x:0, y:0};
    this.radius = 10;
    
    /**
     * A l'intérieur d'une classe d'objets, le mot-clé this représente l'objet de la classe courante
     */ 
};

// Définition d'autres méthodes de la classe Disk
// là je créé une method propre à mon objet
Disk.prototype.setColor = function(color)
{
    // On affecte à la propriété color de l'objet courant (this) la valeur du paramètre color 
    this.color = color;
};

Disk.prototype.setPosition = function(position)
{
    // On affecte à la propriété position de l'objet courant (this) la valeur du paramètre position 
    this.position = position;
};

Disk.prototype.setRadius = function(radius)
{
    // On affecte à la propriété radius de l'objet courant (this) la valeur du paramètre radius 
    this.radius = radius;
};


// j'invente le paramètre ctx à cette action de dessiner
// avant cétait rattaché direct à notre context big boss de créé au départ
// sauf que si quelqu'un change le nom context alors cette acction serait foutue
// donc tu fais un paramètre au nom de ton choix, ça le rend indépendant du code principal
// par contre tu ajoutes quand même CONTEXT dans les parenthèses dans le main.js ligne 67 quand tu appelles le dessin
Disk.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
};


