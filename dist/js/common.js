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