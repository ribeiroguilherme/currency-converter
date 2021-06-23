(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={row:"CurrencyRow_row__Lr9Mm",input:"CurrencyRow_input__sDDuN"}},,function(e,n,t){e.exports={title:"CurrencyConverter_title__XnJDQ",loader:"CurrencyConverter_loader__1m2d5"}},function(e,n,t){e.exports={pageContainer:"CurrencyConverterPage_pageContainer__EBSbb",currencyConverterCard:"CurrencyConverterPage_currencyConverterCard__2CgoV"}},,function(e,n,t){e.exports={card:"Card_card__1eE8R"}},,function(e,n,t){e.exports={wrapper:"ConversionRatesInfo_wrapper__Ra48s"}},function(e,n,t){e.exports={select:"Select_select__3UVD7"}},function(e,n,t){e.exports={input:"Input_input__3PNbO"}},function(e,n,t){e.exports={errorMessage:"ErrorMessage_errorMessage__9e1OK"}},function(e,n,t){e.exports={spinner:"Spinner_spinner__1Neu5",spin:"Spinner_spin__2cA5G"}},,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(12),s=t.n(c),u=t(3),o=t(5),i=t(13),l=t.n(i),p=t(0),j=["className","children"],b=function(e){var n=e.className,t=e.children,r=Object(o.a)(e,j);return Object(p.jsx)("div",Object(u.a)(Object(u.a)({className:"".concat(l.a.card," ").concat(n)},r),{},{children:t}))},f=t(4),d=t.n(f),v=t(6),C=t(2),O=t(7),m=t(14),h=function e(){Object(O.a)(this,e)};h.build=function(e){return Object.entries(e).filter((function(e){return Object(C.a)(e,2)[1]})).map((function(e){var n=Object(C.a)(e,2),t=n[0],r=n[1];return r?"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(Array.isArray(r)?r.join(","):r)):""})).join("&")};var x,_=h,y=function(){function e(){Object(O.a)(this,e),this.baseUrl="http://api.exchangeratesapi.io/v1/"}return Object(m.a)(e,[{key:"fetchLatestRates",value:function(){var e=Object(v.a)(d.a.mark((function e(n,t){var r,a,c,s,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.build({base:n,symbols:t,access_key:Object({NODE_ENV:"production",PUBLIC_URL:"/currency-converter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_KEY_EXCHANGE_RATES}),e.next=3,fetch("".concat(this.baseUrl,"latest?").concat(r));case 3:if((a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:throw c=e.sent,s=c.error,Error("".concat(s.code,": ").concat(s.message));case 10:return e.next=12,a.json();case 12:return u=e.sent,e.abrupt("return",u);case 14:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}]),e}(),g=t(15),S=t.n(g),N=function(e){var n=e.fromCurrency,t=e.toCurrency,r=e.rate;return n&&t&&r?Object(p.jsxs)("div",{className:S.a.wrapper,children:[Object(p.jsxs)("p",{children:["1 ",n," = ",r.toFixed(5)," ",t]}),Object(p.jsxs)("p",{children:["1 ",t," = ",(1/r).toFixed(5)," ",n]})]}):null},w=t(16),R=t.n(w),E=["name","options","className","onChange"],V=function(e){var n=e.name,t=e.options,r=e.className,a=e.onChange,c=Object(o.a)(e,E);return Object(p.jsx)("select",Object(u.a)(Object(u.a)({className:"".concat(R.a.select," ").concat(r),name:n,onChange:a},c),{},{children:t&&t.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))}))},k=t(17),A=t.n(k),F=["name","className"],T=function(e){var n=e.name,t=e.className,r=Object(o.a)(e,F);return Object(p.jsx)("input",Object(u.a)({className:"".concat(A.a.input," ").concat(t),name:n},r))},I=t(8),M=t.n(I),D=function(e){var n=e.inputValue,t=e.currencyValue,a=e.currencySymbols,c=e.onChangeInputValue,s=e.onChangeCurrency,u=r.useMemo((function(){return a.map((function(e){return{value:e,label:e}}))||[]}),[a]);return Object(p.jsxs)("div",{className:M.a.row,children:[Object(p.jsx)(T,{className:M.a.input,"aria-label":"Currency Amount Field",name:"currenyAmountField",type:"number",value:n,onChange:c}),Object(p.jsx)(V,{className:M.a.input,"aria-label":"Currency Type",value:t,onChange:s,options:u})]})},P=t(18),U=t.n(P),L=function(e){var n=e.children;return n?Object(p.jsx)("p",{className:U.a.errorMessage,children:n}):null},K=t(19),B=t.n(K),H=["color","size","className"];!function(e){e.medium="32"}(x||(x={}));var J=function(e){var n=e.color,t=void 0===n?"#0abf53":n,r=e.size,a=void 0===r?"medium":r,c=e.className,s=void 0===c?"":c,i=Object(o.a)(e,H);return Object(p.jsx)("div",Object(u.a)(Object(u.a)({className:"".concat(B.a.spinner," ").concat(s)},i),{},{children:Object(p.jsx)("svg",{width:x[a],height:x[a],viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9163 8C15.9163 8.61701 15.4162 9.1172 14.7991 9.1172C14.1821 9.1172 13.6819 8.61701 13.6819 8C13.6819 4.86177 11.1379 2.31774 7.99967 2.31774C4.86145 2.31774 2.31741 4.86177 2.31741 8C2.31741 11.1382 4.86145 13.6823 7.99967 13.6823C8.61669 13.6823 9.11688 14.1825 9.11688 14.7995C9.11688 15.4165 8.61669 15.9167 7.99967 15.9167C3.62742 15.9167 0.0830078 12.3723 0.0830078 8C0.0830078 3.62775 3.62742 0.0833333 7.99967 0.0833333C12.3719 0.0833333 15.9163 3.62775 15.9163 8Z",fill:t})})}))},W=t(10),z=t.n(W),G=function(){var e=function(){var e=r.useState(new y);return Object(C.a)(e,1)[0]}(),n=r.useState([]),t=Object(C.a)(n,2),a=t[0],c=t[1],s=r.useState(""),u=Object(C.a)(s,2),o=u[0],i=u[1],l=r.useState(""),j=Object(C.a)(l,2),b=j[0],f=j[1],O=r.useState(!0),m=Object(C.a)(O,2),h=m[0],x=m[1],_=r.useState(1),g=Object(C.a)(_,2),S=g[0],w=g[1],R=r.useState({}),E=Object(C.a)(R,2),V=E[0],k=E[1],A=r.useState(""),F=Object(C.a)(A,2),T=F[0],I=F[1];r.useEffect((function(){function n(){return(n=Object(v.a)(d.a.mark((function n(){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.fetchLatestRates();case 2:t=n.sent,r=Object.keys(t.rates),c(r),i(t.base),f(r[0]),k(t.rates);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]);var M=r.useCallback(function(){var n=Object(v.a)(d.a.mark((function n(t,r){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.fetchLatestRates(t,[r]);case 2:a=n.sent,k(a.rates);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[e]),P=r.useCallback((function(e){x(!0),w(parseFloat(e.target.value))}),[]),U=r.useCallback((function(e){x(!1),w(parseFloat(e.target.value))}),[]),K=r.useCallback(function(){var e=Object(v.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(n.target.value,b);case 3:i(n.target.value),I(""),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),i(o),I(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),[M,o,b]),B=r.useCallback((function(e){f(e.target.value)}),[]),H=r.useMemo((function(){var e=V[b];return h?{toValue:(S*e).toFixed(2),fromValue:S,currentRate:e}:{fromValue:(S/e).toFixed(2),toValue:S,currentRate:e}}),[V,b,h,S]),W=H.fromValue,G=H.toValue,X=H.currentRate;return!o||!b||!V?Object(p.jsx)(J,{className:z.a.loader}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:z.a.title,children:"Currency Converter"}),Object(p.jsx)(D,{inputValue:W,currencyValue:o,currencySymbols:a,onChangeInputValue:P,onChangeCurrency:K}),Object(p.jsx)(D,{inputValue:G,currencyValue:b,currencySymbols:a,onChangeInputValue:U,onChangeCurrency:B}),Object(p.jsx)(N,{fromCurrency:o,toCurrency:b,rate:X}),Object(p.jsx)(L,{children:T})]})},X=t(11),Q=t.n(X),Y=function(){return Object(p.jsx)("div",{className:Q.a.pageContainer,children:Object(p.jsx)(b,{className:Q.a.currencyConverterCard,children:Object(p.jsx)(G,{})})})};var Z=function(){return Object(p.jsx)(Y,{})};t(26),t(27);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.1aedfced.chunk.js.map