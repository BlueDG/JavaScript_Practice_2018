/**
 * Ce fichier contient les gestionnaires d'évenements
 * C'est ici que se trouvent les fonctions qui seront liées à des événements
 */
 
 
 
 
 
 
 
//                                           1
// elle ouvre le formulaire d'ajout
function onClickBtnAdd(){
    contactIndex = undefined;
    
    $('#details').fadeOut();
    $('form').fadeIn();
    
}




//                                          2
// Vide la liste des contacts et le <ul>
function onClickBtnDelete(){
    // 1) On vide le tableau des contacts
    contacts = [];
    
    // 2) On vide le <ul> de ses <li> pour qu'il n'y ait plus rien d'affiché
    $('#list-contacts').html('');
}








//                                          3
// Remplit les champs du formulaire avec les données d'un contact et ouvre le formulaire
function onClickEditLink(){
    // 1) Je récupère l'index du contact (il se trouve dans l'attribut data-index du lien qu'on a cliqué)
    const index = this.dataset.index;
    
    // 2) Je récupère le contact concerné dans le tableau des contacts
    const contact = contacts[index];
    
    // 3) Je rempli les champs du formulaire avec les informations du contact
    $('form').fadeIn();
    
    $('#civilite').val(contact.civilite);
    $('#nom').val(contact.nom);
    $('#prenom').val(contact.prenom);
    $('#telephone').val(contact.telephone);
    
    // 4) J'affiche le formulaire
    $('#details').fadeOut();
    $('form').fadeIn();
    
}







//                                              4
// ça ouvre et remplit la zone de détails d'un contact
function onClickContactLi() {
    details.fadeIn();
    
    //contactindex = this.dataset.index;// plus nécessaire
    
    let contact = contacts[contactIndex];
    
    console.log(contact);
    // 1) je veux récupérer les éléments suivants:
    // le h2 dans la div
    // le p dans la div qui a l'ID detail
    // je les mets dans une variable
    let titre = $('#details h2');
    let phone = $('#details p');
    
    // 2) je veux modifier le contenu textuel de ces éléments avec les données du contact récupérées
    // "M. Lior Chamla"
    // "civilite prenom nom"
    titre.text(`${contact.civilite} ${contact.prenom} ${contact.nom}`);
    phone.text(contact.telephone);
    // ou en simplifiant
    // $('#details h2').text(`${contact.civilite} ${contact.prenom} ${contact.nom}`);
    // $('#details p').text(contact.telephone);
    
    //$('#details a').attr('data-index', index); // plus nécessaire
    
}   







//                                              5
// Gère l'ajout ou la modification d'un contact par le formulaire
function onSubmitform(event){
    // 1) Récupérer les données des <input /> (et du <select>)
    // faire des variables pour chaque valeur
    const civiliteInput = $('#civilite'); // constante = vaut comme un let sauf que l'élément const ne changera jamais. un élément const ne peut pas être autre chose comparé à un let. mais un let ou const restent une boite/variable
    const prenomInput = $('#prenom');
    const nomInput = $('#nom');
    const telephoneInput = $('#telephone');
    

    // 2) Créer un objet "contact" en donnant ses propriétés (en fonction de ce que l'on a
    // récupéré dans les <input />)
    const contact = {
        prenom: prenomInput.val(),
        nom: nomInput.val(),
        civilite: civiliteInput.val(),
        telephone: telephoneInput.val(),
    };
    /* console.log(contact); */
    
    
        // 3)
    if(contactIndex == undefined){
        // 3) J'ajoute ce nouveau contact dans la liste des contacts (contacts.push(...))
        contacts.push(contact);
    } else {
        // 3) Je veux REMPLACER le contact
        contacts[contactIndex] = contact;
        contactIndex = undefined;
    }



    // 4) Je demande à afficher mes contacts (incluant donc le dernier)
    displayContacts();
    
    // 5) Je vide les champs et je cache le formulaire
        prenomInput.val('');
        nomInput.val('');
        civiliteInput.val('');
        telephoneInput.val('');
        
        form.fadeOut();
        
        event.preventDefault();
}
