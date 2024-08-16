
let array=[2,5,7,15,-5,-100,55]

function cuantosPositivos(arr){
    let positivos=0
    for(let numeros of arr){
        // positivos= numeros<=0 ? positivos: numeros 
        if (numeros>=0){
            positivos++
        }
    }
    return positivos

}

let resultado= cuantosPositivos(array)
console.log(resultado);