var lsjQuery = jQuery;
lsjQuery(document).ready(function () {
  if (typeof lsjQuery.fn.layerSlider == "undefined") { lsShowNotice('layerslider_1', 'jquery'); }
  else {
    lsjQuery("#layerslider_1").layerSlider({
      responsive: false,
      responsiveUnder: 980,
      layersContainer: 980,
      startInViewport: false,
      pauseOnHover: false,
      twoWaySlideshow: true,
      navStartStop: false,
      navButtons: false,
      hoverBottomNav: true,
      showCircleTimer: false,
      // thumbnailNavigation: 'enabled',
      lazyLoad: false,
      yourLogoStyle: 'left: 10px; top: 10px;',
      cbInit: function (element) { },
      cbStart: function (data) { },
      cbStop: function (data) { },
      cbPause: function (data) { },
      cbAnimStart: function (data) { },
      cbAnimStop: function (data) { },
      cbPrev: function (data) { },
      cbNext: function (data) { }
    })
  }
});