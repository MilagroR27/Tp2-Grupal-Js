// Recuperando los datos del almacenamiento local
let datosRecuperadosString = localStorage.getItem('datosDelPaciente');
let datosRecuperados = JSON.parse(datosRecuperadosString);

// Utilizando los datos recuperados
console.log(datosRecuperados);