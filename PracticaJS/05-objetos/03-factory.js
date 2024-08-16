
//asi se pueden crear objetos con la misma estructura
// y para cambiar los valores de ese objeto podemos pasar las porpiedades
//como argumentos de la funcion

function crearUsuario(name, email){

    return{
    
        email,
        //email:email,
        name,
        activo: true,
        //funcion anonima
        recuperarClave: function(){
            console.log('recuperando clave');
        }
    }

}

let user1= crearUsuario('Cacona', 'casdads@gmail.com')
let user2= crearUsuario('Basura', 'BAsuds@gmail.com')

console.log(user1,user2);