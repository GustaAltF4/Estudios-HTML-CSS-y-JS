const producto= new Object();

producto.codigo= 123123
producto.categoría= "Celulares"
producto.nombre= "Motorola edge 20"
producto.precio= 400000
producto.toString= function(){
    return "Producto: "+this.nombre+"|| Precio: "+this.precio+"|| Categoría: "+this.categoría+"|| Codigo: "+this.codigo
}

const producto2={

    Nombre: "Motorola edge 30",
    Categoría: "Celulares",
    Codigo: 123124,
    Precio: 900000
}

let caja= document.querySelector('#infoProducto')

caja.innerHTML= producto.toString()+'<br>'+JSON.stringify(producto2)
caja.style.background= 'aqua'



