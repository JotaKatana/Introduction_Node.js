 const rl = require("readline") //--> Crio interface de interação com o usuário

const prompt = rl.createInterface({ //--> Nosso prompt é rl"readline".create....
   //--> Dizer que nossa entrada de dados, vou querer que seja adquirida direto do teclado
    input: process.stdin,  //--> STDIN = o teclado é nosso input
    output: process.stdout //--> STDOUT = Devolva o outrput para o terminal
}) 


const prompt_promisse = { //--> Vou dizer que meu prompt_question, vai sobreescrever o método "question"
     //--> resolve, reject serve para saber se o parametro deve ser aceito ou não
    question: (pergunta) => new Promise((resolve, reject) => {  //--> vai ser uma função que vai receber uma pergunta como parametero e replicar uma nova promissse
        try {                   //---> Opção caso de certo
            prompt.question((pergunta), (resposta) => resolve(resposta))
        }   catch (error) { //--> Opção caso não de certo
            reject(error)
        }
    }),
    close: () => prompt.close() //--> Quero que meu close seja = ao prompt.close

}

//--------
//--> aceita uma string "Query" e Callback (função) = Código que vai ser executado, após uma operação seja feita dentro
//--> query é como se fosse uma pergunta para o usuário
// prompt.question("Qual seu número favorito?: ", (resposta) => { //--> Questiom(resposta do unuário), (string) {valor obtido})
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`) //--> Reansformo uma string para um numero

//     prompt.question("Qual seu cor favorito?: ", (resposta) => { 
//         console.log(`O dobro do seu número favorito é: ${resposta}`) 
//             prompt.close()
//     })
// })

async function pergunta_user() {
    const numero =await  prompt_promisse.question("Qual seu número favorito?: ") //--> await = aguardar
        const cor =await  prompt_promisse.question("Qual seu cor favorito?: ")
            const comida =await  prompt_promisse.question("Qual sua comida favorita?: ")
        
     console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`)
        console.log(`Sua cor favorito é: ${cor}`)
            console.log(`Sua comida favorita é: ${comida}`)
        prompt_promisse.close()
     }
pergunta_user()

// prompt_promisse.question("Qual seu número favorito?: ", (resposta) => { //--> Questiom(resposta do unuário), (string) {valor obtido})
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`) //--> Reansformo uma string para um numero

//     prompt.question("Qual seu cor favorito?: ", (resposta) => { 
//         console.log(`O dobro do seu número favorito é: ${resposta}`) 
//             prompt.close()
//     })
// })
