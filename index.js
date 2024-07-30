const prompt = require("prompt-sync")();

const {criar, atualizar, listar, excluir} = require("./cadastro.js")

while(true) {
    console.log(`
    1. Para Inserir Novo Produto
    2. Para Atualizar um Produto
    3. Para Listar seus Produtos Cadastrados
    4. Para Deletar um Produto
    5. Para sair do sistema
    `)

    const opcao = prompt()

    switch (opcao) {
        case "1":
            criar()
            break;
            case "2":
            atualizar()
            break;
            case "3":
            listar()
            break;
            case "4":
            excluir()
            break;
            case "5":
            process.exit()
            break;
        default:
            console.log("Opção Inválida")
            break;
    }
}