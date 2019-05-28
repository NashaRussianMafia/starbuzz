
if(localStorage.getItem('clicks') == null) {
  var clicks = 0;
  localStorage.setItem('clicks',clicks);
} else {
  var clicks = localStorage.getItem('clicks');
}

refreshButton();

$('input').click(function(){
  clicks++;
  localStorage.setItem('clicks',clicks);  
  refreshButton();
});

function refreshButton() {
  $('input').attr('value', 'Clicked' + clicks)
}
