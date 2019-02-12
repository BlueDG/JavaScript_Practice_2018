console.log("ça marche");


let HT = window.prompt ("Quel est votre montant hors-taxe?");
HT = parseFloat(HT);

let TVA = HT * 20/100;
let TTC = HT + TVA;
document.write("<p>Vous avez indiqué un montant hors-taxe de " + HT + "</p>");
document.write("<p>Votre TVA s'élève à " + TVA + "</p>");
document.write("<p>Votre montant TTC s'élève donc à " + TTC + "</p>");

