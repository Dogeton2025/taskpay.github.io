document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de Particles.js
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffd700" },
      "shape": { "type": "image", "image": { "src": "img/logo.png", "width": 100, "height": 100 } },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 5, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffd700", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      }
    },
    "retina_detect": true
  });

  // Control de audio
  const audio = document.getElementById('background-audio');
  const toggleButton = document.getElementById('audio-toggle');

  toggleButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(err => console.error('Error al reproducir el audio:', err));
      toggleButton.textContent = '🔊 Apagar música';
    } else {
      audio.pause();
      toggleButton.textContent = '🔇 Encender música';
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const contractText = document.getElementById('contract-address');
  const copyMessage = document.getElementById('copy-message');

  contractText.addEventListener('click', () => {
    // Seleccionamos el texto del contrato
    const range = document.createRange();
    range.selectNode(contractText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      // Intentamos copiar el texto al portapapeles
      document.execCommand('copy');
      copyMessage.textContent = 'Contrato copiado al portapapeles!';
      copyMessage.style.color = 'green';
    } catch (err) {
      copyMessage.textContent = 'Error al copiar el contrato.';
      copyMessage.style.color = 'red';
    }

    // Limpiamos la selección
    window.getSelection().removeAllRanges();
  });
});









