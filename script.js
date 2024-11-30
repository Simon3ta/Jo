function revealMessage() {
    const message = document.getElementById('message');
    const song = document.getElementById('song');

    // Mostrar el mensaje
    message.classList.remove('hidden-message');
    message.classList.add('visible');

    // Reproducir la canción
    song.play();
}
song.volume = 0.5; // 50% del volumen máximo
