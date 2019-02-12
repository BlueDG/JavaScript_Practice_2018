const TAUX_TVA = 20; 
let montantHT;
let montantTVA;
let montantTTC;


// 1. Demander le montant HT (et évidemment s'en rappeler pour plus tard)
montantHT = window.prompt("Quel est le montant HT ?");
montantHT = parseFloat(montantHT);

// 2. Calculer le montant de la TVA (montant HT * TAUX_TVA / 100)
montantTVA = montantHT * TAUX_TVA / 100;

// 3. Calculer le montant TTC (montant HT + montant de TVA)
montantTTC = montantHT + montantTVA;

// 4. Annonce du résultat (montant HT, le montant de TVA et le montant TTC)
document.write(`
    <p>Le montant HT est : ${montantHT} €</p>
    <p>Le montant TVA est : ${montantTVA} €</p>
    <p>Le montant TTC est : ${montantTTC} €</p>
`);