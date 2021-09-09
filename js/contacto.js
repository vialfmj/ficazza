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
    let guardados= JSON.parse(localStorage.getItem("listaComentarios"));/* esto no funciona */
    let comentarios= [];
    for (const objeto of guardados){
            comentarios.push(new Comentario(objeto));
    }
    for (const comentario of comentarios){
        console.log(comentarios);
    }
     
}
function obtenerComentario(){

}
$(document).ready(()=> {
    $("#contacto-formulario").submit(function(){
        let nombre= $('#contacto-nombre').val();
        let email= $('#contacto-email').val();
        let mensaje= $('#contacto-comentario').val();
        console.log("no"); /* no lo muestra por consola */
        comentarios.push(new Comentario(nombre, email, mensaje));
        guardarLocal("listaComentarios", JSON.stringify(comentarios));
        mostrarComentarios();
    })
})
