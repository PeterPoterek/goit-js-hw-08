function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,a,r,i,l,u,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=a;return o=a=void 0,f=t,i=e.apply(r,n)}function S(e){return f=e,l=setTimeout(j,t),c?b(e):i}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=r}function j(){var e=d();if(h(e))return w(e);l=setTimeout(j,function(e){var n=t-(e-u);return s?g(n,r-(e-f)):n}(e))}function w(e){return l=void 0,v&&o?b(e):(o=a=void 0,i)}function I(){var e=d(),n=h(e);if(o=arguments,a=this,u=e,n){if(void 0===l)return S(u);if(s)return l=setTimeout(j,t),b(u)}return void 0===l&&(l=setTimeout(j,t)),i}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),I.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=u=a=l=void 0},I.flush=function(){return void 0===l?i:w(d())},I}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||i.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:o,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),S=b.querySelector('input[name="email"]'),h=b.querySelector('textarea[name="message"]');b.addEventListener("submit",(e=>{e.preventDefault(),console.log(localStorage.getItem("email")),console.log(localStorage.getItem("message"));const t={email:e.target.elements.email.value,message:e.target.elements.message.value};console.log(t),localStorage.removeItem("email"),localStorage.removeItem("message"),e.target.elements.email.value="",e.target.elements.message.value=""}));S.addEventListener("change",(e=>{localStorage.setItem("email",e.target.value)})),h.addEventListener("change",(e=>{localStorage.setItem("message",e.target.value)}));const j=e(t)((()=>{b.elements.email.value=localStorage.getItem("email"),b.elements.message.value=localStorage.getItem("message")}),500);document.addEventListener("DOMContentLoaded",j);
//# sourceMappingURL=03-feedback.c8ad64de.js.map
