//depends on words.js, boxes.js color.js target.js

globindex=0

function input(g,col){
    var inp = document.getElementById("log").value.toUpperCase();
    while (inp.length < 5){
        inp = inp.concat(" ");
    }
    g[globindex] = inp;
    updatecolors(g,col,globindex);
    displayboxes(g,col);
}

function insert(e,g,col){
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
    if (globindex>=6 || g[globindex-1]==getword()){
        globindex=6;
        document.getElementById("top").innerHTML = "The word was " + worddd;
    }
    updatecolors(g,col,globindex);
    displayboxes(g,col);
}