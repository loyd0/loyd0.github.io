$(init);
function init() {
  let extended = false;
  $('.image-one').on('click', (e) => {
    if (extended && !$(e.currentTarget).hasClass('disable-animation')) {
      setTimeout(function () {
        $(e.currentTarget).removeClass('animate-width-expand-one');
        $(e.currentTarget).addClass('animate-width-contract-one');
        $('.title-name').animateCssIn('fadeInDown', false);
        $('.column').addClass('disable-animation');
        $('.contact-container').removeClass('off-screen');
        $('#developer').animateCssIn('fadeIn', true);
      }, 500);
      $('#appended-1').animateCssOut('fadeOutQuick');
      extended = false;
    } else if (!extended && !$(e.currentTarget).hasClass('disable-animation')) {
      $(e.currentTarget).removeClass('animate-width-contract-one');
      $(e.currentTarget).addClass('animate-width-expand-one');
      $('.title-name').animateCssOut('fadeOutUp');
      $('.contact-container').animateCssOut('fadeOutDown');
      $('.column').addClass('disable-animation');
      $('.image-wrapper').prepend('<div class="image-one column"></div>');
      $('#developer').animateCssOut('fadeOut');
      setTimeout(function () {
        $('#appended-1').animateCssIn('fadeIn');
      }, 900);
      extended = true;
    }
  });

  $('.image-two').on('click', (e) => {
    if (extended && !$(e.currentTarget).hasClass('disable-animation')) {
      $(e.currentTarget).removeClass('animate-width-expand-two');
      $(e.currentTarget).addClass('animate-width-contract-two');
      $('.title-name').animateCssIn('fadeInDown');
      $('.column').addClass('disable-animation');
      $('.contact-container').animateCssIn('fadeIn');
      extended = false;
    } else if (!extended && !$(e.currentTarget).hasClass('disable-animation')){
      $(e.currentTarget).removeClass('animate-width-contract-two');
      $(e.currentTarget).addClass('animate-width-expand-two');
      $('.title-name').animateCssOut('fadeOutUp');
      $('.column').addClass('disable-animation');
      $('.contact-container').animateCssOut('fadeOutDown');
      $('<div class="image-two column"></div>').insertAfter('.image-one');
      extended = true;
    }
  });

  $('.image-three').on('click', (e) => {
    console.log('clicked');
    if (extended && !$(e.currentTarget).hasClass('disable-animation')) {
      setTimeout(function () {
        $(e.currentTarget).removeClass('animate-width-expand-three');
        $(e.currentTarget).addClass('animate-width-contract-three');
        $('.title-name').animateCssIn('fadeInDown', false);
        $('.column').addClass('disable-animation');
        $('.contact-container').animateCssIn('fadeIn');
        $('#photographer').animateCssIn('fadeIn', true);
      }, 500);
      $('#appended-3').animateCssOut('fadeOutQuick');
      extended = false;
    } else if (!extended && !$(e.currentTarget).hasClass('disable-animation')) {
      $(e.currentTarget).removeClass('animate-width-contract-three');
      $(e.currentTarget).addClass('animate-width-expand-three');
      $('.title-name').animateCssOut('fadeOutUp');
      $('.contact-container').animateCssOut('fadeOutDown');
      $('.column').addClass('disable-animation');
      $('<div class="image-three column"></div>').insertAfter('.image-two');
      $('#photographer').animateCssOut('fadeOut');
      setTimeout(function () {
        $('#appended-3').animateCssIn('fadeIn');
      }, 900);
      extended = true;
    }
  });
  $('.image-four').on('click', (e) => {
    if (extended && !$(e.currentTarget).hasClass('disable-animation')) {
      $(e.currentTarget).removeClass('animate-width-expand-four');
      $(e.currentTarget).addClass('animate-width-contract-four');
      $('.title-name').animateCssIn('fadeInDown');
      $('.column').addClass('disable-animation');
      $('.contact-container').animateCssIn('fadeIn');
      extended = false;
    } else if (!extended && !$(e.currentTarget).hasClass('disable-animation')) {
      $(e.currentTarget).removeClass('animate-width-contract-four');
      $(e.currentTarget).addClass('animate-width-expand-four');
      $('.column').addClass('disable-animation');
      $('.title-name').animateCssOut('fadeOutUp');
      $('.contact-container').animateCssOut('fadeOutDown');
      $('.contact-container').addClass('off-screen');
      extended = true;
    }
  });
}


$.fn.extend({
  animateCssOut: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      $(this).addClass('off-screen');
      $('.column').removeClass('disable-animation');
    });
  }
});
$.fn.extend({
  animateCssIn: function (animationName, extensionBoolean) {
    $(this).removeClass('off-screen');
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      // $('.column').removeClass('animate-width-expand-one animate-width-contract-one animate-width-expand-four animate-width-contract-four animate-width-contract-two animate-width-expand-two animate-width-contract-three animate-width-expand-three3 off-screen disable-animation');
      $('.column').removeClass('animate-width-contract-one animate-width-contract-four animate-width-contract-two animate-width-contract-three off-screen disable-animation');
      if (extensionBoolean === true) {
        removeExtension();
      }
    });
  }
});

function removeExtension(){
  if ($('.image-one').length > 1) {
    console.log('removing image-one');
    $('.image-one')[0].remove();
  } else if ($('.image-two').length > 1) {
    $('.image-two')[0].remove();
  } else if ($('.image-three').length > 1) {
    $('.image-three')[0].remove();
  }
}
