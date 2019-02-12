// boucles imbriquées pour tableau



// 10 lignes
document.write()

document.write('<tr>');
document.write('</tr>');


///

document.write('<table border="1" style="width:100%">'); // création d'un tableau JS

// 10 lines
var line = 0; // création d'un compteur
while (line < 5) // combien de répétition ; condition
{
    document.write('<tr>');
    document.write('<th>');
    document.write(line +1);
    document.write('</th>');
    var column = 0; // création d'un compteur
    while (column < 5) // combien de répétition ; condition
    {
        document.write('<td>');
        document.write((line +1) * (column+1));
        document.write('</td>');
        column++; // incrémentation du compteur
    }
    document.write('</tr>');
    line++; // incrémentation du compteur
}
// 10 columns
// TR signifie LIGNE
// TD signifie CELLULES
// ON met les cellules dans les lignes pour faire un tableau

document.write('</table>');






/**************** correction prof *//////////////////////////////////////////////


/*
JS1.3 - Table des Multiplications
---- Énoncé ----
Construire une table des multiplications en JavaScript puis l'afficher en HTML.
---- Détails ----
Demander à l'utilisateur de saisir la taille de la table des multiplications (exemple : si on saisit 10 il faut faire une table de 1 à 10).
Il faut utiliser les balises HTML de tableaux pour construire l'affichage.
Pour l'affichage, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.), la cellule du tableau HTML doit s'afficher d'une autre couleur que les autres cellules. La solution doit être en CSS.
---- Rappels ----
Rien de mieux qu'une boucle pour initialiser un tableau...
http://ekladata.com/02pAsqn3cSH1kWsv4qb1DLASXAY.jpg

table tr th td
*/
/*
0 1 2 3 4 5
1 1 2 3 4 5
2 2 4 6 8 
3 3 6 9
4 4 8
5 5
*/
/*
<table>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
</tr>
</table>
*/
// boucles imbriquées
var size = 5;
document.write('<table border="1" style="width:100%;text-align:center">');
document.write('<tr>');
var column = 0;
while (column <= size)// < size + 1
{
    document.write('<th>');
    document.write(column);
    document.write('</th>');
    column++; 
}
document.write('</tr>');
// 10 lignes
var line = 0;// compteur
while (line < size)// combien de répétition
{
    document.write('<tr>');
    document.write('<th>');
    document.write(line + 1);
    document.write('</th>');
    var column = 0;// compteur
    while (column < size)// combien de répétition
    {
        document.write('<td>');
        document.write((line + 1) * (column + 1));
        document.write('</td>');// * 10
        column++;// incrémentation du compteur
    }
    document.write('</tr>');// * 10
    line++;// incrémentation du compteur
}// 10 lignes
document.write('</table>');
// table
// tr /tr * 10
// td /td * 10