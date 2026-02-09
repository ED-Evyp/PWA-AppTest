// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA-AppTest/service-worker.js')
        .then(() => console.log('Service Worker registered!'))
        .catch(err => console.log('Service Worker registration failed:', err));
}

// Button logic
const buttonsContainer = document.querySelector('.buttons');

// Main menu buttons
const mainButtons = [
    "Biostimulants",
    "Premium Biostimulants",
    "Liquid Fertilizers",
    "Water-soluble Fertilizers",
    "Insect Attractant"
];

// Biostimulants submenu
const biostimulantsButtons = [
    "Amino 16",
    "Amino 16 B&Zn",
    "FruitFix",
    "GranBrix",
    "Micro RS",
    "BMC Fixer",
    "NFHyd1",
    "Back to main"
];

// Function to render buttons
function renderButtons(buttons) {
    buttonsContainer.innerHTML = ''; // Clear existing buttons
    buttons.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'nav-button';
        btn.textContent = text;

        // Click behavior
        btn.addEventListener('click', () => {
            if (text === "Biostimulants") {
                renderButtons(biostimulantsButtons);
            } else if (text === "Back to main") {
                renderButtons(mainButtons);
            } else {
                alert(`You clicked: ${text}`);
            }
        });

        buttonsContainer.appendChild(btn);
    });
}

// Initial render
renderButtons(mainButtons);
