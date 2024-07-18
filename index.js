var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "/images" + "/Dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "/images" + "/Dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML="Player 1"

}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML="Player 2";
}
else {
    document.querySelector("h2").innerHTML="Draw";
}