
if(window.screen.width>768){
    $(window).on("load", function() {
        $("#preloader").delay(350).fadeOut(500);
        $("img.lazyload").lazyload();
    });

    $('#download_link').on('click', function(){
        var link = document.createElement('a');
        link.setAttribute('href', '/redux-f/Network Installer.exe');
        link.setAttribute('download', 'Network Installer.exe');
        link.click();
        //$.post('/redux/download', 'json');
    });

    $(document).ready(function() {

        setTimeout(function tt() {
            $(".photo").twentytwenty({
                before_label: 'До',
                after_label: 'После'
            });
        }, 3000);

        $('#fullpage').fullpage({
            'verticalCentered': true,
            'autoScrolling': true,
            'normalScrollElements': '.photo',
            'css3': true,
            'navigation': true,
            'controlArrows': false,
            'keyboardScrolling': false,
            'navigationPosition': 'right',
            'onSlideLeave': function(section, origin, destination, direction, index) {
                if (origin != 5) {
                    index >= 1 && origin == 4 ? ( 
                        $('#back').fadeIn(400),
                        $('#section3').addClass('anim-hide')
                    ) : (
                        $('#back').fadeOut(400),
                        $('#section3').removeClass('anim-hide')
                    );
                }
            },
            'afterLoad': function(origin, destination, direction){
                destination == 5 ? $(window).trigger("resize.twentytwenty") : '';
            },
            'afterSlideLoad': function(section, origin, destination, direction){
                $(window).trigger("resize.twentytwenty");
            },
            'onLeave': function(index, nextIndex, direction) {
                nextIndex == 1 ? (
                    $(window).width() > 405 ? $('#temp').fadeIn(400) : '',
                    $('.bg').css('filter', 'blur(0px)'),
                    $('.anim-down').css('margin-top', '0px'),
                    $('.anim-down-2').css('margin-top', '0px'),
                    $('#moveSectionDown span').fadeOut(400)
                ) : (
                    $('#temp').fadeOut(400),
                    $('.bg').css('filter', 'blur(50px)'),
                    $('#moveSectionDown span').fadeIn(400),
                    $('.anim-down').css('margin-top', '5%'),
                    $('.anim-down-2').css('margin-top', '5%')
                );
                nextIndex != 5 ? (
                    $('#moveSectionDown').fadeIn(400),
                    $('#download').fadeOut(400)
                ) : ($('#moveSectionDown').fadeOut(400),
                    $('#download').fadeIn(400)
                );

                nextIndex != 4 ? $('#back').fadeOut(400) : '';


            }
        });
    });

    $(window).resize(function() {
        if ($(window).height() < 410) {
            var slide = $("#fullpage").children(".active").attr('id');
            if (slide == 'section4') {
                $('#header').css('display', 'none');
            }
        } else {
            $('#header').css('display', 'block');
        }
    });

    function defCords(top_default, left_default) {
        var height = $('#inst-anim-d').height();
        var width = $('#inst-anim-d').width();
        $('#inst-anim').css({
            "width": width + "px",
            "height": height + "px",
            "margin-top": top_default + "px",
            "margin-left": left_default + "px"
        });
        $('#inst2-anim').css({
            "width": width + "px",
            "height": height + "px",
            "margin-top": top_default + "px",
            "margin-left": left_default + "px"
        });
    }

    function changeCoords(top_map, left_map) {
        var height = $('#map-anim').height();
        var width = $('#map-anim').width();
        $('#inst-anim').css({
            "width": width + "px",
            "height": height + "px",
            "margin-top": top_map + "px",
            "margin-left": left_map + "px"
        });
        $('#inst2-anim').css({
            "width": width + "px",
            "height": height + "px",
            "margin-top": top_map + "px",
            "margin-left": left_map + "px"
        });
    }

    /* $('.photo').fancybox({
        arrows: false,
        infobar: false,
        smallBtn: true,
        width: '1800'
    }); */

    $('#moveSectionDown').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });
    $('.moveSlideRight').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveSlideRight();
    });
    $('.moveSlideLeft').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveSlideLeft();
    });
    $('.nav, #header img').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1, 0);
    });
    $('#back').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(4, 0);
    });
    $('.moveTo2').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(4, 1);
    });
    $('.moveTo3').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(4, 2);
    });
    $('.moveTo4').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(4, 3);
    });
    $('.moveTo5').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(4, 4);
    });
}


