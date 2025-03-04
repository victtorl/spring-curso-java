// Call the dataTables jQuery plugin
$(document).ready(function() {
  //onready
});

async function registrarUsuarios(){
      const datos={};
      datos.nombre=document.getElementById('txtNombre').value;
      datos.apellido=document.getElementById('txtApellido').value;
      datos.email=document.getElementById('txtEmail').value;
      datos.password=document.getElementById('txtPassword').value;

      let repetirPasword=document.getElementById('txtRepetirPassword').value;
      if(repetirPasword != datos.password){
      alert('Las contraseñas no coinciden')
        return
      }

      const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(datos)
      });
const usuarios = await request.json()
};

