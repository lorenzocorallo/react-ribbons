!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-ribbons",["React"],t):"object"==typeof exports?exports["react-ribbons"]=t(require("react")):e["react-ribbons"]=t(e.React)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(7)()},function(e,t,n){var o=n(4),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t),n.d(t,"RibbonContainer",(function(){return c})),n.d(t,"RightCornerRibbon",(function(){return b})),n.d(t,"RightCornerLargeRibbon",(function(){return f})),n.d(t,"LeftCornerRibbon",(function(){return u})),n.d(t,"LeftCornerLargeRibbon",(function(){return p})),n.d(t,"RightRibbon",(function(){return d})),n.d(t,"RightLargeRibbon",(function(){return g})),n.d(t,"LeftRibbon",(function(){return R})),n.d(t,"LeftLargeRibbon",(function(){return h}));var o=n(0),r=n.n(o),i=n(1),a=n.n(i),l=n(2),s=n.n(l),c=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:"".concat(s.a.ribbonContainer," ").concat(n||"")},t)};c.propTypes={children:a.a.any.isRequired,className:a.a.string},c.defaultProps={className:void 0};var b=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.rightCornerRibbon},r.a.createElement("svg",{height:"70",width:"70"},r.a.createElement("polygon",{points:"0 0, 0 10, 10 10",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 70 70, 70 40, 30 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 60, 60 70, 70 70",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.rightCornerRibbonText},t))};b.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},b.defaultProps={fontFamily:"Arial"};var f=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.rightCornerLargeRibbon},r.a.createElement("svg",{height:"84",width:"84"},r.a.createElement("polygon",{points:"0 0, 0 12, 12 12",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 84 84, 84 48, 36 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"72 72, 72 84, 84 84",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.rightCornerLargeRibbonText},t))};f.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},f.defaultProps={fontFamily:"Arial"};var u=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.leftCornerRibbon},r.a.createElement("svg",{height:"70",width:"70"},r.a.createElement("g",{transform:"rotate(-90, 35, 35)"},r.a.createElement("polygon",{points:"0 0, 0 10, 10 10",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 70 70, 70 40, 30 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 60, 60 70, 70 70",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.leftCornerRibbonText},t))};u.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},u.defaultProps={fontFamily:"Arial"};var p=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.leftCornerLargeRibbon},r.a.createElement("svg",{height:"84",width:"84"},r.a.createElement("g",{transform:"rotate(-90, 42, 42)"},r.a.createElement("polygon",{points:"0 0, 0 12, 12 12",fill:"".concat(n,"77"),strokeWidth:"0"}),r.a.createElement("polygon",{points:"0 0, 84 84, 84 48, 36 0",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"72 72, 72 84, 84 84",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.leftCornerLargeRibbonText},t))};p.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},p.defaultProps={fontFamily:"Arial"};var d=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.rightRibbon},r.a.createElement("svg",{height:"40",width:"70"},r.a.createElement("polygon",{points:"0 10, 10 20, 0 30, 70 30, 70 10",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 40, 60 30, 70 30",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.rightRibbonText},t))};d.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},d.defaultProps={fontFamily:"Arial"};var g=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.rightLargeRibbon},r.a.createElement("svg",{height:"60",width:"90"},r.a.createElement("polygon",{points:"0 15, 15 30, 0 45, 90 45, 90 15",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"75 60, 75 40, 90 45",fill:"".concat(n,"77"),strokeWidth:"0"})),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.rightLargeRibbonText},t))};g.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},g.defaultProps={fontFamily:"Arial"};var R=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.leftRibbon},r.a.createElement("svg",{height:"40",width:"70"},r.a.createElement("g",{transform:"scale(-1,1) translate(-70, 0)"},r.a.createElement("polygon",{points:"0 10, 10 20, 0 30, 70 30, 70 10",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"60 40, 60 30, 70 30",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.leftRibbonText},t))};R.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},R.defaultProps={fontFamily:"Arial"};var h=function(e){var t=e.children,n=e.backgroundColor,o=e.color,i=e.fontFamily;return r.a.createElement("div",{className:s.a.leftLargeRibbon},r.a.createElement("svg",{height:"60",width:"90"},r.a.createElement("g",{transform:"scale(-1,1) translate(-90, 0)"},r.a.createElement("polygon",{points:"0 15, 15 30, 0 45, 90 45, 90 15",fill:n,strokeWidth:"0"}),r.a.createElement("polygon",{points:"75 60, 75 40, 90 45",fill:"".concat(n,"77"),strokeWidth:"0"}))),r.a.createElement("span",{style:{color:o,fontFamily:i},className:s.a.leftLargeRibbonText},t))};h.propTypes={children:a.a.any.isRequired,backgroundColor:a.a.string.isRequired,color:a.a.string.isRequired,fontFamily:a.a.string},h.defaultProps={fontFamily:"Arial"}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],c=n[s]||0,b="".concat(s," ").concat(c);n[s]=c+1;var f=l(b),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:b,updater:R(u,t),references:1}),o.push(b)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var b,f=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var d=null,g=0;function R(e,t){var n,o,r;if(t.singleton){var i=g++;n=d||(d=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=s(e,t),c=0;c<n.length;c++){var b=l(n[c]);0===a[b].references&&(a[b].updater(),a.splice(b,1))}n=i}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,".ReactRibbons_ribbonContainer_3Zi1le5BXstWhvxMbxE3QQ{position:relative;min-height:100px}.ReactRibbons_rightCornerRibbon_1-P96PNPfVooTf7iAd8ts4{position:absolute;top:-10px;right:-10px}.ReactRibbons_rightCornerRibbonText_lAUhrhctW69RCvQMzXCAj{position:absolute;transform:rotate(45deg);font-size:.8em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-8px;right:-8px}.ReactRibbons_rightCornerLargeRibbon_2Iq3FJ4ppvHaWBuB2ELV4y{position:absolute;top:-12px;right:-12px}.ReactRibbons_rightCornerLargeRibbonText_1WZuhM5iMjMsIZmZzSn15R{position:absolute;transform:rotate(45deg);font-size:.9em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-10px;right:-10px}.ReactRibbons_leftCornerRibbon_2L1X3PRpoW_Cbx04HKYerO{position:absolute;top:-10px;left:-10px}.ReactRibbons_leftCornerRibbonText_5DsxRgO9L2R7yhdWr5MWZ{position:absolute;transform:rotate(-45deg);font-size:.8em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-8px;left:-8px}.ReactRibbons_leftCornerLargeRibbon_2k55QxRrtg-UM6V8xbnbKL{position:absolute;top:-12px;left:-12px}.ReactRibbons_leftCornerLargeRibbonText_1vPBHBrNbo1_T7ApSNGFBz{position:absolute;transform:rotate(-45deg);font-size:.9em;display:flex;align-items:center;justify-content:center;width:100%;height:100%;top:-10px;left:-10px}.ReactRibbons_rightRibbon_1U_hyaQbXrjGdr5diDkP4J{position:absolute;top:0;right:-10px}.ReactRibbons_rightRibbonText_3oO5W55LjrYkBS1zXIqGFo{position:absolute;font-size:.8em;top:12px;right:7px}.ReactRibbons_rightLargeRibbon_3kFosVYSxjkNLiIlgAau5-{position:absolute;top:0;right:-15px}.ReactRibbons_rightLargeRibbonText_2Qt8aGFwCEOMXDh3gE7LPt{position:absolute;font-size:.9em;top:21px;right:9px}.ReactRibbons_leftRibbon_3GNEv0eSmq2XZPFgY3OdU4{position:absolute;top:0;left:-10px}.ReactRibbons_leftRibbonText_aBRlvzZrqntSZwv1D7Bjt{position:absolute;font-size:.8em;top:12px;left:7px}.ReactRibbons_leftLargeRibbon__DwM5zy9iBDjj17ph6pUf{position:absolute;top:0;left:-15px}.ReactRibbons_leftLargeRibbonText_1SAojwHIrk8Rz0e2pG0aF_{position:absolute;font-size:.9em;top:21px;left:9px}",""]),t.locals={ribbonContainer:"ReactRibbons_ribbonContainer_3Zi1le5BXstWhvxMbxE3QQ",rightCornerRibbon:"ReactRibbons_rightCornerRibbon_1-P96PNPfVooTf7iAd8ts4",rightCornerRibbonText:"ReactRibbons_rightCornerRibbonText_lAUhrhctW69RCvQMzXCAj",rightCornerLargeRibbon:"ReactRibbons_rightCornerLargeRibbon_2Iq3FJ4ppvHaWBuB2ELV4y",rightCornerLargeRibbonText:"ReactRibbons_rightCornerLargeRibbonText_1WZuhM5iMjMsIZmZzSn15R",leftCornerRibbon:"ReactRibbons_leftCornerRibbon_2L1X3PRpoW_Cbx04HKYerO",leftCornerRibbonText:"ReactRibbons_leftCornerRibbonText_5DsxRgO9L2R7yhdWr5MWZ",leftCornerLargeRibbon:"ReactRibbons_leftCornerLargeRibbon_2k55QxRrtg-UM6V8xbnbKL",leftCornerLargeRibbonText:"ReactRibbons_leftCornerLargeRibbonText_1vPBHBrNbo1_T7ApSNGFBz",rightRibbon:"ReactRibbons_rightRibbon_1U_hyaQbXrjGdr5diDkP4J",rightRibbonText:"ReactRibbons_rightRibbonText_3oO5W55LjrYkBS1zXIqGFo",rightLargeRibbon:"ReactRibbons_rightLargeRibbon_3kFosVYSxjkNLiIlgAau5-",rightLargeRibbonText:"ReactRibbons_rightLargeRibbonText_2Qt8aGFwCEOMXDh3gE7LPt",leftRibbon:"ReactRibbons_leftRibbon_3GNEv0eSmq2XZPFgY3OdU4",leftRibbonText:"ReactRibbons_leftRibbonText_aBRlvzZrqntSZwv1D7Bjt",leftLargeRibbon:"ReactRibbons_leftLargeRibbon__DwM5zy9iBDjj17ph6pUf",leftLargeRibbonText:"ReactRibbons_leftLargeRibbonText_1SAojwHIrk8Rz0e2pG0aF_"},e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";var o=n(8);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])}));