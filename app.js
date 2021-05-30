document.addEventListener ('DomContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'teal',
            img: 'images/teal.jpg'
        },
        {
            name: 'teal',
            img: 'images/teal.jpg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.jpg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.jpg'
        },
        {
            name: 'orange',
            img: 'images/yellow.jpg'
        },
        {
            name: 'orange',
            img: 'images/yellow.jpg'
        },
        {
            name: 'blue',
            img: 'images/yellow.jpg'
        },
        {
            name: 'blue',
            img: 'images/yellow.jpg'
        },
        {
            name: 'pink',
            img: 'images/yellow.jpg'
        },
        {
            name: 'pink',
            img: 'images/yellow.jpg'
        },
        {
            name: 'purple',
            img: 'images/yellow.jpg'
        },
        {
            name: 'purple',
            img: 'images/yellow.jpg'
        }  
    ]
const grid = document.querySelector.('.grid')

//create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
    }
}

})