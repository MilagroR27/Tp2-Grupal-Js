let medicos=[];

// Obtener referencia a los formularios en el HTML
const formularioMedicos = document.getElementById('registroMedicos');

// Manejar el envío del formulario de médicos
formularioMedicos.addEventListener('submit', function(event) {
  event.preventDefault(); // esto va a evitar que el formulario se envíe automáticamente

  // estos son los valores ingresados en el formulario
  const nombreMedico = document.getElementById('nombreMedico').value;
  const emailMedico = document.getElementById('emailMedico').value;
  const matriculaMedico = document.getElementById('matriculaMedico').value;
  const especialidadMedico = document.getElementById('especialidadMedico').value;
  const usuarioMedico = document.getElementById('usuarioMedico').value;
  const contraseñaMedico = document.getElementById('contraseñaMedico').value;
//   -----FALTA LA FOTO DEL MEDICO


  // creamos el objeto "medico1" con los datos obtenidos 
  const medico1 = {
    nombre: nombreMedico,
    email: emailMedico,
    matricula: matriculaMedico,
    especialidad: especialidadMedico,
    usuario: usuarioMedico,
    contraseña: contraseñaMedico
  };

  // Aqui guardamos los datos del medico1 en un array llamado medico
    medicos.push(medico1);

  localStorage.setItem('datosDelMedico', JSON.stringify(medicos));

  // Limpiamos el formulario después de guardar los datos
  formularioMedicos.reset();
  
  // Lanzamos un alert para confirmar el envío del formulario   
  alert('¡El registro del médico se ha realizado con éxito!');

  });

