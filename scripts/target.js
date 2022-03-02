//depends on color.js

globindex=0
doneindex=0
var guesses = ["     ","     ","     ","     ","     ","     "];
var colors = ["     ","     ","     ","     ","     ","     "];

var puzzles = [ ["BRAKE","FRAME","WHEEL","MOTOR","TIRES","TRUCK"],
                ["LIMIT","TIMES","PRIME","EXIST","SLOPE","MATHS"],
                ["MAPLE","CEDAR","PINES","APPLE","BIRCH","TREES"],
                ["SOLAR","MOONS","PLUTO","STARS","LUNAR","SPACE"],
                ["CLOUD","AVIAN","FLOAT","FLYER","PLANE","ABOVE"],
                ["OCEAN","TERRA","SANDS","MAGMA","ROVER","EARTH"],
                ["GAMES","LOTTO","HANDS","MONEY","CARDS","POKER"]
              ];

today = new Date();
var targetwords = puzzles[today.getDay()];

function colorcompare(colora,colorb){

}

function getword(){
    return targetwords[doneindex];
}

function updatecolors(g,cols,index){
    var targetword=getword();
    if (targetword==undefined){
        for (var k = 0; k < 6; k++){
            cols[k]=["green","green","green","green","green"];
        };
        return;
    };
    for (var k = 0; k < 6; k++){
        cols[k]="     ";
    };
    for (var k = 0; k < index; k++){
        cols[k]=color(g[k],targetword);
    };
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var k = 0; k < letters.length; k++){
        if (document.getElementById(letters[k])){
            document.getElementById(letters[k]).style.backgroundColor = toHexBox("");
            document.getElementById(letters[k]).style.color = toHexLet("");
        }
    }
    for (var k = 0; k < index; k++){
        for (var l = 0; l < 5; l++){
            if (document.getElementById(g[k][l]) && cols[k][l]=="grey"){
                document.getElementById(g[k][l]).style.backgroundColor = toHexBox(cols[k][l]);
                document.getElementById(g[k][l]).style.color = toHexLet(cols[k][l]);
            }
        }
        for (var l = 0; l < 5; l++){
            if (document.getElementById(g[k][l]) && cols[k][l]=="yellow"){
                document.getElementById(g[k][l]).style.backgroundColor = toHexBox(cols[k][l]);
                document.getElementById(g[k][l]).style.color = toHexLet(cols[k][l]);
            }
        }
        for (var l = 0; l < 5; l++){
            if (document.getElementById(g[k][l]) && cols[k][l]=="green"){
                document.getElementById(g[k][l]).style.backgroundColor = toHexBox(cols[k][l]);
                document.getElementById(g[k][l]).style.color = toHexLet(cols[k][l]);
            }
        }
    }
    return cols;
}