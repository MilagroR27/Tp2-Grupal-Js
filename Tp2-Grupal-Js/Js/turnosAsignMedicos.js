


//Agregar pacientes confirmados a la tabla Medicos

let pacientes = new Array();
  pacientes[0]= {Nombre:"Luis",
  Apellido: "Perez",
  ObraSocial: "Osde",
  Turno:"2023-06-23",
  Horario:"15:00",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[1]= {Nombre:"Gabriel",
  Apellido: "Juarez",
  ObraSocial: "Osde",
  Turno:"2023-06-23",
  Horario:"15:45",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[2]= {Nombre:"cesar",
  Apellido: "Fernandez",
  ObraSocial: "Prensa",
  Turno:"2023-06-23",
  Horario:"16:30",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[3]= {Nombre:"Maria",
  Apellido: "Gonzalez",
  ObraSocial: "Soremer",
  Turno:"2023-06-23",
  Horario:"17:00",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[4]= {Nombre:"Pablo",
  Apellido: "Velarde",
  ObraSocial: "Osde",
  Turno:"2023-06-23",
  Horario:"17:30",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[5]= {Nombre:"Victor",
  Apellido: "Sanchez",
  ObraSocial: "Prensa",
  Turno:"2023-06-23",
  Horario:"18:00",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[6]= {Nombre:"Carlos",
  Apellido: "Coronel",
  ObraSocial: "Subsidio Salud",
  Turno:"2023-06-23",
  Horario:"18:30",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  pacientes[7]= {Nombre:"Silvina",
  Apellido: "Lobo",
  ObraSocial: "Prensa",
  Turno:"2023-06-25",
  Horario:"19:00",
  Medico:"Dr. Nicolás J. Rodriguez" ,
  Especialidad: "Cirujano Reconstructivo" };
  


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
    
    // td= document.createElement('td');
    // td.innerText=p.ObraSocial;
    // cuerpoTabla.appendChild(td);

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


 
//Pacientes por confirmar

  let pacientesPorConfirmar =new Array();
  pacientesPorConfirmar[0]=
    
    {Nombre: "Hugo",
    Apellido: "Gonzalez",
    ObraSocial: 'Soremer',
    Turno:"2023-06-25",
    Horario:"17:30",
    Medico:"Dr. Nicolás J. Rodriguez" ,
    Especialidad : "Cirujano Reconstructivo" 
   };
   pacientesPorConfirmar[1]=
    {
    Nombre: "Fabian",
    Apellido: "Cuellar",
    ObraSocial: 'Osde',
    Turno:"2023-06-25",
    Horario:"18:00",
    Medico:"Dr. Nicolás J. Rodriguez" ,
    Especialidad: "Cirujano Reconstructivo"
      };
      pacientesPorConfirmar[2]=
    {
    Nombre: "Marina",
    Apellido: "Ramirez",
    ObraSocial: 'Prensa',
    Turno:"2023-06-25",
    Horario:"18:30",
    Medico:"Dr. Nicolás J. Rodriguez" ,
    Especialidad: "Cirujano Reconstructivo"
     };
  
     let tablaconfirmacion=document.getElementById('pacconf');
     let cuerpoTabla1= document.createElement('tbody');
     cuerpoTabla1.style.background="#f3ecb0";
     pacientesPorConfirmar.forEach(p=>{
      
       let fila1= document.createElement('tr');
   
       let td1 = document.createElement('td');
       let newButton = document.createElement('button');
       let newButtonN = document.createElement('button');

       td1.innerText=p.Nombre;
       cuerpoTabla1.appendChild(td1);
   
       td1= document.createElement('td');
       td1.innerText=p.Apellido;
       cuerpoTabla1.appendChild(td1);
       
      //  td1= document.createElement('td');
      //  td1.innerText=p.ObraSocial;
      //  cuerpoTabla1.appendChild(td1);
   
       td1= document.createElement('td');
       td1.innerText=p.Turno;
       cuerpoTabla1.appendChild(td1);
   
       td1= document.createElement('td');
       td1.innerText=p.Horario;
       cuerpoTabla1.appendChild(td1);
   
       td1= document.createElement('td');
       td1.innerText=p.Medico;
       cuerpoTabla1.appendChild(td1);
   
       td1= document.createElement('td');
       td1.innerText=p.Especialidad;
       cuerpoTabla1.appendChild(td1);

       newButton=document.createElement('button')
       newButton.innerHTML = "Aceptar";
       cuerpoTabla1.appendChild(newButton);
           
       newButtonN=document.createElement('button')
       newButtonN.innerHTML = "Rechazar";
       cuerpoTabla1.appendChild(newButtonN);
   
       cuerpoTabla1.appendChild(fila1);
      
     });
     tablaconfirmacion.appendChild(cuerpoTabla1);
     
     
     
//Agregar pacientes 
  //  pacientes.push({Nombre:"Juan",Apellido:"Lopez",ObraSocial:"Osde",Turno:"2023-06-28",Horario:"18:00",Medico:"Dr. Nicolás J. Rodriguez",Especialidad:"Cirujano Reconstructivo"});
  //  console.log(pacientes);

  //obtener datos de una fila c/ id
  // let obtenerFila= document.getElementById("IdFila");
  // let elementosFila = obtenerFila.getElementsByTagName("td");
  // for (let i=0; i<=4; i++){
  //   console.log(elementosFila[i].innerHTML);
  // }

  // let tablaturnos = document.getElementById("pacconf");
  
  // function selectFila(tabla, numeroFila){
  //   let fila = tabla.rows[numeroFila].cells;
  //   for (const celda of fila){
  //     console.log(celda.innerHTML);
  //   }
  // }
  // selectFila(tablaturnos,0); 

  // function selectFilaTd(tabla, numeroFila){
  //   let fila = tabla.rows[numeroFila].getElementsByTagName("td");
  //   for (const celda of fila){
  //     console.log(celda.innerHTML);
  //   }
  // }
  // selectFilaTd(tablaturnos,0);