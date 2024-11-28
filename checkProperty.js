/*
   let know programmer know the state of chech box and radio Button

   html needs

   
   <label for="myCheckBox">I accept the terms and policies in this campany</label>
    <input type="checkbox" id="myCheckBox"> <br>
    <button id="myButton">Log in</button>

    <label for="visaBtn">Visa</label>
    <input type="radio" name="card" id="visaBtn">

    <label for="mastercardBtn">Mastercard</label>
    <input type="radio" name="card" id="mastercardBtn">

    <label for="paypalBtn">Paypal</label>
    <input type="radio" name="card" id="paypalBtn"> <br>


*/
document.getElementById("myButton").onclick = function()
{
    // or 
    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const masterBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")

    if (myCheckBox.checked) {
        console.log("Check")
        if (visaBtn.checked) {
            console.log("Visa")
        }
        if (masterBtn.checked) {
            console.log("master card")
        }
        if (paypalBtn.checked) {
            console.log("paypal")
        }
    } else {
        console.log("notCheck")
    }

    
}