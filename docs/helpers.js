
var lo_slider = document.getElementsByTagName('input')[1];
var hi_slider = document.getElementsByTagName('input')[0];
var slider_ob=document.getElementsByClassName('vega-bind');

lo_slider.addEventListener('input', lo_sliderChange);
hi_slider.addEventListener('input', hi_sliderChange);


function lo_sliderChange() {
if (lo_slider.value > hi_slider.value) {
  //  block of code to be executed if the condition is true
  //slider.click()
  hi_slider.value = lo_slider.value
  hi_slider.dispatchEvent(new Event('change'))
  //slider_val[0].getElementsByTagName('span')[1].innerText = slider.value
  //slider.refresh()
} 
}

function hi_sliderChange() {
if (hi_slider.value < lo_slider.value) {
  //  block of code to be executed if the condition is true
  //slider.click()
  lo_slider.value = hi_slider.value
  lo_slider.dispatchEvent(new Event('change'))
  //slider_val[0].getElementsByTagName('span')[1].innerText = slider.value
  //slider.refresh()
} 
}


$('<div class=\"help-tip\"><p>Greater than/Less than the threshold shown</p></div>').insertAfter($(".vega-bind-name")[0])

$('<div class=\"help-tip\"><p>Greater/Less than and equal to the threshold shown</p></div>').insertAfter($(".vega-bind-name")[1])


// $('<a href=\"https://www.lutzlab.org/\"><img src=\"https://i.pinimg.com/originals/f6/4c/8d/f64c8dbcffd405294d2943810974e2c1.jpg\" style=\"float: right;width: 75px;\"/></a>').insertAfter($(".vega-bind-name")[0])

$(document).ready(function() {
  $head = $('#navbar');
  $head.append('<a href=\"https://www.lutzlab.org/\"><img src=\"https://i.pinimg.com/originals/f6/4c/8d/f64c8dbcffd405294d2943810974e2c1.jpg\" style=\"float: right;width: 75px;\"/></a>')
});

