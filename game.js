"use strict";


//Platzhalter für Punktzahl.
let Anzahl_Runden
let Spieler1_Punkte = 0;
let Spieler2_Punkte = 0;
let Auswahl_Spieler1 
let Auswahl_Spieler2 
let winner
let Spielername1 
let Spielername2 




//Spiel wird gestartet
//Beide Spielblöcke werden angezeigt, sobald auf "Spiel starten" geklickt wird.
function start_game(runden){
    //Rundenanzahl festlegen
    Anzahl_Runden=runden

    //Anzeigen und ausblenden der korrekten Elemente
    document.getElementById("rundenauswahl").style="display:none;";
    document.getElementById("game").style="display:block;";


    //Pop-up-Fenster, um beiden Spielern einen Namen zu geben.
    Spielername1 = prompt("Gib Spieler 1 einen Namen.")
    Spielername2 = prompt("Gib Spieler 2 einen Namen.")

    //damit der eingegebene Spielername auf der Seite angezeigt wird.
    document.getElementById("player1").innerText=Spielername1+" wählt...";
    document.getElementById("player2").innerText=Spielername2+" wählt...";
}


//prüft ob Spieler1 Gewählt hat
//speichert Auswahl von Spieler 1 in Variable
function selected1(Auswahl){
    Auswahl_Spieler1 = Auswahl;
    if(Auswahl_Spieler1 !== undefined ){
        document.getElementById("buttons_spieler1").style="display:none;";
        document.getElementById("player1").innerText=Spielername1+" hat gewählt!";
    } 

    //sobald beide spieler gewählt haben wird die Rune ausgewertet
    if(Auswahl_Spieler1 !== undefined && Auswahl_Spieler2 !== undefined){
        check_winner(Auswahl_Spieler1, Auswahl_Spieler2);
        display_result(winner);

    }
    
}


//prüft ob Spieler 2 Gewählt hat
//speichert Auswahl von Spieler 2 in Variable
function selected2(Auswahl){
    Auswahl_Spieler2 = Auswahl;
    if(Auswahl_Spieler2 !== undefined ){
        document.getElementById("buttons_spieler2").style="display:none;";
        document.getElementById("player2").innerText=Spielername2+" hat gewählt!";
    }  

    //falls dieser Spieler als zweites wählt wird das Spiel direkt ausgewertet
    if(Auswahl_Spieler1 !== undefined && Auswahl_Spieler2 !== undefined){
        check_winner(Auswahl_Spieler1, Auswahl_Spieler2);
        display_result(winner);
    }
    
}




//______________
//wiederverwendete Funktionen
//--------------------------


//Funktion die üperprüft, welcher Spieler gewonnen hat. Dazu werden die Eingaben verglichen.
//Die erste Bedingung prüft auf Unentschieden, das ist am einfachsten zu überprüfen
//Die Zweite ob Spieler 1 Gewonnen hat
//Treffen beide Bedingungen Nicht zu hat Spieler 2 gewonnen.
function check_winner(eingabe1,eingabe2){

    if( eingabe1 === eingabe2){
       // alert("unentschieden");
        return "unentschieden";
    }else if((eingabe1 == "Stein" && eingabe2 == "Schere" )||(eingabe1 == "Schere" && eingabe2 == "Papier" )||(eingabe1 == "Papier" && eingabe2 == "Stein")){
        winner = Spielername1;
       // alert("Der Sieger ist " + winner);
        return winner;    
    }else{
        winner = Spielername2;
      //  alert("Der Sieger ist " +winner);
        return winner;
    }
}

function display_result(sieger){

    //Punkte vergeben
    if(sieger=Spielername1){
        Spieler1_Punkte += 1;
    }else if (sieger=Spielername2){
        Spieler2_Punkte += 1;
    }

    //Zwischenstand anzeigen
    document.getElementById("game").style="display:none";
    document.getElementById("spielauswertung").style="display:block";
    document.getElementById("sieger").innerText="Die Runde geht an: " + winner;
    document.getElementById("punktzahl").innerText="Zwischendstand: Spieler 1: " + Spieler1_Punkte + " Spieler 2: " + Spieler2_Punkte

}


function new_round(){
    
}
