
 function nombreResolucion(ancho, alto) {
     if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
         return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
     } else if (ancho >= 1920 && alto >= 1080) {
         return 'FHD';
     } else if (ancho >= 1280 && alto >= 720) {
         return 'HD';
     } else {
         return 'falso';
     }
 }
function nombreResolucion2(ancho, alto) {
    switch (true) {
        case (ancho >= 7680 && alto >= 4320):
            return '8K';
        case (ancho >= 3840 && alto >= 2160):
            return '4K';
        case (ancho >= 2560 && alto >= 1440):
            return 'WQHD';
        case (ancho >= 1920 && alto >= 1080):
            return 'FHD';
        case (ancho >= 1280 && alto >= 720):
            return 'HD';
        default:
            return 'falso';
    }
}

let nombre= nombreResolucion2(7812,4512)
console.log(nombre);