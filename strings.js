const escola = "cod3r"

console.log(escola.charAt(4))//dar letra que esta no indice 4
console.log(escola.charAt(5))// retorna vazio pq nao tem este indice
console.log(escola.charCodeAt(3))//pega valor na tabela unicor indice três
console.log(escola.indexOf(3))//retorna numero indice  3 da letra cod3r

console.log(escola.substring(1))//vai imprimir indice 1  vai imprimir do o para frente
console.log(escola.substring(0, 3))// vai imprimir do indice 0 ao 3 

console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\w/, "e"))
console.log(escola.replace(/\w/g, "e"))
console.log("Ana,Maria,Pedro".split(','))