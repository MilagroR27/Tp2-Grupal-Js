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
document.querySelector("#confirmar").addEventListener("click", () =>{

let pacienteT= 
  {
    dia: dia.value,
    hora: hora.value,
    motivo: motivo.value,
  }
  localStorage.setItem(motivo.value, JSON.stringify(pacienteT))
  motivo.value=""
  dia.value= ""
  hora.value=""

  guardarTurno.push(pacienteT)
})










