/* scripts de la seccion contacto */
let comentarios=[];
class Comentario {
    constructor(nombre, email,mensaje){
        this.nombre= nombre;
        this.email= email;
        this.mensaje= mensaje;  
        
    }

}
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
function mostrarComentarios(){
    let guardados= JSON.parse(localStorage.getItem("listaComentarios"));
    let comentarios1= [];

    for (const objeto of guardados){
            comentarios1.push(new Comentario(objeto));
    }
      for (const contador of comentarios1){
        $("#contacto-comentarios").append(
        `<div><h3> Nombre: ${comentarios1[contador].nombre}</h3>
        </div>`)
        console.log(comentarios1[contador])}
}
    $("#contacto-boton-enviar").on('click', function () {

        let nombre= $('#contacto-nombre').val();
        let email= $('#contacto-email').val();
        let mensaje= $('#contacto-comentario').val();
        comentarios.push(new Comentario(nombre, email, mensaje));
        guardarLocal("listaComentarios", JSON.stringify(comentarios));
        mostrarComentarios();
    })