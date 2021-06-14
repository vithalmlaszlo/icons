/* ========================================================
                       Sticky Header
  ========================================================*/
  jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("header").addClass("small"), 1000;
    } else {
        $("header").removeClass("small");
    }
});
/* ========================================================
                       Menu function
  ========================================================*/
jQuery(document).ready(function ($) {
   $( ".navbar__container--trigger " ).click(function() {
    /* $( ".navbar__content--a" ).animate({
      marginLeft: '0rem',
      duration: "slow",
      easing: "easein",
      opacity:1
    }, 500, function() {
    }); */
  });   


    //show menu
    $('.navbar__container--trigger').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').addClass('is-visible');

         $('.navbar__content--a--1').addClass('in--1'); 
         $('.navbar__content--a--2').addClass('in--2'); 
         $('.navbar__content--a--3').addClass('in--3'); 
         $('.navbar__content--a--4').addClass('in--4'); 


         $('.ion-logo-apple').addClass('goleft--apple');
          
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').removeClass('is-visible');

        $('.navbar__content--a--1').removeClass('in--1'); 
         $('.navbar__content--a--2').removeClass('in--2'); 
         $('.navbar__content--a--3').removeClass('in--3'); 
         $('.navbar__content--a--4').removeClass('in--4'); 
      

         $('.ion-logo-apple').removeClass('goleft--apple');


    });
    //target menu with scroll
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('#main-nav').removeClass('is-visible');
        $('body,html').animate({
                'scrollTop': target.offset().top
            },
            900
        );
    });
});


/* Gallerya init */

$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");
  $("#gallery").fadeTo(100, 0.1);
  $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
  setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('animation');
  $("#gallery").fadeTo(300, 1);
  }, 300);
  });
  }); 

