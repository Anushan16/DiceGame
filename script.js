
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
        
        tieMessage();
    } else if (randomOne > randomTwo) {
        //continue with result comparision
        return document.querySelector("h1").innerText = "🏁 Player 1 Wins!"
 
    } else {
        return document.querySelector("h1").innerText = "Player 2 Wins! 🏁"
    }



};


function tieMessage() {
    return document.querySelector("h1").innerText = "Tie....Try Again!"
    
    

} 


function buttonClick () {
    
    return document.querySelector("button").click(location.reload())
    
    
    

}
diceRoll();