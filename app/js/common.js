$(function getAcrostiaName() {
    var acrostiaLogo='acrostia';
    $('.header__logo').html(acrostiaLogo);
})

$(function() {
    $.scrollify({
        section : ".acrostia__section",
        scrollSpeed: 500,
        before: function() {
            $('.acrostia__section').removeClass('active');
            $('.acrostia__nav-item').removeClass('active');
        },
        after: function() {
            var acrostiaCurrentSectionObject = $.scrollify.current();
            var acrostiaCurrentSection = acrostiaCurrentSectionObject[0].dataset.sectionName;
            $('.' + acrostiaCurrentSection).addClass('active');
            if ( $('.acrostia__section').hasClass('active') && $('.acrostia__nav-item').hasClass('acrostia__nav-item-' + acrostiaCurrentSection) ) {
                $('.acrostia__nav-item-' + acrostiaCurrentSection).addClass('active'); 
            }

        }
    });
});

/*  scrollify | move to section on menu button click  */
jQuery(function($){
    $('#homeButton').click(function() {
        $.scrollify.move("#home");
    });
    $('#servicesButton').click(function() {
        $.scrollify.move("#services");
    });
    $('#aboutButton').click(function() {
        $.scrollify.move("#about");
    });
    $('#worksButton').click(function() {
        $.scrollify.move("#works");
    });
    $('#contactsButton').click(function() {
        $.scrollify.move("#contacts");
    });
});

/*  menu toggle   */
jQuery(function($) {
    $('.header__menu-toggle-block_sm>i').click(function() {
        $('.header__menu_sm').css('margin-left', '0');
    });
    $('.header__menu-close_sm>i').click(function() {
        $('.header__menu_sm').css('margin-left', '-300px');
    });
    $('.acrostia__main').click(function() {
        $('.header__menu_sm').css('margin-left', '-300px');
    });
});

/*  menu append menu content  */
/*on load*/
jQuery(function($) {
    if ( $(window).width() <= 991 ) {

        $(acrostiaReplaceMenu);
        function acrostiaReplaceMenu() {
            $('.header__menu_sm').append( $('.header__col-menu>.acrostia__nav') );
        }
    } else {
        $(acrostiaReplaceMenuBack);
        function acrostiaReplaceMenuBack() {
            $('.header__col-menu').append( $('.header__menu_sm>.acrostia__nav') );
        } 
    }
});
/*on resize */
$(window).resize(function() {
    if ( $(window).width() <= 991 ) {

        $(acrostiaReplaceMenu);
        function acrostiaReplaceMenu() {
            $('.header__menu_sm').append( $('.header__col-menu>.acrostia__nav') );
        }
    } else {
        $(acrostiaReplaceMenuBack);
        function acrostiaReplaceMenuBack() {
            $('.header__col-menu').append( $('.header__menu_sm>.acrostia__nav') );
        }

    }
});

$(function() {
    $('.about__team-item').mouseenter( function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.2)');
        $(this).find('.about__team-item-image-block').css('background-color', '#df5c64');
        $(this).find('i.fa-facebook-f').css('background-color', '#4f689e');
        $(this).find('i.fa-twitter').css('background-color', '#74c7d5');
        $(this).find('i.fa-google-plus-g').css('background-color', '#df5c64');
        $(this).find('i.fa-linkedin-in').css('background-color', '#3e61af');
        /*text color*/
        $(this).find('.about__team-item-header').css('color', 'rgba(255, 255, 255, 1)');
        $(this).find('.about__team-item-descrip').css('color', '#df5c64');

    }); 



    $('.about__team-item').mouseleave( function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');
        $(this).find('.about__team-item-image-block').css('background-color', '#91778e');
        $(this).find('i').css('background-color', '#91778e');
        /*text color*/
        $(this).find('.about__team-item-header').css('color', 'rgba(255, 255, 255, 0.6)');
        $(this).find('.about__team-item-descrip').css('color', '#81a256');
    }); 
});

/*  Mask for input in contact form */
$(function(){
    $("#contactsPhoneNumber").mask("+");
});