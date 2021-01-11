window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-822803807');
gtag('config', 'UA-173917921-5');

function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-822803807/KqolCKOTw90BEN_6q4gD',
        'transaction_id': '',
        'event_callback': callback
    });
    return false;
}

$(document).ready(function(){

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '768145149939813');
    fbq('track', 'PageView');
    fbq('track', 'ec_pageview_uwlafiano');

    var _windowHeight = $(window).outerHeight();

    var iframePlayer = [
            { el: $('iframe')[0], player:null }
            /*{ el: $('iframe')[1], player:null },
            { el: $('iframe')[2], player:null },
            { el: $('iframe')[3], player:null },
            { el: $('iframe')[4], player:null },
            { el: $('iframe')[5], player:null },
            { el: $('iframe')[6], player:null }*/
        ];

    var popScrollTop = 0;

    $('.slider01, .slider03').slick({
		fade: false,
		speed: 800,
        dots: true,
		draggable: true,
		touchMove: true,
		pauseOnHover: true,
        variableWidth: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    // 평면도
    $('.slider02').slick({
		fade: true,
		speed: 500,
		dots: false,
        arrows: false,
		draggable: false,
		touchMove: false,
		pauseOnHover: false,
        asNavFor: '.slider04',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });
    
    // 평면도팝업
	$('.slider04').slick({
		fade: false,
		speed: 800,
		dots: false,
        arrows: false,
		draggable: true,
		touchMove: true,
        pauseOnHover: true,
        asNavFor: '.slider02',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
	});

    // 갤러리
	$('.slider05').slick({
		fade: false,
		speed: 800,
		dots: true,
		draggable: true,
        touchMove: true,
        slidesToShow: 2,
        variableWidth: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    // gallery-wide
    $('.slider06').slick({
        fade: false,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        slidesToShow: 2,
        variableWidth: true,
        pauseOnHover: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    // gallery-detail
    $('.slider07').slick({
		fade: false,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        slidesToShow: 2,
        variableWidth: true,
        pauseOnHover: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    $('.slider08').slick({
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 4000,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        pauseOnHover: true,
        arrows:true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    $('.slider09').slick({
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 4000,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        pauseOnHover: true,
        arrows:true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    $('.slider10').slick({
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 4000,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        pauseOnHover: true,
        arrows:true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    $('.slider11').slick({
        fade: true,
        //autoplay: true,
        //autoplaySpeed: 4000,
		speed: 800,
		dots: true,
		draggable: true,
		touchMove: true,
        pauseOnHover: true,
        arrows:true,
        initialSlide:0,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					pauseOnHover: false
				}
			}
		]
    });

    $('.slider').slick('setPosition');
    $('.slider').on('touchstart', '.slick-slide', function(){});
    $('.floating-banner').on('touchstart', function(){});
    
    $('.slider02').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.section.plan .btn-wrap a:eq(' + nextSlide + ')').addClass('on').siblings().removeClass('on');
    });

    $('.slider03').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var target = $(this).siblings('.title-box').find('p');
        var txtList = ['Traffic', 'Education', 'Life', 'Nature'];

        target.html('<span><i>#</i> '+ txtList[nextSlide] +'</span>');
    });

    $('.slider04').on('afterChange', function(event, slick, currentSlide) {
        $(this).find('.img-box').scrollTop(0);
    });

    $('.slider08').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var target = $(this).siblings('.title-box').find('p');
        var txtList = ['1Floor', '2Floor', '3Floor', 'Roof Top'];

        target.html('<span><i>A-S</i><i>B-S</i> '+ txtList[nextSlide] +'</span>');
    });

    $('.slider09').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var target = $(this).siblings('.title-box').find('p');
        var txtList = ['1Floor', '2Floor', '3Floor', 'Roof Top'];

        target.html('<span><i>A-N</i><i>B-N</i> '+ txtList[nextSlide] +'</span>');
    });

    $('.slider10').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var target = $(this).siblings('.title-box').find('p');
        var txtList = ['B1-Parking', '1Floor', '2Floor', 'Roof Top'];

        target.html('<span><i>C</i><i>D</i> '+ txtList[nextSlide] +'</span>');
    });

    $('.slider11').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var target = $(this).siblings('.title-box').find('p');
        var txtList = ['1Floor', '2Floor', '3Floor', 'Roof Top'];

        target.html('<span><i>E</i><i>F</i> '+ txtList[nextSlide] +'</span>');
    });

    // vr 모바일: 레이어팝업 / pc: 새창으로 열기
    $('.vr-wrap').on('click', '.btn-show-vr', function() {
        var src = $(this).data('src');

	    if(screen.width < 769) {
			$('.vr-iframe-box').show();
			$('#vr-iframe').attr('src', src);
        } else {
			window.open(src, "_blank", "");
        }
    });

    // vr 팝업 닫기
    $('.vr-iframe-box').on('click', '.btn-popup-close', function(){
        $('.vr-iframe-box').hide();
        $('.vr-iframe-box iframe').attr('src', '');
    });

	(function() {
        function scrollContent() {
            var $window = $(window);
            var bannerTimeout;
            var isBanner;
            var $viewport = $('.momo-wrap .container');

            // window 스크롤 시
            $window.on("scroll", function() {
                floatingBanner();

                if(isBanner) {
                    $('.floating-banner').removeClass('on');
                }

                // 20200309
                iframePlayer.forEach(function(item) {
                    if (item.player && !$(item.el).isInViewport($viewport)) {
                        item.player.getPaused().then(function(paused) {
                            if (!paused) {
                                item.player.pause();
                            }
                        });
                    } else if (!item.player && $(item.el).isInViewport($viewport, true)) {
                        if (!$(item.el).attr('src')) {
                            setPlayer($(item.el));
                        }
                    } else if (item.player && $(item.el).isInViewport($viewport, true)) {
                        item.player.getPaused().then(function(paused) {
                            if (paused) {
                                item.player.play();
                            }
                        });
                    }
                });
            });
            
            $window.on('resize', function() {
                var userAgent = window.navigator.userAgent;
                var iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
                var webkit = !!userAgent.match(/WebKit/i);
                var iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i);

                var screenHeight = screen.height;
                var innerHeight = $(window).height();
                var outerHeight = $(window).outerHeight();
                var calcHeight = (screenHeight - innerHeight) / 2;

                if (iOSSafari) {
                    if (_windowHeight < outerHeight) {
                        $('.floating-banner').css('bottom', calcHeight + 'px');
                    } else {
                        $('.floating-banner').css('bottom', '4.1667vw');
                    }
                }
            });

            // floatingBanner 활성화
            function floatingBanner() {
                var windowTop = $window.scrollTop();
                var windowLeft = $window.scrollLeft();
                var windowHeight = $window.height();
                var eventTop = $('.section.event').offset().top - windowHeight;

                $('.section.event').css('transform', 'translate(' + windowLeft*-1 + 'px)');

                if(windowTop > eventTop){
                    clearTimeout(bannerTimeout);
                    bannerTimeout = setTimeout(function() {
                        isBanner = false;
                        $('.floating-banner').removeClass('on');
                    }, 300);
                } else {
                    clearTimeout(bannerTimeout);
                    bannerTimeout = setTimeout(function() {
                        isBanner = true;
                        $('.floating-banner').addClass('on');
                    }, 300);
                }
            }
        }
		scrollContent();
	})();

	$('.floating-banner').on('click', function(){
        //var eventTop = $('.section.event').offset().top + 20;
        var eventTop = $('.section.event').offset().top + 90+'vw'

		$('html, body').stop().animate({scrollTop: eventTop}, 700);
    });

	// 맨위로 올리기
	$('.btn-go-top').on("click", function(e) {
		e.preventDefault();

		$('html, body').stop().animate({scrollTop: 0}, 700);
	});
    
	// 동의리스트 on
	$('.agree-box > li:first-child > a').on('click', function () {
		$(this).parent().toggleClass('on');
    });
    
	// 레이어팝업: 이벤트 참여 유의사항
	$('.btn-notice').on('click', function () {
		$('.layer-popup.event').css('display', 'block');
	});

	// 레이어팝업 : overlay, scrollTop
	$('.btn-popup').on('click', function () {
		if(screen.width >= 769) {
			$('body').append('<div class="overlay"></div>');
            $('.layer-popup').css("top", $(window).scrollTop() + 55);
            if($(this).hasClass('btn-plan') || $(this).hasClass('btn-gallery') || $(this).hasClass('btn-wide') || $(this).hasClass('btn-detail')) {
                popScrollTop = $(window).scrollTop();
                $('body').addClass('scroll-lock');
                $('body').css('top', -1 * popScrollTop + 'px');
            }
		} else {
            $('.layer-popup').css("top", $(window).scrollTop());
            
            if($(this).hasClass('btn-plan') || $(this).hasClass('btn-gallery') || $(this).hasClass('btn-wide') || $(this).hasClass('btn-detail')) {
                popScrollTop = $(window).scrollTop();
                $('body').append('<div class="overlay"></div>');
                $('body').addClass('scroll-lock');
                $('body').css('top', -1 * popScrollTop + 'px');
            }
        }

        if($(this).hasClass('btn-plan')) {
            $('.layer-popup').removeAttr('style');
            $('.layer-popup.plan-expand').css('display', 'block');
            $('.slider04').slick('setPosition');
            $('.slider04').find('.img-box').scrollTop(0);
        } else if($(this).hasClass('btn-gallery')) {
            $('.layer-popup').removeAttr('style');
            $('.layer-popup.gallery-expand').css('display', 'block');
            $('.slider05').slick('setPosition');
        } else if($(this).hasClass('btn-wide')) {
            $('.layer-popup').removeAttr('style');
            $('.layer-popup.gallery-wide').css('display', 'block');
            $('.slider06').slick('setPosition');
        } else if($(this).hasClass('btn-detail')) {
            $('.layer-popup').removeAttr('style');
            $('.layer-popup.gallery-detail').css('display', 'block');
            $('.slider07').slick('setPosition');
        }

        $('.section.layout .tab_content2 .title-box').css('zIndex',1000);
    });

    // 레이어팝업 닫기
    $(".layer-popup").on('click', '.btn-popup-close', function () {
        $(this).parent().css('display', 'none');
        $('.overlay').remove();

        //console.log($('body').hasClass('scroll-lock'));
        if ($('body').hasClass('scroll-lock')) {
            $('body').removeClass('scroll-lock');
            $('body').removeAttr('style');
            //console.log(popScrollTop);
            $('html, body').scrollTop(popScrollTop);
        }
        if ($(this).parent().hasClass('gallery-expand')) {
            $('.slider05').slick('slickGoTo', 0);
        }

        if ($(this).parent().hasClass('gallery-wide')) {
            $('.slider06').slick('slickGoTo', 0);
        }

        if ($(this).parent().hasClass('gallery-detail')) {
            $('.slider07').slick('slickGoTo', 0);
        }

        $('.section.layout .tab_content2 .title-box').css('zIndex',9999);
    });

	// 레이어팝업: 약관1
	$('.btn-terms.terms01').on('click', function () {
		$('.layer-popup.terms01').css('display', 'block');
	});

	// 레이어팝업: 약관2
	$('.btn-terms.terms02').on('click', function () {
		$('.layer-popup.terms02').css('display', 'block');
	});

	// 레이어팝업: 약관3
	$('.btn-terms.terms03').on('click', function () {
		$('.layer-popup.terms03').css('display', 'block');
	});

	// 레이어팝업 닫기
	$('.layer-popup').on('click', '.btn-close', function () {
		$(this).parent().css('display', 'none');
        $('.overlay').remove();

        if ($('body').hasClass('scroll-lock')) {
            $('body').removeClass('scroll-lock');
            $('body').removeAttr('style');
            $('html, body').scrollTop(popScrollTop);
        }

        $('.section.layout .tab_content2 .title-box').css('zIndex',9999);
    });

    // gnb
    $('.momo-gnb').on('click', '.btn-gnb-open', function(e) {
        e.preventDefault();
        $('.gnb-open, .gnb-open-bg').addClass('on');
        popScrollTop = $(window).scrollTop();
        $('body').addClass('scroll-lock');
        $('body').css('top', -1 * popScrollTop + 'px');

        $('.section.layout .tab_content2 .title-box').css('zIndex',1000);
    });
    
    $('.momo-gnb').on('click', '.btn-gnb-close', function(e) {
        e.preventDefault();
        $('.gnb-open, .gnb-open-bg').removeClass('on');
        $('body').removeClass('scroll-lock');
        $('body').removeAttr('style');
        $('html, body').scrollTop(popScrollTop);

        $('.section.layout .tab_content2 .title-box').css('zIndex',9999);
    });

    $('.gnb-open-bg').on('click', function(e) {
        e.preventDefault();
        $('.gnb-open, .gnb-open-bg').removeClass('on');
        $('body').removeClass('scroll-lock');
        $('body').removeAttr('style');
        $('html, body').scrollTop(popScrollTop);
    });

    $('.momo-gnb li').on('click', 'a', function(e) {
        e.preventDefault();
        $('.gnb-open, .gnb-open-bg').removeClass('on');
        $('body').removeClass('scroll-lock');
        $('body').removeAttr('style');
        $('html, body').scrollTop(popScrollTop);

        var $this = $(this);
        var index = $this.parent().index();
  
        if(index == 13) {
            $('html, body').stop().animate({scrollTop: $('.section:eq('+ index +')').offset().top + 20}, 700);
        } else if(index == 1) {
            $('html, body').stop().animate({scrollTop: $('.section:eq(1)').offset().top }, 700);
        } else if(index == 6) {
            $('html, body').stop().animate({scrollTop: $('.section:eq(6)').offset().top + 90 + 'vw'}, 700);
        } else {
            $('html, body').stop().animate({scrollTop: $('.section:eq('+ index +')').offset().top}, 700);
        }
    });

    $('.section.plan .btn-wrap').on('click', 'a', function(e) {
        e.preventDefault();
        var $this = $(this);
        var index = $this.index();
        $('.slider02').slick('slickGoTo', index);
    });

    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

    $(".tab_content2").hide(); //Hide all content
    $("ul.tabs2 li:first").addClass("active").show(); //Activate first tab
    $(".tab_content2:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs2 li").click(function() {

        $("ul.tabs2 li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content2").hide(); //Hide all tab content

        //$('.section.layout .tab_content2 .slider').css({'width':'100vw', 'height':'100vw'});

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('.slider08, .slider09, .slider10, .slider11').slick('slickGoTo', 0);
        return false;
    });

    $('iframe').on('load', function() {
        $(this).siblings('img').fadeOut(function() {
            $(this).remove();
        })
    });

    $('.btn-submit').on('click', function() {
        fbq('track', 'ec_submit_uwlafiano');

        gtag('event', 'click', { event_category: 'invitation' });
        gtag_report_conversion();
    });

    setPlayer($('#video01'));

    $('.iframe-box').on('click', '.btn-sound', function() {
        var $this = $(this);
        var idx = $this.data('idx');
        var muted = $this.data('muted');

        iframePlayer[idx].player.setMuted(!muted);
        $this.data('muted', !muted);
        $this.toggleClass('on');
    });

    $('.floating-btn button').click(function(){
        var offset = $('.section.event').offset(); 
        $('html').animate({scrollTop : offset.top}, 1000);
    });





    function setPlayer($this) {
        if ($this.attr('id')) {
            var idx = $this.data('idx');
            var src = $this.data('src');

            $this.attr('src', src);
            iframePlayer[idx].player = new Zigbang.Player($this);

            iframePlayer[idx].player.on('play', function() {
                var _idx = $($(this)[0].element).data('idx');
                iframePlayer.forEach(function(item, i) {
                    if(item.player && i !== _idx) {
                        item.player.getPaused().then(function(paused) {
                            if (!paused) {
                                item.player.pause();
                            }
                        });
                    }
                });
            });
        }
    }
});

