
$('.navbar a').mouseover(function(){
  $(this).css({'color':'#ff8f0f'});
});

$('.navbar a').mouseout(function(){
  $(this).css({'color':'white'})
});

$('.social').mouseover(function(){
  $(this).css({'color':'#ff8f0f'});
});

$('.social').mouseout(function(){
  $(this).css({'color':'white'})
});
// CARD 1
$('#card1').mouseover(function(){
  $('#bracket').css({'filter': 'grayscale(100%)'})
});

$('#card1').mouseout(function(){
  $('#bracket').css({'filter': 'none'})
});
//CARD 2
$('#card2').mouseover(function(){
  $('#music').css({'filter': 'grayscale(100%)'})
});

$('#card2').mouseout(function(){
  $('#music').css({'filter': 'none'})
});
//CARD 3
$('#card3').mouseover(function(){
  $('#food').css({'filter': 'grayscale(100%)'})
});

$('#card3').mouseout(function(){
  $('#food').css({'filter': 'none'})
});
//CARD 4
$('#card4').mouseover(function(){
  $('#file').css({'filter': 'grayscale(100%)'})
});

$('#card4').mouseout(function(){
  $('#file').css({'filter': 'none'})
});
