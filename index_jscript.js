const mensajeTiempo = document.getElementById("mensajeTiempo");
const imagenLolcat = document.getElementById("imagenLolcat");
const fechaElemento = document.getElementById("fecha");

// Activa o desactiva el modo de simulación
const modoSimulacion = false; // Cambia a `false` para usar la hora actual

// Hora de simulación (ajusta los valores para probar diferentes horarios)
const horaSimulada = 12; // Hora en formato de 24 horas
const minutosSimulados = 0;

function mostrarHoraYFechaActual(horas, minutos, segundos) {
  const reloj = document.getElementById('reloj');
  
  // Fecha
  const ahora = new Date();
  const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
  fechaElemento.innerText = fechaFormateada;

  // Hora
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  reloj.innerText = `${horas}:${minutos}:${segundos}`;
}

function actualizarReloj() {
  const ahora = new Date();
  const horaActual = modoSimulacion ? horaSimulada : ahora.getHours();
  const minutosActuales = modoSimulacion ? minutosSimulados : ahora.getMinutes();
  const segundosActuales = ahora.getSeconds();
  const diaActual = ahora.getDate();
  const mesActual = ahora.getMonth();

  mostrarHoraYFechaActual(horaActual, minutosActuales, segundosActuales);

  // Verifica si es el 1 de enero para Año Nuevo
  if (mesActual === 0 && diaActual === 1) {
    mensajeTiempo.innerText = "¡Feliz Año Nuevo!";
    imagenLolcat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
  } else if (horaActual >= 0 && horaActual < 3) {
    mensajeTiempo.innerText = "Es hora de... ser el héroe que esta ciudad necesita";
    imagenLolcat.src = "images/batcat.jpg";
  } else if (horaActual >= 3 && horaActual < 5) {
    mensajeTiempo.innerText = "¿Qué haces despierto? ¡Ve a dormir!";
    imagenLolcat.src = "images/gosleep.jpg";
  } else if (horaActual >= 6 && horaActual < 12) {
    mensajeTiempo.innerText = "¡Buenos días!";
    imagenLolcat.src = "images/buenosdias.jpg";
  } else if (horaActual >= 12 && horaActual < 15) {
    mensajeTiempo.innerText = "¡Es hora de almorzar!";
    imagenLolcat.src = "images/comidacat.jpeg";
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
