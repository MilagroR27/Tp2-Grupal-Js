let pacientes=[];

// Obtener referencia a los formularios en el HTML
const formularioPacientes = document.getElementById('registroPacientes');

// Manejar el envío del formulario de médicos
formularioPacientes.addEventListener('submit', function(event) {
  event.preventDefault(); // esto va a evitar que el formulario se envíe automáticamente

  // estos son los valores ingresados en el formulario
  const nombrePaciente = document.getElementById('nombrePaciente').value;
  const emailPaciente = document.getElementById('emailPaciente').value;
  const usuarioPaciente = document.getElementById('usuarioPaciente').value;
  const contraseñaPaciente = document.getElementById('contraseñaPaciente').value;


  // creamos el objeto "paciente1" con los datos obtenidos 
  const paciente1 = {
    nombre: nombrePaciente,
    email: emailPaciente,
    usuario: usuarioPaciente,
    contraseña: contraseñaPaciente,
  };

  // Aqui guardamos los datos del paciente1 en un array llamado paciente
    pacientes.push(paciente1);

  localStorage.setItem('datosDelPaciente', JSON.stringify(pacientes));

  // Limpiamos el formulario después de guardar los datos
  formularioPacientes.reset();
  
  // Lanzamos un alert para confirmar el envío del formulario   
  alert('¡El registro se ha realizado con éxito!');

  });