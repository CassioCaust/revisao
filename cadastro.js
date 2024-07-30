const prompt = require("prompt-sync")();

const produtos =[];

// Modelo 

const modelo = () => {

    // Primeira parte do modelo é a leitura dos dados
    const nome = prompt("Qual o nome do produto? ")
    const valor = Number(prompt("Qual o valor do produto?"))

    // Segunda parte é a validação dos dados
    if (
        nome != "" &&
        valor != Number
    )
    // Terceira Parte é o retorno
    return {
        nome,
        valor,
    };
    console.log("Falha na operação")
}

const criar = () => {
    const produto = modelo();
    if (produto != undefined){
        produtos.push(produto)
        console.log("Produto Cadastrado com Sucesso")
    }

}

const listar = () => {
    if(produtos.length == 0 ){
        console.log("Nenhum Produto Cadastrado!")
        return false;
    } else {
        produtos.forEach((produto, indice) => {
            console.log(`O produto ${indice + 1} ${produto.nome} tem o valor de R$ ${produto.valor}`)
        })
        return true
    }
}

const atualizar = () => {
    if (listar(true)){
        let atualizado = prompt("Qual número do produto que deseja atualizar? ") - 1
        let produtoAtualizado = modelo()
        if (atualizado >= 0 && atualizado <= produtos.length){
            produtos[atualizado] = produtoAtualizado
            console.log("Produto Atualizado.")
        } else {
            console.log("Valor Incorreto")
        }}
    }

const excluir = () => {
    listar()
    let apagar = prompt("Qual número do produto que deseja apagar?") -1
    if(apagar >= 0 && apagar <= produtos.length){
    produtos.splice(apagar, 1)
    console.log("Produto apagado com sucesso!")
    }else {
        console.log("Produto não encontrado!")
    }
}


module.exports ={
    criar,
    listar,
    atualizar,
    excluir,
}