
let cards =["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"]

shuffle(cards)

cards.forEach(element => console.log(element))

function shuffle(array) {
    
    let currentIndex = array.length;
 console.log(currentIndex)
    while(currentIndex !=0 ){
        let randomNumber = Math.floor(Math.random()*array.length)
        currentIndex-=1
        let temp = array[currentIndex]
        array[currentIndex] = array[randomNumber] 
        array[randomNumber] = temp
    }
    
    return array
}