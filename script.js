
let fechaCompleta = document.getElementById("fecha")
let horaCompleta = document.getElementById("hora")


function obtenerFecha() {
    let fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let anio = fecha.getFullYear()
    fechaCompleta.innerHTML = `${dia}/${mes}/${anio}`
}

function obtenerHora() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    horaCompleta.innerHTML = `${horas}:${minutos}:${segundos}`;


}
setInterval(obtenerHora, 1000)


let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById("numeroEntrada")//.value

let mensaje = document.getElementById("mensaje")

let intento = document.getElementById("intento")
let intentos = 0
let limiteIntentos = 5


function chequearResultado() {
    intentos++;
    intento.textContent = intentos;

    if (intentos >= limiteIntentos) {
        mensaje.textContent = "¡Has agotado los intentos!";
        mensaje.className = "rojo";
        numeroEntrada.disabled = true;
    } else {
        let numeroIngresado = parseInt(numeroEntrada.value);

        if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            mensaje.textContent = "Por favor introduce un numero valido entre 1 y 100";
            mensaje.className = "rojo";
        } else {
            if (numeroIngresado == numeroAzar) {
                mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el numero!";
                mensaje.className = "verde";
                numeroEntrada.disabled = true;
            } else if (numeroIngresado < numeroAzar) {
                mensaje.textContent = "¡Mas Alto¡ El numero es mayor al que colocaste";
                mensaje.className = "rojo";
            } else {
                mensaje.textContent = "¡Mas Bajo¡ El numero es mas bajo al que colocaste";
                mensaje.className = "rojo";
            }
        }
    }
}

function resetearJuego() {
    numeroAzar = Math.floor(Math.random() * 100) + 1;
    numeroEntrada.value = "";
    mensaje.textContent = "¡A Jugar!";
    mensaje.className = "";
    numeroEntrada.disabled = false;
    intentos = 0;
    intento.textContent = intentos;
}

