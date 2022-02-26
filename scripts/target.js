//depends on color.js

function colorcompare(colora,colorb){

}

function getword(){
    return worddd;
}

function updatecolors(g,cols,index){
    var targetword=getword();
    for (var k = 0; k < index; k++){
        cols[k]=color(g[k],targetword);
    };
    return cols;
}