// localStorage.setItem("Nombre","Carlos")
// localStorage.setItem("edad",45)
// console.log(localStorage.getItem("Nombre"))
// localStorage.removeItem("edad")
// localStorage.clear()

// sessionStorage.setItem("Nombre","Carlos")
// sessionStorage.setItem("edad",45)
// console.log(sessionStorage.getItem("Nombre"))
// sessionStorage.removeItem("edad")
// sessionStorage.clear()

var btn=  document.getElementById("btnCargar")
btn.addEventListener('click',()=>{
    var nombreFormu= document.querySelector('#nombre').value
    var apellidoFormu= document.querySelector('#apellido').value

    localStorage.setItem("Nombre",nombreFormu)
    localStorage.setItem("Apellido",apellidoFormu)
})

var btn2=  document.getElementById("btnMostrar")

btn2.addEventListener('click',()=>{
    var mostrarNombre= localStorage.getItem("Nombre")
    var mostrarApellido= localStorage.getItem("Apellido")
    document.querySelector('#mostrarNombre').innerHTML= mostrarNombre
    document.querySelector('#mostrarApellido').innerHTML= mostrarApellido
})

document.cookie= "ejemplo= Hola ; max-age= 10" //maxAge es en segundos