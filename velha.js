// JS

jogador = "X";

function joga(celula){
    click = document.getElementById(celula).innerHTML;
    if (click == "X" || click == "O"){
        alert("Casa utilizada!");
    }else{
        document.getElementById(celula).innerHTML = jogador;
        if(jogador ==  "X"){
            jogador = "O";
        }else{
            jogador = "X";
        }
        
    }
}

function verifica(){
    a1 = document.getElementById('a1').innerHTML;
    a2 = document.getElementById('a2').innerHTML;
    a3 = document.getElementById('a3').innerHTML;
    b1 = document.getElementById('b1').innerHTML;
    b2 = document.getElementById('b2').innerHTML;
    b3 = document.getElementById('b3').innerHTML;
    c1 = document.getElementById('c1').innerHTML;
    c2 = document.getElementById('c2').innerHTML;
    c3 = document.getElementById('c3').innerHTML;
    ret = true

    if(((a1 != '') && (a2 != '') && (a3 != '') && (a1 == a2) && (a2 == a3)) ||
       ((b1 != '') && (b2 != '') && (b3 != '') && (b1 == b2) && (b2 == b3)) ||
       ((c1 != '') && (c2 != '') && (c3 != '') && (c1 == c2) && (c2 == c3)) ||
       ((a1 != '') && (b1 != '') && (c1 != '') && (a1 == b1) && (b1 == c1)) ||
       ((a2 != '') && (b2 != '') && (c2 != '') && (a2 == b2) && (b2 == c2)) ||
       ((c3 != '') && (b3 != '') && (c3 != '') && (a3 == b3) && (b3 == c3)) ||
       ((a1 != '') && (b2 != '') && (c3 != '') && (a1 == b2) && (b2 == c3)) ||
       ((a3 != '') && (b2 != '') && (c1 != '') && (a3 == b2) && (b2 == c1))){
        alert("Você é o campeão");
        novo_jogo();
    }
    else if((a1 != '') && (a2 != '') && (a3 != '') &&
            (b1 != '') && (b2 != '') && (b3 != '') &&
            (c1 != '') && (c2 != '') && (c3 != '')){
        alert('Deu Velha');
        novo_jogo()
    }
}

function novo_jogo(){
    valor = ["a", "b", "c"];
    for(i=0; i<3; i++){
        for(j=1; j<4; j++){
            nome = valor[i] + j;
            document.getElementById(nome).innerHTML = '';
        }        
    }
}