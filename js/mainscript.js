﻿

$(function () {
    
    var x = $(window).height() - 50;
    $('article[id!="donatecontent"]').css('height', x);
   $('article[id="connectcontent"]').css('height', $(window).height();)
    
    $('.smallicon').hover(function () {

        var tempid = "#" + event.target.id;
        
        $((tempid)).addClass('smallhover');
        var desc = event.target.id;
        $('.buttondesc').text(desc).addClass('.buttondesc');
    },
   function () {
       var tempid = "#" + event.target.id;
       $((tempid)).removeClass('smallhover');
       $('.buttondesc').text("");
   });
});


$(window).scroll(function () {
    var scrollpos = $(window).scrollTop();
    
     if (scrollpos > 450) {
        $('#bighead').fadeOut('slow');
        
        $('#smallhead').removeClass('hideit').slideDown('fast');
    }
    else {
        $('#smallhead').slideUp('fast').removeClass('showit');
        $('#bighead').removeClass('hideit').addClass('showit').fadeIn('fast');
    }




});

