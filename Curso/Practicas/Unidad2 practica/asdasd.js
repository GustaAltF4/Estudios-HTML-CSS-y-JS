let input = document.querySelector('#nombrnumerose')
let boton = document.querySelector('#bienvenida')

boton.addEventListener('click', function(){
    let nombre = input.value
    alert("Bienvenido "+ nombre)
})

let funcion1= () =>{
    console.log("soy la primera funcion")
}
let funcion2= () =>{
    console.log("soy la segunda funcion")
}

// function ejemplo (cosa, callback_q_aca_se_puede_escribir_lo_q_sea){
//     console.log(cosa)
//     callback_q_aca_se_puede_escribir_lo_q_sea()
// }

let btnEvento= document.querySelector('#btnEvento')

// btnEvento.onclick = funcion2
// btnEvento.onclick = funcion1
//de esta forma trata a la funcion como una variable por lo q se
//re asigna lo q hace y ya no ejectuta la pimera parte del codigo 

btnEvento.addEventListener('click', funcion1)
btnEvento.addEventListener('click', funcion2)
// aca ejecuta ambos eventos porq es lo hace en forma de callback
// osea al mismo evento sobre el mismo elemento se l pueden dar diferentes funciones

let btnObjeto = document.querySelector('#btnObjeto')

btnObjeto.addEventListener('click', function(e) {
    console.log(e)
})
// de esta forma se cancela el evento predetermindo 
// y fuerza a q no se ejecute

let link = document.querySelector('#link')
link.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('HOla mugre')
    
})

let nivel1= document.querySelector('#nivel1')
let nivel2= document.querySelector('#nivel2')
let nivel3= document.querySelector('#nivel3')
nivel3.addEventListener('click',function(){
    console.log("Click en nivel 3")
})
nivel1.addEventListener('click',function(){
    console.log("Click en nivel 1")
})
// javascript tiende a propagar el evento q estamos usando a los 
//demas elemntos q contienen nuetro elemento o elementos padres


let elemntoFormu= document.querySelector('#miformu')

let usuario= document.querySelector('#usuario')
 elemntoFormu.addEventListener('submit', (e)=>{
     e.preventDefault()
    let validarUsuario= usuario.value
    // let longitudDatos= validarUsuario.length
    // if (longitudDatos>3){
    //     alert("usuario correcto")
    // }else{
    //     usuario.setCustomValidity("el nombre de usuario debe tener al menos 3 caracteres")
    // }
    // al no cumplir con la validacion predeterminada el 
    //.setCustomValidity va a mostrar un mensaje que no se cumplen
    //con los requisitos
    let regexp= /^\w{3,8}$/
    if (regexp.test(validarUsuario)){
        console.log("correcto")
    }else{
        console.log("incorrecto")
        //usuario.setCustomValidity("el nombre de usuario debe tener al menos 3 caracteres y maximo 8")
    }

 })

// \w busca caracteres especiales pueden ser palabras, numeros, etc.
// \W busca todo lo q no no sea una palabra espacios, comas, parentesis, etc.
// \d busca valores numericos
// \D busca todo lo q no sean numeros
// \s busca todo lo q sea espacios o saltos de linea
// \S busca todo lo q no sean espacios o saltos de linea
// ^ busca todo lo q comienze con lo q empieze con el caracter q indicamos ^e= todo lo q empiece con e
// $ busca todo lo q termine con el carater indicado s$ = busca todo lo q termine con s
// let regex = / / busca caracteres para hacer regulaciones mas expecificas y personalizadas