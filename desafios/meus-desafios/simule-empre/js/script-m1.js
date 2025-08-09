let resultE1 = window.document.getElementById('iresult')

function calcular() {
    let mesesE1 = window.document.getElementById('imes')    
    let capitalE1 = window.document.getElementById('icapital')
    let taxaE1 = window.document.getElementById('itaxa')
    let parcelaE1 = window.document.getElementById('iparcela')    

    let meses = Number(mesesE1.value)
    let capital = Number(parseFloat(capitalE1.value))
    let taxa = Number(parseFloat(taxaE1.value))
    let parcela = Number(parseFloat(parcelaE1.value))

    parcela = (parcelar(meses, capital, taxa).toFixed(2).replace('.',','))
    resultE1.innerHTML += `<p>Prestação: R$ ${parcela}</p>`

}

function parcelar(meses, capital, taxa) {
    return ((capital * (taxa / 100)) + capital) / meses
}

function limpar() {
    let mesesE1 = window.document.getElementById('imes').value = ''
    let capitalE1 = window.document.getElementById('icapital').value = ''
    let taxaE1 = window.document.getElementById('itaxa').value = ''
    let parcelaE1 = window.document.getElementById('iparcela')  .value =''

}