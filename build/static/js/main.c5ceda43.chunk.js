(this["webpackJsonpcharter-code-challenge"]=this["webpackJsonpcharter-code-challenge"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(14),a(1)),u=(a(15),a(4)),s=a(7);var i=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),c=Object(o.a)(l,2),i=c[0],m=c[1],h=Object(n.useState)(!1),f=Object(o.a)(h,2),E=f[0],g=f[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),O=d[0],v=d[1],b=Object(n.useState)(""),S=Object(o.a)(b,2),j=S[0],y=S[1],C=Object(n.useState)([]),N=Object(o.a)(C,2),A=N[0],M=N[1],w=Object(n.useState)(""),L=Object(o.a)(w,2),k=L[0],x=L[1],I=Object(n.useState)(!0),P=Object(o.a)(I,2),T=P[0],G=P[1];if(Object(n.useEffect)((function(){fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{headers:{Authorization:"Api-Key q3MNxtfep8Gt"}}).then((function(e){return e.json()})).then((function(e){G(!1),m(e)}))}),[]),!E&&i.length){r(i);var R,D=new Set,W=Object(s.a)(i.reduce((function(e,t){var a=t.genre;return[].concat(Object(u.a)(e),Object(u.a)(a.split(",")))}),[]));try{for(W.s();!(R=W.n()).done;){var U=R.value;D.add(U)}}catch(q){W.e(q)}finally{W.f()}M(Object(u.a)(D).sort((function(e,t){return(e=e.toUpperCase())<(t=t.toUpperCase())?-1:e>t?1:0}))),g(!0)}return Object(n.useEffect)((function(){var e=j.toLowerCase();r(i.filter((function(t){return(!O||O&&t.state===O)&&(!k||k&&-1!==t.genre.indexOf(k))&&(!j||j&&-1!==t.name.toLowerCase().indexOf(e)||-1!==t.genre.toLowerCase().indexOf(e)||-1!==t.city.toLowerCase().indexOf(e))})).sort((function(e,t){return(e=e.name.toUpperCase())<(t=t.name.toUpperCase())?-1:e>t?1:0})))}),[O,k,i,j]),{results:a,setRestaurants:m,state:O,setState:v,query:j,setQuery:y,genres:A,genre:k,setGenre:x,loading:T}},m=a(8);a(16);function h(e){var t=e.query,a=e.setQuery,n=e.state,l=e.setState,c=e.setPage,o=e.genre,u=e.setGenre,s=e.genres;return r.a.createElement("div",{className:"Filters"},r.a.createElement("input",{value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search",type:"text"}),r.a.createElement("select",{value:n,id:"state",onChange:function(e){l(e.target.value),c(1)}},r.a.createElement("option",{value:""},"ALL STATES"),m.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{value:o,id:"state",onChange:function(e){u(e.target.value),c(1)}},r.a.createElement("option",{value:""},"ALL GENRES"),s.map((function(e,t){return r.a.createElement("option",{key:"genre-".concat(t),value:e},e)}))))}a(17);function f(e){var t=e.results,a=e.page;return r.a.createElement("table",{className:"Table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Telephone"),r.a.createElement("th",null,"Genre"))),r.a.createElement("tbody",null,t.length?t.map((function(e,t){var n=e.id,l=e.name,c=e.city,o=e.state,u=e.telephone,s=e.genre;return r.a.createElement("tr",{key:n,hidden:t>=10*a||t<=10*a-11},r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,o),r.a.createElement("td",null,u),r.a.createElement("td",null,s))})):r.a.createElement("tr",null,r.a.createElement("td",{className:"no-results",colSpan:"5"},"No Results"))))}a(18);function E(e){var t=e.page,a=e.setPage,n=e.results;return r.a.createElement("ul",{className:"Pagination"},r.a.createElement("li",{style:t<=1?{opacity:.5}:null,onClick:function(){return a(t<=1?1:t-1)}},"Previous"),r.a.createElement("li",null,t),r.a.createElement("li",{style:Math.ceil(n.length/10)<=t?{opacity:.5}:null,onClick:function(){return a(Math.ceil(n.length/10)<=t?t:t+1)}},"Next"))}var g=function(){var e=i(),t=e.results,a=e.state,l=e.setState,c=e.query,u=e.setQuery,s=e.genres,m=e.genre,g=e.setGenre,p=e.loading,d=Object(n.useState)(1),O=Object(o.a)(d,2),v=O[0],b=O[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Charter Code Challenge"),r.a.createElement(h,{query:c,setQuery:u,state:a,setState:l,setPage:b,genre:m,setGenre:g,genres:s}),p?r.a.createElement("h2",null,"Loading Results..."):r.a.createElement(f,{results:t,page:v}),r.a.createElement(E,{page:v,setPage:b,results:t}),r.a.createElement("footer",null,"Charter Code Challenge | Developed by @jadeallencook"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c5ceda43.chunk.js.map