// let a= 1
// let b= a

// b++
// console.log(a,b);
//los datos primitivos se copian si se asignan a otra variable

// let a1= {}
// let b1= a1

// b1.prop= 1
// console.log(a1,b1);

let a2= {prop:1}

function suma(n){
    n.prop++
}
suma(a2)
console.log(a2);
// los objetos , arrays , funciones se referencian
