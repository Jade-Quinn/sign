![Sign it](/assets/images/logo-blue.png)

# Sign it

[View the live project here](https://jade-quinn.github.io/sign/)

'Sign it' is a simple single-player pattern-matching memory game. The game uses imagery of the sign language alphabet to encourage learning through play.

## Table of Contents:

- [The Strategy Plane](#the-strategy-plane)
- [The Scope Plane](#the-scope-plane)
- [The Structure Plane](#the-structure-plane)
- [The Skeleton Plane](#the-skeleton-plane)
- [The Surface Plane](#the-surface-plane)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## UX

### The Strategy Plane

**Why are we so special?**

The principal of a card matching memory game is already well established however after searching online there is no game of this type specifically related to sign language. While this is only anecdotal evidence, I found that when my sister was very young, she managed to learn the world flags very quickly by playing a game of this type which featured images of all the worlds flags. The game would allow users to learn through play rather than formal learning, players would become familiar with the sign language alphabet by playing the game. The concept of the game is simple and familiar to players which would make it suitable for a brand range of ages.

**Who else is building this?**
Another online game that allows users to learn the sign language alpahbet is mind game.org. The game tests players by showing them a gesture and asking them to fill in the coresponding letter. The game itself does not work well on mobile and could be laid out better on desktop.

**What are the tech considerations?**
As this is a game, there should be a mobile first approach to design and functionality. This product is for general consumers. As this is a B2C product, it should focus heavily on branding and emotive design.
This is also important as the game itself is quite simple, it is important to engage players visually and also to clearly communicate the alphabet.

**What are the tech considerations?**

To determine the objectives and user needs for this release I have created the table below. 
Each opportunity/problem is rated on a scale of 1 - 5 in two dimensions; Importance and Feasibility.

Opportunity/Problem | Importance | Feasibility
------------ | ------------- | -------------
Create card pairing game | 5 | 5
Visually stimulating | 5 | 5
Countdown timer | 4 | 3
Count flips | 3 | 3
Clear explanation of how to play | 5 | 5
Cleary communicate sign language gestures | 5 | 5
Score board | 1 | 1
Share score with friends | 1 | 0

**User Stories**

- As a first time player, I want to easily understand the main purpose of the game.
- As a first time player, I want to be able to navigate through the site easily.
- As a first time player, I want to read how to play the game.
- As a player, I want to compete against a timer.
- As a player I want to know my score i.e how many flips.
- As a returning player I want to learn / familiarise myself with the sign language alphabet.

- As a site owner, I want to notify user when the timer will start.
- As a site owner, I want overlays to be hidden during game play.
- As a site owner, I want cards to shuffle randomly.
- As a site owner, I want selected cards to flip.
- As a site owner, I want players selected cards to be compared.
- As a site owner, I want unmatched cards to turn back face down.
- As a site owner, I want matched cards to stay face up.
- As a site owner, I want the player to be notified of a match with a sound. 
- As a site owner, I do not want already matched cards to be clickable.
- As a site owner, I want the game to end if the time runs out.
- As a site owner, I want the player to get a success message if the win.
- As a site owner, I want the player to be notified of a win with a sound. 

- As a site owner, I want the game to reset when the player replays


### The Scope Plane

#### Feature Scope

To establish the feature scope for this project I am using the agile methodology, I have made a list of all possible features and given each one a difficulty rating between 1 and 3.
Each release will allow for a maximum of 12 points. The table below will be used to determine which features to prioritise and which to schedule for a later release.

Feature | Rating
------------ | -------------
Logo that links to the home page so users can orientate themselves easily | 1
Clear, consistent hamburger navigation on each page | 2
Explain how to play the game | 1
Responsive design | 1
Countdown timer | 2
Flip counter | 2
Audio queues | 1
Hide and display text overlays when required | 1
Card that is being compared stays face up | 3
Cards which are not a match turn back over | 3
Matched cards stay face up | 3
Stop user clicking a third card | 1
Shuffle cards | 3
Stop timer when all cards are matched | 1
Reset cards at the end of the game | 1
Load jacascript after DOM content is loaded | 1

Given limited resources, the features that offer the most value at this stage are:

- Clear, consistent hamburger navigation on each page
- Explain how to play the game
- Responsive design
- Countdown timer
- Hide and display text overlays when required
- Card that is being compared stays face up
- Cards which are not a match turn back over
- Matched cards stay face up
- Stop user clicking a third card
- Shuffle cards
- Stop timer when all cards are matched
- Reset cards at the end of the game
- Load jacascript after DOM content is loaded

The priority is a working card game, any other features will be added at the end if there is time.

### The Structure Plane

As the site will not have a lot of content to begin with a linear narrative will work best. The project will consit of two pages, the home page and the game page.

### The Skeleton Plane

The wireframes were created using Balsamiq.

![Wireframes](/assets/readme/wireframes.jpg)

### The Surface Plane

#### 1. Font

 Space Grotesk is a proportional sans-serif typeface allowing for increased human readability and enhanced eye-tracking on screens. A backup of `sans-serif`, is included in case of any particular font not rendering as expected. Lower cases is used on the description to enhance readability. The tone of the font is bold and fun to compliment the design choices through out the game. An animation has been added to the 'hello' message on the home page to communiate the tone further.

[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

##### 2. Color Scheme

The colour scheme is bright and bold, with a choice of strong contrasting colours to appeal visually to users

- Primary: rgb(226, 74, 36)
- Secondary: rgb(235, 179, 178)
- Tertiary: rgb(185, 231, 198)
- Fourth: rgb(5, 48, 168)
- Fifth: rgb(79, 56, 82)
- Sixth: rgb(247, 223, 87)
- Seventh: rgb(170, 210, 239)

##### 3. Logo

The logo incorporates the font Space Grotesk aswel as the colour palette which has been sued across the site to maintain a consistant styling 

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Space Grotesk' font into the style.css.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Illustrator:](https://www.adobe.com/ie/products/illustrator.html)
    - Illustrator was used to create the logo.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create card images.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes at the 'Skelton Plane phase.

## Testing
Link to testing readme can be found [Here](https://github.com/Jade-Quinn/sign/blob/master/testing_readme.md)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code & Content
- The method for creating the project road map in README.md came from Code Institute's lesson: 'It's All About The User Experience > The Strategy Plane > Strategy Trade-offs'
- Reference I used for making CSS Hamburger Menu & Overlay [here](https://www.youtube.com/watch?v=DZg6UfS5zYg)
- Video for crerating bouncing text effect used on homepage [here](https://www.youtube.com/watch?v=Xs5APzmHeeE)
- Article about adding SVG waves [here](https://blog.prototypr.io/how-to-add-svg-waves-to-your-next-web-project-b720efe1c692)
- Resource for generating SVG waves [here](https://getwaves.io/)
- Javascript tutorial for creating a card matching game [here](https://www.youtube.com/watch?v=3uuQ3g92oPQ)
- HTML and CSS tutorial for creating a card matching game [here](https://www.youtube.com/watch?v=28VfzEiJgy4&t=0s)

### Media
- Correct audio downloaded from free resource [here](https://freesound.org/people/LittleRainySeasons/sounds/335908/)
- Win audio downloaded from free resource [here](https://freesound.org/people/EVRetro/sounds/535840/)
- Images of sign alphabet downloaded from free resource [here](https://www.andnextcomesl.com/2019/03/free-printable-asl-sign-language-cards.html)

### Acknowledgements

- My mentor Aaron Sinnott, for helpful guidance.
- My other half, Seamus, for cooking the dinners while I study


