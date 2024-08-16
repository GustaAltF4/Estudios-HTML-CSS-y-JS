//let xhr = new XMLHttpRequest;
// 0- Objeto instanciado
// 1- Objeto configurado
// 2- Headers fueron enviados y recibidos 
// 3- Descargando
// 4- Finalizado
let btnAjax = document.querySelector('#btnAjax')
let caja= document.querySelector('#contenido_principal')

//console.log(xhr.readyState);
//ejemplo normalmente seria una URL
//xhr.open("get", "ejemplo.html")
//console.log(xhr.readyState);

btnAjax.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest;
    xhr.open("get", "ejemplo.html")
    xhr.addEventListener("load",()=>{
        if(xhr.status==200){
            //console.log(xhr.response)
            let cajacontenido= document.createElement('div')
            cajacontenido.innerHTML= xhr.response
            caja.append(cajacontenido)
        }
    })
    xhr.send()
})

// xhr.addEventListener("load",()=>{
//     if(xhr.status===200){
//         console.log(xhr.response)
//     }
// })

//metodo send debe usarse despues de estar instanciado y configurado el objeto
// xhr.send()

 let  cajaDrag= document.querySelector('#arrastrable')
// cajaDrag.addEventListener('dragstart', (e)=>{
//     console.log("arrastro");
// })

// cajaDrag.addEventListener('dragend', (e)=>{
//     console.log("suelto");
// })

// cajaDrag.addEventListener('drag', (e)=>{
//     console.log("arrastrando");
// })


let contenedorDrop= document.querySelector('#contenedorDrop')

contenedorDrop.addEventListener('dragenter', (e)=>{
    console.log("entro a la zona de drop");
})

contenedorDrop.addEventListener('dragleave', (e)=>{
    console.log("salio de la zona de drop");
})



contenedorDrop.addEventListener('dragover', (e)=>{
    e.preventDefault()
    console.log("zona sensible");
})

contenedorDrop.addEventListener('drop', (e)=>{
    console.log("suelto dentro del contenedor");
    contenedorDrop.appendChild(cajaDrag)
})