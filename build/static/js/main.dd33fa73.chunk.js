(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={typeFeedback:"feedback_typeFeedback__3rXyP",btn:"feedback_btn__1qWEM"}},,,,,,function(t,e,n){t.exports={notification:"notification_notification__3z2bq"}},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),r=(n(15),n(16),n(17),n(5)),o=n(6),b=n(7),j=n(10),d=n(9),u=(n(18),n(2)),l=n.n(u),h=n(0),f=function(t){var e=t.quantity;return Object(h.jsxs)("div",{className:l.a.btn,children:[Object(h.jsx)("button",{onClick:e,className:l.a.typeFeedback,children:"good"}),Object(h.jsx)("button",{onClick:e,className:l.a.typeFeedback,children:"neutral"}),Object(h.jsx)("button",{onClick:e,className:l.a.typeFeedback,children:"bad"})]})},O=(n(20),n(8)),x=n.n(O),p=function(){return Object(h.jsx)("p",{className:x.a.notification,children:"No feedback given"})},k=function(t){var e=t.stats,n=e.good,c=e.bad,a=e.neutral,i=c+a+n,s=Math.round(n/(c+a+n)*100);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistics"}),i?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good: ",n]}),Object(h.jsxs)("p",{children:["Neutral: ",a]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",i]}),Object(h.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]}):Object(h.jsx)(p,{})]})},y=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.quantity=function(e){t.setState((function(t){return Object(r.a)({},e.target.textContent,t[e.target.textContent]+1)}))},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Please leave feedback"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{quantity:this.quantity}),Object(h.jsx)(k,{stats:this.state})]})]})}}]),n}(a.a.Component);function v(){return Object(h.jsx)(y,{})}s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.dd33fa73.chunk.js.map