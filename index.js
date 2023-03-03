//DICE 1
var randomnos1 = Math.floor(Math.random() * 6) +1 ;  //TO GET RANDOM NOS

var randomnodice = "dice" + randomnos1 + ".png";   //TO CHOOSE RANDOM IMG

var randomimgsrc1= "images/" + randomnodice ;  

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc1);


//DICE 2 
var randomnos2 = Math.floor(Math.random() * 6) +1 ; 

var randomimgsrc2 = "images/dice" +randomnos2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomimgsrc2);

//WHO WINS

if(randomnos1 > randomnos2){
   document.querySelector("h1").innerHTML="PLAYER  1   WINS";
}
else if(randomnos2 > randomnos1){
   document.querySelector("h1").innerHTML="PLAYER  2   WINS";
}
else{
    document.querySelector("h1").innerHTML="TIE";
}