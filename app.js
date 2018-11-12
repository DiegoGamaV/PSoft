var app = (function(){

    const altura_field = document.getElementById("altura");
    const massa_field = document.getElementById("massa");
    const outputValor = document.getElementById("show");
    const outputClass = document.getElementById("classificacao");

    resolverIMC = function (){
        var altura = Number(altura_field.value);
        var massa = Number(massa_field.value);
    
        var resultado = imclib.imc(altura, massa).toPrecision(2);
        outputValor.innerHTML = "IMC: " + resultado;
        if (resultado > 0)
            outputClass.innerHTML = imclib.classificacao(resultado);
    }

    var object = {
        exibirIMC : resolverIMC
    };
    

    return object;
})();