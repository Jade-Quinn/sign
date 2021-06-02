![Sign it](/assets/images/logo-blue.png)

# Sign it

[View the live project here](https://jade-quinn.github.io/sign/)
Back to main readme [Here](https://github.com/Jade-Quinn/sign/README.md)

## Table of Contents:

- [User Stories Testing](#user-stories-testing)
- [Code Validation](#code-validation)
- [Functionality Testing](#functionality-testing)
- [Performance Testing](#performance-testing)
- [Encountered Issues](#encountered-tssues)

## User Stories Testing

- As a first time player, I want to easily understand the main purpose of the game.
    - Tha main purpose of the game is displayed as soon as the player arrives to the site in the form of the sub-heading 'Lets learn how to sign'
    - The games instructions are shown on the homepage below the fold
    - Font choice is large with a high contrast to maximise readabilty
    - Play button is clearly displayed beneath the instructions

- As a first time player, I want to be able to navigate through the site easily.
    - Simple intuitive navigation means a user can quickly scan for information if needed
    - Navigation takes a mobile first approch and is consitant across all screen sizes. Using the hamburger for all sizes was appropriate for the design of the site
    - The hambuger is large and easy to select, making it suitable for youger users
    - A full screen menu clearly displays menu choices to the user while removing any other choices

- As a first time player, I want to read how to play the game.
    - Instructions can be viewed on the home page of the site
    - Link to the home page and instructions is only one click away at all times

- As a player, I want to compete against a timer.
    - A count down time begins once this player clicks the game over. The player is notified that this will happen in the text on the overlay

- As a player I want to know my score i.e how many flips.
    - Each flip the player makes is recorded in a clearly diaplyed counter above the cards

- As a returning player I want to learn / familiarise myself with the sign language alphabet.
    - When the game ends, teh player has the option to click play again. The player familiarizes themselves with the sign language alohabet through repetition.

- As a site owner, I want to notify user when the timer will start.
    - When the user clicks play and over lay message is displayed 'Click to start timer'.
- As a site owner, I want overlays to be hidden during game play.
    - The ready() function loops over all overlays and add a click event listener to remove visibility
- As a site owner, I want cards to shuffle randomly.
    - The shuffleCards() function uses the fisher yates shuffle algorithm to randomise the order of the grid
- As a site owner, I want selected cards to flip.
    - When a card is clicked call flipCard function. The flip card function adds a visible class which flips the card using a css transition
- As a site owner, I want players selected cards to be compared.
    - The checkForCardMatch function compares the src attributes of the players selected cards
- As a site owner, I do not want players to be able to select more than two cards.
     - The function canFlipCard only allows a card to be clicked if if not busy & not in matched cards array & not the card already flipped
- As a site owner, I want unmatched cards to turn back face down.
    - The cardMisMatch function removes the visible class, it allows has a timeout to give players a chance to remember where cards are.
- As a site owner, I want matched cards to stay face up.
    - The cardMatch function adds a matched class to both cards for animation and pushes both cards cards to the match cards array.
- As a site owner, I want the player to be notified of a match with a sound.
    - This is achieved using a javascript class constructor which calls the function match() and the correct.mp3 sound.
- As a site owner, I want the game to end if the time runs out.
    - The startCountDown() function calls the gameOver(); function if time remaining is = to 0.
- As a site owner, I want the player to get a success message if the win.
    If the cards array lemgth is equal to the matched cards array length the victory() function is called which displays a message.
- As a site owner, I want the player to be notified of a win with a sound.
    - This is achieved using a javascript class constructor which calls the function victory() and the win.wav3 sound
- As a site owner, I want the game to reset when the player replays
    - The gameOver() removes the visible class on the cards and resets the timer

## Code Validation

[W3C Markup Validation](https://validator.w3.org/) was used to check the markup validity of all html on the site.

[W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used to check the markup validity of all css on the site.

[jshint.com](https://jshint.com/) was used to check the markup validity of all javaScript on the site.


## Functionality Testing

I tested the features on each page visually and using dev tools on my desktop and mobile.
 - All links are working correctly
 - All features on the game page behave as expected
    - Cards display 4 across on mobile and 6 across on desktop
    - Cards are shuffled
    - Pairs are checked for a match
    - Matched pairs stay facing up
    - Unmatched pairs face back down
    - Sound alerts when a pair is matched
    - Users cannot click more than two cards or cards that are already facing up
    - When timer runs out, the game ends
    - When all pairs are matched the game shows a messages and plays a sound
    - Users can restart the game
    - Restarting the game clears the timer and turns th cards face down

### Browser Testing

### Device Testing
I tested the site on a Macbook Pro and an iPhone 11

## Performance Testing
Lighthouse was used to check the performance of the site.

## Encountered Issues