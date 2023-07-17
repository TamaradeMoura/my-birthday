const dataDoEvento = new Date("May 2, 2024 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMs) / diasEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'evento expirado';
    }
}, 1000);