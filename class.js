class Player{
     score = 0



     pause()
     {
        console.log("You pause")
     }
     exit()
     {
        console.log("You exit")
     }
}

const player1 = new Player()
player1.score = 10

console.log(player1.score)

player1.pause()