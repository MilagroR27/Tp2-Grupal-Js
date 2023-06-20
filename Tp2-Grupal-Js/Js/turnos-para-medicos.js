// Tarjetas de los medicos
const docsection= document.querySelector("#medico1");

  let card= document.createElement('div');
  card.classList.add('medicos')
  let doc= 
  `
  <img class='imgdoc' src= ${medicos.medico1.src} >
  <p> ${medicos.medico1.nombre} </p>
  <p> ${medicos.medico1.especialidad} </p>
  <p> ${medicos.medico1.matricula} </p>

  `;

  card.innerHTML=doc;
  docsection.appendChild(card);

// input de turnos
const guardarTurno= []
const motivo= document.querySelector("#motivo");
const dia= document.querySelector("#dia");
const hora= document.querySelector("#hora");

dia.addEventListener("blur", function() {
  const diaIngresado = (dia.value);
  const diasDisponibles = JSON.parse(localStorage.getItem('pacienteT'));
console.log(diasDisponibles);
  if (diasDisponibles && diasDisponibles.dia === diaIngresado) {
    document.getElementById("dia").style.backgroundColor = "red";
    alert('El día no está disponible.');
    
  }else{
    alert('El día está disponible continue.');
    document.getElementById("dia").style.backgroundColor = "green";
  }
});

hora.addEventListener("blur", function() {
  const horaIngresada = (hora.value);
  const horaDisponible = JSON.parse(localStorage.getItem('pacienteT'));
console.log(horaDisponible);
  if (horaDisponible && horaDisponible.hora === horaIngresada) {
    document.getElementById("dia").style.backgroundColor = "red";
    alert('La hora no está disponible');
  }else{
    alert('La hora está disponible continue.');
    document.getElementById("dia").style.backgroundColor = "green";
  }
});


document.querySelector("#confirmar").addEventListener("click", () =>{

const nombre = datosRecuperados[0].nombre;

let pacienteT= 
  {
    dia: dia.value,
    hora: hora.value,
    motivo: motivo.value,
  }

  console.log(pacienteT)

  localStorage.setItem(`Turno de: ${nombre}`, JSON.stringify(pacienteT))

  motivo.value=""
  dia.value= ""
  hora.value=""

  guardarTurno.push(pacienteT)
})










