function el(){
    player1_name =document.getElementById("jugador1").value ;
    player2_name =document.getElementById("jugador2").value ;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="game_page.html";
}