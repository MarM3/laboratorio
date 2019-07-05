//var formular = document.getElementById("enviar");
//formular.onsubmit = validar;

function validar(){
    validarNombre();
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
    var patron = /^$/;

}