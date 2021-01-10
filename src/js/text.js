function gtag() {
  dataLayer.push(arguments)
}
function gtag_report_conversion(url) {
  var callback;
  return gtag("event", "conversion", {
      send_to: "AW-822803807/38ZBCPas9uwBEN_6q4gD",
      transaction_id: "",
      event_callback: function() {
          void 0 !== url && (window.location = url)
      }
  }),
  !1
}
window.dataLayer = window.dataLayer || [],
gtag("js", new Date),
gtag("config", "AW-822803807"),
gtag("config", "UA-173917921-11"),
$(document).ready((function() {
  var f, b, e, v, n, t, s;
  f = window,
  b = document,
  e = "script",
  v = "https://connect.facebook.net/en_US/fbevents.js",
  f.fbq || (n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  ,
  f._fbq || (f._fbq = n),
  n.push = n,
  n.loaded = !0,
  n.version = "2.0",
  n.queue = [],
  (t = b.createElement(e)).async = !0,
  t.src = v,
  (s = b.getElementsByTagName(e)[0]).parentNode.insertBefore(t, s)),
  fbq("init", "768145149939813"),
  fbq("track", "PageView"),
  fbq("track", "ec_pageview_82257");
  var _windowHeight = $(window).outerHeight()
    , iframePlayer = []
    , scrollAnimate = $(".scroll-animate")
    , popScrollTop = 0;
  function setPlayer($this) {
      var id = $this.attr("id")
        , src = $this.data("src")
        , _this = iframePlayer.find((function(item) {
          return item.el.id === id
      }
      ));
      $this.attr("src", src),
      _this.player = new Zigbang.Player($this),
      _this.player.on("play", (function() {
          iframePlayer.forEach((function(item) {
              item.player && item.el.id !== id && item.player.getPaused().then((function(paused) {
                  paused || item.player.pause()
              }
              ))
          }
          ))
      }
      ))
  }
  $(".slider").slick({
      speed: 600,
      dots: !0,
      arrows: !0
  }),
  $(".sec06 .tooltip-list li").on("click", "a", (function(e) {
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass("on"),
      $this.hasClass("on") && $this.parent("li").siblings().find("a").removeClass("on")
  }
  )),
  $(".slider").on("touchstart", ".slick-slide", (function() {}
  )),
  $(".floating-banner").on("touchstart", (function() {}
  )),
  function() {
      function scrollContent() {
          var $window = $(window), bannerTimeout, isBanner, $viewport = $(".momo-wrap .container");
          function floatingBanner() {
              var windowTop = $window.scrollTop()
                , windowLeft = $window.scrollLeft()
                , windowHeight = $window.height()
                , eventTop = $(".section.event").offset().top - windowHeight;
              $(".section.event").css("transform", "translate(" + -1 * windowLeft + "px)"),
              windowTop > eventTop ? (clearTimeout(bannerTimeout),
              bannerTimeout = setTimeout((function() {
                  isBanner = !1,
                  $(".floating-banner").removeClass("on")
              }
              ), 300)) : (clearTimeout(bannerTimeout),
              bannerTimeout = setTimeout((function() {
                  isBanner = !0,
                  $(".floating-banner").addClass("on")
              }
              ), 300))
          }
          $window.on("scroll", (function() {
              floatingBanner(),
              isBanner && $(".floating-banner").removeClass("on"),
              scrollAnimate.each((function() {
                  var $this = $(this);
                  $this.isInAnimated() && $this.addClass("animated")
              }
              )),
              iframePlayer.forEach((function(item) {
                  item.player && !$(item.el).isInViewport($viewport) ? item.player.getPaused().then((function(paused) {
                      paused || item.player.pause()
                  }
                  )) : !item.player && $(item.el).isInViewport($viewport, !0) ? $(item.el).attr("src") || setPlayer($(item.el)) : item.player && $(item.el).isInViewport($viewport, !0) && ($(item.el).data("auto") || item.player.getPaused().then((function(paused) {
                      paused && item.player.play()
                  }
                  )))
              }
              ))
          }
          )),
          $window.on("resize", (function() {
              var userAgent = window.navigator.userAgent
                , iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i)
                , webkit = !!userAgent.match(/WebKit/i)
                , iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i)
                , screenHeight = screen.height
                , innerHeight = $(window).height()
                , outerHeight = $(window).outerHeight()
                , calcHeight = (screenHeight - innerHeight) / 2;
              iOSSafari && (_windowHeight < outerHeight ? $(".floating-banner").css("bottom", calcHeight + "px") : $(".floating-banner").css("bottom", "4.1667vw"))
          }
          ))
      }
      $("iframe").each((function() {
          $(this).attr("id") && iframePlayer.push({
              el: $(this)[0],
              player: null
          })
      }
      )),
      scrollContent()
  }(),
  $(".floating-banner").on("click", (function() {
      var eventTop = $(".section.event").offset().top;
      $("html, body").stop().animate({
          scrollTop: eventTop
      }, 700)
  }
  )),
  $(".btn-go-top").on("click", (function(e) {
      e.preventDefault(),
      $("html, body").stop().animate({
          scrollTop: 0
      }, 700)
  }
  )),
  $(".agree-box > li:first-child > a").on("click", (function() {
      $(this).parent().toggleClass("on")
  }
  )),
  $(".btn-notice").on("click", (function() {
      $(".layer-popup.event").show()
  }
  )),
  $(".btn-popup").on("click", (function() {
      $(window).innerWidth() >= 769 ? ($("body").append('<div class="overlay"></div>'),
      $(".layer-popup").css("top", $(window).scrollTop() + 55),
      $(this).hasClass("btn-expand") && (popScrollTop = $(window).scrollTop(),
      $("body").addClass("scroll-lock"),
      $("body").css("top", -1 * popScrollTop + "px"))) : ($(".layer-popup").css("top", $(window).scrollTop()),
      $(this).hasClass("btn-expand") && (popScrollTop = $(window).scrollTop(),
      $("body").append('<div class="overlay"></div>'),
      $("body").addClass("scroll-lock"),
      $("body").css("top", -1 * popScrollTop + "px")))
  }
  )),
  $(".layer-popup").on("click", ".btn-popup-close", (function() {
      $(this).parent().css("display", "none"),
      $(".overlay").remove(),
      $("body").hasClass("scroll-lock") && ($("body").removeClass("scroll-lock"),
      $("body").removeAttr("style"),
      $("html, body").scrollTop(popScrollTop))
  }
  )),
  $(".btn-terms.terms01").on("click", (function() {
      $(".layer-popup.terms01").show()
  }
  )),
  $(".btn-terms.terms02").on("click", (function() {
      $(".layer-popup.terms02").show()
  }
  )),
  $(".btn-terms.terms03").on("click", (function() {
      $(".layer-popup.terms03").show()
  }
  )),
  $(".layer-popup").on("click", ".btn-close", (function() {
      $(this).parent().hide(),
      $(".overlay").remove(),
      $("body").hasClass("scroll-lock") && ($("body").removeClass("scroll-lock"),
      $("body").removeAttr("style"),
      $("html, body").scrollTop(popScrollTop))
  }
  )),
  $(".momo-gnb").on("click", ".btn-gnb-open", (function(e) {
      e.preventDefault(),
      $(".gnb-open, .gnb-open-bg").addClass("on"),
      popScrollTop = $(window).scrollTop(),
      $("body").addClass("scroll-lock"),
      $("body").css("top", -1 * popScrollTop + "px")
  }
  )),
  $(".momo-gnb").on("click", ".btn-gnb-close", (function(e) {
      e.preventDefault(),
      $(".gnb-open, .gnb-open-bg").removeClass("on"),
      $("body").removeClass("scroll-lock"),
      $("body").removeAttr("style"),
      $("html, body").scrollTop(popScrollTop)
  }
  )),
  $(".gnb-open-bg").on("click", (function(e) {
      e.preventDefault(),
      $(".gnb-open, .gnb-open-bg").removeClass("on"),
      $("body").removeClass("scroll-lock"),
      $("body").removeAttr("style"),
      $("html, body").scrollTop(popScrollTop)
  }
  )),
  $(".momo-gnb li").on("click", "a", (function(e) {
      e.preventDefault(),
      $(".gnb-open, .gnb-open-bg").removeClass("on"),
      $("body").removeClass("scroll-lock"),
      $("body").removeAttr("style"),
      $("html, body").scrollTop(popScrollTop);
      var $this, index = $(this).parent().index();
      0 == index ? $("html, body").stop().animate({
          scrollTop: $(".kv").offset().top
      }, 700) : 1 == index ? $("html, body").stop().animate({
          scrollTop: $(".sec01").offset().top
      }, 700) : 2 == index ? $("html, body").stop().animate({
          scrollTop: $(".sec04").offset().top
      }, 700) : 3 == index ? $("html, body").stop().animate({
          scrollTop: $(".sec08").offset().top
      }, 700) : 4 == index && $("html, body").stop().animate({
          scrollTop: $(".event").offset().top
      }, 700)
  }
  )),
  $(".btn-submit").on("click", (function() {
      fbq("track", "ec_submit_82257"),
      gtag("event", "click", {
          event_category: "invitation"
      }),
      gtag_report_conversion()
  }
  )),
  $(".iframe-box").on("click", ".btn-sound", (function() {
      var $this = $(this), id = $this.siblings("iframe").attr("id"), muted = $this.data("muted"), _this;
      iframePlayer.find((function(item) {
          return item.el.id === id
      }
      )).player.setMuted(!muted),
      $this.data("muted", !muted),
      $this.toggleClass("on")
  }
  )),
  setPlayer($("#video01")),
  setTimeout((function() {
      $(".section.kv").addClass("animated"),
      $(window).innerWidth() >= 769 && $(".section.event").addClass("animated")
  }
  ), 150)
}
)),
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
