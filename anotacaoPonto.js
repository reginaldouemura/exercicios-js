console.log(typeof console)

console.log(Math.ceil(6.1))//redondando numero

const obj1 = {}
obj1.nome = 'bola'
///pode ser usadp assim melhor nao usar obj1['nome'] = 'bola2'
console.log(obj1.nome)

function obj(nome){
    this.nome = nome //tributo publico
    
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log (obj2.nome)
