function revealSurprise() {
    const surprise = document.getElementById('surprise');
    const message = document.getElementById('message');
    
    surprise.classList.remove('hidden');
    surprise.classList.add('visible');
    
    message.classList.remove('hidden-message');
    message.classList.add('visible');
}
