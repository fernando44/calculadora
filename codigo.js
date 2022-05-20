var calculo='';
var valorFinal = '' ;

function telaPrint(controle){
    document.getElementById('tela').value = controle;
}

function limparTela(){
    document.getElementById('tela').value = '';
    calculo = '';
}

function inserirValor(Valor){
    var Aux = calculo.includes('.');
    if(Aux == true && Valor != '.' || Aux == false){
        calculo += Valor;
        telaPrint(calculo);
    } 
}

function inserirOperacao(opcao){
    
    if(calculo != ''){
        valorFinal += calculo;
        valorFinal += opcao;
        console.log(valorFinal);
        limparTela();
        telaPrint(calculo);
    }
}

function exibirResultado(){
    if(calculo != '')
    {   
        valorFinal += calculo;           
        valorFinal = (eval(valorFinal));
        telaPrint(valorFinal);
    } 
}