// 전체동의 체크
$("#agree01").click(function(){
    if($("#agree01").prop("checked")) { 
        $("input[type=checkbox]").prop("checked",true); 
    } else {
        $("input[type=checkbox]").prop("checked",false); } 
});
// 지도 버튼 클릭 시 해당 img slider로 이동
$('.map-button button').click(function() {
    var slideNo = $(this).index();
    $('.map-img').slick('slickGoTo', slideNo);
});

//아코디언 FAQ
$(".card-header").click(function(){
    // self clicking close
    if($(this).next(".card-body").hasClass("active")){
        $(this).next(".card-body").removeClass("active").slideUp();	
        $(this).children("a").removeClass("active");
    }
    else{
        $(".card-body").removeClass("active").slideUp();
        $(".card-header a").removeClass("active");
        $(this).next(".card-body").addClass("active").slideDown();
        $(this).children("a").addClass("active");
    }
});


$.fn.isInViewport = function(box, detail) {
    var boxLeft = box ? box.offset().left : 0
      , boxRight = boxLeft + (box ? box.outerWidth() : $(window).width())
      , viewportTop = $(window).scrollTop()
      , elementTop = $(this).offset().top
      , elementBottom = elementTop + $(this).outerHeight()
      , elementLeft = $(this).offset().left
      , elementRight = elementLeft + $(this).outerWidth()
      , viewportBottom = viewportTop + $(window).height();
    return detail ? elementBottom > viewportTop && elementTop < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight : elementTop >= viewportTop && elementBottom < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight
}
,
$.fn.isInAnimated = function() {
    var viewportTop = $(window).scrollTop()
      , elementTop = $(this).offset().top
      , elementBottom = elementTop + $(this).outerHeight()
      , viewportBottom = viewportTop + .9 * $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom
}
;