var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + num1 + ".png";
var randomDiceImage2 = "dice" + num2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (num2 == num1) {
    document.querySelector("h1").innerHTML = "Draw!";

} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}