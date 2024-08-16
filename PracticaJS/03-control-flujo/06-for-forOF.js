//for(inicia la variable; la compara con algo; accion)
for(let i=2; i<10;i++){
    if(i%2==0){
        console.log('numero par',i);
    }
}
//para iterar un listado de elemntos como un arrys 
//lo mejor es usar for of
let animales= ['gordo','basura', 'gato']
for(let animal of animales){
    console.log(animal);
}

//tambien se puede hacer de forma "manual"
//usando el while
let i=0
while (i<animales.length){
    console.log(animales[i]);
    i++;
}