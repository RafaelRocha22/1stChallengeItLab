let saldoAtual = document.getElementById('iSaldo');
let tipo = document.getElementById('iTipo');
let desc = document.getElementById('desc').value;
let valor = document.getElementById('iValor');
let liq = document.getElementById('iLiq');
let val = document.getElementById('iVal');
let vali = document.getElementById('validar');
let mensagemErro = document.getElementById('mensagem-erro');
let errosLista = [];

//var pChars = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890 ';


function validaTipo(){
    if(tipo < 1){
        errosLista.push('Selecione um tipo');
    }
}

function validaDesc(){
    var pChars = ['a', 'A', 'b', 'B', 'c', 'C', 'd','D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y' , 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
    for (var i = 0; i < desc.length; i++){
        if (pChars.indexOf(desc.charAt(i)) == -1){
            errosLista.push('caracter encontrado');
        }
    }
    if(desc.length < 4 || desc.length > 40){
        errosLista.push('Descrição insuficiente');
    }
}

function validaValor(){
    Number(valor);
    if(valor.value <= 0 || valor.value > 9999999 || isNaN(valor.value)){
        errosLista.push('Valor deve ser maior que 0');
    }
    if(valor.value.length == 0){
        errosLista.push('Campo valor está vazio');
    }
}

function validaDatas(){
    var date1 = new Date(liq.value);
    var date2 = new Date(val.value);
    if(date1 > date2){
        errosLista.push('Datas de liquidação e validade não condizem');
    }
    if(val.value.length == 0){
        errosLista.push('Campo de data está vazio');
    }
}

function validaForm(){
    errosLista = []
    if(validaTipo() || validaDesc() || validaValor() || validaDatas()){
    }
    console.log(errosLista);
    
}

function exibeMensagemErro(errosLista){
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    for(i = 0; i <= errosLista.length; i++){
        var li = document.createElement("li");
        li.textContent = errosLista[i];
        ul.appendChild(li);
    };
}