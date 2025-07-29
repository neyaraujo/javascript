function adicionar() {
    let numero = window.document.getElementById('input-number')

    if (numero.value < 1 || numero.value >100) {
        alert(`[ERRO] você escolheu o numero ${numero.value}`)
    } else {
        let list = window.document.getElementById('list-number')
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} foi adicionado`
        list.appendChild(item)
        
        let arrayList = []
        arrayList.push(numero.value)

        document.body.innerHTML += arrayList
    }
}

function finlaizar() {
    alert(arrayList[0])
}
