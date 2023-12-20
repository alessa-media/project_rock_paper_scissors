"use strict";


//Alle notwendigen Spielvariablen Initialisieren, wo nötig mit defaultwerten
let Anzahl_Runden
let Spieler1_Punkte = 0;
let Spieler2_Punkte = 0;
let Auswahl_Spieler1 = null;
let Auswahl_Spieler2 = null;
let winner
let Spielername1 
let Spielername2 = "Computer";
let Spielmodus


//Spiel wird gestartet
//Beide Spielblöcke werden angezeigt, sobald auf "Spiel starten" geklickt wird.
function start_game(runden, modus){

    //Rundenanzahl festlegen
    Anzahl_Runden=runden;


    //Anzeigen und ausblenden der korrekten Elemente
    document.getElementById("rundenauswahl").style="display:none;";
    document.getElementById("game").style="display:block;";


    //Aufforderung für EIngabe eines Spielernamens, sofern keiner vergeben ist
    if(Spielername1 == null){

        //Pop-up-Fenster, um beiden Spieler 1 einen Namen zu geben.
        Spielername1 = prompt("Gib Spieler 1 einen Namen.", "Hand");
        Spielername1 = check_name(Spielername1);

    // Falls Mehrspieler gespielt wird, wird man Aufgefordert Spieler 2 einen Namen zu geben.
        if(modus == 2){
            Spielmodus = "Multiplayer";
            Spielername2 = prompt("Gib Spieler 2 einen Namen.", "Fuss");
            Spielername2 = check_name(Spielername2);
        }    
    }



    //damit der eingegebene Spielername auf der Seite angezeigt wird.
    document.getElementById("player1").innerText=Spielername1+" wählt...";

    //anzeige beider Spielernamen im Multiplayer
    if(Spielmodus == "Multiplayer"){
    document.getElementById("player2").innerText=Spielername2+" wählt...";
    }
}


//prüft ob Spieler1 Gewählt hat
//speichert Auswahl von Spieler 1 in Variable
function selected1(Auswahl){
    Auswahl_Spieler1 = Auswahl;
    if(Auswahl_Spieler1 !== null ){
        //ausblenden der Buttons damit man weiss, das der spieler gewählt hat
        document.getElementById("buttons_spieler1").style="display:none;";
        document.getElementById("player1").innerText=Spielername1+" hat gewählt!";

        //Im Singleplayer wird bei der Auswahl des Spielers direkt auch die Auswahl des Computers berechnet
        //Verwendung von Math-Methoden für zufällige Zahlen
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

        //wiederverwendete funktionen, genauer definiert in function.js
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
        //ausblenden der buttons falls Spieler2 als erstes gewählt hat
        document.getElementById("buttons_spieler2").style="display:none;";
        document.getElementById("player2").innerText=Spielername2+" hat gewählt!";
    }  

    //falls dieser Spieler als zweites wählt wird das Spiel direkt ausgewertet
    if(Auswahl_Spieler1 !== null && Auswahl_Spieler2 !== null){

        //wiederverwendete funktionen, genauer definiert in function.js
        check_winner(Auswahl_Spieler1, Auswahl_Spieler2);
        countdown();
        display_result();
    }
    
}
