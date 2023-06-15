<script>
    {/* function submitForm(event) {
        event.preventDefault(); // Evita que se envíe el formulario y se recargue la página */}    
    function registrarMedico() {   
        // -----------OBTENIENDO VALORES DE ENTRADA DEL FORMULARIO Y GUARDANDOLOS COMO VARABLES------------
        let nombre = document.getElementById("nomrbeMedico").value;
        let email = document.getElementById("emailMedico").value;
        let matricula = document.getElementById("matriculaMedico").value;
        let especialidad = document.getElementById("especialidadMedico").value;
        let usuario = document.getElementById("usuarioMedico").value;
        let contraseña = document.getElementById("contraseñaMedico").value;
        let imagen = document.getElementById("imagen").value;
        
        
        // Haz lo que necesites con los valores de las variables
        console.log("Nombre:", nombre);
        console.log("Correo electrónico:", email);
        
        // Puedes realizar otras operaciones, como enviar los datos a un servidor o realizar validaciones
        
        // Limpia el formulario si es necesario
        document.getElementById("myForm").reset();
    }



</script>
