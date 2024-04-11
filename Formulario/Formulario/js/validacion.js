function valida(){
	var login = document.getElementById('login');
	var expLogin = /^[A-Z]{5,18}$/;
	if (!expLogin.test(login.value)) {
		alert("El login es obligatorio\nSolo letras mayusculas \nEntre 5 y 18 caracteres ")
		login.focus();
		return false;
	}
	var expClave = /^\d{6,8}$/;
	if(!clave.value.match(expClave)){
		alert('La clave es obligatoria\nClave numérica, entre 6 a 8 dígitos');
		clave.focus();
		return false;}
	var expRepetir = /^\d{6,8}$/;
	if(repetir.value != clave.value){
		alert('Las claves no coinciden');
		clave.focus();
		return false;
	}
	var nombre = document.getElementById('nombre');
	var expNombre = /^[A-Z a-z]{1,25}$/;
	if (!expNombre.test(nombre.value)) {
		alert("El nombre es obligatorio\nMaximo 25 caracteres ")
		nombre.focus();
		return false;
	}

	var direccion = document.getElementById('direccion');
	var expDireccion = /^\w[A-Z a-z 0-9]{1,}$/;
	if (!expDireccion.test(direccion.value)) {
		alert("La direccion es obligatoria")
		direccion.focus();
		return false;
	}
	var expEdad = /^\d{2}$/;
	if(edad.value < 25 || edad.value > 55){
		alert('La edad es obligatoria\nLa edad tiene que estar entre los 25 y los 55 años');
		edad.focus();
		return false;
	}
	var expFono = /^\d[0-9]{8,9}$/;
	if(!fono.value.match(expFono)){
		alert('El telefono de contacto es obligatorio\nNo es necesario colocar +56\nTiene que ser entre 8 y 9 numeros');
		fono.focus();
		return false;}

	var expMovil = /^\d[0-9]{8,9}$/;
	if(!movil.value.match(expMovil)){
		alert('El celular de contacto es obligatorio\nNo es necesario colocar +56\nTiene que ser entre 8 y 9 numeros');
		movil.focus();
		return false;}

	var email = document.getElementById('email');
	if(email.value == '' || email.value == null){
		alert('El email es obligatorio');
		email.focus();
		return false;
	}

	var comuna = document.getElementById('comuna');
	if(comuna.selectedIndex == 0){
		alert('La comuna es obligatoria');
		comuna.focus();
		return false;
	}

	var hobbies = document.getElementsByName("hobbies");
	var cont = 0;
	for (var i = 0; i < hobbies.length; i++) {
		if (hobbies[i].checked){
			cont++;
		}
	}
	if (cont == 0 || cont > 3) {
		alert("Los hobbies son obligatorios\nDebe seleccionar entre 1 a 3 hobbies");
		return false;
	}

	var genero = document.getElementsByName("genero");
	var seleccionado = false;
	for (var i = 0; i < genero.length; i++) {
		if (genero[i].checked){
			seleccionado = true;
			break;
		}
	}
	if (seleccionado == false) {
		alert("Genero es obligatorio")
		return false;
	}




}