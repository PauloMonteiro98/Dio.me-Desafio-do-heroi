
const form = document.getElementById('form');
const heroi = document.getElementById('heroi');
const xp = document.getElementById('xp');
const resultadoDiv = document.getElementById('resultado');


form.addEventListener('submit', (event)=> {
    event.preventDefault();
    checkinputdados();

})

function checkinputdados(){
    const xpValue = xp.value;
    const heroiValue = heroi.value;

    let mensagem = "";

    if (xpValue <= 1000) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Ferro.`
    }
    else if (xpValue >= 1001 && xpValue <= 2000) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Bronze.`
    }
    else if (xpValue >= 2001 && xpValue <= 5000 ) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Prata.`
    }
    else if (xpValue >= 6001 && xpValue <= 7000  ) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Ouro.`
    }
    else if (xpValue >= 7001 && xpValue <= 8000  ) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Platina.`
    }
    else if (xpValue >= 8001 && xpValue <= 9000  ) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Ascendente.`
    }
    else if (xpValue >= 9001 && xpValue <= 10000  ) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Imortal.`
    }
    else if (xpValue >= 10001) {
        mensagem = `O Herói de nome ${heroiValue} está no nível de Radiante.`
    };

    resultadoDiv.innerHTML = mensagem;
}
