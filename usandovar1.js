{
    {
        {
            {
                var sera = 'será???'
                console.log(sera) ///se coloca dentro do bloco vc vai enchegar ou do lado de fora ou dentro //isso e dentro de escopo de função

            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)//nao vai ficar visivel