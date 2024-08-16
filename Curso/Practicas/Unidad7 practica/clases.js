//por convencion los contructores empiezan con mayuscula
function Usuarios(nombre) {
    this.nombreUsuario= nombre
}
//Usuarios.prototype.x= true
Usuarios.prototype.edad= 22 //los valores q se crean con prototype se
// asingan a todas las instancias de la clase
// osea q si se crea otro objeto de tipo usuarios va a tener siempre asignado
// el prototype edad = 22 y si ese prototype se modifica se va a modificar en todos los objetos


var Juan= new Usuarios('Juan')
var Mariela= new Usuarios('Mariela')

let user= new Usuarios2()
function Usuarios2(nombre) {
    this.nombreUsuario= nombre
}

class Alumnos{
    constructor (nombre,edad){
        this.nombreAlumno= nombre
        this.edadAlumno= edad
    }

    saludar(){
        console.log("hola mundo");
    }
}
let alumno= new Alumnos("Maria",53)
// las clases siempre es necesario crealas antes de usarlas o instanciarlas

//Herencia
class User{
    constructor(nombre,edad){
        this.nombreUser= nombre
        this.edadUser= edad
    }

    imprimirUser(){
        console.log("Nombre:"+nombre+" Edad:"+edad);
    }
}

let objetoDeLaClase= new User("Alfonsina",33)

class alumno1 extends User{
    constructor (nombre,edad,carrera){
        super(nombre,edad)
        this.carreraAlumno= carrera
    }

    statusCarera(){
        console.log("El almuno aun no finaliza la carrera");
    }
}

let al1= new alumno1("Maria",27,"Ing. en sistemas")

class docetes extends User{
    constructor (nombre,edad,materia){
        super(nombre,edad)
        this.materiaDocente= materia
    }
}

let prof= new docetes("Alfonzo",53,"Matematicas")