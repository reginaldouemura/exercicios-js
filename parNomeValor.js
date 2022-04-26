const saudacao = 'opa'//contexto lexico1

function exec(){
    const saudacao = 'falaa'//contexto lexico 2
    return saudacao
}
//objeto sao agrupados aninhados de  pares nome/valor
const Cliente = {
    nome :'pedro',
    idade : 32,
    peso :90,
    endereco: {
        logradouro:'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec ())
console.log(Cliente)