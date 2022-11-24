/* instanciamos los elementos en html */
const hourElem = document.getElementById("hour");
const minutesElem = document.getElementById("minutes");
const secondElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");   
/* const paisesElem = document.getElementById("selectPaises"); */
const $select = document.querySelector("#selectPaises");

/* obtenemos los datos de la computadora, usando el constructor de fechas */
function updateClock() { 
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM" /* inicializamos ampm = AM */
    let paises;  

    if (hour > 12) {
        hour = hour - 12
        ampm = "PM"
    }

    /* Si hour es menor a 10, agregar "0" mas la hora
    de los contrario la hora como esta*/
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hourElem.innerText = hour;
    minutesElem.innerText = minutes;
    secondElem.innerText = seconds;
    ampmElem.innerText = ampm;
    
    setTimeout(() => {
        updateClock()
    }, 1000)
}

function optionChange() {
    console.log("Horario en desarrollo");
    opcion = confirm("Horario mundial en desarrollo");
    
} 
/* const optionChange = () => {
    console.log("Option change activated");
    //messa("Horarios en desarrollo");
    
}; */

updateClock();

/* Al escuchar un llamada cambio de opción ejecuta la
function optionChange() */

$select.addEventListener("change", () => {    
    if (cont == 1) {
        optionChange();
        cont++;
    }
});