/*global console, alert, swal, prompt, $*/
$(document).ready(function() {
  // func scroll
  $(window).scroll(function () { 
    // when page scrollDown 
    if (this.scrollY > 75) {
      $('nav').addClass('w-100 fixed-top shadow-sm');
      $('nav').css('background', '#fff');
      $('.nav-item:last-of-type').addClass('bg-btn')
      $('.nav-item:last-of-type a').css('color', '#fff')
      $('.pre-header').css('margin-top', '70px')
    } else {
      $('nav').removeClass('w-100 fixed-top shadow-sm');      
      $('nav').css('background', 'transparent'); 
      $('.nav-item:last-of-type').removeClass('bg-btn');
      $('.nav-item:last-of-type a').css('color', '#000')
      $('.pre-header').css('margin-top', '0px')
    }
  });
})
