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

window.onload = function () {
  'use strict';

  // get class icons_li
  var li = document.getElementsByClassName('icons_li');
  for (let i = 0; i < li.length; i++) {

    // when click run function
    li[i].onclick = (e) => {
      // get class icons_li
      var rm_class = document.getElementsByClassName('icons_li');
      for (let i = 0; i < rm_class.length; i++) {

        // remove class active form all class icons_li
        rm_class[i].classList.remove('active')
      }   

       // get class icons_l
      var replace_src = document.getElementsByClassName('icons_li');
      for (let i = 0; i < replace_src.length; i++) {

        // change img src from data-src.value to data-src2.value
        replace_src[i].firstElementChild.setAttribute('src', replace_src[i].getAttribute('data-src2'))
      }   

      // when click fun run and add class('active')
      li[i].classList.add('active')
      
      // get attr data-src & img src change to value attr data-src
      document.getElementById(li[i].getAttribute('data-src')).firstElementChild.setAttribute('src', li[i].getAttribute('data-src'))

      // get class view
      let view_data = document.getElementsByClassName('views');
      for (let i = 0; i < view_data.length; i++) {

        // remove class active fron class views
        view_data[i].classList.remove('active')
      }

      // when click el === attr data-linkView will add class active
      document.getElementById(li[i].getAttribute('data-linkView')).classList.add('active')
    }
  }
}
