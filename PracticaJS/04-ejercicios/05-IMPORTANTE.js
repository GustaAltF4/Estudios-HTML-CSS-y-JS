let array= [2,5,7,15,-5,-100,55]

function getMenorMayor(arr){
    let mayor= arr[0];
    let menor= arr[0];
    for(let numero of arr){
        //      condicion    ? si es verdadero asigna menor: si es falso asigna numero
        menor= menor< numero ? menor: numero;
        mayor= mayor> numero ? mayor: numero;
    }
    return [mayor, menor]



}

let numeros= getMenorMayor(array)
console.log(numeros);