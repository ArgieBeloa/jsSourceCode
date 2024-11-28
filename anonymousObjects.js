//anonymous objects = objects without name 

class Card{

    constructor(value,
                 suit
                )
    {
          this.value = value
          this.suit = suit
    }
}

//example
const arrayOfCards = [new Card("A","Hearts"),
                      new Card("1","Hearts"),
                      new Card("2","Hearts"),
                      new Card("3","Hearts")]


                      displayCards(arrayOfCards )

function displayCards(ArrayOfCards) {
   
    for (const iterator of ArrayOfCards) {
        console.log( iterator.value +" " +iterator.suit)
    }
}