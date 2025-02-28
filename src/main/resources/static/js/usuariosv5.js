// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios(){
      const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const usuarios = await request.json();
      console.log(usuarios);

    let listadoHtml = '';
    for(let user of usuarios){

    let botonEliminar='<a href="#" onClick="eliminarUsuario('+user.id+')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';

    let usuariosHtml='<tr><td>'+user.id+'</td><td>'+user.nombre+' '+user.apellido+'</td><td>'+user.email+'</td><td>'+user.telefono+'</td><td>'+botonEliminar+'</td></tr>'
    listadoHtml +=usuariosHtml;
    }


      document.querySelector('#usuarios tbody').outerHTML=listadoHtml





};

async function eliminarUsuario(id){
    if(!confirm('¿Desea Eliminar este usuario?')){
     return
    }
     const request = await fetch('api/usuarios/' + id, {
                      method: 'DELETE',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    });
     location.reload()
}