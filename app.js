// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA-AppTest/service-worker.js')
        .then(() => console.log('Service Worker registered!'))
        .catch(err => console.log('Service Worker registration failed:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.querySelector('.buttons');
    const overlay = document.querySelector('.product-overlay');
    const overlayText = document.querySelector('.product-text');
    const overlayImage = document.querySelector('.product-image');
    const backButton = document.querySelector('.back-button');
    const versionText = document.getElementById('version-text');

    versionText.textContent = "Version: 4.0 (JS Loaded)";

    const mainButtons = [
        "Biostimulants",
        "Premium Biostimulants",
        "Liquid Fertilizers",
        "Water-soluble Fertilizers",
        "Insect Attractant"
    ];

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

    function renderButtons(buttons) {
        overlay.style.display = 'none'; // hide overlay
        buttonsContainer.style.display = 'flex';
        buttonsContainer.innerHTML = '';

        buttons.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'nav-button';
            btn.textContent = text;

            btn.addEventListener('click', () => {
                if (text === "Biostimulants") {
                    renderButtons(biostimulantsButtons);
                } else if (text === "Back to main") {
                    renderButtons(mainButtons);
                } else if (biostimulantsButtons.includes(text)) {
                    showProductOverlay(text);
                } else {
                    alert(`You clicked: ${text}`);
                }
            });

            buttonsContainer.appendChild(btn);
        });
    }

    async function showProductOverlay(productName) {
        buttonsContainer.style.display = 'none';
        overlay.style.display = 'flex';

        // Load text file from Files folder
        try {
            const response = await fetch(`Files/${productName}.txt`);
            if (!response.ok) throw new Error('Text file not found');
            const text = await response.text();
            overlayText.textContent = text;
        } catch (err) {
            overlayText.textContent = "No description available.";
            console.error(err);
        }

        // Load Bottom image
        overlayImage.src = `Files/${productName} Bottom.png`;
        overlayImage.alt = `${productName} Bottom`;
    }

    backButton.addEventListener('click', () => {
        renderButtons(biostimulantsButtons);
    });

    // Initial render
    renderButtons(mainButtons);
});
