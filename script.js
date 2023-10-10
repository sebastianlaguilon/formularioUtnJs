
const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    //Response (como trabajamos la respuesta)
    http.onreadystatechange = ()=>{
        console.log("onreadystatechange")
        console.log(http.readyState) // Se muestra el estado de la solicitud por la consola
        console.log(http.status) // Se muestra el código de estado HTTP en la consola
    
        if(http.readyState==4 && http.status==200){
            document.getElementById("mensaje").innerHTML = http.responseText
        }
    }
    //Request (Solicitud)
    http.open('GET','http://localhost:9090/utn/newform/gracias.txt',true)
    http.send()
}
// getMensaje()
const registrarse = () => {
    const mensajeExito = document.getElementById('mensaje');
    const mensajeError = document.getElementById('error_formulario');
    const nombre = document.form_registro.nombre.value.trim();
    const apellido = document.form_registro.apellido.value.trim();
    const telefono = document.form_registro.telefono.value.trim();
    const email = document.form_registro.email.value.trim();
    const tipoContacto = document.form_registro.tipoContacto.value.trim();
    const asunto = document.form_registro.asunto.value.trim();
    const mensaje = document.form_registro.mensaje.value.trim();
    

   

    if (nombre === "") {
        document.getElementById("error_nombre").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_nombre").innerHTML = "";
    }

    if (apellido === "") {
        document.getElementById("error_apellido").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_apellido").innerHTML = "";
    }

    if (telefono === "") {
        document.getElementById("error_telefono").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_telefono").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("error_email").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_email").innerHTML = "";
    }

    if (tipoContacto === "") {
        document.getElementById("error_tipoContacto").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_tipoContacto").innerHTML = "";
    }

    if (asunto === "") {
        document.getElementById("error_asunto").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_asunto").innerHTML = "";
    }

    if (mensaje === "") {
        document.getElementById("error_mensaje").innerHTML = "El campo es obligatorio";
    } else {
        document.getElementById("error_mensaje").innerHTML = "";
    }

    // Si todos los campos son válidos, mostramos el mensaje.
    if (nombre !== "" && apellido !== "" && telefono !== "" && email !== "" && tipoContacto !== "" && asunto !== "" && mensaje !== "" ) {

        mensajeExito.style.display = 'block';
        getMensaje();


    }else{
        document.getElementById("error_formulario").innerHTML = "Vuelve a Interntarlo!!!! Todos Los campos son requeridos";
        mensajeError.style.display = 'block';
    }

    //console.log(nombre, apellido, email);
}






function validar(elem){
    var value = elem.value
    var name = elem.name
    // console.log("🚀 ~ file: script.js:17 ~ validar ~ value", value, elem.name)
    if(value==""){
        document.getElementById("error_"+name).innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("error_"+name).innerHTML = ""
    }
}


