function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked == true) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'img/criança-masculino.png')
            }else if (idade < 21) {
                //JOVEM
                img.setAttribute('src','img/jovem-masculino.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src','img/adulto-masculino.png')
            }else {
                //idoso
                img.setAttribute('src','img/idoso-masculino.png')
            }

        }else if (fsex[1].checked == true) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'img/criança-feminino.png')
            }else if (idade < 21) {
                //JOVEM
                img.setAttribute('src','img/jovem-feminino.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src','img/adulto-feminino.png')
            }else {
                //idoso
                img.setAttribute('src','img/idoso-feminino.png')
                img.style.borderRadius = '50%'
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}