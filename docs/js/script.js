//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";
    $(".hidd").hide();
    $(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {
    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0.7)'
            });
        } else {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
});

//POPUP BUTTON
$(document).ready(function () {
    $('#btntst').click(function (e) {
        $('.popup-wrap').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');

        e.preventDefault();
    });

    $('.popup-close').click(function (e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');

        e.preventDefault();
    });
});
 // IF ON MOBILE, ADD OWL CAROUSEL TO PRICING
    $(document).ready(function() {
            if ($(window).width() < 768) {
                $(".owl_wrapper").attr("id", "owl-demo1");
                $(".owl_wrapper2").attr("id", "owl-demo2");
                $(".owl_wrapper").addClass("owl-carousel owl-theme");
                $(".owl_wrapper2").addClass("owl-carousel owl-theme");
                $(".pricing_item").addClass("item");
            } else {
                $(".owl_wrapper").attr("id", "");
                $(".owl_wrapper2").attr("id", "");
                $(".owl_wrapper").removeClass("owl-carousel owl-theme");
                $(".owl_wrapper2").removeClass("owl-carousel owl-theme");
                $(".pricing_item").removeClass("item");

            }

        $("#owl-demo1").owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 10,
        });

        $("#owl-demo2").owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 10,
        });

    });
 // GET RESPONSE FROM BLOG API

$(document).ready(function () {
    $.ajax({
      url:
        "https://www.googleapis.com/blogger/v3/blogs/3440830275070420877/posts?orderBy=published&key=AIzaSyDIpdXyu4KHiHKl1ys5Bq5yWPmL91TU0nQ",
      type: "GET",
      dataType: "json",
      success: function(res) {
        $("#post_title1").append(res.items[0].title);
        $("#post_title2").append(res.items[1].title);
        $("#post_title3").append(res.items[2].title);

        $("#post_time1").append(res.items[0].updated);
        $("#post_time2").append(res.items[1].updated);
        $("#post_time3").append(res.items[2].updated);

        $(".post_content1").append(res.items[0].content);
        $(".post_content2").append(res.items[1].content);
        $(".post_content3").append(res.items[2].content);
      }
    });

})


 // MENU SECTION ACTIVE
$(document).ready(function() {

    "use strict";
    
    $(".navbar-nav li a").click(function() {

        "use strict";
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
// OFFER SECTION MANIPULATING
$(document).ready(function() {

    "use strict";
    $( "h4" )
        .on( "mouseenter", function() {
            $( this ).css({
                "color": "#0080FF",
                "font-weight": "bolder"
            });
        })
        .on( "mouseleave", function() {
            var styles = {
                color : "#000000",
                fontWeight: ""
            };
            $( this ).css( styles );
        });
    $("h4").hover(
        function() {
            $(this).addClass("h4hov");
        }, function() {
            $(this).removeClass("h4hov");
        }
    );

    $("#tr1").click(function(){
        $("#tr1p").fadeToggle();
    });
    $("#tr2").click(function(){
        $("#tr2p").fadeToggle();
    });
    $("#tr3").click(function(){
        $("#tr3p").fadeToggle();
    });
    $("#tr4").click(function(){
        $("#tr4p").fadeToggle();
    });
    $("#tr5").click(function(){
        $("#tr5p").fadeToggle();
    });
    $("#tr6").click(function(){
        $("#tr6p").fadeToggle();
    });
    $("#tr7").click(function(){
        $("#tr7p").fadeToggle();
    });

});



// Hilight MENU on SCROLl

$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {
        
        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

    "use strict";
    
    setInterval(function() {

        "use strict";
        
        var widnowHeight = $(window).height();
        var containerHeight = $(".home-container").height();
        var padTop = widnowHeight - containerHeight;
        $(".home-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});



//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*add as necessary*/
    }
});



//OWL CAROSEL
$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        center: true,
        loop: true,
        items: 4,
        autoWidth: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
            }
        }
    });
});


    
 //PRETTYPHOTO

$(document).ready(function() {

    "use strict";

    $("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        horizontal_padding: 20,
        /* true/false */
    });
});



//WOW JS
$(document).ready(function() {

    "use strict";
 
    new WOW().init();
});



//RESPONSIVE VIDEO
$(document).ready(function() {

    "use strict";
    
    // Basic FitVids Test
    $(".video").fitVids();
});



//CONTACT FORM VALIDATION
$(document).ready(function() {

    "use strict";
    
    $(".form_submit").click(function() {

        "use strict";
        
        var name = $("#name").val();
        var emaild = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!name) {
            $(".form_error .name_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .name_error").addClass("hide").removeClass("show");
        }
        if (!emaild) {
            $(".form_error .email_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .email_error").addClass("hide").removeClass("show");
            if (testEmail.test(emaild)) {
                $(".form_error .email_val_error").addClass("hide").removeClass("show");
            } else {
                $(".form_error .email_val_error").addClass("show").removeClass("hide");
                return false;
            }
        }
        if (!message) {
            $(".form_error .message_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .message_error").addClass("hide").removeClass("show");
        }
        if (name && emaild && message) {
            $.ajax({
                url: 'contact.php',
                data: {
                    name: name,
                    emaild: emaild,
                    subject: subject,
                    message: message
                },
                type: 'POST',
                success: function(data) {
                    $(".Sucess").show();
                    $(".Sucess").fadeIn(2000);
                    $(".Sucess").html("<i class='fa fa-check'></i> Dear <b>" + name + "</b> Thank you for your inquiry we will respond to you as soon as possible!");
                    $("#Name").val("");
                    $("#Email").val("");
                    $("#Subject").val("");
                    $("#Message").val("");
                    $(".form_error .name_error, .form_error .email_error, .form_error .email_val_error, .form_error .message_error").addClass("hide").removeClass("show");
                    $("#name").val("");
                    $("#email").val("");
                    $("#subject").val("");
                    $("#message").val("");
                }
            });
        }
        return false;
    });
});


 
/// SMOOTH SCROLL           

$(document).ready(function() {

    "use strict";
    
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });
    //COUNTER
    $('.counter_num').counterUp({
        delay: 10,
        time: 2000
    });
});
