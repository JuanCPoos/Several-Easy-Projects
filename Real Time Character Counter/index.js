const txtAreaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remaiCounterEl = document.getElementById('remaining-counter');

/* tomar la acción realizada en textarea y llamar a una funcion.
metodo KEY UP: cuando escribimos */
txtAreaEl.addEventListener('keyup', () => {
    updateCounter();    
});

updateCounter();

function updateCounter() { 
    totalCounterEl.innerText = txtAreaEl.value.length;
    remaiCounterEl.innerText = txtAreaEl.getAttribute('maxlength') - txtAreaEl.value.length;
}

