(function ($) {
  "use strict";

  AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: "ease-out-back", // default easing for AOS animations
  });

  if ($(window).width() < 560) {
    AOS.init({
      once: true,
    });
  }

  $(".navbar-toggler").click(function () {
    $("body").toggleClass("fixed-body");
  });
  $(window).on("resize", function (event) {
    if ($(window).width() > 992) {
      $("body").removeClass("fixed-body");
    }
  });

  // Preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });
  // Sticky Menu
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("nav.main-nav ").addClass("sticky-menu").animate(
        {
          top: 0,
        },
        4000
      );
    } else {
      $("nav.main-nav ").removeClass("sticky-menu").animate(
        {
          top: 0,
        },
        4000
      );
    }
  });

  // End Sticky Menu
  $('[data-toggle="tooltip"]').tooltip();

  $(".select-picker").selectmenu();

  // check direction
  let rtl = false;
  if ($("body").css("direction") == "rtl") {
    rtl = true;
  }
  // sliders

  $(".companies-slider , .sharia-board-auditors-slider").owlCarousel({
    items: 5,
    autoplay: !0,
    slideBy: 1,
    center: !0,
    autoplayHoverPause: !0,
    mouseDrag: !0,
    rtl: rtl,
    nav: !1,
    dots: !1,
    stagePadding: 10,
    responsiveClass: !0,
    responsive: {
      0: { items: 1, nav: !1, loop: !0 },
      600: { items: 3, nav: !1, loop: !0 },
      1000: { items: 4, nav: !1, loop: !0 },
      1200: { items: 5, nav: !1, loop: !0 },
    },
  });
  $(".accredited-bodies-slider").owlCarousel({
    items: 4,
    autoplay: !0,
    slideBy: 1,
     
    autoplayHoverPause: !0,
    mouseDrag: !0,
    rtl: rtl,
    nav: !1,
    dots: !1,
    stagePadding: 10,
    responsiveClass: !0,
    responsive: {
      0: { items: 1, nav: !1, loop: !0 },
      600: { items: 2, nav: !1, loop: !0 },
      1000: { items: 3, nav: !1, loop: !0 },
      1200: { items: 4, nav: !1, loop: !0 },
    },
  });

 
})(jQuery);
 function rangeSlider(eleClass) {
    // course price range
    function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var w1 = 40;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var w2 = 40;
      var r2 = x2 + w2;
      if (r1 < x2 || x1 > r2) return false;
      return true;
    }
    // // slider call
    $(eleClass).slider({
      range: true,
      min: 0,
      max: 300,
      values: [10, 200],
      slide: function (event, ui) {
        $(eleClass + " .ui-slider-handle:eq(0) .price-range-min").html(ui.values[0] + "$");
        $(eleClass + " .ui-slider-handle:eq(1) .price-range-max").html(ui.values[1] + "$");
        $(eleClass + " .price-range-both").html("<i>" + ui.values[0] + "$ - </i>" + ui.values[1] + "$");
        //
        if (ui.values[0] == ui.values[1]) {
          $(eleClass + " .price-range-both i").css("display", "none");
        } else {
          $(eleClass + " .price-range-both i").css("display", "inline");
        }
        //
        if (collision($(eleClass + " .price-range-min"), $(eleClass + " .price-range-max")) == true) {
          $(eleClass + " .price-range-min, .price-range-max").css("opacity", "0");
          $(eleClass + " .price-range-both").css("display", "block");
        } else {
          $(eleClass + " .price-range-min, .price-range-max").css("opacity", "1");
          $(eleClass + " .price-range-both").css("display", "none");
        }
      },
    });
    $(eleClass + " .ui-slider-range").append('<span class="price-range-both value"><i>' + $(eleClass).slider("values",
      0) + "$ - </i>" + $(eleClass).slider("values", 1) + "</span>");
    $(eleClass + " .ui-slider-handle:eq(0)").append('<span class="price-range-min value">' + $(eleClass).slider(
      "values", 0) + "$</span>");
    $(eleClass + " .ui-slider-handle:eq(1)").append('<span class="price-range-max value">' + $(eleClass).slider(
      "values", 1) + "$</span>");
  }