!function(o){o(document).ready(function(){o(function(e,t,a){return null!=t?null!=a?"[data-c-"+e+a+"='"+t+"']":"[data-c-"+e+"='"+t+"']":"[data-c-"+e+"]"}("carousel")).slick({nextArrow:'<button class="slick-next" title="View the next slide." type="button"><i class="material-icons">arrow_forward_ios</i></button>',prevArrow:'<button class="slick-prev" title="View the previous slide." type="button"><i class="material-icons">arrow_back_ios</i></button>',lazyLoad:"progressive"}),"true"==localStorage.getItem("cookieTrigger")?o("#cookieAlert").remove():o("#cookieAlert").addClass("active"),o(document).on("click","[data-docs-cookie-trigger]",function(e){e.preventDefault(),function(e){localStorage.setItem("cookieTrigger","true"),o(e).parent("div").remove()}(this)}),o("#cloneSearch").keyup(function(e){var s=this.value.toLowerCase().trim().split(" ");o(".clone-search-results >div >ul >li").each(function(e){var t=o(this).find("a").data("terms").toLowerCase(),a=!0;s.forEach(function(e){0<=t.indexOf(e.trim())||(a=!1)}),a?(o(this).show(),o(this).addClass("show")):(o(this).hide(),o(this).removeClass("show")),o(".clone-search-results .show").length?o(".clone-search-null").hide():o(".clone-search-null").show()}),""==s?(o(".clone-search-results").removeClass("active"),o("[data-c-menu] >ul").removeClass("hidden")):(o(".clone-search-results").addClass("active"),o("[data-c-menu] >ul").addClass("hidden")),o("#cloneSearch").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),document.activeElement.blur(),!1}),e.preventDefault()}),o(document).on("click","#clearSearch",function(e){o(".clone-search-results").removeClass("active"),o("[data-c-menu] >ul").removeClass("hidden"),o("#cloneSearch").val("")}),o(document).on("click","[data-docs-menu-trigger]",function(e){!function(e){o(e).hasClass("active")?(o(e).removeClass("active"),o(e).next().removeClass("active")):(o(e).addClass("active"),o(e).next().addClass("active"))}(this)})})}(jQuery);