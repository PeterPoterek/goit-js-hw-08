!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,r,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,l=setTimeout(w,t),s?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function w(){var e=p();if(h(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function O(e){return l=void 0,d&&i?y(e):(i=r=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return j(f);if(m)return l=setTimeout(w,t),y(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=r=l=void 0},T.flush=function(){return void 0===l?u:O(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),h=j.querySelector('input[name="email"]'),w=j.querySelector('textarea[name="message"]');j.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.target.elements.email.value,message:e.target.elements.message.value};console.log(t),localStorage.removeItem("email"),localStorage.removeItem("message"),e.target.elements.email.value="",e.target.elements.message.value=""}));h.addEventListener("input",(function(e){localStorage.setItem("email",e.target.value)})),w.addEventListener("input",(function(e){localStorage.setItem("message",e.target.value)}));var O=e(t)((function(){j.elements.email.value=localStorage.getItem("email"),j.elements.message.value=localStorage.getItem("message")}),500);document.addEventListener("DOMContentLoaded",O)}();
//# sourceMappingURL=03-feedback.4f2c514e.js.map
