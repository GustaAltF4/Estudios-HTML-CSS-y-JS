//API Promise

// let promesa = new Promise((resuelta, rechazada)=>{
//     let xhr= new XMLHttpRequest
//     xhr.open("get", "ejemplo.txt")
//     xhr.addEventListener("load", ()=>{
//         if(xhr.status==200){
//             resuelta(xhr.response)
//         }
//     })
//     xhr.send()
// });

// promesa
//     .then((valor)=>{
//         console.log("promesa resuelta", valor)
//         return new Promise((resolver, rechazar)=>{
//             let xhr = new XMLHttpRequest
//             xhr.open("get", "ejemplo2.txt")
//             xhr.addEventListener("load",()=>{
//                 if (xhr.status==200){
//                     resolver(xhr.response)
//                 }
//             })
//             xhr.send();
//         })    
//     })
//         .then((valor)=>{
//             console.log("promesa 2", valor);
//         })
//         .catch(()=>{
//             console.log("ERROR");
//         })


// API FETCH

let ejemplo= fetch("ejemplo2.txt")
        .then((valor)=>{
            return valor.text()
        })
            .then((valor)=>{
                console.log(valor)
            })
            .catch(()=>{
                console.log("ERROR");
            })


let url= `https://emojihub.yurace.pro/api/all`
let emooji= fetch(`${url}`)

emooji
    .then(valor=>{
        return valor.json()
    })
        .then(valor=>{
            console.log(valor);
            let grupo = valor[6].group
            return fetch(`${url}/group/${grupo}`)
        })
            .then(valor=>{
                return valor.json()
            })
                .then(valor=>{
                    console.log(valor);
                })
                .catch()