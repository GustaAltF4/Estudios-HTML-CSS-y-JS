function Punto(x,y){
    this.x= x;
    this.y= y;
    this.dibujar= function(){   console.log("dibujando...");}
    
}

// const Point= new Function('x','y',`
//     this.x= x;
//     this.y= y;
//     this.dibujar= function(){   console.log("dibujando...");}
//    `)

// const p= new Point(1,2)
// console.log(p);
let punto= {z:7}
// Punto.call(punto,1,2) //pasa los argumentos a agregar uno a uno
Punto.apply(punto,[1,2])// pasa los argumentos como un array

console.log(punto);

//metodo call y aplly permiten extender objetos q se hayan definido antes
