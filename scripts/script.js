const slidebtn = document.getElementById("slideshowbtn");
const slide = document.getElementById("slidelist");
const square = document.getElementById("square");

function mouseover(button) {
  button.style="background-color:#272727";
}

function mouseout(button) {
  button.style="background-color: #323232";
}

$(slidebtn).click(function() {
  $(slide).slideToggle("fast");
});

$(square).hover(function() {
  $(square).animate({
    width: "150px",
    height: "150px",
    opacity: "0.5"
  }, 1000)
}, function() {
  $(square).animate({
    width: "100px",
    height: "100px",
    opacity: "1"
  })
});

