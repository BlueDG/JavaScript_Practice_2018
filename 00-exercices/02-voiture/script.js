let voiture = {
    marque: "ford edge", 
    couleur: "noir", 
    kilometrage: 60000, 
    prix: 30000, 
    année: 2015,
    passagers: ["Lior", "Magali"]
    
}


// Lior dit : ce serait plus joli comme ça, en allant à la ligne non ? :
// let voiture = {
//     marque: 'ford',
//     couleur: 'noire',
//     ...
// };

document.write("<h3>Voici les propriétés de la voiture</h3>"); 

document.write("<ul>");
document.write("<li>Marque: " +voiture["marque"] + "</li>");
document.write("<li>Couleur:" +  " " +voiture["couleur"] + "</li>");
document.write("<li>kilométrage:" + " " +voiture["kilometrage"] + "</li>");
document.write("<li>prix:" + " " +voiture["prix"] + "</li>");
document.write("<li>année:" + " " +voiture["année"] + "</li>");

document.write("<li>Les passagers sont : ");
document.write("<ul>");
document.write("<li>"+ voiture["passagers"][0] +"</li>");
document.write("</ul>");
document.write("</li>");
document.write("</ul>");

document.write(`
    <ul>
        <li>La marque est: ${voiture["marque"]}</li>
        <li>La couleur est: ${voiture.couleur}</li>
        <li>
            Les passagers sont:
            <ul>
                <li>Lior<//li>
                <li>Magali</li>
            </ul>
`);

