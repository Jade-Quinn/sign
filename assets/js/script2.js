function card(name, image){
    this.name = name;
    this.image = image;
  }
  
  var deck = [
    new card('Bat','Bat'),
    new card('Bones','Bones'),
    new card('Eye','Eye'),
    new card('Spider','Spider'),
    new card('Ghost','Ghost'),
    new card('Skull','Skull'),
  ];
  
  function getRandom(num){
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
  }
  
  document.getElementById("deal").onclick = function(){
    let index = getRandom(6);
    let currentCard = deck[index];
  
    document.getElementById("display").innerHTML = '<img src="images/' + currentCard.image + '.png"><h3>' + currentCard.name + '</h3><p>';
  };