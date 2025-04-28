

let perdeu = false;
let pontuacao = 0;
let opcoes = ["Papel","Pedra","Tesoura"];

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
while(!perdeu){

    console.log("Escolha sua jogada\n1 - Papel\n2 - Pedra\n3 - Tesoura");

    let computador = gerarNumeroAleatorio(0,2)

    console.log(`O computador jogou ${opcoes[computador]}`);

    let jogada = parseInt(prompt())-1;

    if((jogada<0 || jogada>2) || (computador===0 && jogada===1) || (computador===1 && jogada===2) || (computador===2 && jogada===0)){
        perdeu=true;
        console.log(`Você perdeu! A sua pontuação foi de ${pontuacao}`);

    }else if(jogada===computador){
        console.log(`A rodada empatou!`);
    }else{
        console.log("Você ganhou!")
        pontuacao++;
    }



}