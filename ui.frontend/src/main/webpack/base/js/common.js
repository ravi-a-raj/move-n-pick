$(document).ready(function(){
	locationHashChanged();	
	$('.header__skip-link').closest('.experiencefragment').next().attr('id', 'h1-heading');
	 $('.generic-column-control .featured-flex-box-4 .featured-flex-box-4__item').each(function(i, obj) {
		if($(this).html().trim().length==0){
			$(this).hide();
		}
	});
});

window.onhashchange = locationHashChanged;
function locationHashChanged(){
	var hash = window.location.hash;
	if ($('.cmp-tabs.cmp-tabs__hero').length > 0 ){
		if(hash == "#h1-heading")
		{
				var activeID= $('.cmp-tabs.cmp-tabs__hero .cmp-tabs__tablist .cmp-tabs__tab--active').attr('data-id');
				hash = '#' + activeID;
		}
		tabDeepLink(hash)	
	}
    else{
		if(hash != ""){
		pageDeepLink(hash);
		}
    }	
	if ($(hash).length > 0) {
	$(hash).closest('.cmp-accordion__item').find('.cmp-accordion__header button:not(.cmp-accordion__button--expanded)').click();
	}
}
function pageDeepLink(deepLinkID){
	setTimeout(function() { 
			var aid = $(deepLinkID).parent();
			var scroll = aid.offset().top-10;
			console.log("scroll: " + scroll);
			$('html, body').animate({ 
				scrollTop: scroll 
			}, 1000); 
		}, 300);  

}


function tabDeepLink(deepLinkID){
	if($(deepLinkID).length == 1){
		var tabids = $(deepLinkID).closest('.cmp-tabs__hero .cmp-tabs__tabpanel').attr('id');
		$('.cmp-tabs__hero .cmp-tabs__menu__container .cmp-tabs__tablist li').removeClass('cmp-tabs__tab--active');
		$('.cmp-tabs__hero .cmp-tabs__tabpanel').removeClass('cmp-tabs__tabpanel--active');
		$(deepLinkID).closest('.cmp-tabs__hero .cmp-tabs__tabpanel').addClass('cmp-tabs__tabpanel--active');
		$('.cmp-tabs__hero .cmp-tabs__menu__container .cmp-tabs__tablist li').each(function () {
			var tabHref = $(this).attr('data-id');
			if(tabids === tabHref){
				$(this).addClass('cmp-tabs__tab--active');
			}
		})
		$('.cmp-tabs__hero .cmp-tab__hero').each(function () {
			var tabHref = $(this).attr('data-id');
			if(tabids === tabHref){
				$(this).addClass('cmp-tabs__tabpanel--active');
			}
		})
		setTimeout(function() { 
			var aid = $(deepLinkID).parent();
			var scroll = aid.offset().top-10;
			console.log("scroll: " + scroll);
			$('html, body').animate({ 
				scrollTop: scroll 
			}, 1000); 
		}, 300);        
	}
}
if($('.cmp-accordion').length > 0){
    $('.cmp-accordion .cmp-accordion__item .cmp-accordion__header').find("button").each(function() {
        var linkUrlvalue = $(this).attr('data-title') + '| '+ $(location).attr("href");
        $(this).attr('data-linkurl',linkUrlvalue.toLowerCase());
    });
}