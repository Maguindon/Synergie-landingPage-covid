/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
              
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
            $("#logo-top").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
            $("#logo-top").removeClass("navbar-scrolled");
        }
    };

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('#contact-button').on('click', function () {
        var $status = $('#status')

        var $name = $('#name');
        if ($name.val() == "") {
            $status.text("Name cannot be empty");
            return false;
        }

        var $email = $('#email');
        if ($email.val() == "") {
            $status.text("Email cannot be empty");
            return false;
        } // let php's filter_var do the email validation

        var $subject = $('#subject');
        if ($subject.val() == "") {
            $status.text("Subject cannot be empty");
            return false;
        }

        var $message = $('#message');
        if ($message.val() == "") {
            $status.text("Message cannot be empty");
            return false;
        }

        $status.text("Sending...")

        var formData = {
            name: $name.val(),
            email: $email.val(),
            subject: $subject.val(),
            message: $message.val()
        };

        $.ajax({
            url: "mail.php",
            type: "POST",
            data: formData,
            success: function (data, textStatus, jqXHR) {
                $status.text(data);

                $subject.val("")
                $message.val("")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $status.text(textStatus);

                console.log(textStatus)
                console.log(errorThrown)
            }
        });
    })
})(jQuery); // End of use strict

