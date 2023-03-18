const { animate } = require("@angular/animations");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    document.getElementsByTagName("header").style.height = "100px";
  }

  function myF(){
      var obj = document.getElementById("exp");

  }

  var crop_arr = ["Rice", "Maize", "Chickpea", "Kidneybeans", "Pigeonpeas", "Mothbeans", "Mungbean", "Blackgram", "Lentil", "Pomegranate"
, "Banana", "Mango", "Grapes", "Watermelon", "Muskmelon", "Apple", "Orange", "Papaya", "Coconut", "Cotton", "Jute", "Coffee"];

var N_arr = [80, 80, 40, 20, 20, 20, 20, 40, 20, 20, 100, 20, 20, 100, 100, 20, 20, 50, 20, 120, 80, 100];
var P_arr = [40, 40, 60, 60, 60, 40, 40, 60, 60, 10, 75, 20, 125, 10, 10, 125, 10, 50, 10, 40, 40, 20];
var K_arr = [40, 20, 80, 20, 20, 20, 20, 20, 20, 40, 50, 30, 200, 50, 50, 200, 10, 50, 30, 20, 40, 30];

var N, K, P, crop, selectElement, index, output;
output = document.getElementById("answer");
output.textContent = "";



function getval() {
N = document.getElementById("N").value;
P = document.getElementById("P").value;
K = document.getElementById("K").value;
selectElement = document.querySelector('#crop_id');
crop = selectElement.value;

if(!N||!P||!K||!crop){
    alert("Please fill out all fields!");
    return;
}
console.log(crop);
console.log(N);
console.log(P);
console.log(K);

for (var i = 0; i < 22; i++) {
    if (crop_arr[i] == crop) {
        index = i;
        break;
    }
}
output.innerHTML = "";
document.getElementById("blog").style.display = "none";
document.getElementById("highN").style.display = "none";
document.getElementById("highK").style.display = "none";
document.getElementById("highP").style.display = "none";
document.getElementById("lowN").style.display = "none";
document.getElementById("lowP").style.display = "none";
document.getElementById("lowK").style.display = "none";


console.log(index);
document.getElementById("blog").style.display = "block";
if (N - N_arr[index] > 5) {
    console.log("High Nitrogen value");
    output.textContent += "High Nitrogen value, ";
    document.getElementById("highN").style.display = "block";
}
else if (N_arr[index] - N > 5) {
    console.log("Low Nitrogen value");
    output.textContent += "Low Nitrogen value, ";
    document.getElementById("lowN").style.display = "block";
}
else {
    console.log("Optimum Nitrogen value");
    output.textContent += "Optimum Nitrogen value, ";

}
if (P - P_arr[index] > 5) {
    console.log("High Phosphorus value");
    output.textContent += "High Phosphorus value and ";
    document.getElementById("highP").style.display = "block";
}
else if (P_arr[index] - P > 5) {
    console.log("Low Phosphorus value");
    output.textContent += "Low Phosphorus value and ";
    document.getElementById("lowP").style.display = "block";
}
else {
    console.log("Optimum Phosphorus value");
    output.textContent += "Optimum Phosphorus value and ";
}
if (K - K_arr[index] > 5) {
    console.log("High Potassium value");
    output.textContent += "High Potassium value";
    document.getElementById("highK").style.display = "block";
}
else if (K_arr[index] - K > 5) {
    console.log("Low Potassium value");
    output.textContent += "Low Potassium value";
    document.getElementById("lowK").style.display = "block";
}
else {
    console.log("Optimum Potassium value");
    output.textContent += "Optimum Potassium value";
}
}

(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});
  $(".mobile-menu").slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true
});
  $('.hero__categories__all').on('click', function(){
    $('.hero__categories ul').slideToggle(400);
});

})(jQuery);


function seeds(){
  document.getElementById("l1").className = "";
  document.getElementById("l2").className = "active";
  document.getElementById("l3").className = "";
  document.getElementById("l4").className = "";
  document.getElementById("l5").className = "";
  document.getElementById("l6").className = "";
  document.getElementById("all").style.display="none";
  document.getElementById("seeds").style.display="block";
  document.getElementById("fert").style.display="none";
  document.getElementById("watersol").style.display="none";
  document.getElementById("micro").style.display="none";
  document.getElementById("npk").style.display="none";
}
function main(){
  document.getElementById("l2").className = "";
  document.getElementById("l1").className = "active";
  document.getElementById("l3").className = "";
  document.getElementById("l4").className = "";
  document.getElementById("l5").className = "";
  document.getElementById("l6").className = "";
  document.getElementById("all").style.display="block";
  document.getElementById("seeds").style.display="none";
  document.getElementById("fert").style.display="none";
  document.getElementById("watersol").style.display="none";
  document.getElementById("micro").style.display="none";
  document.getElementById("npk").style.display="none";
}
function fert(){
  document.getElementById("l1").className = "";
  document.getElementById("l3").className = "active";
  document.getElementById("l2").className = "";
  document.getElementById("l4").className = "";
  document.getElementById("l5").className = "";
  document.getElementById("l6").className = "";
  document.getElementById("all").style.display="none";
  document.getElementById("seeds").style.display="none";
  document.getElementById("fert").style.display="block";
  document.getElementById("watersol").style.display="none";
  document.getElementById("micro").style.display="none";
  document.getElementById("npk").style.display="none";
}
function watersol(){
  document.getElementById("l1").className = "";
  document.getElementById("l4").className = "active";
  document.getElementById("l3").className = "";
  document.getElementById("l2").className = "";
  document.getElementById("l5").className = "";
  document.getElementById("l6").className = "";
  document.getElementById("all").style.display="none";
  document.getElementById("seeds").style.display="none";
  document.getElementById("fert").style.display="none";
  document.getElementById("watersol").style.display="block";
  document.getElementById("micro").style.display="none";
  document.getElementById("npk").style.display="none";
}
function micro(){
  document.getElementById("l1").className = "";
  document.getElementById("l5").className = "active";
  document.getElementById("l3").className = "";
  document.getElementById("l4").className = "";
  document.getElementById("l2").className = "";
  document.getElementById("l6").className = "";
  document.getElementById("all").style.display="none";
  document.getElementById("seeds").style.display="none";
  document.getElementById("fert").style.display="none";
  document.getElementById("watersol").style.display="none";
  document.getElementById("micro").style.display="block";
  document.getElementById("npk").style.display="none";
}

function npk(){
  document.getElementById("l1").className = "";
  document.getElementById("l6").className = "active";
  document.getElementById("l3").className = "";
  document.getElementById("l4").className = "";
  document.getElementById("l5").className = "";
  document.getElementById("l2").className = "";
  document.getElementById("all").style.display="none";
  document.getElementById("seeds").style.display="none";
  document.getElementById("fert").style.display="none";
  document.getElementById("watersol").style.display="none";
  document.getElementById("micro").style.display="none";
  document.getElementById("npk").style.display="block";
}

function drop(){
  if(document.getElementById("droplist").style.display=="none")
      document.getElementById("droplist").style.display="block";
  else
  document.getElementById("droplist").style.display="none";
  
}

function cartdrop(){
  
  var x = document.getElementById('cart-drop');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }
  
}