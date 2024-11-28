
function addDIV(id, id1, id2) {
 
  }
  
function addExistingDivToParent() {
    // var parentDiv = document.getElementById('randomBox');
    // var existingDiv1 = document.getElementById('dot_2A');
    // var existingDiv2 = document.getElementById('dot_2B');
    // var remove = document.getElementById('dot');

    // parentDiv.removeChild(remove)
    
    // // Append the existing div to the parent div
    // parentDiv.appendChild(existingDiv1);
    // parentDiv.appendChild(existingDiv2);
   let randomRoll = Math.floor((Math.random () *2 )+1)
  

  
   

   switch ( randomRoll) {
      case 1:
        var parentDiv = document.getElementById('randomBox');
var existingDiv1 = document.getElementById('dot_2A');
var existingDiv2 = document.getElementById('dot_2B');
var remove = document.getElementById('dot');

// Create a new div to replace the removed div
var newDiv = document.createElement('div');
newDiv.id = 'dot';  // Set the id of the new div
newDiv.className = 'dot';  // Set the class of the new div

// Remove the existing div from the parent div
parentDiv.removeChild(remove);

// Append the existing divs and the new div to the parent div
parentDiv.appendChild(existingDiv1);
parentDiv.appendChild(existingDiv2);
parentDiv.appendChild(newDiv);
         break;
         case 2:
            var parentDiv = document.getElementById('randomBox');
    var existingDiv1 = document.getElementById('dot_3A');
    var existingDiv2 = document.getElementById('dot_3B');
    var existingDiv3 = document.getElementById('dot_3C');

    var remove1 = document.getElementById('dot_2A');
    var remove2 = document.getElementById('dot_2B');

    // Create a new div to replace the removed div
    var newDiv = document.createElement('div');
    newDiv.id = 'dot';  // Set the id of the new div
    newDiv.className = 'dot';  // Set the class of the new div
    
    // Remove the existing div from the parent div
    parentDiv.removeChild(remove1);
    parentDiv.removeChild(remove2);

    // Append the existing divs and the new div to the parent div
    parentDiv.appendChild(existingDiv1);
    parentDiv.appendChild(existingDiv2);
    parentDiv.appendChild(newDiv);
             break;
       
      default:
         break;
   }
  }

 