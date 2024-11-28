const divForGrade = document.getElementById("Div3")
const divForcalculate = document.getElementById("calculateDIV")
let numberOfsubject 


let i=0


document.getElementById("generateButton").onclick = function() {
         numberOfsubject = document.getElementById("subjectUserInput").value;

         numberOfsubject = Number(numberOfsubject)
        
         divForcalculate.style.display ="flex"
        
         let i=0

      
while (i<numberOfsubject) {
        let newDiv = document.createElement("div")
        newDiv.style.position= "relative"
        newDiv.style.width ="100%"
        newDiv.style.height ="8%"
        newDiv.style.backgroundColor ="#daecf0"
        // newDiv.style.border ="2px solid"
        newDiv.style.display ="flex"
        newDiv.style.justifyContent ="center"
        newDiv.style.gap ="10px"
        //create label
        let newLabelUnit = document.createElement("label")
        newLabelUnit.textContent =`${i+1}. Unit`
        let newLabelSem = document.createElement("label")
        newLabelSem.textContent ="Sem Grade"
        //create textbox
        let txtBoxUnit = document.createElement("input")
        txtBoxUnit.setAttribute("type","text")
        txtBoxUnit.setAttribute("id", `textFieldUnit${i}`)
        txtBoxUnit.style.borderRadius= "7px";
        txtBoxUnit.style.width="88px";
        txtBoxUnit.style.height= "20px";
       

        let txtBoxSem = document.createElement("input")
        txtBoxSem.setAttribute("type","text")
        txtBoxSem.setAttribute("id", `textFieldSem${i}`)
        txtBoxSem.style.borderRadius= "7px";
        txtBoxSem.style.width="88px";
        txtBoxSem.style.height= "20px";
       
        newDiv.appendChild(newLabelUnit)
        newDiv.appendChild(txtBoxUnit)
        newDiv.appendChild(newLabelSem)
        newDiv.appendChild(txtBoxSem)
        divForGrade.appendChild(newDiv)    
        i++
}

   
}


//Event of calculate
document.getElementById("calculateButton").onclick = function () {
        let unitArray = [document.getElementById(`textFieldUnit${0}`).value]
        let semGradeArray = [document.getElementById(`textFieldSem${0}`).value]

    //    let textValues = [document.getElementById(`textFieldUnit${0}`).value, document.getElementById(`textFieldSem${0}`).value]
       
        for (let index = 1; index < numberOfsubject ; index++) {
                unitArray.push(document.getElementById(`textFieldUnit${index}`).value)
                semGradeArray.push(document.getElementById(`textFieldSem${index}`).value)
           
        }
        unitArray.forEach((element)=> console.log(element))
        semGradeArray.forEach((element)=> console.log(element))
         
        let usergwa = getGWA(numberOfsubject,  unitArray, semGradeArray)
  
          let averageGrade = getAverage(numberOfsubject, semGradeArray)
           averageGrade = averageGrade/numberOfsubject
       
          let stringAVG = String(averageGrade)
          stringAVG = stringAVG.slice(0,4)
   
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
            document.getElementById("gwaId").innerHTML = "GWA: "+ usergwa ;
           document.getElementById("averageId").innerHTML = "Average: "+stringAVG;
           
         }
        
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
        }while((userSubject) >i)
      
        return sum
      }

function getGWA(numberOfsubject, arrayUnit, arraySemGrade) {
        
        let product  =[]
        let sum =0
        for (let index = 0; index <numberOfsubject; index++) {
                arrayUnit[index] = Number(arrayUnit[index])
                arraySemGrade[index] = Number(arraySemGrade[index])
                product[index] =  arrayUnit[index] *  arraySemGrade[index] 
        }
        sum = getAverage(numberOfsubject, product)
        return sum;
}





