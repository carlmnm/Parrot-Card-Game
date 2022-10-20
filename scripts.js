

function perguntarQuantidade(){
    let quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    while ((quantasCartas % 2) !== 0 || quantasCartas < 4 || quantasCartas > 14) {
        quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    }

    return quantasCartas;
}

perguntarQuantidade();
const numeroCartas = perguntarQuantidade()

function adicionarCartas(){
    const elemento = document.querySelector(".cartas")
    for (let indice = 0; indice < numeroCartas; indice ++){
        elemento.innerHTML += `
        <li class="cartinha"> <img src="./imagens/back.png" class="papagaio"> </li>
        `;
    }
}

adicionarCartas()