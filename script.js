document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const countdown = document.querySelector('.countdown');
    let isAnimating = false;

    startButton.addEventListener('click', () => {
        if (!isAnimating) {
            countdown.style.animationPlayState = 'running';
            startButton.textContent = 'Reiniciar';
            isAnimating = true;
        } else {
            countdown.style.animation = 'none';
            countdown.offsetHeight; // Força o reflow
            countdown.style.animation = 'rotate 6s linear infinite';
            countdown.style.animationPlayState = 'running';
        }
    });
}); 