//This project has six blocks of different colors. The RGB representation of the background color of one block is displayed on top.
//The player has to guess the block which represents the rgb representation displayed on top.
//If player guesses correctly, the background color of body turns to the same color as the gussed block and an alert pops up saying its the correct guess.

var h1 = document.querySelector("h1")
var reset = document.getElementById("reset")
var display = document.getElementById("p")
var squares = document.querySelectorAll(".blocks")
var bod = document.querySelector("body")
var isGameOver = true; //THis variable keeps track of the state of the game
if(isGameOver){
function init(){
  var pickedColors = colorpicker(); //This array contains all the random colors
  var pickednumber = numberpicker(); //THis variable has the index of 'pickedColors'
  var pickedColor = pickedColors[pickednumber]; //This variable has the back
  display.textContent = pickedColor;
    start();
    // resett();
//THis function generates an array of six random colors
function colorpicker(){
  var arr = [];
  for(var i = 0;i<6;i++){
    arr.push("rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")")
  }
  console.log(arr)
  return arr;

}
//THis function generates the index of the array of random colors generated in color function

function numberpicker(){
  var picked = Math.floor(Math.random() * 6)
  console.log(picked)
  return picked;
}
//this Function sets the screen with random colors everytime its called
function settingscreen(pickkedColors){
     for(var i = 0; i<squares.length; i++){
       squares[i].style.opacity = "1"
     squares[i].style.backgroundColor = pickkedColors[i]}
}

//THis function checks the logic of what square is clicked and gives out appropriate response
function start(){
settingscreen(pickedColors);
   for(var i = 0; i<squares.length; i++){
     squares[i].addEventListener("click",function(){
       var clickedcolor = this.style.backgroundColor;
       console.log(clickedcolor)
       console.log(pickedColor)
       if(clickedcolor === pickedColor)
       {
         alert("yes that is correct")
         bod.style.backgroundColor = pickedColor;
         h1.style.backgroundColor = pickedColor;
         squares.style.backgroundColor = pickedColor;

       }
       else{
         this.style.opacity = "0"
       }
     })
}}
};
init();
isGameOver = false; //After the game is over the isGameOver is set to false so that reset button can be clicked.
}

if(!isGameOver){//After the game is over, this condition monitors if reset button is clicked. If clicked, it resets the background of the h1 section and starts the game again.
  reset.addEventListener("click", function(){
    bod.style.backgroundColor = " #232323";
    h1.style.backgroundColor = "rgb(20,150,180)";

        init();
    })
}
