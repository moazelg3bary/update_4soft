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

  // func toggle class & text
  $('.box_project').on('click', function () {

    $('.box_project').addClass('active');

    $('.box_express').removeClass('active');

    $('.box_project button').html('choose me');
  });

  $('.box_express').on('click', function () {

    $('.box_express').addClass('active');

    $('.box_project').removeClass('active');

    $('.box_project button').html('get started');
  }); 

  //func toggle class 5 style
  $('.type_project .box_project button').on('click', function () {

    $('.over-lay').css('display', 'block')

    $('.contact').css('display', 'block')

    $('.type_project .contact .box_contact .box_plan .m_box_project').addClass('active')

    $('.type_project .contact .box_contact .box_plan .m_box_express').removeClass('active')
  });
  $('.type_project .box_express button').on('click', function () {

    $('.over-lay').css('display', 'block')

    $('.contact').css('display', 'block')

    $('.type_project .contact .box_contact .box_plan .m_box_express').addClass('active')

    $('.type_project .contact .box_contact .box_plan .m_box_project').removeClass('active')
  });

  // func run when click el has display none
  $('.over-lay').on('click', function () {

    $('.contact').css('display', 'none')

    $('.over-lay').css('display', 'none')
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

  // get class our_li
  var li_our = document.getElementsByClassName('our_li');
  for (let i = 0; i < li_our.length; i++) {

    // when click run function
    li_our[i].onclick = (e) => {
      // get class our_li
      var rm_2_class = document.getElementsByClassName('our_li');
      for (let i = 0; i < rm_2_class.length; i++) {

        // remove class active form all class our_li
        rm_2_class[i].classList.remove('active')
      }

      // when click fun run and add class('active')
      li_our[i].classList.add('active')

      // get class view
      let view_data_2 = document.getElementsByClassName('view_2');
      for (let i = 0; i < view_data_2.length; i++) {

        // remove class active fron class views
        view_data_2[i].classList.remove('active')
      }

      // when click el === attr data-target will add class active
      document.getElementById(li_our[i].getAttribute('data-target')).classList.add('active')
    }
  }  
}
