$(document).on('click', '.navbar-nav .nav-item',function(){
    $(this).addClass('active').siblings().removeClass('active');
});



//navbar scroll

$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() > 10);
});

$(window).scroll(function(){
    $('.navbar-nav li a').toggleClass('scrolled' , $(this).scrollTop() > 10);
});



window.sr = ScrollReveal();
        sr.reveal('.navbar' ,{
            duration: 2000,
            origin: 'bottom'
        });
        sr.reveal('.welcome-right' ,{
            duration: 2000,
            origin: 'bottom',
            distance : '300px'
        });
        sr.reveal('.welcome-left' ,{
            duration: 2000,
            origin: 'bottom',
            distance : '300px'

        });

        //about us section

        window.sr = ScrollReveal();
        sr.reveal('.about-left' ,{
            duration: 2000,
            origin: 'bottom',
            distance: '250px'

        });
        

