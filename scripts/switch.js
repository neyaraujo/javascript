var nome = "Michele"
var emprego = "desenvolvedor"

switch (emprego) {
    case "policial":
        console.log(nome + ' é uma policial')
        break
    case "conzinheiro":
        console.log(nome + " é uma cozinheira.")
        break
    case "desenvolvedor":
        console.log(emprego + " é uma desenvolvedora")
        break
    case "lutador":
        console.log(nome + " é uma lutadora")
        break
    default:
        console.log(nome + "trabalha em outra coisa.")
}