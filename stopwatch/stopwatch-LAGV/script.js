// Variables para el cronómetro
let stopwatchInterval;
let stopwatchTime = 0;

// Funciones para el cronómetro
document.getElementById('start-stopwatch').addEventListener('click', function() {
    if (this.textContent === 'Start') {
        startStopwatch();
        this.textContent = 'Pause';
        this.style.backgroundColor = '#ff9800'; // Cambiar color a naranja para pausar
    } else if (this.textContent === 'Pause') {
        pauseStopwatch();
        this.textContent = 'Continue';
        this.style.backgroundColor = '#2196f3'; // Cambiar color a azul para continuar
    } else {
        continueStopwatch();
        this.textContent = 'Pause';
        this.style.backgroundColor = '#ff9800'; // Cambiar color a naranja para pausar
    }
});

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateStopwatch, 10); // Cada 10 ms
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function continueStopwatch() {
    startStopwatch();
}

function updateStopwatch() {
    stopwatchTime += 10; // Incrementar el tiempo en 10 ms

    // Calcular horas, minutos, segundos y milisegundos
    const hours = Math.floor((stopwatchTime % (3600 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((stopwatchTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((stopwatchTime % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((stopwatchTime % 1000) / 10); // Milisegundos

    // Actualizar el DOM
    document.getElementById('stopwatch-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('stopwatch-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('stopwatch-seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('stopwatch-milliseconds').textContent = String(milliseconds).padStart(3, '0');
}

document.getElementById('reset-stopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;

    // Reiniciar los valores en el DOM
    document.getElementById('stopwatch-hours').textContent = '00';
    document.getElementById('stopwatch-minutes').textContent = '00';
    document.getElementById('stopwatch-seconds').textContent = '00';
    document.getElementById('stopwatch-milliseconds').textContent = '000';
});

// Variables para la cuenta atrás
let countdownInterval;
let countdownTime = 0;
let countdownRunning = false; // Para rastrear el estado de la cuenta atrás

// Funciones para la cuenta atrás
document.getElementById('start-countdown').addEventListener('click', function() {
    if (this.textContent === 'Start') {
        // Obtener los valores de hora, minuto y segundo
        const hours = parseInt(document.getElementById('countdown-hours').textContent);
        const minutes = parseInt(document.getElementById('countdown-minutes').textContent);
        const seconds = parseInt(document.getElementById('countdown-seconds').textContent);
        
        // Calcular el tiempo total en milisegundos
        countdownTime = (hours * 3600 + minutes * 60 + seconds) * 1000; // en milisegundos
        
        // Iniciar la cuenta regresiva
        startCountdown();
        this.textContent = 'Pause'; // Cambiar el texto a "Pause"
    } else if (this.textContent === 'Pause') {
        pauseCountdown();
        this.textContent = 'Continue'; // Cambiar el texto a "Continue"
    } else {
        continueCountdown();
        this.textContent = 'Pause'; // Cambiar el texto a "Pause"
    }
});

function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 10); // cada 10 ms para mostrar milisegundos
    countdownRunning = true; // Marcar que la cuenta atrás está en ejecución
}

function pauseCountdown() {
    clearInterval(countdownInterval);
    countdownRunning = false; // Marcar que la cuenta atrás está en pausa
}

function continueCountdown() {
    startCountdown();
}

function updateCountdown() {
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        countdownRunning = false; // Marcar que la cuenta atrás ha terminado
        document.getElementById('start-countdown').textContent = 'Start'; // Reiniciar el botón
        return; // Terminar la cuenta regresiva
    }
    
    countdownTime -= 10; // Reducir el tiempo en 10 ms
    
    // Calcular horas, minutos, segundos y milisegundos restantes
    const hours = Math.floor((countdownTime % (3600 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((countdownTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((countdownTime % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((countdownTime % 1000) / 10); // Milisegundos
    
    // Actualizar el DOM
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('countdown-milliseconds').textContent = String(milliseconds).padStart(3, '0');
}

document.getElementById('reset-countdown').addEventListener('click', function() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    
    // Reiniciar los valores en el DOM
    document.getElementById('countdown-hours').textContent = '00';
    document.getElementById('countdown-minutes').textContent = '00';
    document.getElementById('countdown-seconds').textContent = '00';
    document.getElementById('countdown-milliseconds').textContent = '000';
});

// Asegúrate de agregar las funciones para incrementar y decrementar el tiempo
document.getElementById('increment-hours').addEventListener('click', function() {
    let hours = parseInt(document.getElementById('countdown-hours').textContent);
    if (hours < 23) {
        document.getElementById('countdown-hours').textContent = String(++hours).padStart(2, '0');
    }
});

document.getElementById('decrement-hours').addEventListener('click', function() {
    let hours = parseInt(document.getElementById('countdown-hours').textContent);
    if (hours > 0) {
        document.getElementById('countdown-hours').textContent = String(--hours).padStart(2, '0');
    }
});

document.getElementById('increment-minutes').addEventListener('click', function() {
    let minutes = parseInt(document.getElementById('countdown-minutes').textContent);
    if (minutes < 59) {
        document.getElementById('countdown-minutes').textContent = String(++minutes).padStart(2, '0');
    }
});

document.getElementById('decrement-minutes').addEventListener('click', function() {
    let minutes = parseInt(document.getElementById('countdown-minutes').textContent);
    if (minutes > 0) {
        document.getElementById('countdown-minutes').textContent = String(--minutes).padStart(2, '0');
    }
});

document.getElementById('increment-seconds').addEventListener('click', function() {
    let seconds = parseInt(document.getElementById('countdown-seconds').textContent);
    if (seconds < 59) {
        document.getElementById('countdown-seconds').textContent = String(++seconds).padStart(2, '0');
    }
});

document.getElementById('decrement-seconds').addEventListener('click', function() {
    let seconds = parseInt(document.getElementById('countdown-seconds').textContent);
    if (seconds > 0) {
        document.getElementById('countdown-seconds').textContent = String(--seconds).padStart(2, '0');
    }
});
