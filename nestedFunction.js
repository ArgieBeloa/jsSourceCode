// function inside of function

let userName ="Argie"
let newMessage =5

login()

function login() {
    
    let greetings = ()=>console.log(`Welcome ${userName}`)
    let message = ()=>console.log(`Number of messages ${newMessage}`)

    greetings()
    message ()
}