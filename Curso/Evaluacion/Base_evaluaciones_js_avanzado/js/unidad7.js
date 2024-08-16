class compras{
    constructor( idCompra,producto,cliente,importe){
        this.idCompra1= idCompra
        this.producto1= producto
        this.cliente1= cliente
        this.importe1= parseFloat(importe) 
    }

    calcularIva(){
         const iva=this.importe1*0.21
         let suma= this.importe1+iva
         return suma
    }
    imprimirCompra(){
        const precioFinal= this.calcularIva()
        const infoCompra= 
        `ID de Compra: ${this.idCompra1} <br>
        Nombre del Cliente: ${this.cliente1} <br>
        Nombre del Producto: ${this.producto1} <br>
        Importe: ${this.importe1} $ <br> 
        Importe con IVA: ${precioFinal} $`
    
      let info= document.getElementById('infoCompra')
      info.innerHTML= infoCompra
    }
}


let btnCalcular= document.querySelector('#calcular')



btnCalcular.addEventListener('click', ()=>{
    
    let id = document.querySelector('#idCompra').value
    let producto = document.querySelector('#producto').value
    let cliente = document.querySelector('#cliente').value
    let importe = document.querySelector('#importe').value
    if (importe<=0){
        alert("Debe introducir un importe")
    }else{
        let compra = new compras(id,producto,cliente,importe)
        compra.imprimirCompra()
    }
    
})
