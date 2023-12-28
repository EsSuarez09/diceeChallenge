// variable random number 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // random dice image 1- 6

var randomImageSource = "images/" + randomDiceImage; // random dice images inside images folder 1-6

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Random1 and random2 different solutions with the same output
// variable random number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 ="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 WIN!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "WIN Player2";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}