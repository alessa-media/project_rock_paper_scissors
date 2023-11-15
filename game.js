"use strict";
let Spielername1 = prompt("Gib Spieler 1 einen Namen.")
let Spielername2 = prompt("Gib Spieler 2 einen Namen.")

document.getElementById("player1").innerText=Spielername1+" wählt...";
document.getElementById("player2").innerText=Spielername2+" wählt...";

function start_game(){
    document.getElementById("game").style="display:block;"
}



let point

