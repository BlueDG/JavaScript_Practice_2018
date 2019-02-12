/**
 * Variables nécessaires
 */
 
 // Mon tableau de contacts
let contacts = [
    { prenom: 'Lior', nom: 'Chamla', telephone: '0622747039', civilite: 'Monsieur' },
    { prenom: 'Magali', nom: 'Pernin', telephone: '0303030303', civilite: 'Madame' }
];


let btnAdd;
let btnDelete;
let form;
let details;
let lis;
let editLink;
let contactIndex;

// // Ajouter un contact
// let nouveau = {
//     prenom: 'Joseph',
//     nom: 'Dupont',
//     telephone: '0622557755'
// };

// contacts.push(nouveau);

// console.log(contacts);
 
 
 




/* *************************************** */
/**
 * Fonctions
 */
 
/* *************************************** */

 
function displayContacts() {
    // Afficher les contacts du tableau sous forme de <li> dans le <ul id="list-contacts">
    // 1) On veut construire une chaine de caractères qui va contenir nos <li>
    let htmlContacts = '';
    
    // 2) On veut passer sur chaque contact du tableau pour enrichir notre chaine 
    // avec un <li> par contact
    // JQUERY
    $(contacts).each(function(index, contact){
        htmlContacts = htmlContacts + `
            <li data-index="${index}">
                ${contact.prenom} ${contact.nom}
            </li>
        `;
    });
    // JAVASCRIPT
    // for(let i = 0; i < contacts.length; i++) {
    //     htmlContacts = htmlContacts + `<li>${contacts[i].prenom} ${contacts[i].nom}</li>`;
    // }
    
    // 3) On veut placer notre chaine de caractère dans le <ul> (innerHTML)
    // JQUERY
    $('#list-contacts').html(htmlContacts);
    // JAVASCRIPT
    // document.querySelector('#list-contacts').innerHTML = htmlContacts;
    $('#list-contacts li').on('click', onClickContactLi); // comme ça on peut cliquer sur les li une fois le formulaire réactualisé.
} 








/* *************************************** */

/**
 * Code principal
 */
 
/* *************************************** */

  contacts = [];
 
 // displayContacts(); // pas de contacts donc pas besoin d'afficher
 
 btnAdd = $('#btn-add');
 btnDelete = $('#btn-delete');
 form = $('form');
 lis = $('li');
 details = $('#details'); // la div où il y a les details
 editLink = $('#details a');
 
 
 
 btnAdd.on('click', onClickBtnAdd); // on = add.eventListener en jquery
 btnDelete.on('click', onClickBtnDelete);
 lis.on('click', onClickContactLi);
 form.on('submit', onSubmitform);
 editLink.on('click', onClickEditLink);
 
 // ou en mode Jquery
 
/* 
$('#btn-add').on('click',    onClickBtnAdd);
$('#btn-delete').on('click', onClickDelete);
$('#details a').on('click',  onClickEditLink);
$('form').on('submit',       onSubmitForm); 
*/
 
 
 
