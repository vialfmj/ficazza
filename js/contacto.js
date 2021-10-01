/* scripts de la seccion contacto */
let comentarios=[];
class Comentario {
    constructor(nombre, email,mensaje, fecha, hora){
        this.nombre= nombre;
        this.email= email;
        this.mensaje= mensaje;  
        this.fecha= fecha;
        this. hora= hora;         
    }

}
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
function mostrarComentarios(){
    let guardados= JSON.parse(localStorage.getItem("listaComentarios"));
    let mensajes= [];
    let nombres=[];
    let fechas= [];
    let horas=[];
     for (const objeto of guardados){
            mensajes.push(objeto.mensaje);
            nombres.push(objeto.nombre);
            fechas.push(objeto.fecha);
            horas.push(objeto.hora);            
    }
    $("#contacto-comentarios").prepend(
        `<div class="card comentario">
        <div><p>El dia:${fechas[fechas.length-1]} a las: ${horas[horas.length-1]}</p> </div>
        <h3> ${nombres[nombres.length-1]} dijo: ${mensajes[mensajes.length-1]}<h3><div>`
        ) 
        




}
    $("#contacto-boton-enviar").on('click', function () {
        let fecha= new Date();
        let anio= fecha.getFullYear();
        let mes = fecha.getMonth()+1;
        let dia= fecha.getDate();
        let hoy= dia+'/'+mes+'/'+anio;
        let hora= fecha.getHours();
        let minutos=fecha.getMinutes();
        let segundos=fecha.getSeconds();
        let horaHoy= hora+':'+minutos+':'+segundos;
        console.log(horaHoy);
        let nombre= $('#contacto-nombre').val();
        let email= $('#contacto-email').val();
        let mensaje= $('#contacto-comentario').val();
        comentarios.push(new Comentario(nombre, email, mensaje, hoy, horaHoy ));
        guardarLocal("listaComentarios", JSON.stringify(comentarios));
        mostrarComentarios();
    })