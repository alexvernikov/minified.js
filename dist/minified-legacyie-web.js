/^u/.test(typeof define)&&function(a){this.define=function(b,c){a[b]=a[b]||c()},this.require=function(b){return a[b]}}({}),define("minified",function(){function y(a){return a!=g?""+a:""}function q(a){return"string"==typeof a}function z(a){return a&&a.nodeType}function aa(a){return a}function W(a){a()}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function M(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function w(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function m(a,b,c){return y(a).replace(b,c||"")}function k(a,b){if(E(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function X(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function r(a){return"function"==typeof a&&!a.item}function E(a){return a&&a.length!=g&&!q(a)&&!z(a)&&!r(a)&&a!==s}function N(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):t}}function O(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function H(a,b){setTimeout(a,b||0)}function F(a){return parseFloat(m(a,/^[^\d-]+/))}function I(a){return a.Mid=a.Mid||++ba}function P(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){z(a)&&!e[c=I(a)]&&(d.push(a),e[c]=t)})}),d}function Y(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},c=a.get(b),b=a.set(b).get("$height",t);return a.set(c),b}function ca(a,b,c,d,e,f){return function(g,h){var i,j=g||s.event,k=!f,l=h||j.target;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(p(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.stopPropagation&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=t),!i}}function Q(a,b){k(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function R(){k(K,W),K=g}function Z(a){K?K.push(a):H(a)}function S(a){return w(k,a,function(a){return q(a)?a:E(a)?S(a):z(a)?(a=a.cloneNode(t),a.removeAttribute("id"),a):g})}function p(a,b,c){return r(a)?Z(a):new G(C(a,b,c))}function C(a,b,c){function d(a){return a=w(k,a,function b(a){return E(a)?w(k,a,b):a}),e?M(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,f,g,h;return b&&1!=(b=C(b)).length?P(b,function(b){return C(a,b,c)}):(e=b&&b[0],q(a)?1<(b=a.split(/\s*,\s*/)).length?P(b,function(a){return C(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?C(b[2],C(b[1],e),c):a!=(b=m(a,/^#/))?d(n.getElementById(b)):(f=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],h=b[2],b=(g=n.getElementsByClassName&&h)?(e||n).getElementsByClassName(h):(e||n).getElementsByTagName(f||"*"),(f=g?f:h)&&(b=M(b,N(f,g?"nodeName":"className"))),c?d(b):b):d(a))}function L(a,b){var c,d,e={},f=e;return r(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||q(a)&&(f=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(c=N(f[1],"nodeName"),d=N(f[2],"className"),function(a){return 1==z(a)&&c(a)&&d(a)}):b?function(c){return p(a,b).find(c)!=g}:(p(a).each(function(a){e[I(a)]=t}),function(a){return e[I(a)]})}function $(a){var b=L(a);return function(a){return b(a)?g:t}}function T(){function a(a,e){b==g&&(b=a,c=e,H(function(){k(d,W)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,r(d)?(f=d.apply(U,c),f&&r(f.then)?f.then(function(a){h(t,[a])},function(a){h(x,[a])}):h(t,[f])):h(b,c)}catch(g){h(x,[g])}}var h=T();return b!=g?H(f):d.push(f),h};return a.error=function(a){return e(0,a)},a}function G(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var g=null,t=!0,x=!1,U,s=this,n=document,ba=1,D={},K=/^[ic]/.test(n.readyState)?g:[],V=[],da=s.requestAnimationFrame||function(a){H(a,33)},B=!!n.all&&!n.addEventListener;return A({each:function(a){return k(this,a)},filter:function(a){return new G(M(this,a))},collect:function(a){return new G(w(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=r(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){k(this,function(a){B&&1==z(a)&&(k(C("*",a),function(a){Q(0,D[a.Mid]),delete D[a.Mid]}),Q(0,D[a.Mid]),delete D[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=z(b);return 1==c?w(k,b.childNodes,a):5>c?b.data:g}return w(k,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=L(d?g:b),f=d?b:c;return new G(P(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return p(a,this,b)},is:function(a){return!this.find($(a))},only:function(a){return this.filter(L(a))},not:function(a){return this.filter($(a))},get:function(a,b){var c,d,e,f=this,h=f[0];return h?q(a)?(d=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),c="$"==a?h.className:"$$"==a?B?h.style.cssText:h.getAttribute("style"):"$$fade"==a||"$$slide"==a?"hidden"==h.style.visibility||"none"==h.style.display?0:"$$fade"==a?isNaN(c=B?F(h.style.filter)/100:F(h.style.opacity))?1:c:f.get("$height"):"$$scrollX"==a?s.pageXOffset!=g?s.pageXOffset:(n.documentElement||n.body.parentNode||n.body).scrollLeft:"$$scrollY"==a?s.pageXOffset!=g?s.pageYOffset:(n.documentElement||n.body.parentNode||n.body).scrollTop:"$"==d[1]?s.getComputedStyle?s.getComputedStyle(h,g).getPropertyValue(m(d[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(h.currentStyle||h.style)[m(d[2],/^float$/,"cssFloat")]:"@"==d[1]?h.getAttribute(d[2]):h[d[2]],b?F(c):c):(e={},(E(a)?k:A)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){var c,d,e=this;return b!==U?(d=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),"$$fade"==a?this.set({$visibility:0<(c=F(b))?"visible":"hidden",$display:"block"}).set(B?1>c?{$filter:"alpha(opacity = "+100*c+")",$zoom:1}:{$filter:""}:{$opacity:c}):"$$slide"==a?this.set({$visibility:0<(c=F(b))?"visible":"hidden",$display:"block",$height:/px/.test(b)?b:function(a,b,d){return c*(c&&Y(p(d)))+"px"},$overflow:"hidden"}):k(e,function(c,e){var f=r(b)?b(p(c).get(a),e,c):b;"$"==a?k(f&&f.split(/\s+/),function(a){var b=m(a,/^[+-]/),d=c.className||"",e=m(d,RegExp("(^|\\s)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&d==e)&&(e+=" "+b),c.className=m(e,/^\s+|\s+(?=\s|$)/g)}):"$$"==a?B?c.style.cssText=f:c.setAttribute(style,f):"$$scrollX"==a?c.scroll(f,p(c).get("$$scrollY")):"$$scrollY"==a?c.scroll(p(c).get("$$scrollX"),f):"@"==d[1]?f!=g?c.setAttribute(d[2],f):c.removeAttribute(d[2]):"$"==d[1]?c.style[d[2]]=f:c[d[2]]=f})):q(a)||r(a)?this.set("$",a):A(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$display","").set("$display",function(a){return"none"==a?"block":a})},hide:function(){return this.set("$display","none")},add:function(a,b){return this.each(function(c,d){var e;!function f(a){E(a)?k(a,f):r(a)?f(a(c,d)):a!=g&&(a=z(a)?a:n.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!r(a)?S(a):a)})},fill:function(a){return this.each(function(a){p(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new G(S(this))},animate:function(a,b,c){var d,e=T(),f=this,g=[],h=0;return e.stop0=function(){e(x),d()},b=b||500,k(f,function(b,d){var e,f=p(b),h={};A(e=f.get(a),function(c,e){var g=a[c];h[c]=r(g)?g(e,d,b):"$$slide"==c?a[c]*Y(f)+"px":g}),g.push(f.dial(e,h,c))}),d=p.loop(function(a){a>=b||0>a?(h=b,d(),e(t,[f])):h=a,k(g,function(a){a(h/b)})}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}var e=this,f=r(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};return c=c||0,function(c){A(a,function(a,g){var h=b[a],i=0;e.set(a,0>=c?g:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+")":m(h,/-?[\d.]+/,y(f(F(g),F(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=x,j=/\b(?=\w)/g;return b?h.set(a)&&function(j){j!==i&&(f=(i=j===t||j===x?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f)&&U)}:h.toggle(m(a,j,"-"),m(a,j,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=y(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)p(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:w(k,[b[c],d],aa))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return r(b)?this.on(g,a,b,c,e):q(d)?this.on(a,b,c,g,d):this.each(function(f,g){k(a?C(a,f):f,function(a){k(y(b).split(/\s/),function(b){var f=m(b,/[?|]/),h=ca(c,a,d,g,m(b,/[^?|]/g),e&&L(e,a));b={e:a,h:h,n:f},(c.M=c.M||[]).push(b),B?(a.attachEvent("on"+f,h),f=I(a),(D[f]=D[f]||[]).push(b)):(a.addEventListener(f,h,x),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||p(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(g,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[t]).on(a,"|blur",b,[x]):this.onFocus(g,a)},onChange:function(a,b){var c=[];return b?this.each(function(d,e){function f(f,g){c[e]=d[g],p(d).on(a,f,function(){var a=d[g];a!=c[e]&&(b.call(this,a,e),c[e]=a)})}/kbox|dio/i.test(d.type)?f("|click","checked"):f(B?"|propertychange":"|input |change |keyup","value")}):this.onChange(g,a)},onClick:function(a,b,c){return r(a)?this.on("click",a,b):this.on(a,"click",b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)k(B?D[e.Mid]:e.M,function(e){e.n==a&&(d=d||!e.h(b,c))}),e=e.parentNode})}},function(a,b){G.prototype[a]=b}),A({request:function(a,b,c,d){d=d||{};var e,f=0,h=T(),i=c!=g&&!z(c)&&!q(c);try{e=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),i&&(c=w(A,c,function(a,b){return w(k,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,t,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),A(d.headers,function(a,b){e.setRequestHeader(a,b)}),A(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?h(t,[e.responseText,e.responseXML]):h(x,[e.status,e.statusText,e.responseText]))},e.send(c)}catch(j){f||h(x,[0,g,y(j)])}return h},toJSON:function a(b){return b==g?""+b:q(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,X)+'"':E(b)?"["+w(k,b,a).join()+"]":"object"==typeof b?"{"+w(A,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":y(b)},parseJSON:s.JSON?s.JSON.parse:function(b){return b=m(b,/[\x00\xad\u0600-\uffff]/g,X),/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Z,loop:function(a){var b={b:a,c:+new Date,a:function(){O(V,b)}};return 2>V.push(b)&&function c(){k(V,function(a){a.b(Math.max(0,+new Date-a.c),a.a)}).length&&da(c)}(),b.a},off:function(a){k(a.M,function(a){B?(a.e.detachEvent("on"+a.n,a.h),O(D[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,x),O(a.e.M,a))}),a.M=g}},function(a,b){p[a]=b}),B?(n.attachEvent("onreadystatechange",function(){/^[ic]/.test(n.readyState)&&R()}),s.attachEvent("onload",R)):n.addEventListener("DOMContentLoaded",R,x),s.d=function(){k(D,Q)},{$:p,$$:function(a){return C(a)[0]},EE:function(a,b,c){return a=p(n.createElement(a)),E(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:G}});