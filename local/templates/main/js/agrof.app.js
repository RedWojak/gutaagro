/* Catalog list/grid script */
var nbItemsPerLine = 4;
var nbItemsPerLineMobile = 3;
var nbItemsPerLineTablet = 2;

function display(view)
{
	if (view == 'list')
	{

        $('.grid-desc').css('display','none');
        $('.list-desc').css('display','block');
		$('ul.product_list').removeClass('grid').addClass('list row');
		$('.product_list > li').removeClass('col-xs-12 col-sm-'+12/nbItemsPerLineTablet+' col-md-'+ 12/nbItemsPerLine).addClass('col-xs-12');
		$('.product_list > li').each(function(index, element) {
			html = '';
			html = '<div class="product-col list">';
				html += '<div class="row">';
					html += '<div class="img col-xs-3 col-md-3">' + $(element).find('.img').html() + '</div>';
					html += '<div class="center-block col-xs-5 col-md-5">';
						html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';
						html += '<div itemprop="description" class="text">'+ $(element).find('.text').html() + '</div>';
						html += '<ul class="options text"><li>'+ $(element).find('.model').html() +'</li><li>'+ $(element).find('.brand').html() +'</li><li>'+ $(element).find('.weight').html() +'</li></ul>';
					html += '</div>';	
					html += '<div class="right-block col-xs-4 col-md-4">';
						var price = $(element).find('.content_price').html();       // check : catalog mode is enabled
						if (price != null) { 
							html += '<div class="content_price">'+ price + '</div>';
						}
					html += '</div>';
				html += '</div>';
				
			html += '</div>';
		$(element).html(html);
		});		
		$('.listing_view').find('li#list').addClass('active');
		$('.listing_view').find('li#grid').removeAttr('class');
		$.totalStorage('display', 'list');
	}
	else 
	{

        $('.grid-desc').css('display','block');
        $('.list-desc').css('display','none');
		$('ul.product_list').removeClass('list').addClass('grid row');
		$('.product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-'+12/nbItemsPerLineTablet+' col-md-' + 12/nbItemsPerLine);
		$('.product_list > li').each(function(index, element) {
		html = '';
		html += '<div class="product-col">';
			html += '<div class="img">' + $(element).find('.img').html() + '</div>';
			html += '<div class="prod-info">';
				html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';
				html += '<div itemprop="description" class="text">'+ $(element).find('.text').html() + '</div>';
				html += '<div class="product-buttons">';
					var price = $(element).find('.content_price').html(); // check : catalog mode is enabled
					if (price != null) { 
						html += '<div class="content_price">'+ price + '</div>';
					}
				html += '</div>';
		html += '</div>';		
		$(element).html(html);
		});
		$('.listing_view').find('li#grid').addClass('active');
		$('.listing_view').find('li#list').removeAttr('class');
		$.totalStorage('display', 'grid');
	}	
}

function bindGrid()
{
	var view = $.totalStorage('display');

	if (view && view != 'grid') {
		display(view);
    }
	else {
        display(view);
		$('.listing_view').find('li#grid').addClass('active');
    }    
	
	$(document).on('click', '#grid', function(e){
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e){
		e.preventDefault();
		display('list');
	});
}

$(document).ready(function(){
    bindGrid();
})

//if(!NREUMQ.f){NREUMQ.f=function(){NREUMQ.push(["load",new Date().getTime()]);var e=document.createElement("script");e.type="text/javascript";e.src=(("http:"===document.location.protocol)?"http:":"https:")+"//"+"js-agent.newrelic.com/nr-100.js";document.body.appendChild(e);if(NREUMQ.a)NREUMQ.a();};NREUMQ.a=window.onload;window.onload=NREUMQ.f;};NREUMQ.push(["nrfj","beacon-1.newrelic.com","72d7dcce33","1388850","ZV1TZ0FTVkFVWkwKXlwXZEFaHRIdXVdcBkkcSFlD",0,1740,new Date().getTime(),"","","","",""]);


  $(document).ready(function(){
    /*$('#fcarousel').carouFredSel({
      responsive: true,
      width: '100%',
      scroll: 1,
      auto: false,
      prev: '#prev2',
      next: '#next2',
      items: {
      width: 222,
      height: 290,	//	optionally resize item-height
  	   visible: {
  	   min: 2,
  	   max: 6
  	   }
      }
    });*/
    $(".menu_btn").click(function() {
      $("#ezpages").slideToggle( "slow", function(){
      $("#ezpages").prev().toggleClass("curr", $(this).is(":visible"));
      $("#ezpages").stop();
      });
    });
		
		$(".btn-resume").click(function(){
			
		})
		
  });

