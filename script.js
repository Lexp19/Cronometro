let cronometroInterval;
let tempoTotalEmSegundos = 0;
let cronometroEmAndamento = false;

const countSecondsElement = document.getElementById("count_seconds");
const iniciarBtn = document.getElementById("button_iniciar");
const pararBtn = document.getElementById("button_stop");
const resetarBtn = document.getElementById("button_reset");

function iniciarCronometro() {
    if (!cronometroEmAndamento) {
        cronometroEmAndamento = true;
        iniciarBtn.disabled = true; // Desativa o botão de iniciar
        cronometroInterval = setInterval(function() {
            tempoTotalEmSegundos++;
            const formattedTime = formatarTempo(tempoTotalEmSegundos);
            countSecondsElement.textContent = formattedTime;
        }, 1000);
    }
}

function pararCronometro() {
    clearInterval(cronometroInterval);
    cronometroEmAndamento = false;
    iniciarBtn.disabled = false; // Reativa o botão de iniciar
}

function resetarCronometro() {
    clearInterval(cronometroInterval);
    tempoTotalEmSegundos = 0;
    cronometroEmAndamento = false;
    iniciarBtn.disabled = false; // Reativa o botão de iniciar
    const formattedTime = formatarTempo(tempoTotalEmSegundos);
    countSecondsElement.textContent = formattedTime;
}

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
}

iniciarBtn.addEventListener("click", iniciarCronometro);
pararBtn.addEventListener("click", pararCronometro);
resetarBtn.addEventListener("click", resetarCronometro);
