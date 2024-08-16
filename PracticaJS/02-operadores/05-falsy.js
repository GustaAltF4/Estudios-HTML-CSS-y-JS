// short-circuit

// Falso-Falsy
// false
// 0
// ''
// null 
// undefined
// NaN
let nombre='cacas'
let username= nombre || 'Anonimo'
console.log(username);

function fn1(){
    console.log('soy funcion1')
    return false
}
function fn2(){
    console.log('soy funcion2')
    return true
}
let x= fn1() && fn2()