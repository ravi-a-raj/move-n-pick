$(document).ready(function(e){ 
   
    function cardComponent(){
        if ($(window).width() <= 767){
            $(".mobile-carousel" ).each( function(index,el){
                var cardcount =  $(this).find('.cmp-card').length;
                if( cardcount >= 4){
                    $('.featured-flex-box-3__item_withoutbg').remove();
                    $(this).addClass('owl-carousel owl-theme');
                    $(this).owlCarousel({
                        items: 1,
                        nav:true,
                        autoHeight:true
                    });
               }
               else{
                $(this).trigger('destroy.owl.carousel');
                $(this).removeClass('owl-carousel owl-theme');	         
               }
            });   
            
        }  
        else{
            $('.mobile-carousel').trigger('destroy.owl.carousel');
            $('.mobile-carousel').removeClass('owl-carousel owl-theme');	         
        }   
    }
    cardComponent();
    cardItem();
    $(window).on('resize', function () {
        cardComponent(); 
        if($('.featured-flex-box-3__item_withoutbg').length == 0){            
            cardItem();
        }
    });
    function cardItem(){
        if ($(window).width() >= 768){   
            $(".cmp-card__content" ).each( function(index,el){
                if ($(this).find('.cmp-card__content__header').hasClass("cmp-card__header")) {
                    $(this).find('.cmp-card__row').prepend('<div class="col-lg-4 col-md-6 featured-flex-box-3__item_withoutbg featured-flex-box-3__item"><div class="cmp-card cmp-card-without-bg" role="link"><div class="cmp-card__container"><span class="cmp-card__container__eyebrow eyebrow-text">'+ $(this).find('.cmp-card__container__eyebrow').html() +'</span><h2 class="cmp-card__container__title h3-heading">'+ $(this).find('.cmp-card__container__title').html() +'</h2></div></div></div>'); 
                }
            } );       
        }
    }
});


