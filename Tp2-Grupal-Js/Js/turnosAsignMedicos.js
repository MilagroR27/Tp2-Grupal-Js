// let pacientesPorConfirmar = [
    
//     {
//     "Nombre": "Hugo",
//     "Apellido": "Gonzalez",
//     "Obra Social": 'Soremer',
//     "Turno":"2023-06-12",
//     "Horario":"17:30",
//     "Medico":"Raul Gonzalez" ,
//     "Especialidad Turno": "Endocrinologia" 
//    },
//     {
//     "Nombre": "Fabian",
//     "Apellido": "Cuellar",
//     "Obra Social": 'Osde',
//     "Turno":"2023-06-12",
//     "Horario":"16:00",
//     "Medico":"Raul Gonzalez" ,
//     "Especialidad Turno": "Endocrinologia"
//       },
//     {
//     "Nombre": "Marina",
//     "Apellido": "Ramirez",
//     "Obra Social": 'Prensa',
//     "Turno":"2023-06-25",
//     "Horario":"18:30",
//     "Medico":"Raul Gonzalez" ,
//     "Especialidad Turno": "Endocrinologia"
//      },
  
//   ]
// console.log(pacientesPorConfirmar[0].Nombre)

//  console.log(typeof pacientes[0].Turno)
  
//  console.log( pacientes[0].Turno instanceof Date)


// JSON.stringify(pacientes);//convierto a string
// localStorage.setItem("pacientes", pacientes);
// localStorage.getItem("pacientes");
// pacientes= localStorage.getItem("pacientes");
// JSON.parse(pacientes)
let pacientes = new Array(6);
  pacientes[0]= {Nombre:"Luis",
  Apellido: "Perez",
  ObraSocial: "Osde",
  Turno:"2023-06-19",
  Horario:"17:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[1]= {Nombre:"Luisa",
  Apellido: "Juarez",
  ObraSocial: "Osde",
  Turno:"2023-06-23",
  Horario:"19:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[2]= {Nombre:"cesar",
  Apellido: "Fernandez",
  ObraSocial: "Prensa",
  Turno:"2023-06-30",
  Horario:"14:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[3]= {Nombre:"Maria",
  Apellido: "Gonzalez",
  ObraSocial: "Soremer",
  Turno:"2023-06-15",
  Horario:"16:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[4]= {Nombre:"Pablo",
  Apellido: "Velarde",
  ObraSocial: "Osde",
  Turno:"2023-06-19",
  Horario:"18:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[5]= {Nombre:"Victor",
  Apellido: "Sanchez",
  ObraSocial: "Prensa",
  Turno:"2023-06-29",
  Horario:"17:30",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  pacientes[6]= {Nombre:"Carlos",
  Apellido: "Coronel",
  ObraSocial: "Subsidio Salud",
  Turno:"2023-06-29",
  Horario:"18:00",
  Medico:"Raul Gonzalez" ,
  Especialidad: "Endocrinologia" };
  let tablapacientes=document.getElementById('pac');
  let cuerpoTabla= document.createElement('tbody');
  cuerpoTabla.style.background="#f3ecb0";
  pacientes.forEach(p=>{
   
    let fila= document.createElement('tr');

    let td = document.createElement('td');
    td.innerText=p.Nombre;
    cuerpoTabla.appendChild(td);

    td= document.createElement('td');
    td.innerText=p.Apellido;
    cuerpoTabla.appendChild(td);
    
    td= document.createElement('td');
    td.innerText=p.ObraSocial;
    cuerpoTabla.appendChild(td);

    td= document.createElement('td');
    td.innerText=p.Turno;
    cuerpoTabla.appendChild(td);

    td= document.createElement('td');
    td.innerText=p.Horario;
    cuerpoTabla.appendChild(td);

    td= document.createElement('td');
    td.innerText=p.Medico;
    cuerpoTabla.appendChild(td);

    td= document.createElement('td');
    td.innerText=p.Especialidad;
    cuerpoTabla.appendChild(td);

    cuerpoTabla.appendChild(fila);
  });
  tablapacientes.appendChild(cuerpoTabla);
 