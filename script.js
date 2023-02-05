var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

document.getElementById("menu").addEventListener("click", function(){
  console.log(miCallBack);
});

document.querySelector(".btn-submit").addEventListener("click", function(event) {
	event.preventDefault();
	let nombre = document.querySelector('input[type="nombre"]').value;
	let telefono = document.querySelector('input[type="telefono"]').value;
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/guardarDatos", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
	  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
		console.log("Datos guardados correctamente");
	  }
	};
	xhr.send("nombre=" + nombre + "&telefono=" + telefono);
  });
  /*Este código agrega un controlador de eventos al botón "Reserva" que evita que el formulario se envíe y envia los valores de los campos "Nombre" y "Teléfono" al servidor mediante una solicitud HTTP POST. La respuesta del servidor se maneja en el controlador de eventos onreadystatechange. Este código solo es un ejemplo y requiere un servidor que esté configurado para recibir y procesar los datos enviados por el formulario.*/