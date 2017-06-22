// Modernizr - this plugin helps improve cross-platform compatibility
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgsizecover-borderradius-boxshadow-boxsizing-cssanimations-flexbox-mediaqueries-opacity-rgba-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],n=b[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),h.push((r?"":"no-")+a.join("-"))}}function s(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var s,l,u,f,d="modernizr",c=i("div"),p=a();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:d+(o+1),c.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?d(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+p(n[r])+":"+o+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,r,s){function a(){d&&(delete E.style,delete E.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=m(e,r);if(!o(l,"undefined"))return l}for(var d,c,p,v,y,g=["modernizr","tspan"];!E.style;)d=!0,E.modElem=i(g.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(v=e[c],y=E.style[v],u(v,"-")&&(v=f(v)),E.style[v]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?v:!0;try{E.style[v]=r}catch(h){}if(E.style[v]!=y)return a(),"pfx"==n?v:!0}return a(),!1}function y(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),c(a,n,t))}function g(e,n,o){return y(e,t,t,n,o)}var h=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C=n.documentElement,w="svg"===C.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=S,Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();x.mq=_,Modernizr.addTest("mediaqueries",_("only all"));var T="Moz O ms Webkit",z=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=z;var P=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=P;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var E={style:k.elem.style};Modernizr._q.unshift(function(){delete E.style}),x.testAllProps=y,x.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("bgsizecover",g("backgroundSize","cover")),Modernizr.addTest("borderradius",g("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",g("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",g("boxSizing","border-box",!0)&&(n.documentMode===t||n.documentMode>7)),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),r(),s(h),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],n=b[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),h.push((r?"":"no-")+a.join("-"))}}function s(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var s,l,u,f,d="modernizr",c=i("div"),p=a();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:d+(o+1),c.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?d(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+p(n[r])+":"+o+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,r,s){function a(){d&&(delete E.style,delete E.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=m(e,r);if(!o(l,"undefined"))return l}for(var d,c,p,v,y,g=["modernizr","tspan"];!E.style;)d=!0,E.modElem=i(g.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(v=e[c],y=E.style[v],u(v,"-")&&(v=f(v)),E.style[v]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?v:!0;try{E.style[v]=r}catch(h){}if(E.style[v]!=y)return a(),"pfx"==n?v:!0}return a(),!1}function y(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?v(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),c(a,n,t))}function g(e,n,o){return y(e,t,t,n,o)}var h=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){b.push({name:e,fn:n,options:t})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C=n.documentElement,w="svg"===C.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=S,Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();x.mq=_,Modernizr.addTest("mediaqueries",_("only all"));var T="Moz O ms Webkit",z=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=z;var P=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=P;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var E={style:k.elem.style};Modernizr._q.unshift(function(){delete E.style}),x.testAllProps=y,x.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("bgsizecover",g("backgroundSize","cover")),Modernizr.addTest("borderradius",g("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",g("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",g("boxSizing","border-box",!0)&&(n.documentMode===t||n.documentMode>7)),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),r(),s(h),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

(function($) {

  $.fn.menumaker = function(options) {
      
      var manu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        manu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        manu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          manu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          manu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else manu.addClass('dropdown');

        if (settings.sticky === true) manu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 928) {
            manu.find('ul').show();
          }

          if ($(window).width() <= 928) {
            manu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("nav").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);

// Small Nav Scripts

$(document).ready( function() {

    // Scroll to Top
    var top = $("#coursename").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > top) { // if scrolled past top of page
            $(".totop").addClass('visible'); // show .totop
        }
        else {
          $(".totop").removeClass('visible'); // hide when at top of page
        }
    });

});
