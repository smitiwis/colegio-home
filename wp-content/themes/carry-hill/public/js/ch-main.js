/*! 07-07-2015 by krivinarius@gmail.com */
jQuery(function(a){var b=cbp_content_builder&&cbp_content_builder.prefix;b||(cbp_content_builder.data.respmenus&&a.each(cbp_content_builder.data.respmenus,function(b,c){a("#"+c.id+" ul").first().respmenu(c.options)}),CHT.data.useScrollToTop&&CHT.data.useScrollToTop&&a.scrollUp({scrollText:CHT.data.scrollToTopText})),function(){a(".ch-content-top").each(function(){var b=a(this);b.prepend('<div class="ch-content-top-edge"/>'),b.hasClass("ch-content-top-rainbow")&&b.prepend('<div class="ch-content-top-rainbow-edge"/>');var c=a(".ch-content-top-edge");c.css({marginLeft:"-"+c.parents(".container").css("paddingLeft")})}),a(".ch-content-bottom").each(function(){var b=a(this);b.append('<div class="ch-content-bottom-edge"/>');var c=a(".ch-content-bottom-edge");c.css({marginLeft:"-"+c.parents(".container").css("paddingLeft")})})}(),function(){var b=a(".bx-prev");b.html('<i class="fa fa-chevron-left fa-2x" />');var c=a(".bx-next");c.html('<i class="fa fa-chevron-right fa-2x" />')}(),function(){var b=a(".eme-calendar-table .prev-month");b.html('<i class="fa fa-chevron-left fa-2x" />');var c=a(".eme-calendar-table .next-month");c.html('<i class="fa fa-chevron-right fa-2x" />');var d=a(".eme-calendar").siblings("h2");d.addClass("align-center calendar-widget-title"),d.append('<div class="calendar-widget-title-arrow-left" />'),d.append('<div class="calendar-widget-title-arrow-right" />'),a(document).ajaxComplete(function(){var b=a(".eme-calendar-table .prev-month");b.html('<i class="fa fa-chevron-left fa-2x" />');var c=a(".eme-calendar-table .next-month");c.html('<i class="fa fa-chevron-right fa-2x" />')})}(),function(){var b=a(".ch-quote-testimonial-slider");b.append('<div class="bouble-tail" />'),b.css({marginBottom:30})}(),function(){a().mixItUp&&a(".ch-gallery").mixItUp(),a(".cbp_widget_menu").parents(".cbp_widget_box").css({zIndex:999});var b=a(".ch-gallery-item");b.on("mouseenter",function(){var b=a(this);b.children(".ch-gallery-item-overlay").animate({left:0},200)}).on("mouseleave",function(){var b=a(this);b.children(".ch-gallery-item-overlay").animate({left:"-100%"},200)}),a(".ch-sticky-header-enabled").sticky({topSpacing:0,className:"ch-sticky-header"}),CHT.data.useStickyMenu&&(a(window).load(function(){var b=a(".chp_widget_logo img");if(b.length){var c=(b.naturalWidth(),b.naturalHeight());b.height(c)}}),a(window).resize(function(){if("undefined"!=typeof $logo&&$logo.length){var a=$logo.parents(".cbp_widget_box").width();$logo.height(logoHeight*(a/logoWidth))}}))}()});