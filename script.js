
var folder = "/images";

 var randomOne = Math.floor(Math.random() * 6)+1;
 var randomTwo =  Math.floor(Math.random() * 6)+1;




function diceRoll() {
   
    
    document.querySelector(".img1").src = "images/dice"+ randomOne +".png"
    document.querySelector(".img2").src = "images/dice"+ randomTwo +".png"


    diceResult();



    
}

function diceResult () {

    
    

    if (randomOne == randomTwo) {
        
        displayMessage("tie");
    } else if (randomOne > randomTwo) {
      displayMessage("pOne");
    } else {
      displayMessage("pTwo")
    }



};


function displayMessage(position) {

    if (position == "tie") {
      return document.querySelector("h1").innerText = "Tie....Try Again!"
    } 
    else if (position == "pOne"){
      return document.querySelector("h1").innerText = "🏁 Player 1 Wins!"
    }
    else {
      return document.querySelector("h1").innerText = "Player 2 Wins! 🏁"
    }
    
    

} 


function buttonClick () {
    
    return document.querySelector("button").click(location.reload())
    
    
    

}
diceRoll();