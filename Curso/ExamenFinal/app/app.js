class SuperHeroe {

    constructor(nombre,imagen, estadisticas){
        this.nombre = nombre;
        this.imagen = imagen;
        this.estadisticas = estadisticas;
    }

    comparar(otroHeroe){ 
        const comparacion= {};
        for (let estad in this.estadisticas) {
            if (otroHeroe.estadisticas.hasOwnProperty(estad)) {
                const thisEstad = Number(this.estadisticas[estad]);
                const otroEstad = Number(otroHeroe.estadisticas[estad]);
                if (thisEstad >otroEstad) {
                    comparacion[estad] = this.nombre;
                } else if (thisEstad < otroEstad) {
                    comparacion[estad] = otroHeroe.nombre;
                } else {
                    comparacion[estad] = 'Empate';
                }
            } else {
                comparacion[estad] = 'Datos faltantes en el héroe comparado';
            }
        }
    
        return comparacion
    
    }

    respuesta(){
        return  `
        <div class="heroe">
            <h2>${this.nombre}</h2>
            <img src="${this.imagen}" alt="${this.nombre}" class="heroe-imagen">
            <ul>
                ${Object.entries(this.estadisticas).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
            </ul>
        </div>`;
    }
}

const buscarYComparar = (e) => {
    e.preventDefault();

    const heroe1Nombre = document.getElementById('heroeInput1').value;
    const heroe2Nombre = document.getElementById('heroeInput2').value;

    Promise.all([buscarHeroe(heroe1Nombre), buscarHeroe(heroe2Nombre)])
        .then(([heroe1, heroe2]) => {
            if (heroe1 && heroe2){
                mostrarComparacion(heroe1, heroe2);
            }else{
                alert("No se encontraron resultados para alguno de los Heroes");
            }
        })

}

const buscarHeroe = (nombre) =>{

    const apiUrl= `https://www.superheroapi.com/api.php/a30582b827cc343834c7e6c794c66edd/search/${nombre}`
    
    return fetch(apiUrl)
        .then(response => response.json())
        .then( datos =>{
            if(datos.response === "success"){
                const result= datos.results[0];
                const estadisticas= {
                    Fuerza: result.powerstats.strength,
                    Velocidad: result.powerstats.speed,
                    Inteligencia: result.powerstats.intelligence,
                    Durabilidad: result.powerstats.durability,
                    Poder: result.powerstats.power,
                    Combate: result.powerstats.combat,
                }
            return new SuperHeroe(result.name, result.image.url , estadisticas)
            }else{
                return null
            }
        }) 

}

const mostrarComparacion = (heroe1, heroe2) => {
    let resultadoDiv = document.getElementById('resultado');
    const comparacion= heroe1.comparar(heroe2);
    resultadoDiv.innerHTML= `
        ${heroe1.respuesta()}
        ${heroe2.respuesta()}
        <div class="comparacion">
            <h3>Comparación</h3>
            <ul>
                ${Object.entries(comparacion).map(([estadisticas, winner]) => `<li>${estadisticas}: ${winner}</li>`).join('')}
            </ul>
        </div>`;
    
}

document.getElementById('formBuscar').addEventListener('submit', buscarYComparar);
