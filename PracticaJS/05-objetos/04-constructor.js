
//{id:1, recuperarClave: function(){} }
function Usuario(){
    this.id=1;
    this.recuperarClave= function(){ //function=metodos
        console.log('recuperando Clave...');
    }


}
let usuario= new Usuario();

console.log(usuario);

