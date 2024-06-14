function playAudioAfterDelay() {
    // Esperar 3 segundos (3000 milisegundos)
    setTimeout(function() {
        // Obtener el elemento de audio
        var audio = document.getElementById('myAudio');
        // Reproducir el audio
        audio.play();
    }, 3000); // 3000 milisegundos = 3 segundos
}