$(window).scroll(function(){
  if ($(window).scrollTop() >= 200) {
      $('nav').addClass('smoll');
  }
  else {
      $('nav').removeClass('smoll');
  }
});

// scroll nav

function scrollNav() {
  $('nav ul li a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 10
    }, 300);
    return false;
  });
}
scrollNav();

//slider 

const owl = $(".owl-carousel");

owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
  responsive: {
    540: {
      items: 3,
      startPosition: 1,
    },
    1200: {
      items: 3,
      margin: 30,
    },
  },
});

$(".slider-btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider-btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});



