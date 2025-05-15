class App {
    constructor() {
        this.initAds();
        this.setupEventListeners();
    }

    initAds() {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }

    setupEventListeners() {
        const rewardButton = document.getElementById('rewardButton');
        rewardButton.addEventListener('click', () => this.showRewardAd());
    }

    showRewardAd() {
        console.log('Mostrando anuncio con recompensa...');
        // Aquí irá la lógica del anuncio cuando tengas los IDs de AdMob
    }
}

window.onload = () => new App();