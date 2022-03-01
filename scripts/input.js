//depends on words.js, boxes.js color.js target.js

function press(key){
    if (key=='ent'){
        insert(key,true);
        return;
    }
    if (key=='del'){
        var output = "";
        for (var k = 0; k < document.getElementById("log").value.length-1; k++){
            output += document.getElementById("log").value[k];
        }
        document.getElementById("log").value = output;
        input(guesses,colors);
        return;
    }
    if (document.getElementById("log").value.length < 5){
        document.getElementById("log").value += key;
        input(guesses,colors);
    };
}

function input(g,col){
    if (globindex >= 6){return;};
    var inp = document.getElementById("log").value.toUpperCase();
    while (inp.length < 5){
        inp = inp.concat(" ");
    }
    g[globindex] = inp;
    updatecolors(g,col,globindex);
    displayboxes(g,col);
}

function insert(e,tf){
    if(doneindex >= 6) {return;};
    if((e.keyCode == 13 || tf) && globindex != 6){
        if (isWord(guesses[globindex])){
            globindex+=1;
            document.getElementById("log").value = "";
            document.getElementById("error_text").innerHTML = "&nbsp";
        } else {
            document.getElementById("log").value = "";
            if (document.getElementById("error_text").innerHTML == "Invalid word :("){
                document.getElementById("error_text").innerHTML = "Still invalid :(";
            } else {
                document.getElementById("error_text").innerHTML = "Invalid word :(";
            }
        }
    }
    if (globindex>=6){
        globindex=6;
        document.getElementById("top").innerHTML = "The word was " + getword() + ". New Rewordle tommorow!";
    }
    if (guesses[globindex-1]==getword()){
        doneindex+=1;
        globindex=doneindex;
        document.getElementById("top").innerHTML = (6-doneindex) + " to go!";
        if (globindex>=6){
            document.getElementById("top").innerHTML = "Congratulations! New Rewordle tommorow.";
            updatecolors(guesses,colors,6);
        };
        for (var k = 0; k < 6; k++){
            if (k < doneindex){
                g[k]=targetwords[k]
            } else {
                g[k]="     ";
            }
        }
    }
    updatecolors(guesses,colors,globindex);
    displayboxes(guesses,colors);
}