
// const costa = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif"];

let costa = ["1", "2", "1", "2"]




function perguntarQuantidade(){
    let quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    while ((quantasCartas % 2) !== 0 || quantasCartas < 4 || quantasCartas > 14) {
        quantasCartas = parseInt(prompt("Com quantas cartas você deseja jogar? Digite qualquer número par de 4 a 14."));
    }

    return quantasCartas;
}


const numeroCartas = perguntarQuantidade()


function gerador() {
    if (numeroCartas === 6){
        costa.push("3", "3");
    } else if (numeroCartas === 8) {
        costa.push("3", "3", "4", "4");
    } else if (numeroCartas === 10){
        costa.push("3", "3", "4", "4", "5", "5");
    } else if (numeroCartas === 12){
        costa.push("3", "3", "4", "4", "5", "5", "6", "6");
    } else if (numeroCartas === 14){
        costa.push("3", "3", "4", "4", "5", "5", "6", "6", "7", "7");
    }
    return costa;
}

const versinho = gerador()


function comparador() { 
	return Math.random() - 0.5;
}

costa.sort(comparador);

versinho.sort(comparador);

function adicionarCartas(){
    const elemento = document.querySelector(".disposicaoCartas")
    for (let indice = 0; indice < numeroCartas; indice ++){
        elemento.innerHTML += `
        <div class="cartinha" onclick="flip(this)"> 
            <div class="frente face"> 
                <img src="./imagens/${versinho[indice]}.gif" class="danca gif${versinho[indice]}"> 
            </div> 
            <div class="verso face"> 
                <img src="./imagens/back.png" class="papagaio"> 
            </div> 
        </div>
        `;
    }
}

adicionarCartas()

let cont = 0;
let contagem = 0;




function flip(elemento){
    elemento.classList.add("flipada");
    elemento.classList.toggle("elementoX");
   
    let comparar = document.querySelectorAll(".elementoX")
    

    const primeiroEle = comparar[0].childNodes[1];
    const segundoEle = comparar[1].childNodes[1];
    //const netoPrimeiro = primeiroEle.childNodes[1].classList[1];
    //const netoSegundo = segundoEle.childNodes[1].classList[1]
   
    cont++;


  

    if (cont < 2){
        if (primeiroEle.childNodes[1].classList[1] === segundoEle.childNodes[1].classList[1]){
            //elemento.classList.add("flipadaFixa")
            comparar[0].classList.add("flipadaFixa");
            comparar[1].classList.add("flipadaFixa");
            console.log(document.querySelectorAll(".flipada"))
            setTimeout(descomparacao, 1000);
        } else {
            console.log(document.querySelectorAll(".flipada"))
            setTimeout(desflip, 1000);
            
            setTimeout(descomparacao, 1000);
            


        }
        cont = 0
        
        
    }
    
}

/*function comparar(){
    const comparar = document.querySelector('.danca')
    elemento.classList.toggle("comparacao");
    contagem++;

    if (contagem === 2){
        setTimeout(descomparacao, 1000)
        contagem = 0;
    }
}*/



function desflip(){
    const elemento = document.querySelectorAll('.flipada')
    
    for (let i = 0; i < elemento.length; i++){
       // let numero = elemento.length - i;
        elemento[i].classList.remove('flipada');
    }
}

function descomparacao(){
    const elemento = document.querySelectorAll('.elementoX')
    for (let i = 0; i < elemento.length; i++){
     //   let numero = elemento.length - i;
        elemento[i].classList.remove('elementoX');
    }

}

