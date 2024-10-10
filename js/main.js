const exibir = document.querySelector("#fila")
const fila = []
const botao = document.getElementById("gerasenha")
const botao2 = document.getElementById("atendido")
const botao3 = document.getElementById("desistir")
const botao4 = document.getElementById("meioFila")

botao.addEventListener("click", (e)=>{
    e.preventDefault()
    const idade = parseInt(document.querySelector("#idade").value)

    if(idade >= 65){
        adicionarFilaInicio(idade)
    } else {
        adicionarFilaFinal(idade)
    }

    mostrar(fila)
})

botao2.addEventListener("click", (e)=>{
    e.preventDefault()

    atendido()

    mostrar(fila)
})

botao3.addEventListener("click", (e)=>{
    e.preventDefault()

    desistir()

    mostrar(fila)
})

botao4.addEventListener("click", (e)=>{
    e.preventDefault()

    meioFila()

    mostrar(fila)
})

function adicionarFilaInicio(idade){
    fila.unshift(idade)
}

function adicionarFilaFinal(idade){
    fila.push(idade)
}

function atendido(){
    fila.shift()
}

function desistir(){
    fila.pop()
}

/* function meioFila(fila){
    const inicio = ((fila.length /2) -2)
    const fim = ((fila.length /2) +2)
    
    fila.slice(inicio, fim)
} */

function mostrar(fila){
    exibir.innerHTML = fila
}

/* frutas.push(684, 62165, 541641, "primeiro") //lança itens no final da fila
frutas.unshift("ultimo") //lança itens no inicio da fila */
/* frutas.pop() //remove ultimo item da fila */