let xhr=  new XMLHttpRequest
xhr.open("get", "https://emojihub.yurace.pro/api/random")

xhr.addEventListener('load',()=>{
    if(xhr.status=200){
        let respuesta= JSON.parse(xhr.response)

        let  caja= document.querySelector('#emoji',)
        caja.innerHTML= respuesta.htmlCode

    }
})
xhr.send()