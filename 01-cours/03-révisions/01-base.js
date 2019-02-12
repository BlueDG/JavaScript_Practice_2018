





/** 
 * 1) on chope l'élément qui nous interesse dans l'html avec queryselector
 * 2) on le met dans une boite, une variable, une constante histoire de pouvoir jouer dessus
 * 3) on crée un addEventListener rattaché à  cette variable afin de créer l'événement, l'action, l'effet ou comportement
 * 4) Dedans on met en premier l'action comme un click ou hover, puis ensuite le nom de la fonction responsable du fonctionneemnt de l'événement
 * 5) au sein de l'événement listener, on le transforme en fonction avec l'action souhaitée
 * 
 * exemple: 
 * btnClickMe.addEventListener('click', function(){
    window.alert("Bonjour !");
});
 
 */ 
 
 
 // Exercice 2 = Quand l'utilisateur click sur le bouton "hello" on alerte "Bonjour [prénom tapé dans le champ]"
 
 
/**
 * Quand l'utilisateur click sur le bouton "hello" on alerte "Bonjour [prénom tapé dans le champ]"
 * 1) Comment on chope le bouton ? => document.querySelector(selecteur css)
 * 2) Comment je peux réagir à un événement "click" sur le bouton ? => addEventListener(evenement, reaction)
 * 3) Comment je chope l'input ? => document.querySelector(selecteur css)
 * 4) Comment je chope la valeur de l'input (ce qui est écrit dedans) ? => propriété value (xxx.value)
 * 5) Comment j'affiche une alerte ? => window.alert(....)
 * 6) Comment écrire une phrase qui contient la valeur de l'input ? 
 *      => concatenation (coller des bouts de phrases avec le +)
 *      => interpolation (ecrire une phrase et faire apparaitre les variables dans ${...})
 */
  
   
const btnHello = document.querySelector('#hello');

btnHello.addEventListener('click', function(){
    const prenom = document.querySelector('#prenom');
    const valeur = prenom.value;
    //  window.alert("Bonjour " + valeur); // Concaténation
    window.alert(`Bonjour ${valeur}`);
});


// Exercice 3 = Quand on clique sur le bouton "change-text", on modifie le texte du <span> qui se trouve dans le <p>

/**
 * Quand on clique sur le bouton "change-text", on modifie le texte du <span> qui se trouve dans le <p> avec le mot "Salut à tous !"
 * 
 * 1) Comment je chope le bouton "change-text" ? => document.querySelector(selecteur css)
 * 2) Comment je réagis à un événement click sur le bouton ? => .addEventListener(evenement, reaction) 
 * 3) Comment je chope le span que je veux modifier ? => document.querySelector(selecteur css)
 * 4) Comment je modifie le texte qui se trouve dans le <span></span> ? => propriété .textContent
 */
 
const btnChangeText = document.querySelector('#change-text');

btnChangeText.addEventListener('click', function(){
   const span = document.querySelector('p span'); 
   span.textContent = "Salut à tous !";
});
  
  
// Exercice 4 =  Quand on clique sur le bouton "change-html", on veut que le code suivant apparaisse dans la <div> :
 /* <h3>Lior Chamla</h3>
 * <small>Développeur et formateur</small>
 * <ul>
 *  <li>Tel: 06 22 74 70 39</li>
 *  <li>Mail: lchamla@gmail.com</li>
 * </ul> */
 
 
 /* 
   1) Comment je chope le bouton "change-html" ? => document.querySelector(selecteur css)
 * 2) Comment je réagis à un événement click sur le bouton ? => .addEventListener(evenement, reaction) 
 * 3) Comment je fais apparaitre du code html dans la div ? => document.querySelector(selecteur css)
 * 4) Comment je modifie le texte qui se trouve dans le <div></div> ? => propriété .innerHtml */
 
 const btnChangeHtml = document.querySelector('#change-html');
 
 btnChangeHtml.addEventListener('click', function(){
     const div = document.querySelector('div');
     div.innerHTML = `<h3>Lior Chamla</h3>
     <small>Développeur et formateur</small>
     <ul>
         <li>Tel: 06 22 74 70 39</li>
         <li>Mail: lchamla@gmail.com</li>
     </ul>`;
 }
 
 
  
  
  
  