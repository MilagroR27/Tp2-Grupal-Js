// Recuperando los datos del almacenamiento local
let datosRecuperadosString = localStorage.getItem('datosDelMedico');
let datosRecuperados = JSON.parse(datosRecuperadosString);

// Utilizando los datos recuperados
console.log(datosRecuperados); // Muestra el arreglo recuperado en la consola
