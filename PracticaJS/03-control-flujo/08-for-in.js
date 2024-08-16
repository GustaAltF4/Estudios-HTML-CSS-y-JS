let user= {
    id:1,
    name:'Basura Mugrosa',
    edad:25,
}

for (let propiedad in user){
    console.log(propiedad,user[propiedad]);
}
//se puede iterar elemntos de un arrys usando for in
// pero es mucho mejor usar for of
let animales= ['caca','mugre','gato']
for(let indice in animales){
    console.log(indice,animales[indice]);
}