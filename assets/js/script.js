//SELECIONOU AS TAGS 
// INTERCEPTAR O CLIQUE NO BOTÃO 
// PEGAR AS INFORMAÇÕES QUE ESTÃO DENTRO DO CAMPO 

const btnSortear         = document.querySelector(".botaoSortear")
const textarea           = document.querySelector("textarea")
const tagResultado       = document.querySelector(".resultado p")
const popUpResultado     = document.querySelector(".resultado")
const btnFechar          = document.querySelector(".fechar")

//PEGANDO DADOS DO FOMRULÁRIO
function pegarDadosFormulario(){
    
    //RECUPERANDO VALOR DO CAMPO (TEXTAREA)
    const valorCampo  = textarea.value
    const listaNomes  = valorCampo.split(",")
    const tamanhoArray= listaNomes.length
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
    const nome        = listaNomes[posicaoNome]
    mostrarResultado(nome)

    textarea.value = ""
    
}

//INTERCEPTANDO O CLIQUE / EXECUTANDO FUNÇÃO
btnSortear.addEventListener("click", pegarDadosFormulario)

//GERANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(tamanhoArray){
    //RETORNA O NÚMERO
    return  Math.floor(Math.random() * (tamanhoArray - 0) + 0)

}

function mostrarResultado(nome){

    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
    
}


function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")

}
btnFechar.addEventListener("click", fecharPopUp)







