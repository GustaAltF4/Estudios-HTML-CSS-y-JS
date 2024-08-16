document.addEventListener('DOMContentLoaded',()=>{
    const btnCargar = document.getElementById('btnCargar');
    const listaContactos = document.getElementById('listaContactos');

    function guardarContacto (contacto){
        let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
        contactos.push(contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));
        mostrarContactos();
    
    }

    function mostrarContactos(){
        let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
        listaContactos.innerHTML = '';
        contactos.forEach((contacto, index) => {
            let div = document.createElement('div');
            div.textContent= `${contacto.nombre} ${contacto.apellido} || ${contacto.telefono}`;
            let btnborrar = document.createElement('button');
            btnborrar.textContent = 'borrar';
            btnborrar.addEventListener('click', ()=>{
                borrarContacto(index)
            })
            div.appendChild(btnborrar);
            listaContactos.appendChild(div);
            
        });
    }

    function borrarContacto(index){
        let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
        contactos.splice(index, 1);
        localStorage.setItem('contactos', JSON.stringify(contactos));
        mostrarContactos();
    }

    btnCargar.addEventListener('click', (e)=>{
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let telefono = document.getElementById('telefono').value;
    
        if (nombre && apellido && telefono) {

            let nuevo= {nombre,apellido,telefono}
            guardarContacto(nuevo)

            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('telefono').value = '';
        }else{
            alert("porfavor rellena todos los campos para cargar")
        }

    })

    mostrarContactos();



})
