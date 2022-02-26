console.log("Hello World")

// Variaveis

let nome = "Hudson"
let pessoa = "Amanda"
const idade = 26

console.log(nome, pessoa, idade)

// Numeros
let numero1 = 10
let numero2 = 20
let numero3 = "10"
let numero4 = "10"
console.log("Soma de dois numeros: " + (numero1 + numero2))
console.log("Some de duas strings: " + (numero3 + numero4))

// Tipos de dados
// Strings

let primeiroNome = "Igor"
let segundoNome = "Kanashiro"

let numero5 = "10"
// Inteiro
let numero6 = 10

// Contatenar
console.log(primeiroNome + " " + segundoNome)
console.log(numero5 + numero6)

// Booleanos

let verdadeiro = true
let falso = false

// Tipos de dados 

// Array
let listaNomes = []
console.log(listaNomes)

listaNomes = ["Igor", "Rebeca", "Mei", "Sol"]
console.log(listaNomes)

console.log(listaNomes[0])
listaNomes.push("Kiara", "Meg")
console.log(listaNomes)

// Objetos

const igor = {
    nome: "Igor",
    sobrenome: "Kanashiro",
    telefone: "99999999",
    cpf: "99999999",
    cidade: "Sao Paulo"
}
console.log(igor)
console.log(igor.nome)
console.log(igor.sobrenome)
console.log(igor.telefone)
console.log(igor.cpf)
console.log(igor.cidade)


funcionarios = []
funcionarios.push(igor)

const rebeca = {
    nome: "Rebeca",
    sobrenome: "Santos",
    idade: "22",
    telefone: "9999999999",
    cidade: "Sao Paulo"
}

funcionarios.push(rebeca)
console.log(funcionarios)

// Operadores Basicos

// Soma => +
// Diferenca => -
// multiplicacao => *
// Divisao => /

let number = 10
let number2 = 20

number++
console.log(number)
number += number2
console.log(number)

// DOM => Document Object Model

let divPessoa = document.getElementsByClassName("pessoa")
console.log(divPessoa)
divPessoa = document.querySelector(".pessoa")
console.log(divPessoa)
//divPessoa.innerText = "Igor"

let novaDiv = document.querySelector(".pessoa")
//console.log(novaDiv)

let grupo = ["Igor", "Kanashiro", "Sousa", "Rebeca", "Santos", "Lima"]
for (i = 0; i < grupo.length; i++) {
    let div = document.createElement("div")
    div.innerText = grupo[i]

    //novaDiv.appendChild(div)
    //console.log(div)
}

//Eventos

//1-Selecionar o Input
    //A-Pegar valor do campo

//2-Adicionar evento no botao/clique
//3-Guardar o valor em algum lugar

const inputTexto = document.querySelector(".inputTexto")
//Selecionando Button do HTML
const btnAdicionar = document.querySelector(".btnAdicionar")

//Selecionando a lista de nomes
const ol = document.querySelector("ol")

//Interceptando evento no button
btnAdicionar.addEventListener("click", pegarValores)
inputTexto.addEventListener("keypress", pegarValores)

//Funcao que vai executar
function pegarValores(event) {
    
    if (event.key == "Enter" || event.type == "click") {

        //Selecionando Input
        const inputTexto = document.querySelector(".inputTexto")
    
        //Pegando valor do Input
        const valorInput = inputTexto.value
        
        //Criando li para alimentar a lista
        const li = document.createElement("li")
    
        //Alimentar com o valor do Input
        li.innerText = valorInput
    
        //Jogar o valor para dentro da lista
        ol.appendChild(li)
    }
}

//4-Selecionar a lista
//5-Criar um li (item) da lista
//6-Alimentar com o valor do Input
//7-Jogar o valor para dentro da lista

//Elemento que vai ser escutado
//Tipo de evento como clique
//O que devera fazer em seguida

// const keyPress = document.addEventListener("click", getEvent)
// function getEvent(event) {
//     console.log(event)
//     if (event.key == "Enter") {
//         console.log("Gotcha!")
//     }
// }

