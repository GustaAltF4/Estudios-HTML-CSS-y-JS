let nombre = "peton"
let serie= "asdasdasd"
let edad = 15

let personaje= {
    //propiedad: valor
    //se utilizan los : en vez del =
    nombre: "Tanjiro",
    serie: "Demon Slayer",
    edad: 16,
}
console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['serie'])
//poner personaje.nombre o personaje['nombre']
//es lo mismo

//cambiar valor de una propiedad
personaje.edad= 17;

let llave= 'edad'
personaje[llave]= 16;

//eliminar propiedad
delete personaje.serie
console.log(personaje)