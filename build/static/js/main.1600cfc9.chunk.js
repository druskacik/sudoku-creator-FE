(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{33:function(e,t,n){e.exports=n(48)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=(n(38),n(16)),l=n(17),u=n(20),s=n(18),f=n(21),h=(n(39),n(11)),m=n(9),p=(n(40),function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/database"},"Database")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/about"},"About"))))}),d=n(25),v=n.n(d),b=n(8),g=n(30),E=(n(46),function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("colgroup",null,r.a.createElement("col",{span:"3"})),r.a.createElement("colgroup",null,r.a.createElement("col",{span:"3"})),r.a.createElement("colgroup",null,r.a.createElement("col",{span:"3"})),function(){for(var e=[],t=function(e){for(var t=[],n=function(e,t){for(var n=[],a=0;a<9;a+=1)n.push(r.a.createElement("td",{key:"".concat(3*e+t).concat(a),id:"".concat(3*e+t).concat(a)}));return n},a=0;a<3;a+=1)t.push(r.a.createElement("tr",{key:"".concat(3*e+a,"row")},n(e,a)));return t},n=0;n<3;n+=1)e.push(r.a.createElement("tbody",{key:"".concat(n,"threeRows")},t(n)));return e}()))}),y=function(e,t){for(var n=0,a=0;a<9;a+=1)for(var r=0;r<9;r+=1){var o=document.getElementById("".concat(a).concat(r));Boolean(e[a][r])?(o.innerText=e[a][r],n+=1):o.innerText=""}document.getElementById("creationTime").innerText="Creation time: ".concat(t," ms"),document.getElementById("numberOfClues").innerText="Number of clues: ".concat(n)},k=n(12),O=function(){for(var e=[],t=0;t<729;t++)e[t]=new Array(324).fill(0),e[t][Math.floor(t/9)]=1,e[t][81+9*Math.floor(t/81)+t%9]=1,e[t][162+t%81]=1,e[t][243+t%9+9*Math.floor(t%81/27)+27*Math.floor(t/243)]=1;return e},w=function(e,t,n){var a=[];return t[n].forEach((function(n){e[n].forEach((function(a){t[a].forEach((function(t){if(t!=n){var r=e[t].indexOf(a);r>=0&&e[t].splice(r,1)}}))})),a.push(e[n]),delete e[n]})),a},j=function(e,t,n,a){t[n].reverse().forEach((function(n){e[n]=a.pop(),e[n].forEach((function(a){t[a].forEach((function(t){t!==n&&e[t].push(a)}))}))})),t[n].reverse()},S=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(r)return e.riesenia=[],e(t,n,a,!1),e.riesenia;if(!(e.riesenia.length>1))if(0===Object.keys(t).length){for(var o=[],i=0;i<a.length;i++)o.push(a[i]);e.riesenia.push(o)}else{var c=Object.keys(t).reduce((function(e,n){return t[e].length>t[n].length?n:e}));t[c].forEach((function(r){a.push(r);var o=w(t,n,r);e(t,n,a,!1),j(t,n,r,o),a.pop()}))}},A=function(e,t){var n={};e.forEach((function(e){return n[e]=[]}));var a=function(e){t[e].forEach((function(t){n[t].push(e)}))};for(var r in t)a(r);return[n,t]},N=function(e){for(var t=e.length,n=e[0].length,a={},r=0;r<t;r++){a[r]=[];for(var o=0;o<n;o++)1===e[r][o]&&a[r].push(o)}return a},D=function(e){for(var t=[],n=0;n<9;n++)t[n]=new Array(9).fill(0);for(var a=0;a<e.length;a++){var r=Number(e[a]);t[Math.floor(Math.floor(r/9)/9)][Math.floor(r/9)%9]=r%9+1}return t},T=function(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Object(k.a)(Array(729).keys()),o=0;o<e;o++){var i=Math.floor(Math.random()*r.length),c=r[i];a.push(c),r.splice(i,1),n[c].forEach((function(e){t[e].forEach((function(a){n[a].forEach((function(n){if(n!=e){var o=t[n].indexOf(a);o>=0&&t[n].splice(o,1),(o=r.indexOf(Number(a)))>=0&&r.splice(o,1)}}))})),delete t[e]}))}return[t,n,a,r]},C=function(){var e,t,n,a,r=[],o=Object(k.a)(Array(729).keys()),i=[],c=Object(k.a)(Array(324).keys()),l=N(O()),u=A(c,l),s=Object(b.a)(u,2);for(c=s[0],l=s[1];1!==r.length;){if(r.length>1||0===i.length){var f=void 0;switch(Math.floor(i.length/8)){case 0:f=7;break;case 1:f=5;break;case 2:f=3;break;default:f=2}e=JSON.parse(JSON.stringify(c)),t=JSON.parse(JSON.stringify(l)),n=i.slice(),a=o.slice();var h=T(f,c,l,i,o),m=Object(b.a)(h,4);c=m[0],l=m[1],i=m[2],o=m[3]}else{c=JSON.parse(JSON.stringify(e)),l=JSON.parse(JSON.stringify(t)),i=n.slice(),o=a.slice();var p=T(1,c,l,i,o),d=Object(b.a)(p,4);c=d[0],l=d[1],i=d[2],o=d[3]}r=S(c,l,i)}return[c,l,i]},x=function(){var e=Date.now(),t=C(),n=Object(b.a)(t,3),a=(n[0],n[1],n[2]),r=Date.now();return[D(a),r-e]},J={apiUrl:"https://rocky-headland-25890.herokuapp.com"},M=function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x(),n=Object(b.a)(t,2),a=n[0],r=n[1],y(a,r),fetch("".concat(J.apiUrl,"/api/post-sudoku"),{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({puzzle:a,creationTime:r})});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,E(),r.a.createElement("button",{onClick:e},"Create"),r.a.createElement("p",{id:"creationTime"},"Creation time:"),r.a.createElement("p",{id:"numberOfClues"},"Number of clues:"))},z=function(){return r.a.createElement("div",null,"Coming soon. Working on it, boyz.")},U=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The generative process starts with an empty grid. In several iterations, bunch of numbers is added to the grid randomly, and these are validated once sudoku solver confirms the current grid still has a solution. In case of 2 or more solutions algorithms continues, if solution is unique it stops."),r.a.createElement("p",null,"Sudoku solver works in a matter of one milisecond, using ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Knuth%27s_Algorithm_X"},"Dancing Links Algorithm")," (known also as Algorithm X) decribed by Donald Knuth. Overall process should take about 30 \u2013 200 ms on PC and 50 \u2013 1000 ms on mobile device, depending on computational power."),r.a.createElement("p",null,"Source code for this page (not necessarily the latest version) is ",r.a.createElement("a",{href:"https://github.com/nessiaem/sudoku"},"published on github"),". Also, there is a ",r.a.createElement("a",{href:"https://www.npmjs.com/package/dancing-links-algorithm"},"npm package")," available containing my implementation of Dancing Links Algorithm, which can be used to solve various problems."),r.a.createElement("p",null,"For the lack of time (and wit), the generative algorithm (and especially sudoku minimizing algorithm) are not as fast as is their potential to be. Feel free to inspire from this and make it better. If you feel the need, do not hesitate to contact me on: robert.druska@gmail.com"))},I=n(19),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.readSudokus()}},{key:"renderPuzzles",value:function(e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;t.push(r.a.createElement("p",{key:l.id},l.puzzle))}}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}},{key:"render",value:function(){return r.a.createElement("div",null,"Sudoku List",this.renderPuzzles(this.props.sudokus))}}]),t}(a.Component),K=(Object(I.b)((function(e){return{sudokus:e.sudokus}}),(function(e){return{readSudokus:function(){return e((function(e){fetch("".concat(J.apiUrl,"/api/database"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})}).then((function(e){return e.json()})).then((function(t){e({type:"LOAD_SUDOKUS",data:t})})).catch((function(t){console.log(t),e({type:"LOAD_SUDOKUS_ERROR"})}))}))}}}))(B),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("h2",null,"This is HEROKU version of the page."),r.a.createElement(m.a,{path:"/",exact:!0,component:M}),r.a.createElement(m.a,{path:"/about",component:U}),r.a.createElement(m.a,{path:"/database",component:z})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(10),_=n(32),R=Object(L.c)({sudokus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"LOAD_SUDOKUS"===t.type?t.data?t.data.sudokus:[]:e}}),H=Object(L.d)(R,Object(L.a)(_.a));i.a.render(r.a.createElement(I.a,{store:H},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1600cfc9.chunk.js.map