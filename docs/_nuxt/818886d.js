(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,n,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("79e13cdc",content,!0,{sourceMap:!1})},217:function(t,n,e){"use strict";e(214)},218:function(t,n,e){var o=e(60)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\n@media (max-width:576px){\n.content[data-v-50ab3b64]{\n    padding-top:51px\n}\n}\n@media (min-width:577px){\n.pt-scroll[data-v-50ab3b64]{\n    padding-top:51px\n}\n.nav-sticky[data-v-50ab3b64]{\n    position:fixed!important;\n    min-width:100%;\n    top:0;\n    box-shadow:0 2px 4px 0 rgba(0,0,0,.1);\n    transition:all .25s ease-in;\n    z-index:1\n}\n}\n.hamburger[data-v-50ab3b64]{\n  cursor:pointer;\n  width:48px;\n  height:48px;\n  transition:all .25s\n}\n.hamburger__bottom-bun[data-v-50ab3b64],.hamburger__top-bun[data-v-50ab3b64]{\n  content:"";\n  position:absolute;\n  width:24px;\n  height:2px;\n  background:#000;\n  transform:rotate(0);\n  transition:all .5s\n}\n.hamburger:hover [class*=-bun][data-v-50ab3b64]{\n  background:#333\n}\n.hamburger__top-bun[data-v-50ab3b64]{\n  transform:translateY(-5px)\n}\n.hamburger__bottom-bun[data-v-50ab3b64]{\n  transform:translateY(3px)\n}\n.open[data-v-50ab3b64]{\n  transform:rotate(90deg);\n  transform:translateY(-1px)\n}\n.open .hamburger__top-bun[data-v-50ab3b64]{\n  transform:rotate(45deg) translateY(0)\n}\n.open .hamburger__bottom-bun[data-v-50ab3b64]{\n  transform:rotate(-45deg) translateY(0)\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},246:function(t,n,e){"use strict";e.r(n);var o={mounted:function(){var nav=document.getElementById("site-menu"),header=document.getElementById("top");window.addEventListener("scroll",(function(){window.scrollY>=400?(nav.classList.add("nav-sticky"),header.classList.add("pt-scroll")):(nav.classList.remove("nav-sticky"),header.classList.remove("pt-scroll"))}))},methods:{navToggle:function(){var t=document.getElementById("menuBtn"),nav=document.getElementById("menu");t.classList.toggle("open"),nav.classList.toggle("flex"),nav.classList.toggle("hidden")}}},r=(e(217),e(35)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("header",{staticClass:"w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l z-10",attrs:{id:"top"}},[e("nav",{staticClass:"flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900",attrs:{id:"site-menu"}},[e("div",{staticClass:"w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center"},[t._m(0),t._v(" "),e("button",{staticClass:"hamburger block sm:hidden focus:outline-none",attrs:{id:"menuBtn",type:"button"},on:{click:t.navToggle}},[e("span",{staticClass:"hamburger__top-bun"}),t._v(" "),e("span",{staticClass:"hamburger__bottom-bun"})])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"no-underline py-1",attrs:{href:"#"}},[e("h1",{staticClass:"font-bold text-lg tracking-widest"},[t._v("fotiecodes")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden",attrs:{id:"menu"}},[e("a",{staticClass:"text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2",attrs:{href:"https://ttntm.me/blog/tailwind-responsive-menu/",target:"_blank"}},[t._v("About")]),t._v(" "),e("a",{staticClass:"text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2",attrs:{href:"#bottom"}},[t._v("Features")])])}],!1,null,"50ab3b64",null);n.default=component.exports}}]);