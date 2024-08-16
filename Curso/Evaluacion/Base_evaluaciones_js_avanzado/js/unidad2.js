let formu= document.querySelector('#form')
let nombre= document.querySelector('#nombre')
let apellido= document.querySelector('#apellido')
let edad= document.querySelector('#edad')
let correo= document.querySelector('#correoE')
formu.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let validarnombre= nombre.value
    const regexNom= /^\w[a-zA-Z]{3,10}$/

    let validarapellido = apellido.value
    const regexApe= /^\w[a-zA-Z]{3,20}$/

    let validaredad= edad.value
    const regexEdad= /^(?:[1-9]|[1-8][0-9]|90)$/

    let validarcorreo = correo.value
    const regexCo= /^[\w.]{3,}@[\w.]{3,}\.[\w]{2,}$/
    
    if (regexNom.test(validarnombre)&&regexApe.test(validarapellido)&&regexEdad.test(validaredad)&&regexCo.test(validarcorreo)){
        alert("correcto")
        
    }else {
        alert("incorrecto")
        // nombre.setCustomValidity("El nombre debe tener letras (a-z A-Z) y de 3 a 10 caracteres")
        // apellido.setCustomValidity("El apellido debe tener letras (a-z A-Z) y de 3 a 20 caracteres")
        // edad.setCustomValidity("Edad solo valores numericos del 1 al 90")
        // correo.setCustomValidity("Correo electronico no valido")
        

     }
})