import { requisicoes } from "./requisicoes.js";

const formulario = document.querySelector("[data-formulario]")

async function criarProduto(evento){
    evento.preventDefault()

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    
    let valorFormatado = valor.replace(/,/g, ".")
    valorFormatado = parseFloat(valorFormatado).toFixed(2)
    if(isNaN(valorFormatado) || valorFormatado <= 0){
        alert("digite um número válido")
        evento.preventDefault()
    }else{
        try {
            await requisicoes.criarProdutos(nome, valorFormatado, imagem)
            window.location.reload()
        } catch(err){
            alert(err)
        }
    }

}

formulario.addEventListener("submit", evento =>criarProduto(evento))

const botaoLimpar = document.querySelector(".botao-limpar")

botaoLimpar.addEventListener("click", ()=> {
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-valor]").value = "";
    document.querySelector("[data-imagem]").value = "";
})