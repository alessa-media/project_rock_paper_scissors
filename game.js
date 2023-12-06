"use strict";


//Platzhalter für Punktzahl.
let Anzahl_Runden
let Spieler1_Punkte = 0;
let Spieler2_Punkte = 0;
let Auswahl_Spieler1 = null;
let Auswahl_Spieler2 = null;
let winner
let Spielername1 
let Spielername2 = "Computer"
let Spielmodus

/*
let timeleft = 3;
let auswertung = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(auswertung);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
  */



//Spiel wird gestartet
//Beide Spielblöcke werden angezeigt, sobald auf "Spiel starten" geklickt wird.
function start_game(runden, modus){
    //Rundenanzahl festlegen
    Anzahl_Runden=runden


    //Anzeigen und ausblenden der korrekten Elemente
    document.getElementById("rundenauswahl").style="display:none;";
    document.getElementById("game").style="display:block;";


    //Pop-up-Fenster, um beiden Spieler 1 einen Namen zu geben.
    Spielername1 = prompt("Gib Spieler 1 einen Namen.");

    // Falls Mehrspieler gespielt wird, wird man Aufgefordert Spieler 2 einen Namen zu geben.
    if(modus == 2){
        Spielmodus = "Multiplayer";
        Spielername2 = prompt("Gib Spieler 2 einen Namen.");
    }    

    //damit der eingegebene Spielername auf der Seite angezeigt wird.
    document.getElementById("player1").innerText=Spielername1+" wählt...";

    if(Spielmodus == "Multiplayer"){
    document.getElementById("player2").innerText=Spielername2+" wählt...";
    }
}


//prüft ob Spieler1 Gewählt hat
//speichert Auswahl von Spieler 1 in Variable
function selected1(Auswahl){
    Auswahl_Spieler1 = Auswahl;
    if(Auswahl_Spieler1 !== null ){
        document.getElementById("buttons_spieler1").style="display:none;";
        document.getElementById("player1").innerText=Spielername1+" hat gewählt!";

        if(Spielmodus !== "Multiplayer"){
           Auswahl_Spieler2 = Math.floor(Math.random() * 9);
           if(Auswahl_Spieler2 % 3 == 0){
            Auswahl_Spieler2 = 'Schere';
           }else if(Auswahl_Spieler2 % 3 == 1){
            Auswahl_Spieler2 = 'Stein';
           }else{
            Auswahl_Spieler2 = 'Papier';
           }
        }
    } 

    //sobald beide spieler gewählt haben wird die Runde ausgewertet
    if(Auswahl_Spieler1 !== null && Auswahl_Spieler2 !== null){


        check_winner(Auswahl_Spieler1, Auswahl_Spieler2);
        countdown();
        display_result(winner);
    }
    
}


//prüft ob Spieler 2 Gewählt hat
//speichert Auswahl von Spieler 2 in Variable
function selected2(Auswahl){
    Auswahl_Spieler2 = Auswahl;
    if(Auswahl_Spieler2 !== null ){
        document.getElementById("buttons_spieler2").style="display:none;";
        document.getElementById("player2").innerText=Spielername2+" hat gewählt!";
    }  

    //falls dieser Spieler als zweites wählt wird das Spiel direkt ausgewertet
    if(Auswahl_Spieler1 !== null && Auswahl_Spieler2 !== null){
        check_winner(Auswahl_Spieler1, Auswahl_Spieler2);
        countdown();
        display_result();
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
        winner = null;
        return winner;
    }else if((eingabe1 == "Stein" && eingabe2 == "Schere" )||(eingabe1 == "Schere" && eingabe2 == "Papier" )||(eingabe1 == "Papier" && eingabe2 == "Stein")){
        winner = Spielername1;
        return winner;    
    }else{
        winner = Spielername2;
        return winner;
    }
}

function display_result(){

    //Punkte vergeben
    if(winner == Spielername1){
        Spieler1_Punkte += 1;
    }else if (winner == Spielername2){
        Spieler2_Punkte += 1;
    }

    //Zwischenstand anzeigen
    //document.getElementById("game").style="display:none";
    //document.getElementById("spielauswertung").style="display:block";
    document.getElementById("Spieler1_wahl").innerText= Spielername1 + " hat " + Auswahl_Spieler1 + " gewählt!"
    document.getElementById("Spieler2_wahl").innerText= Spielername2 + " hat " + Auswahl_Spieler2 + " gewählt!"
    document.getElementById("sieger").innerText="Die Runde geht an: " + winner;
    document.getElementById("punktzahl").innerText="Zwischendstand: " + Spielername1 + ": " + Spieler1_Punkte + " ,  " + Spielername2 + ": " + Spieler2_Punkte;

    //Für den Fall Unentschieden
    if(winner == null){
        document.getElementById("sieger").innerText="Unentschieden, keine Punkte vergeben!"
    }

    //Anzahl Runden um 1 reduzieren
    Anzahl_Runden -= 1
}



function new_round(){
    if(Anzahl_Runden >= 1){
        //Auswahl zurücksetzen
        Auswahl_Spieler1 = null;
        Auswahl_Spieler2 = null;

        //Spielblock einblenden
        document.getElementById("game").style="display:block;";
        //Spielauswertung ausblenden
        document.getElementById("spielauswertung").style="display:none";  
        //Text anpassen für während der Auswahl für Spieler1
        document.getElementById("player1").innerText=Spielername1+" wählt...";
        //Buttons wieder einblenden für Spieler1
        document.getElementById("buttons_spieler1").style="display:block;";
        
        if(Spielmodus == "Multiplayer"){
            //Text anpassen und Buttons einblenden für spieler 2 im Multiplayer
            document.getElementById("player2").innerText=Spielername2+" wählt...";
            document.getElementById("buttons_spieler2").style="display:block;";
        }

    }


    if(Anzahl_Runden == 1){
        document.getElementById("nächste_runde").innerText="zur Auswertung";
    }



    //Falls Alle Runden gespielt wurden wird das Spiel beendet und das Endresultat angezeigt
    if(Anzahl_Runden == 0){

        document.getElementById("nächste_runde").style="display:none"
        document.getElementById("spielauswertung").style="display:block";
        document.getElementById("sieger").innerText= winner + " gewinnt das Spiel! Endstand: Spieler 1: " + Spieler1_Punkte + " Spieler 2: " + Spieler2_Punkte;
        document.getElementById("punktzahl").style="display:none;";
        
        document.getElementById("Spieler1_wahl").style="display:none;";
        document.getElementById("Spieler2_wahl").style="display:none;";
        if(Spieler1_Punkte == Spieler2_Punkte){
            document.getElementById("sieger").innerText= "Das Endresultat ist Unentschieden!";
        }
    }


}



//Funktion für den Countdown, erhöht die Spannung bei er Auswertung
function countdown(){
    //Anzeigen des Countdowns
    document.getElementById("game").style="display:none;";
    document.getElementById("spielauswertung").style="display:none;";
    document.getElementById("live_countdown").style="display:block;";

        //Variable setzen um Countdownlänge zu bestimmen
        let timeleft = 2;
        
        //Intervall, so das immer nach 1000 milisekunden die Funktion function wiederholt wird
        let auswertung = setInterval(function(){
            if(timeleft <= 0){
            clearInterval(auswertung);
            document.getElementById("live_countdown").style="display:none;";
            document.getElementById("spielauswertung").style="display:block";
            document.getElementById("live_countdown").innerText = 3;
        } else {
        document.getElementById("live_countdown").innerText = timeleft;
        }
        timeleft -= 1;
        }, 1000);
}