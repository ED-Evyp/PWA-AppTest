// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA-AppTest/service-worker.js')
        .then(() => console.log('Service Worker registered!'))
        .catch(err => console.log('Service Worker registration failed:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.querySelector('.buttons');
    const imagesContainer = document.querySelector('.product-images');
    const versionText = document.getElementById('version-text');

    versionText.textContent = "Version: 3.0 (JS Loaded)";

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
        imagesContainer.innerHTML = ''; // hide images when showing buttons
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
                    showProductImages(text);
                } else {
                    alert(`You clicked: ${text}`);
                }
            });

            buttonsContainer.appendChild(btn);
        });
    }

    // Function to show product images
    function showProductImages(productName) {
        buttonsContainer.innerHTML = '';
        imagesContainer.innerHTML = '';

        // create top image
        const topImg = document.createElement('img');
        topImg.src = `Files/${productName} Top.png`;
        topImg.alt = `${productName} Top`;

        // create bottom image
        const bottomImg = document.createElement('img');
        bottomImg.src = `Files/${productName} Bottom.png`;
        bottomImg.alt = `${productName} Bottom`;

        imagesContainer.appendChild(topImg);
        imagesContainer.appendChild(bottomImg);

        // add back button
        const backBtn = document.createElement('button');
        backBtn.className = 'nav-button';
        backBtn.textContent = 'Back to products';
        backBtn.style.marginTop = '20px';
        backBtn.addEventListener('click', () => {
            renderButtons(biostimulantsButtons);
        });

        imagesContainer.appendChild(backBtn);
    }

    // Initial render
    renderButtons(mainButtons);
});
