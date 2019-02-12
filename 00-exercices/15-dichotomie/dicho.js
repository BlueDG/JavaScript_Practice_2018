// Principe de dichotomie
// [1;100] -> Entre 1 et 100 inclus des deux côtés
// Choix du cobaye : 42
// Vous proposez : 50 <----- 1 et 100
// Le cobaye répond que c'est moins (42 < 50)
// [1;49] -> Entre 1 et 49 inclus
// On propose : 25 <----- 1 et 49
// Le cobaye répond que c'est plus (42 > 25)
// [26;49]
// On propose : 38
// Le cobaye répond que c'est plus (42 > 38)
// [39;49]
// On propose : 44
// Le cobaye répond que c'est moins (42 < 44)
// [39;43]
// On propose : 41
// Le cobaye répond que c'est plus (42 > 41)
// [42;43]
// On propose : 43
// Le cobaye répond que c'est moins (42 < 43)
// [42;42]
// On propose : 42
// Le cobaye nous dis qu'on a trouvé !

/*
Y'a 3 cas :
Egal : victoire
Inférieur : retente
Supérieur : retente
---------------------------------------------------
A -> Choisir un nombre
B -> Deviner le nombre du joueur A
---------------------------------------------------
A -> Ordinateur
B -> Humain
1. Déclarer une variable avec le nombre choisi par l'ordinateur (aléatoire, Math.random) compris entre 1 et 100 inclus*/
/*var number = Math.floor(Math.random() * 100) + 1;
console.log(number);

/*2. L'humain qui va proposer un nombre (d'après le principe de dichotomie, 50) : prompt*/
/*3. L'ordinateur récupère la proposition de l'humain (ici 50)*/
/*var proposition = window.prompt("Veuillez choisir un nombre entre 0 et 100.");

while (proposition != number)
{
    /*4. (Victoire) On vérifie d'abord l'égalité, Si le nombre choisi par la machine est égal à la proposition de l'humain : Humain gagne*/
   /* if (proposition == number) 
    {
        window.alert("Vous avez trouvé!");
    }
    
    /*5. (Inférieur) Sinon on vérifie si le nombre choisis par la machine est inférieur à la proposition de l'humain : Plus petit*/
    /*else if (proposition < number)
    {
        proposition = window.prompt("Le nombre à trouver est supérieur.");
        // Le nombre à deviner est plus grand
    }
    
    /*6. (Supérieur) Sinon : Plus grand*/
    /*else if (proposition > number)
    {
        proposition = window.prompt("Le nombre à trouver est inférieur.");
    }
}*/


/*7. L'humain n'a pas trouvé le bon nombre, on lui redemande un prompt pour refaire une proposition*/
/*8. Retour à 3


*/var number = Math.floor(Math.random() * 100 + 1);
var proposition = prompt("Choisissez un nombre entre 1 et 100 inclus");
while (proposition != number)
{
    if (proposition < number)
    {
        proposition = prompt("C'est plus");
    }
    else if (proposition > number)
    {
        proposition = prompt("C'est moins");
    }
}
alert("BRAVO C'EST GAGNE !\nLe nombre était : "+number);/*



---------------------------------------------------
A -> Humain
B -> Ordinateur
1. L'ordinateur dis à l'humain de choisir un nombre entre 1 et 100 inclus
2. L'ordinateur va proposer un nombre (ici, 50) via un prompt en demandant si c'est égal, plus grand ou plus petit
3. L'humain répond, = si égalité
    < si le nombre de l'humain est plus petit que la proposition de l'ordinateur
    > si le nombre de l'humain est plus grand que la proposition de l'ordinateur
4. L'ordinateur vérifie si l'humain a répondu =, dans ce cas il a gagné
5. Sinon l'ordinateur vérifie si c'est inférieur, dans ce cas : via la dichotomie il propose un nouveau nombre (ici, 25) -> modification du max
6. Sinon l'ordinateur vérifie si c'est supérieur, dans ce cas : via la dichotomie il propose un nouveau nombre (ici, 75) -> modification du min
7. Retour à 2
---------------------------------------------------
var min = 1;
var max = 100;
[1;100]  => 50 = (1+100) / 2
[1;50]   => 25 = (1+50)  / 2
[50;100] => 75 = (50+100)/ 2
*/

//////////////////////////////////// correction prof ////////////////////////////

var min = 1;
var max = 100;
var response;
var proposition;
alert("Humain, choisis un nombre entre "+min+" et "+max+" (inclus)");
//
while (response != "=")// < > =
{
    proposition = Math.floor((min + max) / 2);
    response = prompt("Est-ce que c'est le nombre : "+proposition+"\nVeuillez répondre <, > ou =");
    if (response == "=")
    {
        alert("BRAVO J'AI GAGNE !");
    }
    else if (response == ">")
    {
        // nombre > proposition
        // proposition < nombre
        // 51-100
        // si proposition = 50, nouveau min
        min = proposition + 1;
    }
    else if (response == "<")
    {
        // nombre < proposition
        // proposition > nombre
        // 1-49
        max = proposition - 1;
    }
}