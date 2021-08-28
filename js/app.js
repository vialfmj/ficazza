/* script de la seccion reserva */
class Reserva {
    constructor(nombre, email,sucursal, cantidad, dia, mes){
        this.nombre= nombre;
        this.email= email;
        this.sucursal= sucursal;  
        this.cantidad=cantidad;  
        this.dia= dia;
        this.mes= mes;
    }

}
function cargarDatos(nombre, email, sucursal, cantidad, dia, mes){
    let reserva1 = new Reserva(nombre, email, sucursal, cantidad, dia, mes);
    guardarDatos(reserva1);
}
function guardarDatos(reserva){
    reservaJSON=JSON.stringify(reserva);
    localStorage.setItem(("reserva1"), reservaJSON);
}
function mostrarDatos(){
    alert("aca funciona");
    let reservaGuardada= JSON.parse(localStorage.getItem("reserva1"));
    console.log(reservaGuardada);
}
function pedirDatos(){
    let nombre= document.getElementById("reserva-nombre").value;
    let email= document.getElementById("reserva-email").value;
    let sucursal=document.getElementById("reserva-sucursal").value;
    let cantidad=document.getElementById("reserva-cantidad").value;
    let dia= document.getElementById("reserva-dia").value;
    let mes= document.getElementById("reserva-mes").value;
    let confirmacion=confirm("Se guardaran los datos. Esta todo correcto?");
    if (confirmacion == true){
        cargarDatos(nombre,email,sucursal, cantidad, dia, mes);
        mostrarDatos();
        }
    
    }

