var botoes = document.querySelectorAll('table button')
var telaNumber = document.querySelector('.tela-number')
var subNumber = document.querySelector('.sub-number')
var operador = document.querySelector('.operador')
telaNumber.innerHTML = 0
var operador;

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var valor = botao.textContent;
        if (isFinite(valor)) { 
            var qtdNumber = telaNumber.innerText;
            if (qtdNumber === '0' && isFinite(qtdNumber)) {
                telaNumber.innerHTML = valor;
            } else if (qtdNumber.length < 9) { 
                telaNumber.innerHTML += valor;
            }
        }
    });
});

function resetarTela(){
    if(subNumber.innerHTML == ""){
        number1 = telaNumber.innerHTML;
        subNumber.innerHTML = `${number1}`
        telaNumber.innerHTML = "0";
    }
}

function soma(){
    resetarTela();
    operador.innerHTML = "+";
}

function subtrair(){
    resetarTela();
    operador.innerHTML = "-";
}

function subtrair(){
    resetarTela();
    operador.innerHTML = "-";
}

function multiplicar(){
    resetarTela();
    operador.innerHTML = "*";
}

console.log(operador)

function dividir(){
    resetarTela();
    operador.innerHTML = "/";
}

function limpaTela() {
    telaNumber.innerHTML = 0
}

function limpaTotal() {
    telaNumber.innerHTML = 0
    subNumber.innerHTML = ""
    operador.innerHTML = ""
}

function voltar() {
    var resultado = telaNumber.innerHTML;
    resultado = resultado.substring(0, resultado.length - 1)
    telaNumber.innerHTML = resultado;
    if(resultado.length == 0){
        telaNumber.innerHTML = 0
    }
}

function ponto() {
    if (!telaNumber.innerHTML.includes(".")){
        telaNumber.innerHTML += "."
    }   
}

function calcular() {
    if (telaNumber){
        var number1 = parseFloat(telaNumber.innerHTML)
        var number2 = parseFloat(subNumber.innerHTML)
        var operadorMatematico = operador.innerHTML
        var resultado;

        switch (operadorMatematico) {
            case "+":
                resultado = number1 + number2;
                break;
            case "-":
                resultado = number2 - number1;
                break;
            case "*":
                resultado = number1 * number2;
                break;
            case "/":
                resultado = number2 / number1;
                console.log(number1)
                console.log(number2)
                break;
            default:
                console.log('Operador inválido')
        }
        console.log(resultado)
        if(resultado.toString().length > 10 ){
            resultado = resultado.toString().substring(0,9)
        }

        telaNumber.innerHTML = resultado
        subNumber.innerHTML = ''
        operador.innerHTML = ''
    }
}