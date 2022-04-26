//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2, 3)
imprimirSoma(2)// vai ser underfine vai dar nan
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//soma 2 e 10, o restante ele nao retornara nada
imprimirSoma()


//funcao com retorno

function soma(a, b = 0){
    return a + b 
}
console.log(soma (2, 3))
console.log(soma(2))
console.log(soma())