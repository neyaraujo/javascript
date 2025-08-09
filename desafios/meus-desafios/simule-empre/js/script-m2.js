let resultE1 = document.getElementById('iresult');

function calcular() {
    let mesesE1 = document.getElementById('imes');    
    let capitalE1 = document.getElementById('icapital');
    let taxaE1 = document.getElementById('itaxa');

    let meses = Number(mesesE1.value);
    let capital = parseFloat(capitalE1.value);
    let taxa = parseFloat(taxaE1.value);

    if (meses > 0 && capital > 0 && taxa > 0) {
        let parcela = parcelar(meses, capital, taxa);
        let parcelaFormatada = parcela.toFixed(2).replace('.', ',');
        
        // Exibe o resultado APENAS no resultE1
        resultE1.innerHTML = "<h1>Resultado</h1>"
        resultE1.innerHTML += `<p>Prestação: R$ ${parcelaFormatada}</p>`;
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function parcelar(meses, capital, taxa) {
    return ((capital * (taxa / 100)) + capital) / meses;
}

function limpar() {
    document.getElementById('imes').value = '';
    document.getElementById('icapital').value = '';
    document.getElementById('itaxa').value = '';
    document.getElementById('iparcela').value = '';
    resultE1.innerHTML = `<h1>Resultado da operação</h1>`;
}
