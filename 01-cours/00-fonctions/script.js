console.log("Ce texte apparait dans la console");

// Je défini la fonction (deux techniques)

// technique 1 avec paramètres à définir

let addition = function (){
    let nombre1 = 12;
    let nombre2 = 10;
    let resultat = nombre1 + nombre2;
    console.log(resultat);
    document.write(`<p>Le résultat est : ${resultat}</p>`);
}

addition ()

// technique 2 avec paramètres automatiques 

let addition2 = function (nombre1, nombre2){
    let resultat = nombre1 + nombre2;
    document.write(`<p>Le résultat est : ${resultat}</p>`);
}

addition2 (5, 8)


// technique 3 avec calcul automatique

let additionauto = function (nombre1, nombre2){
    let resultat = nombre1 + nombre2;
    return resultat;
    // tout code écrit en dessous de return ne se fera pas!
    // Return signifie la fin
}

let somme = additionauto (5, 8);
alert(`La somme vaut ${somme} !`);






// 1. Créer fonction soustraire qui reçoit 2 nombres et rend le résultat.

// 2. Appeler la fonction en lui donnant 10 et 5 et en stockant le résultat dans une variable.

// 3. Affichez le résultat comme vous le voulez.

let soustraire = function (nombre1, nombre2){
    let resultat = nombre1 - nombre2;
    return resultat; 
}

let soustraction = soustraire(10, 5);
document.write(`La soustraction vaut ${soustraction} !`);
// faites que la variable soustraction fasse agir la variable soustraire avec 10 et 5.
// On choisit ensuite d'afficher le tout en français grâce au back tick.


