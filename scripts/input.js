//depends on words.js, boxes.js color.js target.js

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

function insert(e,g,col){
    if(doneindex >= 6) {return;};
    if(e.keyCode == 13 && globindex!=6){
        if (isWord(g[globindex])){
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
    if (g[globindex-1]==getword()){
        doneindex+=1;
        globindex=doneindex;
        document.getElementById("top").innerHTML = (6-doneindex) + " to go!";
        if (globindex>=6){
            document.getElementById("top").innerHTML = "Congratulations! New Rewordle tommorow.";
            updatecolors(g,col,6);
        };
        for (var k = 0; k < 6; k++){
            if (k < doneindex){
                g[k]=targetwords[k]
            } else {
                g[k]="     ";
            }
        }
    }
    updatecolors(g,col,globindex);
    displayboxes(g,col);
}