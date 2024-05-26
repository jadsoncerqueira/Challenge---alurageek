async function conectaDB(){
    const conexao = await fetch("https://host-alurageek.vercel.app/produtos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criarProdutos(nome, valor, imagem){
    const conexao = await fetch("https://host-alurageek.vercel.app/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function deletarProdutos(id){
    const response = await fetch(`https://host-alurageek.vercel.app/produtos/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }) 
    if (response.status === 200) {
        alert("produto deletado com sucesso");
    } else {

        alert("erro ao excluir o produto, tente novamente mais tarde")
    }
}

export const requisicoes = {
    conectaDB, criarProdutos, deletarProdutos
}