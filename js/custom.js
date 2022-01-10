jQuery(function($) {
	   $('.owl-feature').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          navText:["←","→"],
          autoplay:true,
          autoplayTimeout:4000,
          responsive:{
              0:{            //phone size
                  items:1 
              },
              600:{         //tablet size jonno
                  items:2
              },
              1000:{        //laptop size
                  items:2
              }
          }
      })

     $('.owl-travel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsiveClass:true,
          center:true, 
          autoplay:true,
          autoplayTimeout:4000,
          navText:["←","→"],
          responsive:{
              0:{            //phone size
                  items:1 
              },
              600:{         //tablet size jonno
                  items:2
              },
              1000:{        //laptop size
                  items:3
              }
          }
      })

     $('.owl-move').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:4000,
          navText:[
             "<i class ='fa fa-angle-left'></i>",
             "<i class ='fa fa-angle-right'></i>"
          ],
          responsive:{
              0:{            //phone size
                  items:1 
              },
              600:{         //tablet size jonno
                  items:1
              },
              1000:{        //laptop size
                  items:1
              }
          }
      })

         // wow fadeIn up,down,left,right
          new WOW().init(); 

      // animation counter
      $('.number').animationCounter({

        start: 0,
        step:2,
        end: 100,
        txt:" k",
        delay:100

      });  

      $('.client').animationCounter({

        start: 0,
        step:5,
        end: 3785,
        delay:10

      });  

      $('.blog').animationCounter({

        start: 0,
        step:5,
        end: 2500,
        delay:10

      }); 
});