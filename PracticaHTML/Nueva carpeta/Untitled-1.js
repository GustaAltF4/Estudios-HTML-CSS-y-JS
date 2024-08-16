// var nombre= "Gustavo"

// function bienvenida(){
//     var nombre= "Juan"
// alert("bienvenido "+ nombre)}

// bienvenida()

// alert("variable fuera de la funcion"+ nombre)

// let nombre= "Gustavo"

// function bienvenida(){
//     let nombre= "Juan"
// alert("bienvenido "+ nombre)}
// if(true){
//     let nombre= "karina"
//     alert("variable dentro del bloque "+ nombre)
// }


// bienvenida()

// alert("variable fuera de la funcion "+ nombre)

// const nombre= "Gustavo"

// function bienvenida(){
//     const nombre= "Juan"
// alert("bienvenido "+ nombre)}
// if(true){
//     const nombre= "karina"
//     alert("variable dentro del bloque "+ nombre)
// }


// bienvenida()

// alert("variable fuera de la funcion "+ nombre)

// function sumar(a, b){
//     const calculo= a+b
//     return calculo
// }

// const sumar= (a,b) => a + b
 
// console.log(sumar(5, 15))

// const multiplicar =  c => c*100

// console.log( multiplicar(2))
let inicio=() =>{
const nombre = prompt("cual es tu nombre?")
const caja = document.querySelector('#texto_der')
const titulo = document.createElement('h2')
titulo.textContent = 'hola mundo! hola '+ nombre
caja.appendChild(titulo)}

let medidas= () =>{
    let ancho= window.innerWidth
    let alto=  window.innerHeight
    alert("el tamano de la ventana de tu navegador es: "+ ancho+ "x "+  alto)
}

let edad= prompt("ingresa tu edad")
if (edad<18){
    window.location.href = 'http://www.google.com'
}