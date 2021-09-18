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
    let mensajes= [];
    let nombres=[];

     for (const objeto of guardados){
            mensajes.push(objeto.mensaje);
            nombres.push(objeto.nombre);            
    }
    $("#contacto-comentarios").prepend(
        `<div class="card comentario">
        <h3> ${nombres[nombres.length-1]} dijo: ${mensajes[mensajes.length-1]}<h3><div>`
        ) 
        




}
    $("#contacto-boton-enviar").on('click', function () {

        let nombre= $('#contacto-nombre').val();
        let email= $('#contacto-email').val();
        let mensaje= $('#contacto-comentario').val();
        comentarios.push(new Comentario(nombre, email, mensaje));
        guardarLocal("listaComentarios", JSON.stringify(comentarios));
        mostrarComentarios();
    })