
//  await = makes an async function wait for a promise

async function loadFile() {

    let fileLoaded = false

    if(fileLoaded)
    {
       return "File loaded"
    }
    else
    {
       throw "File not loaded"
    }
}

async function startProcess() {
    
    try {
        let mesasge = await loadFile()
        console.log(mesasge)
    } catch (error) {
        console.log(error)
    }
   
}
startProcess()  

