// Check html has loaded if true run ready function
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else  {
    ready();
}

function ready() {
    // Use Array.from to create an array of overlays elements and cards
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    // Loop over all overlays and add a click event listener to remove visibility
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
    });

    // Loop over all cards and add a click event listner to run flip card function
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
        });
    });
}