
function chamar() {
    if (repetido()){
        msgErro()
    }else {
        adicionar()
    }
}

function finalizar() {
    escrever()
}

function componentes() {
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    for (let i = 0; i < selectList.options.length; i++){
        valoresSelect.push(selectList.options[i].value)       
    }
    return valoresSelect.length
}

function max() {
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    for (let i = 0; i < selectList.options.length; i++){
        valoresSelect.push(Number(selectList.options[i].value))       
    }
    valoresSelect.sort(function(a, b){
        return a - b
    })

    return valoresSelect[valoresSelect.length -1]
}

function min() {
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    for (let i = 0; i < selectList.options.length; i++){
        valoresSelect.push(Number(selectList.options[i].value))       
    }
    valoresSelect.sort(function(a, b){
        return b - a
    })

    return valoresSelect[valoresSelect.length -1]
}

function msgErro() {
    alert('Esse numero ja foi inserido')
}


function adicionar() {
    // Zera os resultados
    let result = window.document.getElementById('form__result')
    result.innerHTML = ''

    // Seta os elementos
    let valor = window.document.getElementById('input-number')
    let selectList = document.getElementById('form__list')    



    if (valor.value < 1 || valor.value >100) {
        alert(`[ERRO] você escolheu o numero ${valor.value}`)
    } else {

        let option = document.createElement('option')
        option.value = valor.value
        option.text = 'Valor ' + valor.value + ' adicionado.';
        selectList.appendChild(option)
    }

}

function soma() {
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    let soma = 0

    for (let i = 0; i < selectList.options.length; i++) {
        valoresSelect.push(selectList.options[i].value)
        soma += Number(valoresSelect[i])
    }

    return soma
}

function media (){
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    for (let i = 0; i < selectList.options.length; i++){
        valoresSelect.push(selectList.options[i].value)       
    }
    return soma() / valoresSelect.length
}

function repetido() {
    let valor = document.getElementById('input-number')
    let selectList = document.getElementById('form__list')
    let valoresSelect = []
    for (let i = 0; i < selectList.options.length; i++){
        valoresSelect.push(selectList.options[i].value)
        if (valor.value == valoresSelect[i]){
            return true
        }       
    }
}

function escrever(){
    // Pega a div onde o parágrafo sera inserido
    let resultado = document.getElementById('form__result')

    // Cria o elemento <p>
    let p = document.createElement('p')

    // Define o contúdo do parágrado
    p.textContent = ''

    //Define um id para o parágrafo
    p.id = 'form__result__p'

    //Adiciona o parágrafo à div
    resultado.appendChild(p)
    resultado.innerHTML = ` Ao todo, temos ${componentes()} números cadastrados.<br>
    O maior valor informado foi ${max()}.<br>
    O menor valor informado foi ${min()}.<br>
    Somando todos os valores, temos ${soma()}.<br>
    A média dos valores digitados é ${media()}.` 
}

function reset() {
    window.document.getElementById('input-number').value = ''
}




