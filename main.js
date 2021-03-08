var bottonePrev = $('.prev');
var bottoneNext = $('.next');



$(document).ready(function(){
  $(bottonePrev).click(function() {
    prevImage();
  })
  $(bottoneNext).click(function() {
    nextImage();
  })
})


function prevImage() {
  var activeImage = $('img.active');
  var activeCircle = $('.nav i.active');

  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  if(activeImage.hasClass('first')) {
    $('img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  else {
    activeImage.prev('img').addClass('active');
    activeCircle.prev('.nav i').addClass('active');
  }
}

function nextImage() {
  var activeImage = $('img.active');
  var activeCircle = $('.nav i.active');

  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  if(activeImage.hasClass('last')) {
    $('img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  else {
    activeImage.next('img').addClass('active');
    activeCircle.next('.nav i').addClass('active');
  }
}
