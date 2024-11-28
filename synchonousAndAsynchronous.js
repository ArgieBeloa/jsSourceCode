//synchonous and asynchronous

/*
synchonous code = In an ordered sequence.
                step by step linear instructions 
                (Start now, finish now)

asynchronous code = out of sequence.
                 ex. Access a database 
                    fetch a file 
                    task that take time
                    (start now, finish somenthing later)

*/

//example synchonous code 
console.log("Start")
console.log("synchonous code")
console.log("end")

console.log("Start")
setTimeout(()=>console.log("asynchronous code"),5000)
console.log("end")