let valor // nao inicializada
console.log(valor)

valor = null //ausencia de valor 
console.log(valor)
//console.log(valor.toString()) // vai dar erro
const produto = {}
console.log(produto.preco)//preço nao esta indefinido dentro do produto
console.log(produto)

produto.preco = 3.50// atribuido preço dentro do produto
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco //vai ter um objeto vazio
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)