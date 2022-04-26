//armazena uma função em variavel
const imprimirSoma = function (a,b){  //função anonima
    console.log(a + b);
    }
    imprimirSoma(2, 3)
/*armazenando uma funçao arrow
em variavel*/
const soma = (a,b) => {
    return a + b 
    }
console.log(soma(2, 3))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')