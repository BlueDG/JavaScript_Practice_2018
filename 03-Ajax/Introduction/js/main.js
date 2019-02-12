// DOM = structure HTML modifiée via le Javascript




//////////////////////////////// CREATION DE FONCTIONS ///////////////////////////////////

// AJAX via JQUERY // le JQUERY est représenté par le $ etc dans la fonction 
// la fonction ici sans $ est juste en JS Natif
function onClickLoadButton()
{
    // On commence par vérifier que le gestionnaire d'événement est bien appelé au clic sur le bouton
    // console.log('onClickLoadButton');
    
    // requête AJAX: charge le résultat de la requête http vers content.html dans la balise #target 
    $('#target').load('ajax/content.html');
}


// AJAX via JQUERY (APPELÉ CALLBACK)
// 1) // cette fonction fait la DEMANDE au serveur (ici Cloud9)
function onClickGetButton()
{
    // console.log('onClickGetButton');
     // Requête AJAX : charge le résultat de la requête http vers content.html dans la balise #target
    $.get(
        'ajax/content.html',   // Url de la page vers laquelle on fait la requête AJAX
        // 'ajax/hello.php', // Ou fichier PHP
        onAjaxClickGetButton // Fonction de callback = fonction qui sera automatiquement exécutée lors de la réception de la réponse du serveur
    );

}

// 2) // cette fonction représente la LIVRAISON de la part du serveur (l'objet délivré est ici content.html)
// le colis étant représenté par ServerResponse dans la fonction
function onAjaxClickGetButton(serverResponse)
{
    // console.log('On a reçu la réponse de la requête AJAX !!');
    
    // Le paramètre serverResponse contient la réponse du serveur
    
    $('#target').html(serverResponse);
    
}


// AJAX via JQUERY (APPELÉ CALLBACK) AVEC FORMULAIRE 
function onSubmitHelloForm(event)
{
    // annule le comportement par défault, à savoir le rechargement auto de la page
    event.preventDefault();
    
    // récupérer la valeur du champ du formulaire ici le prénom
    firstname = $('#hello-form input[name="firstname"]').val();
    
    
    // Envoi de la requête AJAX vers l'url ajax/hello.php en transmettant le prénom 
    $.get(
        'ajax/hello.php',  // Url interrogée
        'firstname=' + firstname, // Données transmises
        onAjaxSubmitHelloForm); // Fonction de callback
}

function onAjaxSubmitHelloForm(serverResponse)
{
    $('#target').html(serverResponse);
}




//////////////////////////// CE QUI EST APPELÉ AU CHARGEMENT DE LA PAGE  ///////////////////////////////


// EN JS NORMAL EXEMPLE :
// Permet d'attendre que le DOM soit chargé avant d'exécuter le code principal
// la fonction en vert contenant le code principal doit attendre que le DOMContentLoaded soit terminé avant de se lancer
document.addEventListener('DOMContentLoaded', function(){
    
   // Code principal 
    
});



// EN JQUERY EXEMPLE :
// Même système, on attend que le DOM soit chargé avant d'exécuter le code principal
$(function(){
    
   // Code principal  
    
   // Installation du gestionnaire d'événement au clic sur le bouton 'load'
   // quand on clic sur le bouton, LoadButton appelle la fonction onClickLoadButton
   $('#loadButton').on('click', onClickLoadButton);

    // Installation du gestionnaire d'événement au clic sur le bouton '$.get'
    $('#getButton').on('click', onClickGetButton);
    
    // Installation du gestionnaire d'événement sur le formulaire "Hello" sur l'événement 'submit'
    $('#hello-form').on('submit', onSubmitHelloForm);
});

// EN JQUERY AUTRE FAÇON :
// $(document).ready(function(){
    
//   // Code principal 
    
// });


