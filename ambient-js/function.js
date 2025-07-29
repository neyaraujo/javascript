//Define se um numero é par ou impar
function parImp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parImp(223))

// Função soma, retorna a soma entre dois numeros
function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2,2))

// Função fatorial, retorna o fator de um número
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
// 5! = 5 x 4 x 3 x 2 x 1
}
console.log(fatorial(5))

//Recursiva, retorna o fator com base em outro fator
function recursiva(n) {
    if (n == 1) {
        return 1
    } else {
        return n * recursiva(n-1)
    }
}

console.log(recursiva(4))