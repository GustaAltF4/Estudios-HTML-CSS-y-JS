//las funciones son objetos
function Usuario(nombre){
    this.nombre= nombre;
}
//las funciones se pueden asignar a otras variables
//o constantes
console.log(Usuario.name);
console.log(Usuario.length);
const U = Usuario
let user= new U('nicolas')
console.log(user);

//se pueden pasar funciones a otras funciones como argumento

function of(Fn, arg){
    return new Fn(arg)
}

let user1= of(Usuario,'Bosta')
console.log(user1);
// las funciones pueden ser retornadas por otra funcion
function returned(){
    return function(){
        console.log('hola mugre');
    }
}

let saludo= returned()
saludo()