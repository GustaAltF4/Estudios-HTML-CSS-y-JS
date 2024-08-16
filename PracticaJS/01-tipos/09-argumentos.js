function suma(a, b){
    console.log(arguments)
    return a+b
}

let result = suma(5,6,1,2,3)
console.log(result)
console.log(typeof suma)