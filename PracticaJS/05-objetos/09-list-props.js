const punto={
    x: 10,
    y: 15,
    dibujar(){
        console.log('dibujando');
    }
}
//delete punto.dibujar
//con if preguntamos si existe una propiedad de nombre
//"dibujar" dentro del objeto punto
if('dibujar'in punto){
    punto.dibujar()}
// let keys = Object.keys(punto)// es lo mismo
//console.log(Object.keys(punto));

//Object.keys(punto) se puede utilizar en el for of porq 
// nos devuelve basicamente un array
for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}
// esto sirve para acceder a las propiedades de un objeto 
// cuando no conocemos esas propiedades
for(let entry of Object.entries(punto)){
    console.log(entry);
}

// esta forma es mas nueva
for (let llave in punto){
    console.log(llave,punto[llave]);
}
