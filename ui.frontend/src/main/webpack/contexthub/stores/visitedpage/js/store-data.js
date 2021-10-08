$(function () {
    var visited= ContextHub.getStore("visitedpage");
    visited.setItem('last-visited-page',getCookie('last-visited-page'));

    var pagedata= ContextHub.getStore("pagedata");
    var page = pagedata.getItem('path');
	var personaTabs = ["Individuals and Families","Business Insurance","Agents & Brokers"];
	if(personaTabs.includes(dataLayer[0].business)){
    setTimeout(function setCookie(){
        document.cookie='last-visited-page='+dataLayer[0].business;
    },1000);
	}
	$('.cmp-tabs__hero .cmp-tabs__tab').on('click',function(){
		document.cookie='persona-visited-page='+$(this).find('.tab-text').text();
	});
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for ( var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
});

/*$(window).unload(function() {
    debugger;
    //$(location).attr('href');
    var visited= ContextHub.getStore("visitedStore");
    var page = window.location.pathname;
    console.log("Visited page...."+page);
    visited.setItem('last-visited-page',page);
});*/