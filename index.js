var randomNumber1=Math.floor(Math.random()*6+1);
var randomimg="images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg);
var randomNumber2=Math.floor(Math.random()*6+1);
var randomimg2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 win";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 2 win";
}
else{
    document.querySelector("h1").innerHTML="😶its a draw";
}