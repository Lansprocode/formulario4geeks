// alert("Jelouu Moto.");

function validarFormulario() {
	var enviar = true;
	var expRegNombre = /^[a-zA-Z\s]+$/i;
	var expRegEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;

	var nombre = document.getElementById("nombre");
	var email = document.getElementById("email");
	var mensaje = document.getElementById("mensaje");

	if (!nombre.value) {
		alert("Ingrese su nombre por favor");
		enviar=false;
		nombre.focus();
	} else if (!expRegNombre.exec(nombre.value)) {
		alert("El campo nombre solo acepta solo letras");
		enviar=false;
		nombre.focus();
	} else if (!email.value) {
		alert("Ingrese su email por favor");
		enviar=false;
		nombre.focus();
	} else if (!expRegEmail.exec(email.value)) {
		alert("Ingrese un email valido.");
		enviar=false;
		email.focus();
	} else if (!mensaje.value) {
		alert("Ingrese su mensaje por favor");
		enviar=false;
		mensaje.focus();
	} else if (true) {}
}

    function calcular() {
	var contadorChar = document.getElementById('contador-char').innerHTML=1000 - document.formulario.mensaje.value.length;
}

    // window.onload=function() {
	// var botonEnviar = document.getElementById('enviar');
	// botonEnviar.onclick=validarFormulario;
//}