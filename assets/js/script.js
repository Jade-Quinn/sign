// Create a javascript class for audio
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

// Class to manage card interactivity
class signGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;  // property set from constructor
        this.totalTime = totalTime; // property set from constructor
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining'); // Get value from the DOM
        this.ticker = document.getElementById('flips'); // Get value from the DOM
        this.audioController = new AudioController();
    }

    startGame() {
        this.cardToCheck = null; // no card face up on game start
        this.totalClicks = 0; // set starting point clicks
        this.timeRemaining = this.totalTime; // set starting point time
        this.matchedCards = []; // Create empty array for matched cards to check against total cards arrary
        this.busy = true;
        setTimeout(() => { //.5 second delay
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown(); // reset start time on new game
            this.busy = false;
            
        }, 500);
        this.timer.innerText = this.timeRemaining; // reset timer when new game starts
        this.ticker.innerText = this.totalClicks;
        this.hideCards();
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++; // increment clicks
            this.ticker.innerText = this.totalClicks; // update html to show clicks number
            card.classList.add('visible');
        }
    }

    startCountDown() {
        return setInterval(() => { // setInterval to call function ever 1 second
            this.timeRemaining--; // increment down
            this.timer.innerText = this.timeRemaining; // update inner html
            if(this.timeRemaining === 0) // if time = 0 game over
                this.gameOver();
        }, 1000); //
    }

    gameOver() {
        clearInterval(this.countDown); // stop timer
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) { // fisher yates shuffle algorithm
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex; // swapping css grid order
        }
    }

    canFlipCard(card) { // flip card if not busy & not in matched cards array & not the card already flipped
        return true; // temporary for testing
        // return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}



// ready function executes when DOM content is loaded
function ready() {
    // Use Array.from to create an array of items
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new signGame(100, cards);

    // Loop over all overlays and add a click event listener to remove visibility
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    // Loop over all cards and add a click event listner to run flip card function
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card); // when card is clicked call flipCard function
        });
    });
}

// Check DOM content has loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else  {
    ready();
}