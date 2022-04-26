const funcs = []
for(var i =0; 1<10; i++){  //var nao tem escopo de função
   
      funcs.push(function() {
        console.log(i)
      })
      
}

funcs[2]() //retornaria  10
funcs[8]()// retornaria 10 mais deu erro