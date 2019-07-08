//var formular = document.getElementById("enviar");
//formular.onsubmit = validar;

function validar(){
    validarNombre();
    validarEmail();
}

function validarNombre(){
    var nom = document.getElementById("nombre").value;
    var patron = /^[A-Za-zÑñÇçÁáÉéÍíÓóÚúÜü\s]$/;

    if (!patron.test(nom)){
        alert("El nombre introducido no es correcto. Inténtelo de nuevo.");
        return false;
    }
}

function validarEmail(){
    var email = document.getElementById("email").value;
    var patron = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!patron.test(email)){
        alert("El email introducido no es correcto. Inténtelo de nuevo.");
        return false;
    }
}

function validarTelefono(){
    var telefono = document.getElementById("telefono").value;
    var patron = /^[0-9]+$/;

    if (!patron.test(telefono)){
        alert("El teléfono introducido no es correcto. Inténtelo de nuevo.");
        return false;
    }
}

function validarHorario(){
    var horario = document.getElementById("horario").value;
    var patron = /^$/;
    
}