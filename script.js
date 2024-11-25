let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let pointsPerClick = localStorage.getItem('pointsPerClick') ? parseInt(localStorage.getItem('pointsPerClick')) : 1;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');

// Atualizar a exibição de pontos ao carregar a página
scoreDisplay.textContent = `Pontos: ${score}`;

clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    scoreDisplay.textContent = `Pontos: ${score}`;
    localStorage.setItem('score', score);
});

upgrade1Button.addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        pointsPerClick += 1;
        scoreDisplay.textContent = `Pontos: ${score}`;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerClick', pointsPerClick);
        upgrade1Button.disabled = true;
        localStorage.setItem('upgrade1', 'disabled');
    }
});

upgrade2Button.addEventListener('click', () => {
    if (score >= 50) {
        score -= 50;
        pointsPerClick += 5;
        scoreDisplay.textContent = `Pontos: ${score}`;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerClick', pointsPerClick);
        upgrade2Button.disabled = true;
        localStorage.setItem('upgrade2', 'disabled');
    }
});

upgrade3Button.addEventListener('click', () => {
    if (score >= 100) {
        score -= 100;
        pointsPerClick += 10;
        scoreDisplay.textContent = `Pontos: ${score}`;
        localStorage.setItem('score', score);
        localStorage.setItem('pointsPerClick', pointsPerClick);
        upgrade3Button.disabled = true;
        localStorage.setItem('upgrade3', 'disabled');
    }
});

// Desabilitar botões de upgrade com base no localStorage ao carregar a página
if (localStorage.getItem('upgrade1') === 'disabled') {
    upgrade1Button.disabled = true;
}

if (localStorage.getItem('upgrade2') === 'disabled') {
    upgrade2Button.disabled = true;
}

if (localStorage.getItem('upgrade3') === 'disabled') {
    upgrade3Button.disabled = true;
}
