// si je clic sur un li, il doit devenir bold

// 1- récupérer tous les li
const plats = document.querySelectorAll('li');

// 2- je passe sur chaque li pour le manipuler donc on parcoure un tableau car on a une liste de plusieurs éléments = boucle for. mais c'est comme un tableau mais tu peux pas push
for(let i = 0; i < plats.length; i++) {
    const plat = plats[i];
    // console.log(plat);

    // 3- je veux réagir quand je clique sur un plat
    plat.addEventListener('click', onClickPlat);
}

function onClickPlat() {
    // Si le plat est sélectionné, je veux le déselectionner
    if(this.dataset.selected == "true") {
        this.dataset.selected = "false";
    }
    // Sinon, je veux le sélectionner
    else {
        this.dataset.selected = "true";
    }
    
    // Dans tous les cas je veux calculer le total de calories
    refreshCalories();
    // Je veux aussi calculer le nombre de plats choisis
    refreshCount();
    // Je veux aussi calculer le total de la commande
    refreshTotal();
}

function refreshCalories() {
    // 1) On chope tous les plats sélectionnés
    const plats = document.querySelectorAll('li[data-selected="true"]');
    
    // 2) On les parcoure et on calcule le nombre total de calories
    let total = 0;
    for(let i = 0; i < plats.length; i++) {
        const plat = plats[i];
        const calories = parseFloat(plat.dataset.calories);
        total = total + calories;
    }
    
    
    // 3) On affiche le nombre total de calories dans la page
    const span = document.querySelector('#calories');
    span.textContent = total;
}
    

function refreshCount() {
    // 1) Je veux choper les plats sélectionnés
    const plats = document.querySelectorAll('li[data-selected="true"]');
    // 2) Je veux connaitre le nombre
    const nombre = plats.length;
    // 3) Je veux afficher le nombre
    const span = document.querySelector('#nombre');
    span.textContent = nombre;
}


function refreshTotal() {
    // 1) Je veux choper les plats sélectionnés
    const plats = document.querySelectorAll('li[data-selected="true"]');
    // 2) Je veux les parcourir et calculer le total du prix
    let total = 0;
    for(let i = 0; i < plats.length; i++) {
        const plat = plats[i];
        const prix = parseFloat(plat.dataset.prix);
        total = total + prix;
    }
    // 3) Je veux afficher le total
    const span = document.querySelector('#prix');
    span.textContent = total;
}


///////////////////////////////////////////////


const btnSave = document.querySelector('#btn-save');
btnSave.addEventListener('click', function() {
    const voiture = {
        marque: 'Hyundai',
        kms: 15000,
        couleur: 'Grise'
    };
    
    // Transformer une variable en texte => sérialisation
    const texte = JSON.stringify(voiture);
    
    window.localStorage.setItem('myCar', texte);
    // 1) Je récupère le prénom
    // const prenom = document.querySelector('#prenom').value;
    
    // // 2) Je le sauvegarde dans le localStorage
    // window.localStorage.setItem('firstName', prenom);
})

const btnLoad = document.querySelector('#btn-load');
btnLoad.addEventListener('click', function() {
    const voiture = JSON.parse(window.localStorage.getItem('myCar'));
    
    console.log(voiture);
    // const prenom = window.localStorage.getItem('firstName');
    
    // document.querySelector('#prenom').value = prenom;
})