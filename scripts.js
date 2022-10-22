

function perguntarQuantidade(){
    let quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    while ((quantasCartas % 2) !== 0 || quantasCartas < 4 || quantasCartas > 14) {
        quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    }

    return quantasCartas;
}


const numeroCartas = perguntarQuantidade()

function adicionarCartas(){
    const elemento = document.querySelector(".disposicaoCartas")
    for (let indice = 0; indice < numeroCartas; indice ++){
        elemento.innerHTML += `
        <div class="cartinha" onclick="flip(this)"> 
            <div class="frente"> 
               frente
            </div> 
            <div class="verso"> 
                <img src="./imagens/back.png" class="papagaio"> 
            </div> 
        </div>
        `;
    }
}

adicionarCartas()

function flip(elemento){
    elemento.classList.toggle("flipada")
    
}