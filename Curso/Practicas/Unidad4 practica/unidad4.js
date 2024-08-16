let links = document.querySelectorAll('.linkSPA')
let contenedor= document.querySelector('main')

//querySelectorAll selecciona todos los elementos con la etiqueta q digas
// pero los guarda como un array entonces normalmente para recorrerlos
// se ultiliza algun bucle

links.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
        let id= btn.id
        let archivo = id + '.html'
        // console.log(archivo);
        history.pushState(null,"",id)
        let xhr= new XMLHttpRequest
        xhr.open("get", archivo)
        xhr.send()
        xhr.addEventListener("load", ()=>{
            if(xhr.status==200){
                contenedor.innerHTML= xhr.response
            }
        })
    })
})
// https://emojihub.yurace.pro/api/random