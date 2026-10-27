// Gerenciador de Abas (Navegação superior)
function switchTab(tabName) {
    // Altera a classe ativa dos botões do menu
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Alterna a exibição das seções
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Lógica Visual do Futebol (Mantida)
let currentSelectedOdd = null;

function selectOdd(teamName, oddValue) {
    document.querySelectorAll('.odd-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');

    currentSelectedOdd = { team: teamName, value: oddValue };

    const slipContent = document.getElementById('slip-content');
    slipContent.innerHTML = `
        <div class="selection-details">
            <strong>Aposta em:</strong> ${teamName}<br>
            <strong>Cotação:</strong> ${oddValue.toFixed(2)}
        </div>
    `;
    updatePotentialWin();
}

function updatePotentialWin() {
    const amountInput = document.getElementById('bet-amount').value;
    const winDisplay = document.getElementById('possible-win');

    if (currentSelectedOdd && amountInput > 0) {
        const potential = amountInput * currentSelectedOdd.value;
        winDisplay.innerText = `R$ ${potential.toFixed(2)}`;
    } else {
        winDisplay.innerText = "R$ 0,00";
    }
}

function simulateBet() {
    const amountInput = document.getElementById('bet-amount').value;
    if (!currentSelectedOdd || !amountInput || amountInput <= 0) {
        alert("Preencha a aposta esportiva corretamente primeiro.");
        return;
    }
    alert(`[FUTEBOL FALSO] Cupom registrado no ${currentSelectedOdd.team} com o valor simulado de R$ ${amountInput}!`);
}

// Simuladores Visuais de Cassino (Totalmente sem lógica real de sorteio)
function simulateSpin() {
    const icons = ['🍒', '🍋', '🍊', '🔔', '💎', '7️⃣'];
    
    // Altera o texto estático aleatoriamente uma vez só para fingir que rodou
    document.getElementById('slot1').innerText = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('slot2').innerText = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('slot3').innerText = icons[Math.floor(Math.random() * icons.length)];

    alert("[CASSINO FALSO] Você clicou para girar! Lembrando que isso é apenas uma animação de interface.");
}

function simulateCrash() {
    const multElement = document.getElementById('multiplier');
    const statusElement = document.getElementById('crash-status');
    
    multElement.innerText = "1.00x";
    statusElement.innerText = "Subindo...";

    // Pequena simulação visual de contagem rápida
    let current = 1.00;
    const interval = setInterval(() => {
        current += 0.35;
        multElement.innerText = `${current.toFixed(2)}x`;
        
        if (current > 4) {
            clearInterval(interval);
            multElement.innerText = "💥 CRASHED";
            statusElement.innerText = "O avião voou para longe em 4.15x (Simulado)";
        }
    }, 150);
}

function simulateRoulette(colorChosen) {
    const fakeNumber = Math.floor(Math.random() * 36);
    const resultElement = document.getElementById('roulette-result');
    
    resultElement.innerText = fakeNumber;
    alert(`[ROLETA FALSA] Você simulou uma aposta no [${colorChosen}]. O número visual sorteado foi o ${fakeNumber}.`);
}
