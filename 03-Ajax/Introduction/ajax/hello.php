<?php


    
    // Si le paramètre 'firstname' est présent dans la chaîne de requête
    // le firstname ici est celui de main.js dans la fonction $.get() ligne 58
    if( array_key_exists('firstname', $_GET) ){
        
        // On l'envoie au client
        echo $_GET['firstname'];
    }
    
    // Je mets le echo après la fonction pour que ma phrase soit après le prénom affiché dans la fonction
     echo '! Say hello de my little friend!';