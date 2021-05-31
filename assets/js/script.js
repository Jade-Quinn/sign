// Create a javascript class called AudioController
class AudioController {
    // class requires constructor method
    constructor() {
        this.bgMusic = new Audio('assets/audio/creepy.mp3');
        this.flipSound = new Audio('assets/audio/flip.wav');
        this.matchSound = new Audio('assets/audio/match.wav');
        this.victorySound = new Audio('assets/audio/victory.wav');
        this.gameOverSound = new Audio('assets/audio/gameover.wav');
        // Set background music to play at half volume
        this.bgMusic.volume = 0.5;
        // Set background music to repeat
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        // Pause used because there is no stop function
        this.bgMusic.pause();
        // Reset music to start
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

// create reday function
function ready() {
    // Use Array.from to create an array of overlays elements and cards
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    // Loop over all overlays and add a click event listener to remove visibility
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // let audioController = new AudioController();
            // audioController.startMusic();
        });
    });

    // Loop over all cards and add a click event listner to run flip card function
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
        });
    });
}

// Check html has loaded if true run ready function
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else  {
    ready();
}