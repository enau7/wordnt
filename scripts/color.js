//depends on nothing

function color(word,targetword){
    var output = ["grey","grey","grey","grey","grey"];
    for (var k = 0; k < 5; k++){
        if (word[k]==targetword[k]){
            output[k]="green";
            targetword = targetword.replace(word[k],'0');
        }
    }
    for (var k = 0; k < 5; k++){
        for(var l = 0; l < 5; l++){
            if (word[l]==targetword[k] && output[l]=="grey"){
                output[l]="yellow";
                targetword = targetword.replace(word[l],'0');
            }
        }
    }
    return output;
}

function toHexBox(col){
    if (col=="grey"){return "#727478";};
    if (col=="yellow"){return "#edc02d";};
    if (col=="green"){return "#4cb056";};
    return "#D3D7D8";
}
function toHexLet(col){
    if (col=="grey"){return "#000000";};
    if (col=="yellow"){return "#8f750d";};
    if (col=="green"){return "#0c4f06";};
    return "#979DA1";
}