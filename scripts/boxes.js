//depends on color.js target.js

function displayboxes(g,col){
    var c = document.getElementById("myCanvas")
    var ctx = c.getContext("2d");
    ctx.font = "40px Times New Roman";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,ctx.width,ctx.height);
    for (var k = 0; k < 6; k++){
        if (doneindex > k) {
            ctx.lineWidth=3;
            ctx.strokeStyle = "#0f8a1b";
            ctx.strokeRect(20,20+k*50,250,50);
        }
        for (var l = 0; l < 5; l++){
            ctx.fillStyle = toHexBox(col[k][l]);
            ctx.fillRect(25+l*50,25+k*50,40,40);
            ctx.fillStyle = toHexLet(col[k][l])
            ctx.fillText(g[k][l],25+l*50+20,25+k*50+34);
        }
    }
}