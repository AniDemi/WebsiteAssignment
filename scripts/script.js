let slidebtn = document.getElementById("slideshowbtn");
let slide = document.getElementById("slidelist");

function mouseover(button) {
  button.style="background-color:#272727";
}

function mouseout(button) {
  button.style="background-color: #323232";
}

$(slidebtn).click(function() {
  $(slide).slideToggle("fast");
});


