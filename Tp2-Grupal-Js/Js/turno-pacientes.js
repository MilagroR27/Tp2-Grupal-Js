const paciente = JSON.parse(localStorage.getItem('datosDelPaciente'))[0];
console.log(paciente);
// Esta linea se puede cambiar dependiendo donde se guardo los turnos aceptados por el medico
const turno = JSON.parse(localStorage.getItem(`Turno de: ${paciente.nombre}`));
console.log(turno);

let card;
if (turno) {
card =
`
<img src="../assets/doc1.jpg" height="250" width="200"  alt="Doctor" class="image">
<div >
    <h3>${medicos.medico1.nombre}</h3>
    <h5>${medicos.medico1.especialidad}</h5>
    <h5>${medicos.medico1.matricula}</h5>
    <br>
    <h4>Cita: ${new Date(turno.dia).toLocaleDateString()} ${turno.hora} </h4>
    <br>
    <button type="button" class="btn cancelar" id="cancelar">Cancelar turno</button>
</div>
`;
} else {
    card = `<h4>No tiene turnos asignados</h4>`;
}

const section = document.querySelector("#turnospaciente");
console.log(section);
section.innerHTML = card;

document.querySelector("#cancelar").addEventListener("click", () =>{
    localStorage.removeItem(`Turno de: ${paciente.nombre}`);
    const section = document.querySelector("#turnospaciente");
    section.innerHTML = '<h4>No tiene turnos asignados</h4>';
});