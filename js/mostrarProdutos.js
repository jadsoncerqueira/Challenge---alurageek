import { requisicoes } from "./requisicoes.js";

const lista = document.querySelector("[data-container]")

export default function constroiCard(nome, valor, imagem, id){
    const card = document.createElement("div")
    card.className = "card"
    card.dataset.id = id
    card.innerHTML = `<div class="card-container--info">
        <img src=${imagem} alt="Imagem do(a) ${nome}" class="img_produto">
        <p>${nome}</p>
    </div>
    <div class="card-container--value">
        <p>R$${valor}</p>
        <i class="fa-solid fa-trash"></i>
    </div>`

    card.querySelector(".fa-trash").addEventListener("click", async() =>{
        const cardId = card.dataset.id;
        await requisicoes.deletarProdutos(cardId);
        lista.removeChild(card)
    })

    return card
}



async function listaCards(){
    try {
        const listaDB = await requisicoes.conectaDB()
        listaDB.forEach(elemento =>
            lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id))
        )
    } catch {
        lista.innerHTML = `<h3>Não há produtos cadastrados</h3>`
    }
}

listaCards();