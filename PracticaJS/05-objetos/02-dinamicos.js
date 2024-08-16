const user= {id:1}
//usando const en vez de let se puede acceder a los parametros dentro 
//del objeto y moficiarlos, borrarlos, agregar
//lo q no se puede es cambiarle el valor de objeto por ser const

user.name= 'Nicolas'
user.guardar= function(){
    console.log('guardando...', user.name);
}

user.guardar()

delete user.name
delete user.guardar
console.log(user);
//usando object.freeze js no puede cambiar los valores
//de un objeto
const user1= Object.freeze({id:1})
user1.name= 'nico'
user1.id= 2
console.log(user1);
//usando object.seal js puede cambiar el valor de sus propiedades ya 
//definidas pero no puede agregar nuevos valores 
const user2= Object.seal({id:1})
user2.name= 'nico'
user2.id= 2
console.log(user2);
