//error handling
//4:07:00
//user types inccorrect input

try {
    
    let x = window.prompt("Enter a number")
    x = Number(x)

 
    if(isNaN(x)) throw "Thats was not a number"

    if(x =="") throw "That was empty"
    console.log(`${x} is number`)
} catch (error) {
    console.log(error)
}
finally
{
    console.log("Exiting")
}