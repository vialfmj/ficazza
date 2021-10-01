function mostrarDias(info){
    console.log("hola")
    let semana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    for (let index = 0; index < 7 ; index++) {
        $("#reserva-consulta").append(`<div> 
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
    let dia= $("#reserva-dia").val();
    console.log(dia);    
});