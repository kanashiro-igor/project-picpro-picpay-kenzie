//1- Adicionar id nos botoes (ou classes)
//1...4

//2- Selecionar os botoes
//3- Interceptar evento de click
//4- Recuperar o id adicionado

//Selecionando lista
const listaOpcoes = document.querySelector(".secao-detalhesConta-opcoesTransacoes")
const buttonHome = document.querySelector(".home")
const displayBalance = document.querySelector(".sobreSaldo-saldo img")

//Adicionando escutador de eventos
listaOpcoes.addEventListener("click", identificarOpcoes)
buttonHome.addEventListener("click", retornaPadrao)
displayBalance.addEventListener("click", mudaStatus)

//Executando acao apos o click
function identificarOpcoes(event) {
    
    //Identificando onde ocorreu o click
    const element = event.target
    //Verificando se achado LI
    if(element.tagName == "LI") {
        //Recuperando classe especifica
        const specificClass = element.id
        
        //Selecionando uma secao utilizando o ID (escolha do usuario)
        const selectedSection = document.querySelector(`div[data-id="${specificClass}"]`)   
        
        //Removendo show de todas as divs
        addClassHiddenInAllSectionDivs()
        
        //Adicionar classe show
        selectedSection.classList.remove("hidden")
    }
}

function retornaPadrao() {

    const mainDiv = document.querySelector(".secao-transacao-selecao")
    addClassHiddenInAllSectionDivs()
    mainDiv.classList.remove("hidden")
}

function mudaStatus() {
    
    const element = document.querySelector(".sobreSaldo-saldo strong")
    if (element.classList != "") {
        
        element.classList.remove("hidden")
    } else {
        
        element.classList.add("hidden")
    }
}

//Funcao para remover as classes das divs
function addClassHiddenInAllSectionDivs() {

    const divs = document.querySelectorAll(".secao-transacao .container-transacao div")
    
    for (i = 0; i < divs.length; i++) {

        divs[i].classList.add("hidden")
    }
}
