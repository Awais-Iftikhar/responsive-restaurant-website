

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true, 
        dots:true, 
        responsiveClass:true,

        autoplay: true,
        responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1,
                            
                        }
                    }
    })
   
  });




//   const togglebtn = document.querySelector('.navbar-toggler').addEventListener('click',function(){
//     const arrow = document.querySelector('.arrow');
//     arrow.classList.toggle('d-none');

//   });