$(document).ready(function() {
		var origsrc = $("#productMainImage span img").attr("src");
	$("#productAdditionalImages .additionalImages span img").click(
	  function () {
		$("#productMainImage span img").attr('src', this.src);
	  }
	);
});

$(document).ready(function(){
      $('.main-image #productMainImage .image a img').elevateZoom({
        easing : true,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 500,
        lensFadeOut: 500
      });
    });
  $(document).ready(function() {
			var origsrc = $("#productMainImage span img").attr("src");
			var orighref = $("#productMainImage span a").attr("href");
		$("#productAdditionalImages .additionalImages span img").click(
		);
		$("#productAdditionalImages .additionalImages span img").click(
			function () {
			$("#productMainImage span.image a").attr('href', this.src);
			$('.main-image #productMainImage .image a img').elevateZoom({
					easing : true,
					zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 500,
					lensFadeIn: 500,
					lensFadeOut: 500
				});
			}
		); 

		/* for index page */
		/* top-banner */
		var $bgr_container = $('#bgr-main>.bgr-inner'),	
			speedSlide = 10000, 
			slideCount = 4,
			$banner_container = $('#bgr-main>.banners-list'),
			speedBanner = 10000;		
		if($bgr_container.length == 1) {	
			var slideTimer = setTimeout(function listSlide() {
				var n = $bgr_container.data('current')	
				$bgr_container.removeClass('bgr' + n)
				n++
				if(n == slideCount) n = 0
				$bgr_container.addClass('bgr' + n).data('current', n)
				slideTimer = setTimeout(listSlide, speedSlide)
			}, speedSlide);
		}	
		if($banner_container.length == 1) {
			var bannerCount = $banner_container.children().length;	console.log("bannerCount = " + bannerCount)	
			bannerTimer = setTimeout(function listBanner() {
				var $current = $('.block-banner.activate'),	
					n1 = $banner_container.children().index($current);
				$current.fadeOut().promise().done(function(){$current.removeClass('activate').attr("style","")})
				n1++; if(n1 == bannerCount) n1 = 0;
				$banner_container.children().eq(n1).addClass('activate')
				bannerTimer = setTimeout(listBanner, speedBanner)
			}, speedBanner);			
		}
		/* OK partner slider */
		var $owl = $('.owl-carousel').owlCarousel({
			loop: true,
			margin:15,
			dots: false,
			nav: true,
			navText:['',''],
			slideBy:1,
			responsiveClass:true,
			responsive:{
				0:{ items:1 },
				300:{ items:2 },
				400:{ items:3 },
				600:{ items:4 },
				800:{ items:6 },
				1100:{ items:9 }
			}
		});
		var $wow = new WOW()
		$wow.init();


		/*if($('table').length == 1) getTender();	
		
		function getTender() {
			var 
				url1 = 'https://dashboard.uniconf.ru/api/apktenders?begin=2015-07-01&end=2015-08-27',
				url2 = 'https://dashboard.uniconf.ru/api/apktenders/bids/58484';
			$.post(url1, function(data){			
				if(data) {
					$.each(data, function(){
						if(this.isSale == 0){
							$('table').append('<tr>'+
							'<td>'+this.tenderId+'</td><td></td>'+
							'<td>'+this.startDate+'</td>'+
							'<td></td>'+
							'<td>'+this.tenderName+'</td>'+
							'<td>'+this.typeName+'</td>'+
							'<td></td>'+
							'<td></td></tr>');
						};
					})
				}
			})
		}*/
		
		/*var jshover = function() {
			var $menuDiv = $("#horizontal-multilevel-menu")
			if (!$menuDiv)
				return;
			$menuDiv.on('mouseover', 'li', function() {
				console.log('mouseover ' + $(this).attr('class'))	
				$(this).addClass(" jshover")
			}).on('mouseout', 'li', function() {
				console.log('mouseout ' + $(this).attr('class'))
				$(this).removeClass(" jshover");
			})
		}*/

		//$(window).on('load', jshover);
		
	});