/**
 * 
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
  * Initialisation des variables (éléments HTML sur lesquels on travaille)
  */
 let rectangle = document.querySelector(".rectangle"); // on selectionne la classe css dont on utilise le . 
 let button = document.querySelector("#toggle-rectangle"); /* on met # car on sélectionne l'ID */
 
 /**
  * Fonctions qui répondront aux événéments
  */
 let rendreRouge = function(){
     rectangle.classList.add("important");
 }
 
 let rendreBleu = function(){
     rectangle.classList.remove("important");
     rectangle.classList.remove("good");
 }
 
 let rendreVert = function(){
     rectangle.classList.add("good");
 }
 
 let cacherOuAfficher = function(){
     rectangle.classList.toggle("hide");
 }
 
 
 /**
  * Ecouteur d'événéments 
  */
 rectangle.addEventListener("mouseenter", rendreRouge);
 rectangle.addEventListener("mouseout", rendreBleu);
 rectangle.addEventListener("dblclick", rendreVert);
 button.addEventListener("click", cacherOuAfficher);
 