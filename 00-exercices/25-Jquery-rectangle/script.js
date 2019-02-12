/**
 * Avant c'était comme ça:
 * Nous devons sélectionner le rectangle et nous en souvenir.
 * 
 * 
 * Nous voulons écouter un évènement "souris qui rentre" sur le rectangle pour y réagir.
 * Nous voulons écouter un évènement "souris qui sort" pour y réagir.
 * Nous voulons écouter un évènement "double click" pour y réagir.
 * 
 * 1- réaction rendre le rectangle rouge.
 * 2- réaction supprimer couleur rouge.
 * 3- réaction rendre le rectangle vert.
 * 
 * button.addEventListener();
 * document.querySelector();
 * document.querySelectorAll();
 * 
 */
 
 
 /**
  * Maintenant avec Jquery:
  * variables représentant les éléments html de notre page
 */
 
 let btnToggle // représente le boutton
 
 let rectangle // représente la div
 
  
 /**
  * Fonctions gestionnaires d'événements
 */
 
 function onClickButtonToggle(){
    let display = rectangle.css('display');
    
    if(display == "none") {
        rectangle.fadeIn(500);
        //rectangle.show(500);
        //rectangle.slideDown(500);
    } else{
        rectangle.fadeOut(500);
        //rectangle.slideUp(500);
        //rectangle.hide(500);
    }
    // rectangle.toggle(); un jackouille en interrupteur
    // rectangle.slideToggle(); un jackouille mais en slide
    // rectangle.fadeToggle(); un jackouille en fade
}
 
 function onMouseEnterRectangle(){
     rectangle.addClass("important");
 }
 
 function onMouseOutRectangle(){
     rectangle.removeClass("important good");
 }
 
 function onDblClickRectangle(){
     rectangle.addClass("good");
 }
 
  /**
  * Code principal
 */
 
 btnToggle = $('#toggle-rectangle'); // # c'est pour l'ID (sélecteur css)
 
 rectangle = $('.rectangle'); // le . c'est pour la classe (sélecteur css)
 
 
 
 btnToggle.on("click",onClickButtonToggle);
 rectangle.on("mouseenter", onMouseEnterRectangle);
 rectangle.on("mouseout", onMouseOutRectangle);
 rectangle.on("dblclick", onDblClickRectangle);