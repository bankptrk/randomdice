// RANDOM NUMBER 1-6 img1
var randomNumber1 = Math.floor(Math.random()*6)+1;

// dice1.png - dice6.png img2

var randomDiceImage1 = "images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);


// RANDOM NUMBER 1-6 img2
var randomNumber2 = Math.floor(Math.random()*6)+1;

// dice1.png - dice6.png img2

var randomDiceImage2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win 👏🏻";
}else if(randomNumber2 > randomNumber1){ 
    document.querySelector("h1").innerHTML = "Player 2 Win 👏🏻";
}else{
    document.querySelector("h1").innerHTML = "Draw! 🤚🏻"
}