let player = "";
let computer = "";
let numberHand;
let container = document.getElementById("container");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let won = 0;
let lost = 0;

//D'abord si on clique sur le bouton feuille alors le joueur a choisi feuille et comparer sont choix face à l'ordinateur et retourner
//s'il a perdu, gagné ou si c'est égalité et faire que le joueur ou l'ordinateur prend un point si gagné.

let feuille = document.getElementById("feuille").value = "feuille";
let pierre = document.getElementById("pierre").value = "pierre";
let ciseau = document.getElementById("ciseau").value = "ciseau";
console.log("La valeur de feuille: " + feuille + ", la valeur de pierre: " + pierre + " et la valeur de ciseau: " + ciseau);


//L'ordinateur doit chosisir une main aleatoirement entre les 3, du coup on crée une fonction.
function playComputer () {
    numberHand = Math.floor(Math.random() * 3);
    if (numberHand === 0) {
        computer = "feuille";
    }
    else if (numberHand === 1) {
        computer = "pierre";
    }
    else if (numberHand === 2) {
        computer = "ciseau";
    }
    console.log(numberHand + computer);
}

document.getElementById("feuille").addEventListener("click", function (){
    game();
})

document.getElementById("pierre").addEventListener("click", function (){
    game();
})

document.getElementById("ciseau").addEventListener("click", function (){
    game();
})

playComputer();

//Condition dans une fonction pour savoir qui a gagné, perdu ou s'il y a égalité, augmn+enter le score et montrer ce que
//l'ordinateur a choisi et l'utilisateur.
function game() {
    if ((player = feuille) === (computer = "ciseau") || (player = pierre) === (computer = "feuille") || (player = ciseau) === (computer = "pierre")) {
        div1.innerHTML = "Joueur: " + player + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez perdu !";
        lost += 1;
        score();
        container.appendChild(div1)
        container.appendChild(div2);
    }
    else if ((player = feuille) === (computer === "pierre") || (player = pierre) === (computer = "ciseau") || (player = ciseau) === (computer = "feuille")) {
        div1.innerHTML = "Joueur: " + player + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez gagné !";
        won += 1;
        score();
        container.appendChild(div1);
        container.appendChild(div2);
    }
    else if ((player = feuille) === (computer === "feuille") || (player = pierre) === (computer = "pierre") || (player = ciseau) === (computer = "ciseau")) {
        div1.innerHTML = "Joueur: " + player + " <-> ordinateur: " + computer;
        div2.innerHTML = "Egalité !";
        container.appendChild(div1);
        container.appendChild(div2);
    }
}

function score() {
    document.getElementById("player").innerHTML = "Joueur: " + won;
    document.getElementById("computer").innerHTML = "Ordinateur: " + lost;
}

