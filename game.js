"use strict";


//Platzhalter für Punktzahl.
let Anzahl_Runden
let Spieler1_Punkte
let Spieler2_Punkte
let Auswahl_Spieler1 
let Auswahl_Spieler2 
let winner
let Spielername1 
let Spielername2 




//Spiel wird gestartet
//Beide Spielblöcke werden angezeigt, sobald auf "Spiel starten" geklickt wird.
function start_game(){
    document.getElementById("game").style="display:block;";
    //Pop-up-Fenster, um beiden Spielern einen Namen zu geben.
    Spielername1 = prompt("Gib Spieler 1 einen Namen.")
    Spielername2 = prompt("Gib Spieler 2 einen Namen.")

    //damit der eingegebene Spielername auf der Seite angezeigt wird.
    document.getElementById("player1").innerText=Spielername1+" wählt...";
    document.getElementById("player2").innerText=Spielername2+" wählt...";
}


function selected1(Auswahl){
    Auswahl_Spieler1 = Auswahl;
    if(Auswahl_Spieler1 !== undefined ){
        document.getElementById("buttons_spieler1").style="display:none;";
        document.getElementById("player1").innerText=Spielername1+" hat gewählt!";
    }  
}

function selected2(Auswahl){
    Auswahl_Spieler2 = Auswahl;
    if(Auswahl_Spieler2 !== undefined ){
        document.getElementById("buttons_spieler2").style="display:none;";
        document.getElementById("player2").innerText=Spielername2+" hat gewählt!";
    }  
}



//Funktion die üperprüft, welcher Spieler gewonnen hat. Dazu werden die Eingaben verglichen.
//Die erste Bedingung prüft auf Unentschieden, das ist am einfachsten zu überprüfen
//Die Zweite ob Spieler 1 Gewonnen hat
//Treffen beide Bedingungen Nicht zu hat Spieler 2 gewonnen.
function check_winner(eingabe1,eingabe2){

    if( eingabe1 === eingabe2){
        alert("unentschieden");
        return;
    }else if((eingabe1 == "Stein" && eingabe2 == "Schere" )||(eingabe1 == "Schere" && eingabe2 == "Papier" )||(eingabe1 == "Papier" && eingabe2 == "Stein")){
        winner = Spielername1;
        alert(winner);
        return;    
    }else{
        winner = Spielername2;
        alert(winner);
        return;
    }
}