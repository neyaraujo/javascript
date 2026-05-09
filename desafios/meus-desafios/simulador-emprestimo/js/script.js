





function calcular() {


    const mesesE1 = window.document.getElementById('imes')
    const capitalE1 = window.document.getElementById('icapital')
    const taxaE1 = window.document.getElementById('ijuros')
    const parcelaE1 = window.document.getElementById('iparcela')

        if(taxaE1.value ==""){
            taxaE1.value = 16
        }
    // Parse e sanitização
    const meses = parseInt(mesesE1.value.trim(), 10);
    const capital = parseFloat(capitalE1.value.trim().replace(',', '.'));
    const taxa = parseFloat(taxaE1.value.trim().replace(',', '.'));

    let valores = [meses, capital, taxa] 
    // estadoVazio(valores)



        if(estadoVazio(valores)){
            alert('Campo vazio')
        }else {
            parcelaE1.value = (parcelar(meses, capital, taxa))
            capitalE1.value = capital.toFixed(2).replace('.',',')
        }

    function parcelar(meses, capital, taxa) {
        return ((capital * (taxa / 100) + capital) / meses).toFixed(2).replace('.',',')
    }



    function estadoVazio(valores) {
        for(let pos in valores) {
            if(
                valores[pos]==="" || 
                valores[pos]=== null ||
                (typeof valores[pos] === "number" && isNaN(valores[pos])) ||
                (typeof valores[pos] ==="string" && valores[pos].trim() ==="")    
            ) {
                return true
            }else {
                return false
            }
        }        
    }


}

    function limpar() {
    const mesesE1 = window.document.getElementById('imes')
    const capitalE1 = window.document.getElementById('icapital')
    const taxaE1 = window.document.getElementById('ijuros')
    const parcelaE1 = window.document.getElementById('iparcela')

        mesesE1.value = ''
        capitalE1.value =''
        taxaE1.value = 16
        parcelaE1.value = ''
    }