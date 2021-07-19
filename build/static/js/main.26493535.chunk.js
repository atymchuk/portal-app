(this["webpackJsonpportal-app"]=this["webpackJsonpportal-app"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(39),s=n.n(r),i=n(26),a=(n(116),n(98));"undefined"===typeof window.TextEncoder&&(window.TextEncoder=a.TextEncoder);var o=n(24),l=n.n(o),h=n(40),u=n(10),d=n(36),j=n(14),b=n(149),p={oidc:{clientId:"0oa3u3rjh4IBxiWRP4x7",issuer:"https://okta-dev.percona.com/oauth2/default",redirectUri:"".concat(window.location.origin,"/login/callback"),scopes:["openid","profile","email"],pkce:!0,disableHttpsCheck:"false"},resourceServer:{messagesUrl:"https://msg.pmm.one/api/messages"}},O=n(43),x=n(154),f=n(153),m=n(2),g=function(){var e=Object(u.f)(),t=Object(j.d)(),n=t.authState,r=t.oktaAuth,s=Object(c.useState)(null),i=Object(O.a)(s,2),a=i[0],o=i[1];Object(c.useEffect)((function(){n&&n.isAuthenticated?r.getUser().then((function(e){o(e)})):o(null)}),[n,r]);var d=function(){var t=Object(h.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/login");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.a,{as:"h1",children:"PKCE Flow w/ Custom Login"}),n.isAuthenticated&&!a&&Object(m.jsx)("div",{children:"Loading user information..."}),n.isAuthenticated&&a&&Object(m.jsxs)("section",{children:[Object(m.jsxs)("p",{children:["Welcome, \xa0",a.name,"!"]}),Object(m.jsxs)("p",{children:["You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage. Visit the"," ",Object(m.jsx)("a",{href:"/profile",children:"My Profile"})," ","page to take a look inside the ID token."]}),Object(m.jsx)("h3",{children:"Next Steps"}),Object(m.jsx)("p",{children:"Currently this application is a stand-alone front end application.  At this point you can use the access token to authenticate yourself against resource servers that you control."}),Object(m.jsx)("p",{children:"This sample is designed to work with one of our resource server examples.  To see access token authentication in action, please download one of these resource server examples:"}),Object(m.jsx)("ul",{children:[{label:"Node/Express Resource Server Example",url:"https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server"}].map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:e.label})},e.url)}))}),Object(m.jsxs)("p",{children:["Once you have downloaded and started the example resource server, you can visit the"," ",Object(m.jsx)("a",{href:"/messages",children:"My Messages"})," ","page to see the authentication process in action."]})]}),!n.isAuthenticated&&Object(m.jsxs)("section",{children:[Object(m.jsx)("p",{children:"If you\u2018re viewing this page then you have successfully started this React application."}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"This example shows you how to use the "}),Object(m.jsx)("a",{href:"https://github.com/okta/okta-react",children:"Okta React Library"}),Object(m.jsx)("span",{children:" to add the "}),Object(m.jsx)("a",{href:"https://developer.okta.com/docs/guides/implement-auth-code-pkce",children:"PKCE Flow"}),Object(m.jsx)("span",{children:" to your application."})]}),Object(m.jsx)("p",{children:"When you click the login button below, you will be presented the login page on the Okta Sign-In Widget hosted within the application. After you authenticate, you will be logged in to this application with an ID token and access token. These tokens will be stored in local storage and can be retrieved at a later time."}),Object(m.jsx)(f.a,{id:"login-button",primary:!0,onClick:d,children:"Login"})]})]}):Object(m.jsx)("div",{children:"Loading..."})},v=n(102),k=(n(134),function(){var e=Object(j.d)().oktaAuth,t=Object(c.useRef)();return Object(c.useEffect)((function(){if(!t.current)return!1;var n=p.oidc,c=n.issuer,r=n.clientId,s=n.redirectUri,i=n.scopes,a=new v({features:{registration:!0,rememberMe:!0,router:!0},baseUrl:c.split("/oauth2")[0],clientId:r,redirectUri:s,logo:"//logo.clearbit.com/percona.com",language:"en",i18n:{en:{"primaryauth.title":"Log in to Percona Portal","primaryauth.submit":"Login"}},authParams:{issuer:c,scopes:i},useInteractionCodeFlow:!1});return a.renderEl({el:t.current},(function(t){console.log(t),e.handleLoginRedirect(t.tokens)}),(function(e){throw e})),function(){return a.remove()}}),[e]),Object(m.jsx)("div",{ref:t})}),w=n(56),y=n(152),A=n(151),I=function(){var e=Object(j.d)(),t=e.authState,n=e.oktaAuth,r=Object(c.useState)(null),s=Object(O.a)(r,2),i=s[0],a=s[1],o=Object(c.useState)(!1),l=Object(O.a)(o,2),h=l[0],u=l[1];Object(c.useEffect)((function(){if(t.isAuthenticated){var e=n.getAccessToken();fetch(p.resourceServer.messagesUrl,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){var t=0,n=e.messages.map((function(e){var n=new Date(e.date),c=n.toLocaleDateString(),r=n.toLocaleTimeString();return t+=1,{date:"".concat(c," ").concat(r),text:e.text,id:"message-".concat(t)}}));a(n),u(!1)})).catch((function(e){u(!0),console.error(e)}))}}),[t]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)(x.a,{as:"h1",children:[Object(m.jsx)(w.a,{name:"mail outline"}),"My Messages"]}),h&&Object(m.jsx)(y.a,{error:!0,header:"Failed to fetch messages.  Please verify the following:",list:["You've downloaded one of our resource server examples, and it's running on port 8000.","Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use."]}),!i&&!h&&Object(m.jsx)("p",{children:"Fetching Messages.."}),i&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["This component makes a GET request to the resource server example, which must be running at",Object(m.jsx)("code",{children:"localhost:8000/api/messages"})]}),Object(m.jsxs)("p",{children:["It attaches your current access token in the"," ",Object(m.jsx)("code",{children:"Authorization"})," ","header on the request, and the resource server will attempt to authenticate this access token. If the token is valid the server will return a list of messages.  If the token is not valid or the resource server is incorrectly configured, you will see a 401"," ",Object(m.jsx)("code",{children:"Unauthorized response"}),"."]}),Object(m.jsxs)("p",{children:["This route is protected with the"," ",Object(m.jsx)("code",{children:"<SecureRoute>"})," ","component, which will ensure that this page cannot be accessed until you have authenticated and have an access token in local storage."]}),Object(m.jsxs)(A.a,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Date"}),Object(m.jsx)("th",{children:"Message"})]})}),Object(m.jsx)("tbody",{children:i.map((function(e){return Object(m.jsxs)("tr",{id:e.id,children:[Object(m.jsx)("td",{children:e.date}),Object(m.jsx)("td",{children:e.text})]},e.id)}))})]})]})]})},S=n(150),E=n(103),T=function(){var e=Object(u.f)(),t=Object(j.d)(),n=t.authState,c=t.oktaAuth,r=function(){var t=Object(h.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.push("/login"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.signOut());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(m.jsx)(S.a,{fixed:"top",children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(S.a.Item,{children:[Object(m.jsx)(E.a,{size:"mini",src:"//logo.clearbit.com/percona.com"}),Object(m.jsx)(i.b,{to:"/",style:{marginLeft:"1em"},children:"Percona Portal"})]}),n.isAuthenticated&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(S.a.Item,{id:"messages-button",children:[Object(m.jsx)(w.a,{name:"mail outline"}),Object(m.jsx)(i.b,{to:"/messages",children:"Messages"})]}),Object(m.jsxs)(S.a.Item,{id:"profile-button",children:[Object(m.jsx)(w.a,{name:"user outline"}),Object(m.jsx)(i.b,{to:"/profile",children:"Profile"})]}),Object(m.jsxs)(S.a.Item,{id:"logout-button",onClick:s,children:[Object(m.jsx)(w.a,{name:"sign-out"}),"Logout"]})]}),!n.isAuthenticated&&Object(m.jsx)(S.a.Item,{onClick:r,children:"Login"})]})}):null},P=function(){var e=Object(j.d)(),t=e.authState,n=e.oktaAuth,r=Object(c.useState)(null),s=Object(O.a)(r,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){t.isAuthenticated?n.getUser().then((function(e){a(e)})):a(null)}),[t,n]),i?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(x.a,{as:"h1",children:[Object(m.jsx)(w.a,{name:"drivers license"})," ","My User Profile (ID Token Claims)"," "]}),Object(m.jsxs)("p",{children:["Below is the information from your ID token which was obtained during the \xa0",Object(m.jsx)("a",{href:"https://developer.okta.com/docs/guides/implement-auth-code-pkce",children:"PKCE Flow"})," ","and is now stored in local storage."]}),Object(m.jsxs)("p",{children:["This route is protected with the"," ",Object(m.jsx)("code",{children:"<SecureRoute>"})," ","component, which will ensure that this page cannot be accessed until you have authenticated."]}),Object(m.jsxs)(A.a,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Claim"}),Object(m.jsx)("th",{children:"Value"})]})}),Object(m.jsx)("tbody",{children:Object.entries(i).map((function(e){var t=e[0],n=e[1],c="claim-".concat(t);return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{id:c,children:n.toString()})]},t)}))})]})]})}):Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Fetching user profile..."})})},L=new d.OktaAuth(p.oidc),U=function(){var e=Object(u.f)(),t=function(){var t=Object(h.a)(l.a.mark((function t(n,c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c){t.next=3;break}return e.replace("/"),t.abrupt("return");case 3:console.log("originalUri",c);try{e.replace(Object(d.toRelativeUrl)(c,window.location.origin))}catch(n){console.log("error",n),e.replace("/")}case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(m.jsxs)(j.c,{oktaAuth:L,onAuthRequired:function(){e.push("/login")},restoreOriginalUri:t,children:[Object(m.jsx)(T,{}),Object(m.jsx)(b.a,{text:!0,style:{marginTop:"7em"},children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",exact:!0,component:g}),Object(m.jsx)(u.a,{path:"/login/callback",component:j.a}),Object(m.jsx)(u.a,{path:"/login",component:k}),Object(m.jsx)(j.b,{path:"/messages",component:I}),Object(m.jsx)(j.b,{path:"/profile",component:P})]})})]})};n(135);s.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.26493535.chunk.js.map