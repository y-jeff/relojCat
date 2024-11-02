const mensajeTiempo = document.getElementById("mensajeTiempo");
const imagenLolcat = document.getElementById("imagenLolcat");
const fechaElemento = document.getElementById("fecha");

function mostrarHoraYFechaActual() {
  const reloj = document.getElementById('reloj');
  const ahora = new Date();

  // Fecha
  const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
  fechaElemento.innerText = fechaFormateada;

  // Hora
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();

  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  reloj.innerText = `${horas}:${minutos}:${segundos}`;
}

function actualizarReloj() {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutosActuales = ahora.getMinutes();
  const diaActual = ahora.getDate();
  const mesActual = ahora.getMonth();

  mostrarHoraYFechaActual();

  // Verifica si es el 1 de enero para Año Nuevo
  if (mesActual === 0 && diaActual === 1) {
    mensajeTiempo.innerText = "¡Feliz Año Nuevo!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
  } else if (horaActual >= 0 && horaActual < 3) {
    mensajeTiempo.innerText = "Es hora de... ser el héroe que esta ciudad necesita";
    imagenLolcat.src = "images/batman.jpeg";
  } else if (horaActual >= 3 && horaActual < 5) {
    mensajeTiempo.innerText = "¿Qué haces despierto? ¡Ve a dormir!";
    imagenLolcat.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cuaCtbhL5ZX4f0cAEWbhEzZzDUDXmyFBIQ&s";
  } else if (horaActual >= 6 && horaActual < 12) {
    mensajeTiempo.innerText = "¡Buenos días!";
    imagenLolcat.src = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
  } else if (horaActual >= 12 && horaActual < 15) {
    mensajeTiempo.innerText = "¡Es hora de almorzar!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  } else if (horaActual >= 15 && horaActual < 18) {
    mensajeTiempo.innerText = "¡Hora de la siesta!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (horaActual >= 18 && horaActual < 22) {
    mensajeTiempo.innerText = "¡Buenas tardes!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  } else if (horaActual >= 22 || horaActual < 3) {
    mensajeTiempo.innerText = "¡Buenas noches!";
    imagenLolcat.src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
  } else {
    mensajeTiempo.innerText = "¡Hola, gato curioso!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  }
}

setInterval(actualizarReloj, 1000);
