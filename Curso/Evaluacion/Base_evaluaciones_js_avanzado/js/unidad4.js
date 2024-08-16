let cargarG= document.querySelector('#btnCargar')


cargarG.addEventListener('click',()=>{
    
    let xhr= new XMLHttpRequest

    xhr.open("get", "https://cataas.com/cat?type=square")

    xhr.addEventListener('load',()=>{
        
        if (xhr.status==200){
            
        //  let imagenUrl = xhr.response;
         let imagenUrl = xhr.responseURL;  
         let imagenCaja = document.querySelector('#imagen')
         imagenCaja.src = imagenUrl
    }
    })
    xhr.send()

})



