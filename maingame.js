player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="turno para preguntar - "+player1_name;
document.getElementById("player_answer").innerHTML="turno para responder - "+player2_name;

function send(){
    get_word=document.getElementById("word").value ;
    word=get_word.toLowerCase();
    console.log(word);
    Character1=word.charAt(1);
    console.log(Character1);
    dividir=Math.floor(word.length/2);
    Character2=word.charAt(dividir);
    console.log(Character2);
    quitar=word.length-1;
    Character3=word.charAt(quitar);
    console.log(Character3);
    remover1=word.replace(Character1,"_");
    remover2=remover1.replace(Character2,"_");
    remover3=remover2.replace(Character3,"_");

    question_word="<h4 id='mostrarpalabra'> Q. "+remover3+"</h4>";
    caja_input="<br>respuesta: <input type='text'id='respuesta_respondida'>";
    boton_comprovativo="<br><br><button class='btn btn-warning' onclick='comprovar()'>seguro?</button>";
    row=question_word+caja_input+boton_comprovativo;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

turno_de_preguntar="player1";
respondedor="player2";

function comprovar()
{
respuesta_obtenida=document.getElementById("respuesta_respondida").value;
correccion_coregida=respuesta_obtenida.toLowerCase();
console.log("minusculas"+correccion_coregida);

if(correccion_coregida==word){
    if(respondedor=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
    
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;    }
}
if(correccion_coregida!=word){
    if(respondedor=="player2"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById(player2_score).innerHTML=player2_score;
    }
}

if(turno_de_preguntar=="player1"){
    turno_de_preguntar="player2";
    document.getElementById("player_question").innerHTML="turno para preguntar -  "+player2_name;

}
else{
    turno_de_preguntar="player1";
    document.getElementById("player_question").innerHTML="turno para preguntar -  "+player1_name;
}
if(respondedor=="player1"){
    respondedor="player2";
    document.getElementById("player_answer").innerHTML="turno para responder -  "+player2_name;

}
else{
    respondedor="player1";
    document.getElementById("player_answer").innerHTML="turno para responder -  "+player1_name;

}
document.getElementById("output").innerHTML="";
}

