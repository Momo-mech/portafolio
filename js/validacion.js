function validarFormulario() {
			const nombre = document.getElementById("nombre").value.trim();
			const email = document.getElementById("email").value.trim();
			const password = document.getElementById("password").value;
			const confirm = document.getElementById("confirm_password").value;
			const mensaje = document.getElementById("mensaje-error");
			mensaje.innerHTML = "";

			// Validación simple
			if (nombre === "" || email === "" || password === "" || confirm === "") {
				mensaje.textContent = "Todos los campos son obligatorios.";
				return false;
			}

			// Validar email simple
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				mensaje.textContent = "El correo electrónico no es válido.";
				return false;
			}

			if (password.length < 6) {
				mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
				return false;
			}

			if (password !== confirm) {
				mensaje.textContent = "Las contraseñas no coinciden.";
				return false;
			}

			return true; // formulario válido
}