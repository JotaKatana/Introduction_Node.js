//--> Manipula caminhos, node:path pois podemos ter arquivos maliciosos com nomes semelhantes
//--> FS = File sistem / Usamos para ler o arquivo que queremos (Require é como se fosse meio q exigir)
const path = require("node:path")
const fs = require("node:fs")

//--> Vou pesquisar o arquivo com path
//--> (Posso usar ".join ou .resolve" tem suas diferenças), um volta pra pasta raiz e o outro junta no caminho.
//--> Vou pesquisar o arquivo onde está rodando o processo, no diretório atual como "cwd", vou pesquisar um arquivo que chama "texto.txt"
const file_path = path.join(process.cwd(), "Aula-1", "texto.txt")

//--> read = ler
//--> fs.readFileSync -->Le de forma syncrona o arquivo, ele trava após a leitura e dps volta, poderia utilizar uma forma de pronxys
//--> readFile + caminho do arquivo
fs.readFile(file_path, {}, (erro, dados) => {
    if(erro) {
            console.log(`Erro na leitura do arquivo no caminho ${file_path}`)
            return
        }
//---> Para arrumar os espaçamentos das linhas
        const texto = dados.toString()
        const linhas = texto.split("\n")
//---> Nossa texto vai ser 1 - conteudo, 2 - conteudo....
        linhas.forEach((Linha, index, arrayDeLinhas) => 
            console.log(`${index + 1} - ${Linha}`)
    )

        console.log(dados.toString()) //--> decodificar os dados em hexadecimal para uma string
    }) 
console.log(file_path)
