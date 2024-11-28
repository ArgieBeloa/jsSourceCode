let userSubject

document.getElementById("generateButton").onclick = function()
{
     userSubject = document.getElementById("subjectUserInput").value;

     userSubject = Number(userSubject)

     const addToDIV = document.getElementById("unitsAndGradeHolder")
     let topPosition = 205
     
  
      
     
  if (userSubject<=8) {
    
  
     for (let i = 2; i <=userSubject ; i++) {
      
         //number

     const newLabel = document.createElement("label");
     newLabel.textContent = i+"."
     newLabel.style.position= "absolute";
   

     newLabel.style.top= topPosition+'px';
     newLabel.style.left="72px";

     //unit
    const newLabelUnit = document.createElement("label");
    newLabelUnit.textContent = "Unit"
    newLabelUnit.style.position= "absolute";
  
    newLabelUnit.style.top= topPosition+'px';
    newLabelUnit.style.left="88px";

       //sem
       const newLabelSem = document.createElement("label");
       newLabelSem.textContent = "Sem Grade"
       newLabelSem.style.position= "absolute";
       newLabelSem.style.top= topPosition+'px';
       newLabelSem.style.left="233px";

    // unit textfield
    const unitTextField = document.createElement("input");
    unitTextField.setAttribute("type","text")
    unitTextField.setAttribute("id", `textFieldUnit${i}`)

    unitTextField.style.position = "absolute";
    unitTextField.style.width = "100px";
    unitTextField.style.height = "20px";
    unitTextField.style.top= topPosition-3+'px';
    unitTextField.style.left="120px";
    unitTextField.style.borderRadius="6px";

     // sem textfield
     const semTextField = document.createElement("input");
     semTextField.setAttribute("type","text")
     semTextField.setAttribute("id", `textFieldSem${i}`)
    
     semTextField.style.position = "absolute";
     semTextField.style.width = "100px";
     semTextField.style.height = "20px";
     semTextField.style.top= topPosition-3+'px';
     semTextField.style.left="310px";
     semTextField.style.borderRadius="6px";
   
    //add 
    topPosition += 50
    addToDIV.parentNode.appendChild(newLabel)
    addToDIV.parentNode.appendChild(newLabelUnit)
    addToDIV.parentNode.appendChild(newLabelSem)
    addToDIV.parentNode.appendChild(unitTextField)
    addToDIV.parentNode.appendChild(semTextField)

    
     }

    }else {
      window.prompt("Please enter lower that 8 units")
     }
        
     
  
    }

  
   
    document.getElementById("calculateButton").onclick = function () {
    

         let textValues = [document.getElementById("unitId").value, document.getElementById("finalGradeId").value]
         let semGrade = []
         let finalSemGrade =[]

         for (let index = 2; index <= userSubject; index++) {
            textValues.push(document.getElementById(`textFieldUnit${index}`).value)
            textValues.push(document.getElementById(`textFieldSem${index}`).value)
            
         }
          for (let index = 1; index <= userSubject; index++) {
            textValues[index] = Number( textValues[index])
           
            semGrade.push(textValues[index] * textValues[index+1])
           
          }
         
          let gradeIndex = 1
             for (let index = 1; index <= userSubject; index++) {
               finalSemGrade.push(textValues[gradeIndex])
              
               gradeIndex +=2
               
             }
           
            
          
            
          
       
              
         
              
             
        
        let usergwa = getAverage(userSubject, semGrade)
  
      let averageGrade = getAverage(userSubject,finalSemGrade)
      averageGrade = averageGrade/userSubject
    
      let stringAVG = String(averageGrade)
      stringAVG =stringAVG.slice(0,4)

        if(isNaN(usergwa)) 
        {
          
          document.getElementById("userGWA").innerHTML = "GWA: "+ 0 
      }

      
      if(isNaN(averageGrade))
      {
        document.getElementById("userAverage").innerHTML = "Average: "+ 0;
      }
         
      if(!isNaN(averageGrade))
      {
        document.getElementById("userGWA").innerHTML = "GWA: "+ usergwa ;
        document.getElementById("userAverage").innerHTML = "Average: "+    stringAVG ;
        
      }
      
         
    
        }
        

      //   let arrayOfdecimal =[1.75,1.50,1.50]
      //  console.log(arrayOfdecimal.reduce(userGWA)) 

  function printElement(element) {
     console.log(element)
  }
  function userGWA(total, element) {
    
    return total+element
}

function getAverage(userSubject, array) {
  let i =0
  let sum =0
  
  do{
    console.log("before",sum)
    array[i] = Number(array[i])
    sum +=array[i]
    console.log("after",sum)
    i +=1
  }while((userSubject-1) >= i)

  return sum
}
  

    