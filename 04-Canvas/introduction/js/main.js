
// règle 1
// on attend que le DOM soit chargé avant d'agor dessus en installat un gestionnaire d'événement
document.addEventListener('DOMContentLoaded', function(){
    
    
    // Ici on est sûr que le DOM est bien chargé
    // une variable pour l'élément canvas
    var canvas;
    // une autre pour le contexte
    var context;
    
    // sélection de l'élément canvas
    canvas = document.getElementById('canvas');
    
    // récupération du contexte de ce dessin de l'élément canvas
    context = canvas.getContext('2d');
    
    /**
     * * Principe général :
     * 1°) Définir les propriétés avec lesquelles on va dessiner (couleur, épaisseur de trait, etc)
     * 2°) Le cas échéant, "préparer", "tracer au crayon de bois ce qu'on va dessiner"
     * 3°) On dessine
     */
     
     // de base ton dessin est en noir. là on va le mettre en rouge.
     // la couleur de remplissage
     // on dessine un rectangle plein vert
     context.fillStyle = 'forestgreen';
     // les deux premiers représentent le point de départ, d'origine qui débute en haut a gauche
     // les deux derniers sont la largeur puis la hauteur. tout se fait en pixel
     context.fillRect(50, 100, 300, 50);
    
    
    // on dessine un carré au contour bleu
    // le contour en bleu à moitié transparent
    context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    // le tracé faisant 5px d'épaisseur
    context.lineWidth = 5;
    context.strokeRect(250, 30, 150, 150);
    
    // on utilise l'effaceur (couleur de background, ce n'est pas une gomme)
    context.clearRect(200, 75, 100, 50);
    
    
    /**
     * * Les chemins : suite de traits bout à bout, arcs de cercles etc
     * 1°) Tracer le chemin au "crayon gris"
     * 2°) Dessiner le contour
     * 
     */
     // on fait un Z qu'on ferme ensuite
     context.strokeStyle = 'orange';
     context.lineWidth = 10;
     
     context.beginPath(); // on démarre le chemin (au crayon gris = pas encore visible)
     context.moveTo(500, 100); // à partir de tel point.
     context.lineTo(600, 100); // jusqu'à tel point, ici 500, 100.
     context.lineTo(500, 200);
     context.lineTo(600, 200);
     context.closePath(); // retracer au point de départ
     
     context.stroke(); // on trace le trait entre les points.
     
     
     // on fait un cercle
     context.beginPath(); // on démarre le chemin
     // coordonnées du centre x y, le radius avec pi, l'angle de démarrage, l'angle de fin, l'optionnel sur le sens.
     context.arc(400, 400, 50, 0, 2 * Math.PI) // deux fois pi pour un cercle complet, pas de degrès du genre 350
     context.fillStyle = 'lightpink';
     context.fill();
     context.strokeStyle = 'violet';
     context.stroke();
     
     
     /**
     * * Courbes de Bézier
     * Dégradés
     * Import d'images et vidéos
     * Transformations comme rotations, translations etc
     * Motifs et Recadrages etc
     */
     
    
    // Essais perso
    
    
    
    // visage
    context.beginPath();
    context.arc(125, 300, 50, 0, 2 * Math.PI)
    context.fillStyle = 'rgba(10, 10, 10, 0.5)';
    context.fill();
    
    
    
    
    
    
    // chapeau
    context.beginPath();
    context.fillStyle = 'brown';
    context.fillRect(50, 270, 150, 5);
    context.fillRect(80, 230, 90, 40);
    context.fillStyle = 'black';
    context.fillRect(80, 260, 90, 10);
    
    
    
    
});