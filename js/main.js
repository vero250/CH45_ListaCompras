const btnAgregar = document.getElementById("btnAgregar")
const txtNombre = document.getElementById("Name")
const txtNumber = document.getElementById("Number")
const alertValidaciones= document.getElementById("alertValidaciones")
const alertValidacionesTexto= document.getElementById("alertValidacionesTexto")

function validarCantidad() {
    if(txtNumber.value.length==0){
        return false;
    }// length==0

    if(isNaN(txtNumber.value)){
        return false;
    }// isNaN

    if(Number(txtNumber.value)<=0){
        return false;
    }//<=0

    return true;
}//validarCantidad()

btnAgregar.addEventListener("click", function(event){
 event.preventDefault();
      txtNombre.style.border="";
      txtNumber.style.border="";
      alertValidacionesTexto.innerHTML="";
      alertValidaciones.style.display="none";
//Validar el nombre del producto
 if(txtNombre.value.length<3){
    txtNombre.style.border="solid red medium";
    alertValidacionesTexto.innerHTML= "El <strong>Nombre</strong> no es correcto<br/>";
    alertValidaciones.style.display="block";
    // return false;
 }//if length<3

 // validar la cantidad
   if(! validarCantidad()){
    txtNumber.style.border="solid red medium";
    alertValidacionesTexto.innerHTML+= "La <strong>Cantidad</strong> no es correcta<br/>";
    alertValidaciones.style.display="block";
   }//! validar cantidad

});//btnAgregar.addEventListener
//evento blur es cuando un campo pierde el foco, se sale el campo
txtNombre.addEventListener("blur", function(event) {
    txtNombre.value = txtNombre.value.trim();
}) // txt Nombre.addEventListen

txtNumber.addEventListener("blur", function(event) {
    txtNumber.value = txtNumber.value.trim();
}) // txt Number.addEventListen