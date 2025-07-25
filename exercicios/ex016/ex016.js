function contar(){
    
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')

    resultado.innerHTML =''

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

        resultado.innerHTML = 'Contando: <br>'
    for (c = i; c <= f; c += p){
        resultado.innerHTML += c + ' &#x1f449; '
    }
        resultado.innerHTML += '&#x1F596;'
}

