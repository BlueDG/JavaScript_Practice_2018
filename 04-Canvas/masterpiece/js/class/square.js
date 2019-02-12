// Création de la classe Square

// Constructeur
var Square = function()
{
    // Création et initialistion des propriétés communes à tous les objets de la classe
    this.color = 'black';
    this.center = {x:0, y:0};
    this.size = 10;
    
    /**
     * A l'intérieur d'une classe d'objets, le mot-clé this représente l'objet de la classe courante
     */ 
};

// Définition d'autres méthodes de la classe Disk
Square.prototype.setColor = function(color)
{
    // On affecte à la propriété color de l'objet courant (this) la valeur du paramètre color 
    this.color = color;
};

Square.prototype.setCenter = function(center)
{
    // On affecte à la propriété center de l'objet courant (this) la valeur du paramètre posicentertion 
    this.center = center;
};

Square.prototype.setSize = function(size)
{
    // On affecte à la propriété size de l'objet courant (this) la valeur du paramètre size 
    this.size = size;
};

Square.prototype.draw = function(ctx)
{
    ctx.fillStyle = this.color;
    ctx.fillRect(this.center.x - this.size/2, this.center.y - this.size/2, this.size, this.size);
};



