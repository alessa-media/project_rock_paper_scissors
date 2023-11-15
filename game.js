"use strict";
//Pop-up-Fenster, um beiden Spielern einen Namen zu geben.
let Spielername1 = prompt("Gib Spieler 1 einen Namen.")
let Spielername2 = prompt("Gib Spieler 2 einen Namen.")

//damit der eingegebene Spielername auf der Seite angezeigt wird.
document.getElementById("player1").innerText=Spielername1+" wählt...";
document.getElementById("player2").innerText=Spielername2+" wählt...";

//Beide Spielblöcke werden angezeigt, sobald auf "Spiel starten" geklickt wird.
function start_game(){
    document.getElementById("game").style="display:block;"
}


//Platzhalter für Punktzahl.
let point

