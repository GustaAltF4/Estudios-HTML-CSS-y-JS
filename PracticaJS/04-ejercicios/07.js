
function precioCompleto(precio, impuesto){
    // let aumento = precio*impuesto
    // return precio+aumento
    return precio+( precio*impuesto)

}

let resultado= precioCompleto(19.90,0.15)
console.log(resultado);