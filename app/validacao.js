function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;
    

    if(ChuteInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER." || chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
            <h4>GAME OVER!!!</h4>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        }else{
            elementoChute.innerHTML += `<div>Valor Invalido</div>`
            return
        }
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return 
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `        
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});

