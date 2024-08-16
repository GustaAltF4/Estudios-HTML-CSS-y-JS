
// crear un objeto de una forma literal
const usuario= {
    nombre: "carlos",
    edad: 22,
    mostrarUsuario: function(){
        console.log("hola lacra!")
    }
}

//crear un objeto con el constructor object

const usuario2= new Object()
usuario2.nombre= "cacas"
usuario2.edad= 25
usuario2.mostrarUsuario2 = function(){
    console.log("hola lacra2!");
}
// las funciones en js son variadicas osea q si agrego por consola mas parametros o menos
// de los q pide la funcion la funcion se ejecuta igualmente y no muestra error
var global = 'Juan'
function usuario3(){
    
    var local =56
    console.log( global +" " + local)
}

// solo se puede retornar una variable dentro de una variable si esta definida por fuera y es retonada por la funcion
function demo(x) {
    return x
}

var resultado = demo(10)
