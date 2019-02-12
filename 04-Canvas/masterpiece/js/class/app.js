// création de la classe app



// définition du constructeur (fonction donc méthode) (celle qui est indispensable)
var App = function()
{
    // définition des propriétés de la classe App
    this.canvas = document.querySelector('#masterpiece');
    this.context = this.canvas.getContext('2d'); // ces copier collés du code principal du main.js changent un peu: ici this.canvas
};




// définition des autres méthodes

// ici pareil tu mets this.canvas
App.prototype.init = function()
{
    /**
     * Installation d'un gestionnaire d'événement au clic sur l'objet canvas
     * 
     * Ici, dans la méthode init, le mot-clé this représente l'objet de la classe App
     * Dans la méthode onClickCanvas, car c'est un gestionnaire d'événement, par défaut, le mot-clé this 
     * représente l'objet qui a déclenché l'événement, c'est-à-dire ici l'élément <canvas>
     * Or nous souhaitons que dans la méthode onClickCanvas le mot-clé this représente aussi l'objet de la 
     * classe App, afin de pouvoir faire appel à ses propriétés (canvas, context) et à ses méthodes.
     * 
     * Solution : modifier la valeur du mot-clé this dans la méthode onClickCanvas grâce à la méthode bind()
     * de la classe Function. La valeur passée en paramètre de bind() sera la valeur de this 
     * dans la méthode onClickCanvas. 
     */ 
    this.canvas.addEventListener('click', this.onClickCanvas.bind(this));  
};


App.prototype.onClickCanvas = function(event)
{
   // console.log('onClickCanvas');
    var radius;
    var color;
    var location;
    var square;
    // var disk;
    var mickey;
    
    /*// On tire le rayon au hasard entre 5 et 50 pixels
    radius = getRandomInteger(5, 50);
   
    // On tire une couleur au hasard
    color = getRandomColor();
    
    // Récupération des coordonnées (x,y) du clic de souris
    location = this.getMouseLocation(event);
    
    // Dessin du disque
    // drawDisc(color, location, radius);
    
    // Création d'un objet de la classe Disk = instanciation de la classe Disk (objet = instance)
    disk = new Disk(); // Ici c'est le constructeur qui est appelé
    disk.setColor(color); // Appel de la méthode setColor sur notre objet disk
    disk.setPosition(location);
    disk.setRadius(radius);
    disk.draw(this.context);*/
    
    
    
    // On tire le rayon au hasard entre 5 et 50 pixels
    // radius = getRandomInteger(5, 50);
    size = getRandomInteger(10, 100);
   
    // On tire une couleur au hasard
    color = getRandomColor();
    
    // Récupération des coordonnées (x,y) du clic de souris
    location = this.getMouseLocation(event);
    
    // Dessin du disque
   
    // Création d'un objet de la classe Disk = instanciation de la classe Disk (objet = instance)
    // disk = new Disk(); // Ici c'est le constructeur qui est appelé
    // disk.setColor(color); // Appel de la méthode setColor sur notre objet disk
    // disk.setPosition(location);
    // disk.setRadius(radius);
    // disk.draw(this.context); // Appel de la méthode draw
    
    /*square = new Square();
    square.setColor(color);
    square.setSize(size);
    square.setCenter(location);
    square.draw(this.context);*/
    
    /*mickey = new Mickey();
    mickey.setColor(color);
    mickey.setPosition(location);
    mickey.setSize(size);
    mickey.draw(this.context);*/

    var img = new Image ();
    img.src = 'https://webiconspng.com/wp-content/uploads/2017/09/Simpsons-PNG-Image-29703.png';
    this.context.drawImage(img, location.x - 50, location.y - 5, 100, 100);
};


App.prototype.getMouseLocation = function(mouseEvent)
{
    var x, y;
    var offset;
    var styles;
    var location;
    
    // Récupération de l'offset (marges) du canvas
    offset = this.canvas.getBoundingClientRect();
    
    // On récupère les propriétés CSS "calculées" du canvas
    styles = getComputedStyle(this.canvas);
    
    /**
     * Pour obtenir les coordonnées du clic par rapport à l'origine du canvas :
     * -> On récupère les coordonnées du clic par rapport au client (fenêtre du navigateur) 
     * -> On soustrait l'offset au dessus et à gauche du canvas
     * -> On soustrait les bordures top et left du canvas
     */ 
    x = mouseEvent.clientX - offset.left - parseInt(styles.borderLeftWidth);
    y = mouseEvent.clientY - offset.top - parseInt(styles.borderTopWidth);
    
    // Construction du résultat : un objet (classe Object) avec les propriétés x et y
    location = {
        x: x,
        y: y
    } 
    
    // On retourne en résultat les coordonnées (x,y)
    return location;
};