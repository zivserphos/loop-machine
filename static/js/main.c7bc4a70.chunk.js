(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(A,e,n){},38:function(A,e,n){},40:function(A,e,n){"use strict";n.r(e);var c=n(0),t=n.n(c),a=n(15),o=n.n(a),i=n(9),s=n(43),r=n(13),g=n(4),j=n(5),u=(n(36),function(A){var e=[Math.floor(A/60),A%60];return e[1]<10&&(e[1]="0".concat(e[1].toString())),e[0]<10&&(e[0]="0".concat(e[0].toString())),e.join(":")}),Q="UPDATE_SONG",b="UPDATE_TIME",m="UPDATE_CURSOR",d=function(A){return{type:b,payload:{seconds:A}}},E=n(1);d(10);var I=function(){var A=Object(i.b)(),e=Object(i.c)((function(A){return A})).seconds,n=Object(c.useState)(0),t=Object(r.a)(n,2),a=t[0],o=t[1],s=Object(c.useState)(!1),Q=Object(r.a)(s,2),b=Q[0],m=Q[1],I=Object(c.useRef)(null);Object(c.useEffect)((function(){A(d(a))}),[A,a]);return Object(E.jsxs)("div",{className:"grid-tool-bar",children:[Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",children:"preview"})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",onClick:function(){return o(0)},children:Object(E.jsx)(g.a,{icon:j.b})})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",onClick:function(){return o(e<10?0:a-10)},children:Object(E.jsx)(g.a,{icon:j.f})})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",onClick:function(){b||(m(!0),I.current=setInterval((function(){o((function(A){return A+1}))}),1e3))},children:Object(E.jsx)(g.a,{icon:j.e})})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",onClick:function(){clearInterval(I.current),m(!1)},children:Object(E.jsx)(g.a,{icon:j.d})})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",onClick:function(){return o(e+10)},children:Object(E.jsx)(g.a,{icon:j.g})})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",children:Object(E.jsx)(g.a,{icon:j.c})})}),Object(E.jsx)("span",{children:Object(E.jsxs)("button",{type:"button",children:[Object(E.jsx)("b",{children:"| "}),Object(E.jsx)(g.a,{icon:j.e}),Object(E.jsx)("b",{children:" |"})]})}),Object(E.jsx)("span",{children:Object(E.jsx)("div",{children:u(a)})}),Object(E.jsx)("span",{children:Object(E.jsx)("button",{type:"button",style:{width:"85vw"},children:"GroundBtl(Ground)"})})]})},B=n(23),D=n(42),N=n(41),O=(n(38),function(A){var e=A.index;return Object(E.jsx)(N.a,{xs:1,sm:1,md:1,lg:1,className:"channel-chunk",style:{borderTop:"solid blue 7px"},children:"".concat(e+1," of 8")})}),p=function(A){var e=A.song,n=Object(B.a)(Array(8)).map((function(A,e){return e}));return Object(E.jsxs)(D.a,{className:"justify-content-md-center cube",style:{backgroundColor:e.color},children:[Object(E.jsxs)(N.a,{className:"col1",xs:2,sm:2,md:2,lg:2,children:[Object(E.jsxs)("span",{children:[Object(E.jsx)(g.a,{icon:j.a,className:"cubelogo"}),"".concat(e.name)]}),Object(E.jsx)("img",{src:e.image,alt:"".concat(e.name),className:"songImg"})]}),Object(E.jsx)(N.a,{xs:2,sm:2,md:2,lg:2,className:"col2",children:"".concat(e.band,",   duration:  ").concat(u(e.duration))}),n.map((function(A){return Object(E.jsx)(O,{index:A})}))]})},l={anthem:n.p+"static/media/anthem.b0bb14ff.png",seedsOfFreedom:n.p+"static/media/seeds-of-freedom.386fdce4.png",fantasy:"data:image/png;base64,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",liveIsLife:n.p+"static/media/live-is-life.7e1a33c1.png",soulStorm:n.p+"static/media/soul-storm.d45131fa.png",summerOf69:n.p+"static/media/summer-of-69.89086ba1.png",wonderfulLife:"data:image/png;base64,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",bigInJapan:n.p+"static/media/big-in-japan.3c674bd7.png"},M=[{duration:284,name:"Big In Japan",band:"Alphaville",color:"grey",image:l.bigInJapan},{duration:277,name:"Fantasy",band:"Earth , Wind and Fire",color:"green",image:l.fantasy},{duration:366,name:"Anthem",band:"Leonard Cohen",color:"purple",image:l.anthem},{duration:235,name:"Soul Storm",band:"patrice",color:"brown",image:l.soulStorm},{duration:299,name:"Live Is Life",band:"Opus",color:"orange",image:l.liveIsLife},{duration:216,name:"Summer Of 69",band:"Bryan Adams",color:"red",image:l.summerOf69},{duration:288,name:"Wonderful Life",band:"black",color:"gold",image:l.wonderfulLife},{duration:200,name:"Seeds of freedom",band:"Mano Chou",color:"pink",image:l.seedsOfFreedom}],x=function(){var A=Object(i.c)((function(A){return A}));return Object(E.jsxs)("div",{children:[Object(E.jsx)(I,{}),Object(E.jsx)("span",{style:{marginLeft:"".concat(A.cursorMarginLeft,"vw"),borderLeft:"5px solid black",height:"100vh",position:"absolute"}}),Object(E.jsx)(s.a,{fluid:!0,style:{marginLeft:"1rem"},children:M.map((function(A){return Object(E.jsx)(p,{song:A})}))})]})},R=n(22),h=n(3),H=function(A,e){var n=(A-51.3)/(5/24);return Object(h.a)(Object(h.a)({},e),{},{seconds:n,cursorMarginLeft:A})},Y=function(A,e){var n=51.3+5/24*A;return Object(h.a)(Object(h.a)({},e),{},{seconds:A,cursorMarginLeft:n})},G=function(A,e){var n=M.findIndex((function(e){return e.name===A.name}));return Object(h.a)(Object(h.a)({},e),{},{songIndex:n,song:A})},f={song:M[0],songIndex:0,seconds:0,cursorMarginLeft:51.2},J=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Q:var n=e.payload.song;return n?G(n,A):A;case b:var c=e.payload.seconds;return c?Y(c,A):A;case m:var t=e.payload.updatedCursor;return t?H(t,A):A;default:return A}},S=Object(R.a)({reducer:J});n(39);o.a.render(Object(E.jsx)(t.a.StrictMode,{children:Object(E.jsx)(i.a,{store:S,children:Object(E.jsx)(x,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c7bc4a70.chunk.js.map