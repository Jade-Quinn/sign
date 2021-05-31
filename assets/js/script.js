// Check html has loaded if true run ready function
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else  {
    ready():
}

function ready() {
    // Use Array.from to create an array of overlays elements and cards
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    // For all overlays add a click event listener to remove visibility
    overlays.forEach(overlay => {
        overlay.addEventListner('click', () => {
            overlay.classList.remove('visible');
        });
    });
}