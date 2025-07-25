function gerarTabuada(){
    var multiplicador = document.getElementById('input-number')
    var multiplicando = 1
    // var resultado = multiplicador * multiplicando

    multiplicador = Number(multiplicador.value)
    var resultado = document.getElementById('resultado')
    
    resultado.innerHTML = ''
    for (i = multiplicando; i <= 10; i++){
        var resultMult = multiplicador * i
        
        resultado.innerHTML += (multiplicador + ' x ' + i + ' = ' + resultMult + '<br>')
    }
}