// 1. demander les chiffres puis l'opération

let chiffre1 = window.prompt ("Quel est le chiffre que vous souhaitez calculer?")
let chiffre2 = window.prompt ("Avec quel autre chiffre souhaitez-vous réaliser le calcul?")
let calcul = window.prompt ("Quel type de calcul souhaitez-vous réaliser?");

// Lior dit : bizarre ta façon de faire :D
// indice :
// if(calcul == "addition" || calcul == "+") { 
// C'est comme ça que tu devrais le faire (et les autres aussi bien sur)
if (calcul == "addition" || calcul == "+"){
    chiffre1 = parseFloat(chiffre1);
    chiffre2 = parseFloat(chiffre2);
    let calcul = chiffre1 + chiffre2;
    document.write(calcul);
}

if (calcul == "soustraction" || calcul == "-"){
    let calcul = chiffre1 - chiffre2;
    document.write(calcul);
}

if (calcul == "multiplication" || calcul == "*"){
    let calcul = chiffre1 * chiffre2;
    document.write(calcul);
}

if (calcul == "division" || calcul == "/"){
    // wtf ? Où sont les parenthèses ? Les accolades etc ?
    // if(chiffre1 == 0) { etc.
    if (chiffre2 == 0){
        document.write("Ce calcul est impossible.");
    } 
    else {
        let calcul = chiffre1 / chiffre2;
        window.alert(calcul);
    }
    
}

// Lior dit : n'oublies pas dans ton fichier HTML de faire le lien avec le fichier script.js
// Pour l'instant tu as fait le lien vers "regles.js"

// Lior dit : en haut, tu ne suis pas l'algorithme sur lequel on s'était mis d'accord
// ON voulait demander le nombre1, puis le nombre2, puis le calcul