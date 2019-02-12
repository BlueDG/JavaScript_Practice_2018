/**
 * Lorsque l'utilisateur remplit le formulaire et SOUMET (donc lors de la soumission du formulaire)
 * 1) On veut effectuer l'opération qu'il a demandé avec les nombres qu'il a spécifié
 * 2) On veut ensuite afficher le résultat dans le <span> qui se trouve dans le <h2 id="resultat">
 * 3) On veut vider les champs du formulaire
 * 
 * Rappel jQuery :
 * - $('selecteur css') permet d'aller chercher un élément
 * - $('...').val() permet de lire la valeur d'un champ
 * - $('...').val('une chaine de caractère') permet de changer la valeur d'un champ
 * - $('...').text(...) permet de changer le texte d'une balise
 * - $('...').html(...) permet de changer le HTML d'une balise
 * - $('...').on('nom de evenement', nomDeLaFonction) permet de lier une fonction à un événement
 */
 
function onSubmitForm(evenement){
    // Stoper le comportement par défaut
    evenement.preventDefault();
    
    // 1) Récupérer les valeurs des champs du formulaire
    let nombre1 = $('#nombre1').val();
    let nombre2 = $('#nombre2').val();
    let operation = $('#operation').val();
    
    nombre1 = parseFloat(nombre1);
    nombre2 = parseFloat(nombre2);
    
    // 2) En fonction de l'opération je vais calculer un résultat
    let resultat;
    
    if(operation == "addition") {
        resultat = nombre1 + nombre2;
    }
    else if(operation == "soustraction"){
        resultat = nombre1 - nombre2;
    }
    else if(operation == "multiplication"){
        resultat = nombre1 * nombre2;
    }
    else if(operation == "division"){
        resultat = nombre1 / nombre2;
    }
    else {
        resultat = nombre1 ** nombre2;
    }
    
    // 3) J'affiche le résultat dans le <span> qui se trouve dans le <h2 id="resultat">
    $('#resultat span').text(resultat);
    
}

$('form').on('submit', onSubmitForm);
 


 