/* script de la seccion reserva */
let semana = [true, false, true, true, true, true, true];
let semanaJSON=JSON.stringify(semana);
localStorage.setItem(("semana1"), semanaJSON);
let bandera=false;

class Reserva {
    constructor(nombre, email,sucursal, cantidad, dia){
        this.nombre= nombre;
        this.email= email;
        this.sucursal= sucursal;  
        this.cantidad=cantidad;  
        this.dia= dia;
        
    }

}
function consultarDisponibilidad(dia){
    let semanaGuardada= JSON.parse(localStorage.getItem("semana1"));
    switch (dia) {
        case 'Lunes':
            if(semanaGuardada[0]== true)
            return 1;
            else
            return 0;
            
        case 'Martes':
            if(semanaGuardada[1]== true)
                return 1;
            else
                return 0;            
            break;
        case 'Miercoles':
            if(semanaGuardada[2]== true)
            return 1;
            else
                return 0;            
            break;
        case 'Jueves':
            if(semanaGuardada[3]== true)
            return 1;
            else
                return 0;            
            break;
        case 'Viernes':
            if(semanaGuardada[4]== true)
            return 1;
            else
                return 0;            
            break;
        case 'Sabado':
            if(semanaGuardada[5]== true)
            return 1;
            else
                return 0;            
            break;
        case 'Domingo':
            if(semanaGuardada[6]== true)
            return 1;
            else
                return 0;            
            break;
        default:
            break;
    }
}
function mostrarDatos(){
    let reservaGuardada= JSON.parse(localStorage.getItem("reserva1"));
    let posicion= document.getElementById("reservas-hechas");
    console.log(posicion);    
    console.log("creando el div")
    let reserva = document.createElement("div");
    reserva.setAttribute("id", "reserva");
    let separacion= document.createElement("p");
    separacion.setAttribute("id", "separacion");
    separacion.textContent= `-----------------`;

    let mensaje= document.createElement("p");
    mensaje.setAttribute("id", "mensaje");
    mensaje.textContent= `su reserva fue hecha con exito`
    

    let nombre= document.createElement("h3");
    nombre.setAttribute("id","nombre");
    nombre.textContent= `nombre: ${reservaGuardada.nombre}`
    let email= document.createElement("p");
    email.setAttribute("id", "email");
    email.textContent=` email: ${reservaGuardada.email}`;

    let sucursal= document.createElement("p");
    sucursal.setAttribute("id", "sucursal");
    sucursal.textContent=` sucursal: ${reservaGuardada.sucursal}`;
    
    let cantidad=document.createElement("p");
    cantidad.setAttribute("id", "cantidad");
    cantidad.textContent= `cantidad: ${reservaGuardada.cantidad}`;

    let dia= document.createElement("p");
    dia.setAttribute("id", "dia");
    dia.textContent= `dia: ${reservaGuardada.dia}`
    reserva.appendChild(mensaje);
    reserva.appendChild(separacion);
    reserva.appendChild(separacion);

    reserva.appendChild(nombre);
    reserva.appendChild(email);
    reserva.appendChild(sucursal);
    reserva.appendChild(cantidad);
    reserva.appendChild(dia);
    posicion.appendChild(reserva);

}
function cargarDatos(nombre, email, sucursal, cantidad, dia){
    let reserva1 = new Reserva(nombre, email, sucursal, cantidad, dia);
    guardarDatos(reserva1);
}
function guardarDatos(reserva){
    reservaJSON=JSON.stringify(reserva);
    localStorage.setItem("reserva1", reservaJSON);

}

function pedirDatos(){

    let nombre= document.getElementById("reserva-nombre").value;
    let email= document.getElementById("reserva-email").value;
    let sucursal=document.getElementById("reserva-sucursal").value;
    let cantidad=document.getElementById("reserva-cantidad").value;
    let dia= document.getElementById("reserva-dia").value;
    let confirmacion=confirm("Se guardaran los datos. Esta todo correcto?");
    if(confirmacion == true){
        cargarDatos(nombre, email, sucursal, cantidad, dia);
        let d=consultarDisponibilidad(dia);
        if(d==true){
            alert("su reserva ha sido guardada")
            mostrarDatos();
        }
        else{
            alert("ese dia no esta disponible")
        }     
    }
       
    }
       let miFormulario      = document.getElementById("reserva-formulario");
       miFormulario.addEventListener("submit", empezar)
       
       function empezar(e){
           e.preventDefault();
           let formulario = e.target
           pedirDatos();
       }
       
      
