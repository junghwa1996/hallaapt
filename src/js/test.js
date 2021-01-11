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
  fbq('track', 'ec_pageview_raemianelinity');

  var _windowHeight = $(window).outerHeight();

  var iframePlayer = [
          { el: $('iframe')[0], player:null },
          { el: $('iframe')[1], player:null },
          { el: $('iframe')[2], player:null },
          { el: $('iframe')[3], player:null },
          { el: $('iframe')[4], player:null },
          { el: $('iframe')[5], player:null },
          { el: $('iframe')[6], player:null }
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
  var eventTop = $('.section.event').offset().top + 20;

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
          if($(this).hasClass('btn-plan') || $(this).hasClass('btn-gallery')) {
              popScrollTop = $(window).scrollTop();
              $('body').addClass('scroll-lock');
              $('body').css('top', -1 * popScrollTop + 'px');
          }
  } else {
          $('.layer-popup').css("top", $(window).scrollTop());
          
          if($(this).hasClass('btn-plan') || $(this).hasClass('btn-gallery')) {
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
      }
});

  // 레이어팝업 닫기
  $(".layer-popup").on('click', '.btn-popup-close', function () {
      $(this).parent().css('display', 'none');
      $('.overlay').remove();

      console.log($('body').hasClass('scroll-lock'));
      if ($('body').hasClass('scroll-lock')) {
          $('body').removeClass('scroll-lock');
          $('body').removeAttr('style');
          console.log(popScrollTop);
          $('html, body').scrollTop(popScrollTop);
      }
      if ($(this).parent().hasClass('gallery-expand')) {
          $('.slider05').slick('slickGoTo', 0);
      }
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
  });

  // gnb
  $('.momo-gnb').on('click', '.btn-gnb-open', function(e) {
      e.preventDefault();
      $('.gnb-open, .gnb-open-bg').addClass('on');
      popScrollTop = $(window).scrollTop();
      $('body').addClass('scroll-lock');
      $('body').css('top', -1 * popScrollTop + 'px');
  });
  
  $('.momo-gnb').on('click', '.btn-gnb-close', function(e) {
      e.preventDefault();
      $('.gnb-open, .gnb-open-bg').removeClass('on');
      $('body').removeClass('scroll-lock');
      $('body').removeAttr('style');
      $('html, body').scrollTop(popScrollTop);
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
          var p = $('.section:eq('+ index +')').css('paddingTop').replace('px', '') * 1;
          $('html, body').stop().animate({scrollTop: $('.section:eq('+ index +')').offset().top + p}, 700);
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

  $('iframe').on('load', function() {
      $(this).siblings('img').fadeOut(function() {
          $(this).remove();
      })
  });

  $('.btn-submit').on('click', function() {
  fbq('track', 'ec_submit_ramianelinity');
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

// 20200309
$.fn.isInViewport = function(box, detail) {
  var boxLeft = box ? box.offset().left : 0;
  var boxRight = boxLeft + (box ? box.outerWidth() : $(window).width());  
  var viewportTop = $(window).scrollTop();
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var elementLeft = $(this).offset().left;
  var elementRight = elementLeft + $(this).outerWidth();
  var viewportBottom = viewportTop + $(window).height();

  return detail ? (elementBottom > viewportTop && elementTop < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight) : (elementTop >= viewportTop && elementBottom < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight);
};