// alert('Jelou');

function validacion() {
	var login = document.getElementById('login').value;
	var password = document.getElementById('password').value;

	// var enviar = true;
	// var expRegNombre = /^[a-zA-Z\s]+$/i;

	if (login == "") {
		alert("Ingresa tu usuario por favor.");
		return false
	}  else if (password == "") {
		alert('Ingresa tu password por favor.');
		return false;
	} else if (true) {}
}