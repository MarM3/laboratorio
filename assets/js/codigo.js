//var envio = document.getElementById("envia");
//envio.onsubmit = enviar;
//envio.onclick = enviar;

function validarNombre(){
    var nom = document.getElementById("nombremain").value;
    var patron = /^[A-Za-zÑñÇçÁáÉéÍíÓóÚúÜü]\s$/;

    if (!patron.test(nom)){
        alert("El nombre introducido no es correcto. Vuelva a intentarlo.");
        return false;
    }
}

function enviar(){
    
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var msj = document.getElementById("mensaje").value;

    validarNombre();
}