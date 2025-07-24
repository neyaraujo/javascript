console.log('Quiz')
console.log('Qual animal late?')
console.log('A - GATO')
console.log('B - CACHORRO')
console.log('C - MACACO')
console.log('D - GAMBÁ')

arrAnimal = [
    {resposta1:'gato', resposta2:'cachorro'},
    {resposta1:'macaco', resposta2:'gamba'}
    ]

var resposta = 'cachorro'
if (resposta == arrAnimal[0].resposta2){
    console.log(resposta + ', foi o que você escolheu')
}