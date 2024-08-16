function ejecutar() {
    animarCuadrado(300, 100, 100) 
      .then(valor => {
        valor.classList.add('mensaje');
        valor.append("Unidad 5");
    });
  }

  // // // // function animarCuadrado(cx, cy, radius, callback) {
  // // // //   let div = document.createElement('div');
  // // // //   div.style.width = 0;
  // // // //   div.style.height = 0;
  // // // //   div.style.left = cx + 'px';
  // // // //   div.style.top = cy + 'px';
  // // // //   div.className = 'cuadrado';
  // // // //   document.body.append(div);

  // // // //   setTimeout(() => {
  // // // //     div.style.width = radius * 2 + 'px';
  // // // //     div.style.height = radius * 2 + 'px';

  // // // //     div.addEventListener('transitionend', function handler() {
  // // // //       div.removeEventListener('transitionend', handler);
  // // // //       callback(div);
  // // // //     });
  // // // //   }, 0);
  // // // // }

  function animarCuadrado(cx, cy, radius) {
    
    return new Promise((resuelta,rechazada)=>{
      let main = document.querySelector('main');
      let div = document.createElement('div');
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.style.backgroundColor= 'rgb(12, 88, 88)';
      div.style.margin= '40px';
      div.className = 'cuadrado';
      // document.body.append(div);
      main.append(div);
     

      setTimeout(() => {
       div.style.width = radius * 2 + 'px';
       div.style.height = radius * 2 + 'px';
      
       div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resuelta(div);
        });
      }, 0);

    })
  
  }
