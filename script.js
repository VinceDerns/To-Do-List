//* Pas encore compris !
// const monStockage = localStorage;



//* VARIABLES
//  A  Ce que je veux récupèrer de mon HTML, je veux :

//  A/1  : ce qui sera écrit dans l'input 
const tache = document.querySelector(".tache");
//  A/2  : que ça s'execute quand j'appuis sur mon bouton
const bouton_valider = document.querySelector(".bouton_ajouter");


// B  L'endroit + dans quoi, je veux faire apparaitre mes tâches dans le HTML
const to_do_list = document.querySelector(".to_do_list");

//* ECOUTEURS - 

//  C  Je veux récupèrer et afficher une tâche chaque fois que je clique sur mon bouton et par la même occasion récupérer ce qui se trouve dans l'input donc j'utilise addEventLister
bouton_valider.addEventListener("click", ajouterTache);

//* FONCTIONS

//* D  Je déclare ma fonction, et empeche le formulaire de se réinitialisé chanque fois que je clique :

function ajouterTache (event) {    
    event.preventDefault();

    // D/1 : Ajouter ma futur Div qui fera apparaitre ma to_do_list dans le html 
    const todoDiv = document.createElement("div");
    // D/2 : lui donner une class (pour le css)
    todoDiv.classList.add("todo");
    // D/3 : Créer la liste de to_do_list qui va etre crée dans la Div (todoDiv)
    const new_Todo = document.createElement("li");
    // D/4 : Récupèrer ce que l'utilisateur écrit dans l'input "tache"
    new_Todo.innerText = tache.value;
    // D/5 : lui donner une class (pour le css)
    new_Todo.classList.add("todo_item");
    // D/6 : l'ajouter dans la futur liste to_do_list dans la Div crée en D/1
    todoDiv.appendChild(new_Todo);

    //  D/7 : Ajouter un bouton qui me permettra de valider ma futur tache 
    const checkBouton = document.createElement("button");
    //  D/8 : sur fontAwesome j'ai trouvé un icone
    checkBouton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    //  D/9 : lui donner une class (pour le css)
    checkBouton.classList.add("checkBtn");
    // D/10 : l'ajouter dans la futur liste to_do_list dans la Div crée en D/1
    todoDiv.appendChild(checkBouton);
    // D/11 Ajouter un bouton qui me permettra de suppprimer ma futur tache
    const supprimerBouton = document.createElement("button");
    //  D/12 : sur fontAwesome j'ai trouvé un icone
    supprimerBouton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //  D/13 : lui donner une class (pour le css)
    supprimerBouton.classList.add("suppBtn");
    // D/14 : l'ajouter dans la futur liste to_do_list dans la Div crée en D/1
    todoDiv.appendChild(supprimerBouton);

    // Ajouter la Div crée en D/1 dans le HTML
    to_do_list.appendChild(todoDiv);
    // Réinitialise la zone de texte de mon input "tache" (dans le html)
    // Faut le mettre à la fin de la fonction.
    tache.value = "";
    
};



//* Fonctionne pas ! Pourquoi ??
// const ajouterTache = (event) => {
//     event.preventDefault();
//     console.log("Hello");
// };




