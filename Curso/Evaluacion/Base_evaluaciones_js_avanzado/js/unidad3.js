let btnAgregar= document.querySelector('#btnAgregar')
let contenidoURL= document.querySelector('#contenidoURL')
let estado= document.querySelector('#estado')



btnAgregar.addEventListener('click', ()=>{

    let xhr= new XMLHttpRequest
    xhr.open('get','unidad3.txt')

    xhr.addEventListener('load',()=>{
        switch(xhr.readyState){
            case 1:
                estado.textContent= 'Estado Peticion: Abierta'
                break
            case 2:
                estado.textContent= 'Estado Peticion: Recibida'
                break
            case 3:
                estado.textContent= 'Estado Peticion: Cargando'
                break
            case 4:
                estado.textContent= 'Estado Peticion: Completada'
                if(xhr.status==200){
                    let caja = document.createElement('div')
                    caja.innerHTML = xhr.response
                    contenidoURL.append(caja)
                }
                break
        }
    })

    xhr.send()
})