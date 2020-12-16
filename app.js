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

//Quand on appuie sur un des boutons, la valeur de chacun est rentrer et comparer face a la valeur de l'ordianteur et renvoie
//un résultat.
document.getElementById("feuille").addEventListener("click", function (){
    if (feuille && computer === "ciseau") {
        div1.innerHTML = "Joueur: " + feuille + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez perdu !";
        div2.style.color = "red";
        div2.style.fontSize = "30px";
        lost += 1;
        score();
        container.appendChild(div1)
        container.appendChild(div2);
    }
    else if (feuille && computer === "pierre") {
        div1.innerHTML = "Joueur: " + feuille + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez gagné !";
        div2.style.color = "#38761D";
        div2.style.fontSize = "30px";
        won += 1;
        score();
        container.appendChild(div1);
        container.appendChild(div2);
    }
    else if (feuille && computer === "feuille") {
        div1.innerHTML = "Joueur: " + feuille + " <-> ordinateur: " + computer;
        div2.innerHTML = "Egalité !";
        div2.style.color = "orange";
        div2.style.fontSize = "30px";
        container.appendChild(div1);
        container.appendChild(div2);
    }
})

document.getElementById("pierre").addEventListener("click", function (){
    if (pierre && computer === "feuille") {
        div1.innerHTML = "Joueur: " + pierre + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez perdu !";
        div2.style.color = "red";
        div2.style.fontSize = "30px";
        lost += 1;
        score();
        container.appendChild(div1)
        container.appendChild(div2);
    }
    else if (pierre && computer === "ciseau") {
        div1.innerHTML = "Joueur: " + pierre + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez gagné !";
        div2.style.color = "#38761D";
        div2.style.fontSize = "30px";
        won += 1;
        score();
        container.appendChild(div1);
        container.appendChild(div2);
    }
    else if (pierre && computer === "pierre") {
        div1.innerHTML = "Joueur: " + pierre + " <-> ordinateur: " + computer;
        div2.innerHTML = "Egalité !";
        div2.style.color = "orange";
        div2.style.fontSize = "30px";
        container.appendChild(div1);
        container.appendChild(div2);
    }
})

document.getElementById("ciseau").addEventListener("click", function (){
    if (ciseau && computer === "pierre") {
        div1.innerHTML = "Joueur: " + ciseau + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez perdu !";
        div2.style.color = "red";
        div2.style.fontSize = "30px";
        lost += 1;
        score();
        container.appendChild(div1)
        container.appendChild(div2);
    }
    else if (ciseau && computer === "feuille") {
        div1.innerHTML = "Joueur: " + ciseau + " <-> ordinateur: " + computer;
        div2.innerHTML = "Vous avez gagné !";
        div2.style.color = "#38761D";
        div2.style.fontSize = "30px";
        won += 1;
        score();
        container.appendChild(div1);
        container.appendChild(div2);
    }
    else if (ciseau && computer === "ciseau") {
        div1.innerHTML = "Joueur: " + ciseau + " <-> ordinateur: " + computer;
        div2.innerHTML = "Egalité !";
        div2.style.color = "orange";
        div2.style.fontSize = "30px";
        container.appendChild(div1);
        container.appendChild(div2);
    }
})

playComputer();

function score() {
    document.getElementById("player").innerHTML = "Joueur: " + won;
    document.getElementById("computer").innerHTML = "Ordinateur: " + lost;
}

