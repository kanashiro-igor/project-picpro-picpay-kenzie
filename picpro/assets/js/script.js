//1- Adicionar id nos botoes (ou classes)
//1...4

//2- Selecionar os botoes
//3- Interceptar evento de click
//4- Recuperar o id adicionado

//Selecionando lista
const listaOpcoes = document.querySelector(".secao-detalhesConta-opcoes-transacoes")
//Adicionando escutador de eventos
listaOpcoes.addEventListener("click", identificarOpcoes)

//Executando acao apos o click
function identificarOpcoes(event) {
    
    //Identificando onde ocorreu o click
    const element = event.target

    //Verificando se achado LI
    if(element.tagName = "LI") {
        //Recuperando classe especifica
        const specificClass = element.id
        
        //Selecionando uma secao utilizando o ID (escolha do usuario)
        const selectedSection = document.querySelector(`div[data-id="${specificClass}"]`)   
        
        //Removendo show de todas as divs
        removeClassShow()

        //Adicionar classe show
        selectedSection.classList.add("show")
    }
}

//Funcao para remover as classes das divs
function removeClassShow() {

    const divs = document.querySelectorAll(".secao-transacao .container div")
    
    for (i = 0; i < divs.length; i++) {

        divs[i].classList.remove("show")
    }
}
