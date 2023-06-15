// para poner una tarjeta en especifico

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




// para poner varias cosas
// Object.values(medicos).forEach (function (element) {
//   let card= document.createElement('div');
//   let doc= 
//   `
//   <img src=${element.src} >
//   <p>${element.Nombre}</p>
//   <p>${element.Especialidad}</p>
//   <p>${element.Matricula}</p>
//   `;

//   card.innerHTML=doc;
//   docsection.appendChild(card);
// })