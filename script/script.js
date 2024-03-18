$(function(){

    //header 
    $("header").each(function(){
        let spot = $("header").offset().top;

       $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("header").addClass("fix")
        }else{
            $("header").removeClass("fix")
        }
       });
    });

    
    //header button 
        let about = document.querySelector('footer').getBoundingClientRect();
        console.log(about);

        $(".about").click(function(){
            let targetElement = $(".sec1"); 
            let headeroffset = 100;
            $('html, body').animate({
                scrollTop: targetElement.offset().top - headeroffset
            }, 'slow');
        });
        $(".work").click(function(){
            let targetElement = $(".sec3"); 
            let headeroffset = 100;
            $('html, body').animate({
                scrollTop: targetElement.offset().top - headeroffset
            }, 'slow');
        });
        $(".contact").click(function(){
            let targetElement = $("footer"); 
            let headeroffset = 100;
            $('html, body').animate({
                scrollTop: targetElement.offset().top - headeroffset
            }, 'slow');
        });





    //top버튼
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $('.topbutton').fadeIn(),100,linear;
        } else {
            $('.topbutton').fadeOut(),100,linear;
        }
    });


    $(".topbutton").click(function(){
        $('html, body').animate({scrollTop : 0},400);
    });





});