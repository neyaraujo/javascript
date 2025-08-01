let amigo = {nome: 'Jose', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p=0){
        this.peso +=p

    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

let n = 1543.5
console.log(n.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))

let s = 'JavaScript'
console.log(s.toUpperCase())

let num = 8
console.log(num**=2)

