// build time:Sun May 26 2019 22:54:49 GMT+0800 (中国标准时间)
$(document).ready(function(){var t=$(".sidebar-inner");function e(){return $(".header-inner").height()+CONFIG.sidebar.offset}function i(){var t=$(".footer-inner");var e=t.outerHeight(true)-t.outerHeight();var i=t.outerHeight(true)+e;return i}function r(t){return $("#sidebar").css({"margin-top":t})}function n(){var n=e();var a=i();var f=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight();var o=$("#content").height();if(n+f<o){t.affix({offset:{top:n-CONFIG.sidebar.offset,bottom:a}})}r(n).css({"margin-left":"initial"})}function a(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");n()}function f(){var t=window.matchMedia("(min-width: 991px)");t.addListener(function(t){if(t.matches){a()}})}n();f()});
//rebuild by neat 