export default function validateForm() {
  let titulo = document.getElementsByName('titulo')[0].value
  let nombre = document.getElementsByName('autor')[0].value
  let contenido = document.getElementsByName('contenido')[0].value
  //let hashtags = document.getElementsByName('hashtags')[0].value
  let tags = document.getElementsByName('tagsdiv')[0].value
  let fecha = document.getElementsByName('fecha')[0].value
  let reacciones = document.getElementsByName('reacciones')[0].value
  let Comentarios = document.getElementsByName('comentarios')[0].value
  let imagen = document.getElementsByName('imagen')[0].value

  console.log(titulo)
  if (titulo == '') {
    alert('El campo Titulo es requerido')
    return false
  }
  if (nombre == '') {
    alert('El campo Autor es requerido')
    return false
  }
  if (contenido == '') {
    alert('El campo Contenido es requerido.')
    return false
  }
 /* if (hashtags == '') {
    alert('Debes seleccionar al menos un hashtags')
    return false
  }*/
  if (fecha == '') {
    alert('La Fecha es requerida')
    return false
  }
  if (reacciones == '') {
    alert('Debes Agregar una Reacción')
    return false
  }
  if (Comentarios == '') {
    alert('Es requerido colocar un número de Comentarios')
    return false
  }
  if (imagen == '') {
    alert('Es requerido colocar una imagen')
    return false
  } else if (!imagen.includes('https:')) {
    alert('Debes ingresar una URL de la Imagen')
    return false
  } else return true
}