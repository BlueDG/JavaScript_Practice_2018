var tab = [
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu",
    "toto",
    "titi",
    "tutu"
];
/*document.write("<ul>");
//
document.write("<li>"+tab[0]+"</li>");
document.write("<li>"+tab[1]+"</li>");
document.write("<li>"+tab[2]+"</li>");
document.write("<li>"+tab[3]+"</li>");
document.write("<li>"+tab[4]+"</li>");
document.write("<li>"+tab[5]+"</li>");
document.write("<li>"+tab[6]+"</li>");
document.write("<li>"+tab[7]+"</li>");
document.write("<li>"+tab[8]+"</li>");
document.write("<li>"+tab[9]+"</li>");
document.write("<li>"+tab[10]+"</li>");
document.write("<li>"+tab[11]+"</li>");
document.write("<li>"+tab[12]+"</li>");
document.write("<li>"+tab[13]+"</li>");
document.write("<li>"+tab[14]+"</li>");
//
document.write("</ul>");*/
// ?? : 0 -> 14
// document.write("<li>"+tab[??]+"</li>");



// si la condition est bonne, alors faire telle action

document.write("<ul>");
var count = 0;// i : iterator : itérateur
while (count < 14)// -> tant que
{
    document.write("<li>"+tab[count]+"</li>");
    count++;//count = count + 1;
}
document.write("</ul>");



// 1 : initialisation. elle est vitale et nécessaire pour établir la boucle
var count = 0;
// 2 : la boucle + la condition d'arrêt
while (count < tab.length)
{
// 3 : Action à répéter
document.write("<li>"+tab[count]+"</li>");
// 4 : incrémentation. ne jamais oublier cette partie au risque de cracher la machine.
count++;
}

// c'est une boucle avec un compteur.





// autre type de boucle: le fonctionnement est le même. la seule différence est la syntaxe.
// 1
document.write("<ul>");
var count;
// (       1;             2         ;     4  ) steps étapes
for (var count = 0; count < tab.length ; count++)
{
    // 3
    document.write("<li>"+tab[count]+"</li>");
}
document.write("</ul>");






// autre type de boucle: le do while
// l'action avant de savoir la condition est bonne

document.write("<ul>");
var count = 0;
do{
    //3
    document.write("<li>"+tab[count]+"</li>");
    //4
    count++;
}//
while(count < tab.length);
document.write("</ul>");

prompt("choisissez un nombre entre 0 et 100");








