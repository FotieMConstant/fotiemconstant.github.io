(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(n,t,e){var content=e(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(61).default)("0a2d7476",content,!0,{sourceMap:!1})},221:function(n,t,e){"use strict";e(216)},222:function(n,t,e){var o=e(60)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.textAnimated[data-v-ef39e398]:after{\n  content:"|";\n  margin-left:.2em;\n  -webkit-animation:blinkCursor-data-v-ef39e398 1.2s linear infinite;\n          animation:blinkCursor-data-v-ef39e398 1.2s linear infinite\n}\n@-webkit-keyframes blinkCursor-data-v-ef39e398{\n0%{\n    opacity:1\n}\n49%{\n    opacity:1\n}\n50%{\n    opacity:0\n}\nto{\n    opacity:0\n}\n}\n@keyframes blinkCursor-data-v-ef39e398{\n0%{\n    opacity:1\n}\n49%{\n    opacity:1\n}\n50%{\n    opacity:0\n}\nto{\n    opacity:0\n}\n}\n#text-1[data-v-ef39e398],#text-2[data-v-ef39e398]{\n  margin-top:30px;\n  display:inline-block;\n  overflow:hidden;\n  white-space:nowrap;\n  line-height:2;\n  text-transform:none;\n  padding:0 5px\n}\n#text-1[data-v-ef39e398]{\n  -webkit-animation:showup-data-v-ef39e398 7s infinite;\n          animation:showup-data-v-ef39e398 7s infinite\n}\n#text-2[data-v-ef39e398]{\n  width:0;\n  -webkit-animation:reveal-data-v-ef39e398 7s infinite;\n          animation:reveal-data-v-ef39e398 7s infinite\n}\n#text-2-span[data-v-ef39e398]{\n  margin-left:-200px;\n  -webkit-animation:slidein-data-v-ef39e398 7s infinite;\n          animation:slidein-data-v-ef39e398 7s infinite\n}\n@-webkit-keyframes showup-data-v-ef39e398{\n0%{\n    opacity:0\n}\n20%{\n    opacity:1\n}\n80%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n@keyframes showup-data-v-ef39e398{\n0%{\n    opacity:0\n}\n20%{\n    opacity:1\n}\n80%{\n    opacity:1\n}\nto{\n    opacity:0\n}\n}\n@-webkit-keyframes slidein-data-v-ef39e398{\n0%{\n    margin-left:-800px\n}\n20%{\n    margin-left:-800px\n}\n35%{\n    margin-left:0\n}\nto{\n    margin-left:0\n}\n}\n@keyframes slidein-data-v-ef39e398{\n0%{\n    margin-left:-800px\n}\n20%{\n    margin-left:-800px\n}\n35%{\n    margin-left:0\n}\nto{\n    margin-left:0\n}\n}\n@-webkit-keyframes reveal-data-v-ef39e398{\n0%{\n    opacity:0;\n    width:0\n}\n20%{\n    opacity:1;\n    width:0\n}\n30%{\n    width:auto\n}\n80%{\n    opacity:1\n}\nto{\n    opacity:0;\n    width:auto\n}\n}\n@keyframes reveal-data-v-ef39e398{\n0%{\n    opacity:0;\n    width:0\n}\n20%{\n    opacity:1;\n    width:0\n}\n30%{\n    width:auto\n}\n80%{\n    opacity:1\n}\nto{\n    opacity:0;\n    width:auto\n}\n}\np[data-v-ef39e398]{\n  margin-top:100px;\n  font-size:10px;\n  color:#777\n}\np a[data-v-ef39e398]{\n  color:#c1c1c1;\n  text-decoration:none\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},248:function(n,t,e){"use strict";e.r(t);e(46),e(44);var o={data:function(){return{}},mounted:function(){var n=["I design","I love","Passionate about"],t=["& Build","Coding","Opensource!"],e=2;setInterval((function(){e--,document.getElementById("text-1").innerHTML=n[e],document.getElementById("text-2-span").innerHTML=t[e],0===e&&(e=3)}),7e3);var o=document.querySelector(".textAnimated"),text="",r=["Front-End Developer.","Software Developer.","UI/UX Designer.","JavaScript Developer.","Vue.js Developer.","Music Lover"],l=-1,c=-1;function d(){++c<text.length?setTimeout((function(){o.textContent+=text[c],d()}),100):setTimeout((function(){f()}),2e3)}function f(){--c>=0?setTimeout((function(){o.textContent=text.slice(0,c),f()}),100):m()}function m(){++l===r.length&&(l=0),text=r[l],d()}m()}},r=(e(221),e(35)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hero bg-gray-100 py-16"},[e("div",{staticClass:"container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto"},[e("div",{staticClass:"hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"},[e("div",{staticClass:"text-center md:text-left hero-text col-span-6"},[e("h1",{staticClass:"font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight",attrs:{id:"text-1"}},[n._v("\n          Howdy,\n        ")]),n._v(" "),e("h1",{staticClass:"font-bold text-2xl md:text-4xl max-w-xl text-gray-900 leading-tight",attrs:{id:"text-2"}},[e("span",{attrs:{id:"text-2-span"}},[n._v("I'm Fotie")])]),n._v(" "),e("hr",{staticClass:"w-12 h-1 bg-orange-500 rounded-full mt-0"}),n._v(" "),e("span",{staticClass:"text-black"},[e("h4",{staticClass:"subheading font-weight-thin"},[e("span",{staticClass:"textAnimated text-black"})])])]),n._v(" "),e("div",{staticClass:"hero-image col-span-6"},[e("img",{staticClass:" md:mt-0 rounded-full w-40 shadow-sm ml-auto mr-auto",attrs:{src:"https://avatars.githubusercontent.com/u/42372656?s=460&v=4",alt:"fotiecodes profile"}})])])])])}],!1,null,"ef39e398",null);t.default=component.exports}}]);