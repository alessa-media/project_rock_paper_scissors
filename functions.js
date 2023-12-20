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



//Funktion die das Resultat anzeigt
function display_result(){

    //Punkte vergeben, erhöhen des Punktstandes
    if(winner == Spielername1){
        Spieler1_Punkte += 1;
    }else if (winner == Spielername2){
        Spieler2_Punkte += 1;
    }

    //Zwischenstand anzeigen
    document.getElementById("Spieler1_wahl").innerText= Spielername1 + " hat " + Auswahl_Spieler1 + " gewählt!"
    document.getElementById("Spieler2_wahl").innerText= Spielername2 + " hat " + Auswahl_Spieler2 + " gewählt!"
    document.getElementById("sieger").innerText="Die Runde geht an: " + winner;
    document.getElementById("punktzahl").innerText="Zwischenstand: " + Spielername1 + ": " + Spieler1_Punkte + " ,  " + Spielername2 + ": " + Spieler2_Punkte;

    //Für den Fall Unentschieden
    if(winner == null){
        document.getElementById("sieger").innerText="Unentschieden, keine Punkte vergeben!"
    }

    //Anzahl Runden um 1 reduzieren
    Anzahl_Runden -= 1
}


//Funktion um die Runde zurückzusetzen
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
        document.getElementById("buttons_spieler1").style="display:";
        
        if(Spielmodus == "Multiplayer"){
            //Text anpassen und Buttons einblenden für spieler 2 im Multiplayer
            document.getElementById("player2").innerText=Spielername2+" wählt...";
            document.getElementById("buttons_spieler2").style="display:";
        }


    }

    //ändern des Buttontextes in der letzten Runde
    if(Anzahl_Runden == 1){
        document.getElementById("naechste_runde").innerText="zur Auswertung";
    }



    //Falls Alle Runden gespielt wurden wird das Spiel beendet und das Endresultat angezeigt
    if(Anzahl_Runden == 0){
        final_winner(Spieler1_Punkte,Spieler2_Punkte);

        //Anzeigen und Ausblenden der passenden Elemente
        document.getElementById("naechste_runde").style="display:none;";
        document.getElementById("spielauswertung").style="display:block";

        //Text Endresultat Einfügen und anzeigen
        document.getElementById("sieger").innerText= winner + " gewinnt das Spiel! \n Endstand: " + Spielername1 + ": "  + Spieler1_Punkte + ", " + Spielername2 + ": " + Spieler2_Punkte;
        document.getElementById("punktzahl").style="display:none;";
        
        document.getElementById("Spieler1_wahl").style="display:none;";
        document.getElementById("Spieler2_wahl").style="display:none;";
        if(Spieler1_Punkte == Spieler2_Punkte){
            document.getElementById("sieger").innerText= "Das Endresultat ist Unentschieden!";
        }

        document.getElementById("new_game").style="display:block;";
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
        
        //Intervall, so das immer nach 1000 millisekunden die Funktion function wiederholt wird
        let auswertung = setInterval(function(){
            if(timeleft <= 0){
            clearInterval(auswertung);

            //ausblenden countdown, einblenden auswertung
            document.getElementById("live_countdown").style="display:none;";
            document.getElementById("spielauswertung").style="display:block";
            //default zeit 3 Sekunden wieder herstellen
            document.getElementById("live_countdown").innerText = 3;
            } else {
            //nach 1 Sekunde wird der Text im countdown geändert
            document.getElementById("live_countdown").innerText = timeleft;
            }
            timeleft -= 1;
        // Intervall von 1000 milisekunden wird festgelegt
        }, 1000);
}


// Sicherstellen das die Spieler Namen eingeben
// Es wird solange ein Spielername abgefragt bis ein Name eingegeben wird
function check_name(spieler){
    while(spieler == '' || spieler == null){
        spieler = prompt("Bitte gib einen Namen ein!", "Roland Schwager");
    }

//
    if(Spielmodus == "Multiplayer"){
        if(Spielername1 == spieler){
            spieler = "Not Roland Schwager";
            //spieler = "Herwig Hansmann"
        }
        
        if(Spielername1 == "Not Roland Schwager"){
            spieler = "Roland Schwager"
        }
    }

    //Spielername wird zurückgegeben
    return spieler;
}


//wertet die Endpunktestände aus, gibt den Spielernamen des Siegers an die Variable winner weiter
function final_winner(punkte1, punkte2){
    if(punkte1 > punkte2){
        winner = Spielername1
    }else{
        winner = Spielername2
    }
}



// Setzt das Spiel zurück, im SIngleplayer bleibt der Spielername derselbe
function reset_game(){
    Spieler1_Punkte = 0;
    Spieler2_Punkte = 0;
    Auswahl_Spieler1 = null;
    Auswahl_Spieler2 = null;

    
    //Damit im Muliplayer gegen jemand anders gespielt werden kann werden die Namen zurückgesetzt
    if(Spielmodus == "Multiplayer" ){
        Spielmodus = 2;
        Spielername1 = null;
        Spielername2 = null;

        document.getElementById("buttons_spieler2").style="display:";

    }


    //Einblenden und Ausblenden der notwendigen Elemente
    document.getElementById("rundenauswahl").style="display:inline-block";
    document.getElementById("spielauswertung").style="display:none;";
    document.getElementById("buttons_spieler1").style="display:";
   // document.getElementById("buttons_spieler2").style="display:";
    document.getElementById("naechste_runde").style="display:block;";
    document.getElementById("naechste_runde").innerText="nächste Runde";
    document.getElementById("new_game").style="display:none;";

    document.getElementById("Spieler1_wahl").style="display:block;";
    document.getElementById("Spieler2_wahl").style="display:block;";
    document.getElementById("punktzahl").style="display:block;";



    document.getElementById("naechste_runde").style="display:";
    document.getElementById("new_game").style="display:none;";
}
