import Countdown from './countdown.js';

const btnIniciar = document.getElementById('btnIniciar');
const btnParar = document.getElementById('btnParar');
const data = document.getElementById('data');
const tempoDias = document.getElementById('tempoDias');
const tempoHoras = document.getElementById('tempoHoras');
const tempoMinutos = document.getElementById('tempoMinutos');
const tempoSegundos = document.getElementById('tempoSegundos');
const msgSucessoOuErro = document.querySelector('.msgSucessoErro p');
let interval;

function validarData(dataFormatada){
    if(dataFormatada !== 'Invalid Date'){
        checarExisteContagem(dataFormatada)
    }else{
        exibirMsgErro('erroData', `<p>Data incorreta</p>`);
        
    }
}

function checarExisteContagem(dataFormatada){
    const dataCountdown = new Countdown(dataFormatada)
    if(!interval){
        checarDataAntiga(dataCountdown)
    }else{
        exibirMsgErro('erroData', `<p>Contagem já existe, pare-a primeiro</p>`)
    }
}

function checarDataAntiga(dataCountdown){
    if(dataCountdown.diferencaDatas > 0){
        interval = setInterval(addHtml, 1000, dataCountdown);
    }else{
        exibirMsgErro('erroData', `<p>Data já passou</p>`);
    }
}
    
function addHtml(countdown){
    if(countdown.diferencaDatas > 0){
        tempoDias.innerHTML = countdown.total.propDias;
        tempoHoras.innerHTML = countdown.total.propHoras;
        tempoMinutos.innerHTML = countdown.total.propMinutos;
        tempoSegundos.innerHTML = countdown.total.propSegundos;
    }else{
        exibirMsgErro('sucessoData', `<p>chegooooooooou !!!!!!!</p>`);
        limparSetInterval()
    }
}

function limparSetInterval() {
    // Limpa o intervalo
    clearInterval(interval);
    // retira o intervalo da variavel
    interval = null;
  }


function exibirMsgErro(classe, msg){
    msgSucessoOuErro.classList.add(classe)
    msgSucessoOuErro.innerHTML = msg
    msgSucessoOuErro.classList.add('animacao')
    msgSucessoOuErro.addEventListener("animationend", function(){
    this.classList.remove('animacao', classe)
    this.innerHTML = ''
})
}

btnIniciar.addEventListener("click", function(){
    const dataFormatada = new Date(data.value)
    validarData(dataFormatada)
})

btnParar.addEventListener("click", limparSetInterval);
