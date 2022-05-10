class Reserva{
    constructor(nombre, email, personas,dia, sucursal){
    this.nombre= nombre;
    this.email=email;
    this.personas=personas;
    this.dia=dia;
    this.sucursal= sucursal;       
    }
}
function convertirDia(dia){
    let diaLetras=''
    if(dia== '0'){
        diaLetras="lunes";
    }
    if(dia== '1'){
        diaLetras="martes";
    }
    if(dia== '2'){
        diaLetras="miercoles";
    }
    if(dia== '3'){
        diaLetras="jueves";
    }
    if(dia== '4'){
        diaLetras="viernes";
    }
    if(dia== '5'){
        diaLetras="sabado";
    }
    if(dia== '6'){
        diaLetras="domingo";
    }

    return diaLetras;
}
function reservar(reserva) {
    let nombre= reserva.nombre;
    let email= reserva.email;
    let personas= reserva.personas;
    let dia=convertirDia(reserva.dia);
    let sucursal= reserva.sucursal;

    $( '#contenedor-formulario' ).fadeOut( "slow", function() {
        // Animation complete.
      });
      $('main').append(`<div class="mensaje-exito">Su reserva fue hecha con exito <br> Nombre: ${nombre} <br> Sucursal :${sucursal}<br> Para: ${personas} persona/s <br> Dia: ${dia}</div>`);
}
function consultarDisponibilidad(dia, info){
    let disponibilidad;
    if(dia != '7'){
    let semana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    let x= info[dia][semana[dia]]["estado"];
    console.log(x)
    if(x== 'Disponible'){
        console.log("su reserva fue hecha");
        disponibilidad=true;
    }
    if(x== 'Reservado'){
        console.log("ese dia no esta disponible");
        disponibilidad=false;
    }
    }
    else{
        alert("no ingreso el dia");
    }
    return disponibilidad;
}
function mostrarDias(info){
    let semana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    let clase='';
    for (let index = 0; index < 7 ; index++) {
        if(info[index][semana[index]]["estado"]== 'Disponible'){
            clase = 'disponible';
        }
        else{
            clase ='reservado';
        }
        $("#reserva-disponibilidad").append(`<div class="${clase}"> 
            <p> el dia `+semana[index]+` esta: `+info[index][semana[index]]["estado"]+` </p><br>
         </div>`)
    }
};
$("#reserva-consulta-boton").click(function (e) { 
    e.preventDefault();
    $.getJSON("../reservas1.json", function (data) {
        let info=data;
        mostrarDias(info);
            
        }
    );
    
});
$("#boton-enviar").click(()=> {
    let nombre=$("#reserva-nombre").val();
    let email=$("#reserva-email").val();
    let personas=$("#reserva-cantidad").val();
    let dia= $("#reserva-dia").val();
    let sucursal=$("#reserva-sucursal").val();
    reserva= new Reserva(nombre, email, personas, dia, sucursal);
    $.getJSON("../reservas1.json", function (data) {
        let info=data;
        let disponible=consultarDisponibilidad(dia,info);
        if(disponible== true){
            reservar(reserva);
        }
        else{
            alert("No fue posible reservar. Revise los datos y vuelva a intentar");
        }
        }
    );
});