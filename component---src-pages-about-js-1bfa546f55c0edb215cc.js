(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3XHS":function(A,e,a){"use strict";a.r(e);a("91GP");var t=a("laMi"),i=a("q1tI"),n=a.n(i),d=a("vOnD"),c=a("EZK5"),s=a("9CUm"),o=(a("f3/d"),a("9eSz")),r=a.n(o),h=Object(d.b)(r.a).withConfig({displayName:"Avatar",componentId:"sc-5z825a-0"})(["display:inline-block;border-radius:100%;"]),l=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("7zoL"));var E=d.b.a.withConfig({displayName:"PersonIcons__Link",componentId:"sc-2xwflr-0"})(["color:inherit;"]);function g(A){var e=A.website,a=A.twitter,t=A.linkedin,i=A.github,d=A.gitlab,c=A.behance,s=A.medium,o=A.discord,r=function(A,e){if(null==A)return{};var a,t,i={},n=Object.keys(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||(i[a]=A[a]);return i}(A,["website","twitter","linkedin","github","gitlab","behance","medium","discord"]);return n.a.createElement("div",r,e?n.a.createElement(E,{href:e,title:"View "+A.name+"'s website"},n.a.createElement(l.h,null)):null,a?n.a.createElement(E,{href:a,title:"View "+A.name+"'s twitter"},n.a.createElement(l.g,null)):null,t?n.a.createElement(E,{href:t,title:"View "+A.name+"'s linkedin"},n.a.createElement(l.e,null)):null,i?n.a.createElement(E,{href:i,title:"View "+A.name+"'s github"},n.a.createElement(l.c,null)):null,d?n.a.createElement(E,{href:d,title:"View "+A.name+"'s gitlab"},n.a.createElement(l.d,null)):null,c?n.a.createElement(E,{href:c,title:"View "+A.name+"'s behance"},n.a.createElement(l.a,null)):null,s?n.a.createElement(E,{href:s,title:"View "+A.name+"'s medium"},n.a.createElement(l.f,null)):null,o?n.a.createElement(E,{href:o,title:"View "+A.name+"'s discord"},n.a.createElement(l.b,null)):null)}var m=a("+4qi"),b=m.a.TEAM_GRID_2_BREAKPOINT,B=d.b.div.withConfig({displayName:"Person__Modal",componentId:"sc-18uohyj-0"})(["position:fixed;top:0;bottom:0;left:0;right:0;z-index:10;display:flex;flex-direction:row;align-items:center;background:rgba(0,0,0,0.2);"]),j=d.b.div.withConfig({displayName:"Person__ModalContent",componentId:"sc-18uohyj-1"})(["display:flex;flex-direction:row;max-width:960px;margin:0 auto;padding:1rem;background:white;&:focus{outline:0;}"]),w=d.b.div.withConfig({displayName:"Person__PersonWrapper",componentId:"sc-18uohyj-2"})(["text-align:center;cursor:pointer;& ~ &{margin-top:2rem;}@media (min-width:","){& ~ &{margin-top:0;}}"],b),p=Object(d.b)(h).withConfig({displayName:"Person__ModalAvatar",componentId:"sc-18uohyj-3"})(["flex:none;width:5rem;height:5rem;margin-right:1rem;align-self:center;@media (min-width:30rem){width:10rem;height:10rem;}"]),f=Object(d.b)(h).withConfig({displayName:"Person__PersonAvatar",componentId:"sc-18uohyj-4"})(["width:100%;max-width:14rem;height:auto;max-height:14rem;border:4px solid white;"]),Q=d.b.p.withConfig({displayName:"Person__PersonName",componentId:"sc-18uohyj-5"})(["font-size:1.25rem;"]),u=Object(d.b)(g).withConfig({displayName:"Person__BlackIcons",componentId:"sc-18uohyj-6"})(["color:#1a202c;"]),x=Object(d.b)(g).withConfig({displayName:"Person__GrayIcons",componentId:"sc-18uohyj-7"})(["color:#4a5568;"]),k=d.b.div.withConfig({displayName:"Person__divSrOnly",componentId:"sc-18uohyj-8"})(["position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;"]);function N(A){var e=Object(i.useState)(!1),a=e[0],t=e[1],d=Object(i.useState)(!1),c=d[0],s=d[1];Object(i.useEffect)((function(){return t(!0)}),[t]);var o=function(){return s(!0)},r=function(){return s(!1)},h=Object(i.useRef)();Object(i.useEffect)((function(){c&&h.current&&h.current.focus()}));var l=a?k:"div",E=c?n.a.createElement(B,{onClick:r},n.a.createElement(j,{ref:h,tabIndex:0,onKeyUp:function(A){return 27===A.keyCode&&r()},onClick:function(A){return A.stopPropagation()}},n.a.createElement(p,{fluid:A.image.childImageSharp.fluid,alt:A.name}),n.a.createElement("div",null,n.a.createElement(Q,null,A.name),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.children}}),n.a.createElement(u,A)))):null;return n.a.createElement(n.a.Fragment,null,E,n.a.createElement(w,{"data-modalcontrol":!0,tabIndex:0,onKeyUp:function(A){return 13===A.keyCode&&A.target.getAttribute("data-modalcontrol")&&o()},onClick:o},n.a.createElement(f,{fluid:A.image.childImageSharp.fluid,alt:A.name}),n.a.createElement(Q,null,A.name),n.a.createElement(l,{dangerouslySetInnerHTML:{__html:A.children}}),n.a.createElement(x,Object.assign({onClick:function(A){return A.stopPropagation()}},A))))}var R=a("Wbzz");a.d(e,"default",(function(){return D}));var Y=m.a.TEAM_GRID_2_BREAKPOINT,C=m.a.TEAM_GRID_3_BREAKPOINT,I=d.b.div.withConfig({displayName:"about__TeamGrid",componentId:"sc-2hpa8j-0"})(["@media (min-width:","){display:grid;grid-template-columns:repeat(2,1fr);column-gap:1rem;row-gap:3rem;}@media (min-width:","){grid-template-columns:repeat(3,1fr);}"],Y,C);function D(A){var e=t.data.allTeammembers.nodes.map((function(A){return n.a.createElement(N,Object.assign({key:A.id},A.frontmatter),A.about)}));return n.a.createElement(c.a,null,n.a.createElement(s.a,{title:"About"}),n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"RustFest is Europe’s Rust-dedicated conference. The next edition of RustFest will take place as a two-day online event."),n.a.createElement("p",null,"We care about diversity and accessibility at this conference – please take a look at our ",n.a.createElement(R.Link,{to:"/code-of-conduct"},"Code of Conduct")," ","and ",n.a.createElement(R.Link,{to:"/accessibility"},"Accessibility Statement"),"."),n.a.createElement("h2",null,"Team"),n.a.createElement(I,null,e))}},laMi:function(A){A.exports=JSON.parse('{"data":{"allTeammembers":{"nodes":[{"id":"e9a486d5-825e-5628-a2d1-73beb01229d1","about":"<p>Istvan Szmozsanszky (or Flaki, for short) is a JavaScript engineer, trainer &#x26;\\nMozilla Tech Speaker. Flaki works with Mozilla\'s DevRel team on promoting the\\nopen web platform &#x26; making it accessible to all. He loves JavaScript internals\\n&#x26; is often found playing (quite literally) with microcontrollers.</p>","frontmatter":{"name":"István Szmozsánszky","image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4ywHEBDv7AKKzt+7y8/////39/f///9jl63iEkXh4c4GDeoyMhoKOmHJ+jnhxdVBERDo2N0A/QTw/QFBJUIlsj7yIpQCbrrLd5+b////9/f3///+3vLtyd3ZvbmmPhXmbjYCIfnCemY2kp6OGhoFYV1ZAQUM/Q0ZLQ0l4XnireIwAjJyd09zc////////19jUloRya1lLVkQ4aE9Cm4Jxl4FzeGhbdGpgnpiOsqubfHhwRkhNTERLaFFhjF9kAKCloNrg3v////j39dbBq+C9n9+5l8+kg7iSd76klb+lmGpaUFNLQ1xSSp2Pf7Soln93c1lMTmZPVXVMSwCxsqqhm5C3tKzfyLPguprryKvoxKTmv6DXs5zNqZSigm5UR0BTS0JdVU1YUUx7b2Wai39rWFhoTEyGVEsAr52KoI96mox617KT1KuLmn1oc1tOlXxu0Lmp0qeMkWtURjs1OzIuT0dBXFZRVEpMcmFhaFVZdE9OqWRXALORdqGOd6mWf7KLc6WAZlQ5NkQ1NjtBSnZ0d4d3dXpmYlhMTDw0LzcyLk9GQmpgZGhbYnJeZZNkZMN1aQCzlYB5Z1hSSEJHPz2PbWCUaVdkT0l7WUqgdFmqiXaadGJZQD46KypDMCxTOTN9ZmOBeHaPdHC2eXPbh3oAenV5dFxcV0dAtZeGsH5tpXVhpntjv4tmwpd4zquRwZp/Xkg7cFVHe1E9ilNDvoZzfWxnqYJ3xn545pCAAFRZYFJGTHBXUMmXgbiDbaxyWriDaLOGaaqAZrCLb6+KcnpbSZRxV6FuVcSCYZx0YUw7OqByaL91ceKJeABKTlZVWmOHdnBsRTpqRT2zfmXBjWqyhGOke1+ngmW2kHemg2qgdFPLlnO4hmwtJB80JSKCUUm1a2fZfGkAPDxBPDtAbl1UmXJdkmVVpHRgnG5Uq35eonpcq4FksYpxn3thjGVMoXxpWUY8EhEQNiglb0E6pl9Xym1ZACwvNyckJ0U9PndZTGM6NXJIP4NXQaR6WqZ7XqN5X5x6Y41sWYdkUpN5aTovKBgVFDIkImI6MZlbTrBhTAAqNUcyLS4fICVFNzN4SkGIWUW0g16lfF6ddluLaVKBZlN8Xk6DYE2ggmxKOjEOCgw0LCpmRz+HTTueV0IAK0BZHB0hHx0jNTEyel1JoHZauZBtl3ZadVdEZkk6eVtKelhIgl1Hq4txl4FxFRAPJiwxkZGVoIF4g0EtAEBWbzpBTy8xOiQlKXFdSoRkS1xEM11DM2NIOmNHOWxPPXhZRINeRpt3XMatlm1bTBERFU1HS8XCwr2nowBlepNabYNFUWAwMTg4MzQ3LixQPTNaPzBhRTdkSDpmSjt2VEOBX0eIZUq9oIiJc14RDQ0uJCO2s7Dn7PAAc4ehcoiiX3GJRU1bNDQ+bHB2u8G+gHBhXUAzak5AcVNGb09BeFhAfl5EmnlfVUY3DAoLJyEdy83K4N/eAGl2j3aKo3KGn2Rzh46VltPXztXf02hlWWtOQWlMP2hMPmZKOWtPOnBSPm1VQCkjHA4LCyIeG87Mxt7Z1ABUV21ndY95i6WbqbS3vrnQ1My7v7BGRzZYRTdlSTpdQTNcQTJgRDViRjVJNigXFBEHBgU+OzXSzsHa08gA0BknQCQUQwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/009f40cb24583c0e64b9ea8448e55a5c/c6a2b/istv%C3%A1nszmozs%C3%A1nszky-headshot.png","srcSet":"/static/009f40cb24583c0e64b9ea8448e55a5c/19787/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 75w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/59d48/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 150w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/c6a2b/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 300w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/c0bbd/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 400w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"http://twitter.com/slsoftworks","linkedin":"","github":"https://github.com/flaki","gitlab":"","behance":"","medium":"https://medium.com/@slsoftworks","discord":""}},{"id":"7f4b3a73-0efa-53cf-bcfe-cd8a2b3a3b61","about":"<p>Stefan Schindler (also known as dns2utf8) is a systems engineer and full stack developer who likes building communities and teaching.</p>","frontmatter":{"name":"Stefan Schindler","image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFaUlEQVQ4yx2U+VPTdxrHv/9Gp7WdcdZWe6zWrha0VoSghCNCUiAJSSD3/SWQEEgg3BCiJMhhoCCuFpRDwbWtVJHVOu5q1dlOp3am1zjTqr12xR5rrdLOvPrRH97z/PS8n/fzfg7JZbbSE6lnaeow/1k4wQURp/fG6Q/U0G130WJxEDbaCZRXEtVW0WvzkvaHSMt1dFs9mHYVseWvG1m/9oXHkMrVWpr8MidG93Nu6i3mhwcYaooS9/kJGyqxFpehL9Hj1hjpqnSQcsokBVIumWaDDW32LvIyt6LKykajyEPKzVISsNg4EO/icO8eEg1hwnYrqu1ZrFu9hufXPM8rL2eybf0mtFk5xExWWirtNBlt+ErK0OXuxFNaSszpprs6hLTjtVxk0XYqFqMrHEa2WFDu2MGLa/6CWrGNMmU2xl25VBXls/65teRu2kpQb0Iu02Mu3I2lqIg2l4vhphaOJpJIux4pNNvpCoWpd/vQ7y4h46XniFebuXbs73x8ao73Jwa5OjNCIlzNs6ueQZOjwFaiwVGipkarpUfYMxqNcXxPCqkgV4VsstDk8QtiG+qcHHoDRm4sTXHr8lluXj3PjQvz3Dg3x/xIipeeXUN2xmYsgkzW6Wm2WumvqeVgpJlj3UJhmaqMsNVOh18MQXipycni9HAHNy8uCMJz3PnoEjc/OMNnp6dI1jpZveopMjZsQJNXSEVhMf5yHa0iL+Hys782itTodHGguZGZeAejjREUf9tAX9DFv8bTXBxKsk/20WqziOoNHBVYt+ppgSdRbssiT1GIemc+VQUqAm9oaTE7kQ62xlgcTHFhZIDF/iRetYrcF9dh2rqJUz0x3Ntfx759K9PNPi4fGaIiO4v9lnJaHC5KtRZ0Gh26gqLHpHKpAWm2u4Mzfb0s9adYSCYYCAZIuCs5mWjl1j8X+HhyjE/nJvnqvTmW3txLOujg3+l+OiNtVNdEqPVW4zUYMBQUolUokY53tDIvcLKrnZOi7f6An7E6L1dHk3x2Ypaz8WY+FEv/ybFDLI3vYyTkxlWyG6fwrKWlk5a6EG0BHwFjBZWFRUjTsUYmGuo5Go0wHYsyWO1jJOhhyGWiOltBu1pD2mXj0qFBTvT3kPBaWfvUE2Ru3kSjyInVBYjX19Lq94jhmpHGQkHGgo9Qy3BAJmG30St7iOo01GRs52CFjcmmBmaS3XR67BzorBOxFIN6I/mKLGTZSY3sICAK+ZxVYsomE+3iUrpsNtrMZsI6A05xUp7yYo6H67i4L8mb7U3oVEpq9btZTHcyPxhk4XgNI0kvcsiO0WOizFaOxlyKZFQW4NW8Qb3BKD6LjQaTDYdW3HKxklbR6mxvShy+AsX6tUzFw3wwM8yRvihBbwWX5zu5dv0y02eWaB/qwxzyIRmURdQIVR0ON/tq69gj3pLX0caW1/MpevUVdJkb0G9+gaSlhNMDHVx9Z4JUc5SdCi2Lk3u5e2+F5fvw9Z0HLF25jlRZUEzIUEWn289QfROzI4eJtB/iydXZ2DR64WkFMdU2kkYls91hLhxN0xgI81qGgfOzB7nzK3z70wNuL//Orbt/IGnzCvCJ79HTEOPUPxb54tY9ZuYW2JipEYurZirdzZmJcRanprn09jt8OJnAY3Siynfx0ZXzjwm///kht++uCOIVJE2hitGxCa5cv8EnX//Ip7cfcun9s/hcAUoNDgZ7fcwN1XFyb0TsYBURfR7ZOytxe3r4Yfku/7sH//3/Ct8sP+CbHwVhfX2UL3+4zxff/8bnN3/h89v3uXbtOkf2t+IOxulLv8v40Dh9HV0ceWuSwZE+tuR6GRh7j+XfHqlbEYS/891PQuXyQ/4E6mPYx37lBZoAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/c98730c3790ad0b98d321df8b874f482/318c5/stefan_schindler.png","srcSet":"/static/c98730c3790ad0b98d321df8b874f482/19787/stefan_schindler.png 75w,\\n/static/c98730c3790ad0b98d321df8b874f482/318c5/stefan_schindler.png 123w","sizes":"(max-width: 123px) 100vw, 123px"}}},"website":"https://estada.ch","twitter":"https://twitter.com/dns2utf8","linkedin":"","github":"https://github.com/dns2utf8","gitlab":"https://gitlab.com/dns2utf8","behance":"","medium":"","discord":""}},{"id":"292488aa-ad60-541d-a6f9-d8e93a11cd78","about":"<p>Alexander is a web developer with over 15 years of experience. He attended\\nRustFest for the first time in 2019 in Barcelona and is now helping to organise\\nRustFest 2020 in his country of origin: The Netherlands. </p>","frontmatter":{"name":"Alexander Varwijk","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwH/2gAMAwEAAhADEAAAAb5NEaR6SY2DMMXE3//EABoQAAMBAQEBAAAAAAAAAAAAAAECAwAREiH/2gAIAQEAAQUCb4PTBtSyzNbIG6DmPcdNiB//xAAZEQACAwEAAAAAAAAAAAAAAAABEAIDESL/2gAIAQMBAT8BrHJ1RX//xAAWEQEBAQAAAAAAAAAAAAAAAAACEDH/2gAIAQIBAT8BexT/xAAaEAADAQADAAAAAAAAAAAAAAAAAREQAiFh/9oACAEBAAY/Aic5nou6mVFe/wD/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVEQQf/aAAgBAQABPyH4C3RA4KPIuZRFsZoiRYFiTdLGMXcvignZ/9oADAMBAAIAAwAAABAvN8D/xAAXEQADAQAAAAAAAAAAAAAAAAAAASEQ/9oACAEDAQE/EFQUS1//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EHcxl3//xAAcEAEBAQEAAgMAAAAAAAAAAAABEQAhQVFhgZH/2gAIAQEAAT8QtGygPlWGpzcHxvD6wkalU8VnquXRSAM9L+4IB6hMolYrgdfnOU4Lf//Z","aspectRatio":1,"src":"/static/7b9606cead995f21332e8bce02b05942/58d6d/alexandervarwijk-headshot.jpg","srcSet":"/static/7b9606cead995f21332e8bce02b05942/c6f75/alexandervarwijk-headshot.jpg 75w,\\n/static/7b9606cead995f21332e8bce02b05942/421ae/alexandervarwijk-headshot.jpg 150w,\\n/static/7b9606cead995f21332e8bce02b05942/58d6d/alexandervarwijk-headshot.jpg 300w,\\n/static/7b9606cead995f21332e8bce02b05942/3643e/alexandervarwijk-headshot.jpg 450w,\\n/static/7b9606cead995f21332e8bce02b05942/f5db2/alexandervarwijk-headshot.jpg 600w,\\n/static/7b9606cead995f21332e8bce02b05942/e9826/alexandervarwijk-headshot.jpg 1024w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://www.alexandervarwijk.com","twitter":"https://twitter.com/Kingdutch","linkedin":"https://www.linkedin.com/in/alexander-varwijk/","github":"https://github.com/Kingdutch","gitlab":"","behance":"","medium":"","discord":""}},{"id":"d27ef775-54bf-5883-b3b0-0b67a9cb9837","about":"<p>Jan-Erik is a Firefox Engineer at Mozilla, working from Berlin, Germany.\\nHe\'s an active member of the Rust community team since 2014.\\nTo get away from computers he picked up scuba diving to see the world under water.</p>","frontmatter":{"name":"Jan-Erik Rediger","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAQMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAaPHXkaTKPK0xKYn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBCEAEBETMf/aAAgBAQABBQKy2VrrMIw1ckeupgM7L8TPIf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAERACEiAhAgMUH/2gAIAQEABj8CensmZFnZPLwS64XP/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPyEcI0N8lgOVxODdyv1X5c+p2l7EpHYnupSf/9oADAMBAAIAAwAAABDD8MD/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QEiC//8QAFhEBAQEAAAAAAAAAAAAAAAAAASAh/9oACAECAQE/EF2P/8QAHRABAQACAgMBAAAAAAAAAAAAAREAIUFhMVGBcf/aAAgBAQABPxAFEi7Gi2c+MrFN0AQ+ZXWEXGLNvv5LgpIcEF3x1kGof0xJQvtd47aEjW5bJQr0MM//2Q==","aspectRatio":1,"src":"/static/88af73c7362d481bfc5b357430d876b6/58d6d/janerikrediger-headshot.jpg","srcSet":"/static/88af73c7362d481bfc5b357430d876b6/c6f75/janerikrediger-headshot.jpg 75w,\\n/static/88af73c7362d481bfc5b357430d876b6/421ae/janerikrediger-headshot.jpg 150w,\\n/static/88af73c7362d481bfc5b357430d876b6/58d6d/janerikrediger-headshot.jpg 300w,\\n/static/88af73c7362d481bfc5b357430d876b6/3643e/janerikrediger-headshot.jpg 450w,\\n/static/88af73c7362d481bfc5b357430d876b6/822dd/janerikrediger-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://fnordig.de/","twitter":"https://twitter.com/badboy_","linkedin":"","github":"https://github.com/badboy","gitlab":"","behance":"","medium":"","discord":""}},{"id":"67898cea-2155-56ac-8d3b-1566841ef50b","about":"<p>Jeske Eenink’s experience stems from FinTech where she builds meaningful relationships that drive long-term value. She loves to connect, learn and find opportunities for collaboration. She is in charge of Partners &#x26; Relations at Dusk Network: an open source blockchain infrastructure that businesses use to tokenize financial instruments and automate complex processes. Rust’s performance, safety characteristics, and community ecosystem make Rust an obvious choice for Dusk Network’s development of modern cryptographic systems.</p>","frontmatter":{"name":"Jeske Eenink","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABcBAQADAAAAAAAAAAAAAAAAAAMBAgT/2gAMAwEAAhADEAAAActZ3EMriTkE0hQP/8QAGxABAQABBQAAAAAAAAAAAAAAAQIAAxAREkH/2gAIAQEAAQUCMqWFyU7a1yvOeu3/xAAbEQACAQUAAAAAAAAAAAAAAAAAAgEQESEiMf/aAAgBAwEBPwFV0nBcXlP/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwEj/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAIRAgMf/aAAgBAQAGPwKdYxZUovX/xAAaEAEBAAMBAQAAAAAAAAAAAAABABEhMRBR/9oACAEBAAE/ISqB1jJsHcYuog0PsIoiy5z15//aAAwDAQACAAMAAAAQ/wDYg//EABkRAAIDAQAAAAAAAAAAAAAAAAABESExQf/aAAgBAwEBPxCZjtwkYD0//8QAGREAAgMBAAAAAAAAAAAAAAAAABEBEDFR/9oACAECAQE/EG4IjK//xAAcEAEBAQACAwEAAAAAAAAAAAABEQAhQRBRcZH/2gAIAQEAAT8QIGpDjODnFND68JXIags18z2xh+5jR0uTrIQaoHzf/9k=","aspectRatio":1,"src":"/static/259a77d808921bec332dc35a076f71d0/58d6d/jeskeeenink-headshot.jpg","srcSet":"/static/259a77d808921bec332dc35a076f71d0/c6f75/jeskeeenink-headshot.jpg 75w,\\n/static/259a77d808921bec332dc35a076f71d0/421ae/jeskeeenink-headshot.jpg 150w,\\n/static/259a77d808921bec332dc35a076f71d0/58d6d/jeskeeenink-headshot.jpg 300w,\\n/static/259a77d808921bec332dc35a076f71d0/3643e/jeskeeenink-headshot.jpg 450w,\\n/static/259a77d808921bec332dc35a076f71d0/f5db2/jeskeeenink-headshot.jpg 600w,\\n/static/259a77d808921bec332dc35a076f71d0/5f3e1/jeskeeenink-headshot.jpg 853w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"https://twitter.com/JeskeEenink","linkedin":"https://www.linkedin.com/in/jeskeeenink/","github":"https://github.com/ayajeske","gitlab":"","behance":"","medium":"","discord":""}},{"id":"c64fb7a9-2559-552d-a384-ebc5f5c76f4d","about":"<p>Dirkjan has not written an short biography yet.</p>","frontmatter":{"name":"Dirkjan Ochtman","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAbZtsA7nCHl0G1Qs/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBIABBP/2gAIAQEAAQUCtTzUUoMVXYlQW526Mr2OuP/EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAwEBPwEMj//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAEFAQEAAAAAAAAAAAAAAAEAAhARQSFh/9oACAEBAAY/ArQL6ow28QHsNrOpjhpj/8QAHBABAAICAwEAAAAAAAAAAAAAAQARECExQWGx/9oACAEBAAE/IQvbXQSoPm6wbOybAo25lwedfSJxKF4//9oADAMBAAIAAwAAABD433z/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQQf/aAAgBAwEBPxBDop3P/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EG9wguY//8QAHxABAQABAwUBAAAAAAAAAAAAAREAMVFhECFBgdHw/9oACAEBAAE/EI+q5T8x2mAZRvRd8TL1JcN/0xFHeGp0GNMGGofPGKFDpNEUpPeXP//Z","aspectRatio":1,"src":"/static/4503c1ca8fbaded0de21eb7a7caca451/58d6d/dirkjanochtman-headshot.jpg","srcSet":"/static/4503c1ca8fbaded0de21eb7a7caca451/c6f75/dirkjanochtman-headshot.jpg 75w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/421ae/dirkjanochtman-headshot.jpg 150w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/58d6d/dirkjanochtman-headshot.jpg 300w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/3643e/dirkjanochtman-headshot.jpg 450w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/822dd/dirkjanochtman-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://dirkjan.ochtman.nl/","twitter":"https://twitter.com/djco","linkedin":"https://www.linkedin.com/in/dochtman/","github":"https://github.com/djc","gitlab":"","behance":"","medium":"","discord":""}},{"id":"080017f1-697f-5495-83f8-81b98c5e268a","about":"<p>Martijn is a student at Avans university of applied sciences in `s-Hertogenbosch. He is in his 3rd year of studying software engineering. While not studying or programming Rust, Martijn likes to go sailing.</p>","frontmatter":{"name":"Martijn Groeneveldt","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMGBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB9fgnErRImcqLm4H/xAAdEAACAgEFAAAAAAAAAAAAAAACAwAEIQEQERMz/9oACAEBAAEFArHlVwyPt8wLHUYMFg7Brj//xAAWEQEBAQAAAAAAAAAAAAAAAAARASD/2gAIAQMBAT8BgY//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8BRuP/xAAcEAACAQUBAAAAAAAAAAAAAAAAARECEBIhQTH/2gAIAQEABj8CcEKYdsaPOs1tdMqWK/8A/8QAHBABAAMBAAMBAAAAAAAAAAAAAQARITEQQWFx/9oACAEBAAE/IUlxLzJbkjRfBqrvT3+SjoPBnB9h2E5EML2f/9oADAMBAAIAAwAAABBwwP3/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QWsJ//8QAFxEBAAMAAAAAAAAAAAAAAAAAEAERMf/aAAgBAgEBPxCgJ0//xAAfEAEAAgICAgMAAAAAAAAAAAABABExYSFREEFxscH/2gAIAQEAAT8Qt0KJVNLzT8QrQNXEvhE368dRofDT9hCAMc6pl0BNJwR6YDH7IAVAz9sSgjo6J//Z","aspectRatio":1.1400911161731206,"src":"/static/ca791fedc343f3ab09752b9de63e4821/58d6d/martijngroeneveldt-headshot.jpg","srcSet":"/static/ca791fedc343f3ab09752b9de63e4821/c6f75/martijngroeneveldt-headshot.jpg 75w,\\n/static/ca791fedc343f3ab09752b9de63e4821/421ae/martijngroeneveldt-headshot.jpg 150w,\\n/static/ca791fedc343f3ab09752b9de63e4821/58d6d/martijngroeneveldt-headshot.jpg 300w,\\n/static/ca791fedc343f3ab09752b9de63e4821/3643e/martijngroeneveldt-headshot.jpg 450w,\\n/static/ca791fedc343f3ab09752b9de63e4821/f5db2/martijngroeneveldt-headshot.jpg 600w,\\n/static/ca791fedc343f3ab09752b9de63e4821/b0a2b/martijngroeneveldt-headshot.jpg 2002w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://www.martijngroeneveldt.nl","twitter":"https://twitter.com/dutchmartin","linkedin":"https://www.linkedin.com/in/martijngroeneveldt/","github":"https://github.com/dutchmartin","gitlab":"","behance":"","medium":"","discord":""}},{"id":"84335dba-467b-576e-8601-f290c56b2b2f","about":"<p>Rafaela joined RustFest just before the Rome event back in 2018 and has been active as project coordinator ever since. When she is not busy organizing conferences, she enjoys cats, chocolate and glitter.</p>","frontmatter":{"name":"Rafaela Wetzel","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABxrGuOQ6DKQVEJ//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwATIzEy/9oACAEBAAEFAiM1so7xPVTwKoy89ToS7WkJU//EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAwEBPwEMj//EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAgEBPwFdj//EABwQAAMAAwADAAAAAAAAAAAAAAABEQIhMRIyQf/aAAgBAQAGPwIrx0ezFRynRJP4YY2LmjxtP//EABkQAAMBAQEAAAAAAAAAAAAAAAABETEhUf/aAAgBAQABPyGWLSQ/4ZqsFknKbaW4lomnUfTqLrBvKXwHBGSXqP/aAAwDAQACAAMAAAAQVyhA/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESFh/9oACAEDAQE/EAcq5E3P/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhEGH/2gAIAQIBAT8QZGdE4f/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExQXGhwdH/2gAIAQEAAT8QBlGoHb+5MSnYUPeNRB5oMFFoO9cyZxB3Rrfw5sIKEA+81sYa9W67kQwRaB93fvIogCFL45n/2Q==","aspectRatio":0.9696969696969697,"src":"/static/3bb6f8d34268b2029445b028c1368b67/58d6d/rafaelawetzel-headshot.jpg","srcSet":"/static/3bb6f8d34268b2029445b028c1368b67/c6f75/rafaelawetzel-headshot.jpg 75w,\\n/static/3bb6f8d34268b2029445b028c1368b67/421ae/rafaelawetzel-headshot.jpg 150w,\\n/static/3bb6f8d34268b2029445b028c1368b67/58d6d/rafaelawetzel-headshot.jpg 300w,\\n/static/3bb6f8d34268b2029445b028c1368b67/3643e/rafaelawetzel-headshot.jpg 450w,\\n/static/3bb6f8d34268b2029445b028c1368b67/822dd/rafaelawetzel-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"https://twitter.com/RafaelaWetzel","linkedin":"","github":"https://github.com/RafaelaWetzel","gitlab":"","behance":"","medium":"","discord":""}},{"id":"aab21390-5fe6-5239-ba29-0216af7c671c","about":"<p>Wouter is a freelance software engineer working primarily with Embedded Rust. Played the role of co-master of ceremonies for RustFest Barcelona 2019. Likes to go rock climbing and board gaming, and is obsessed with space. Dreams of programming a satellite one day.</p>","frontmatter":{"name":"Wouter Geraedts","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABsePWYNdyqYWRLkE//8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACAwQREhMx/9oACAEBAAEFAnHC7DZSeDBejYe6ec6gWpQP/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8BI//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwFjs//EABwQAAICAgMAAAAAAAAAAAAAAAABEBEhMSIyUf/aAAgBAQAGPwI2osXFZcU9XVGPTsf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIXEQ/9oACAEBAAE/IaUyjGPflPOEA2LlwOx2oiBldEq3fpc//9oADAMBAAIAAwAAABB3wMP/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAEDAQE/EAZDk//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/EEwf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARMVEhQRCRof/aAAgBAQABPxCvTK1GjYZwOGOYwlk/HMrRANMU9eIVQoFCbdsQ05gpK1AxpOyXtn//2Q==","aspectRatio":1,"src":"/static/7ca9a1f3f4dd479e306d7029c0be4c45/58d6d/woutergeraedts-headshot.jpg","srcSet":"/static/7ca9a1f3f4dd479e306d7029c0be4c45/c6f75/woutergeraedts-headshot.jpg 75w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/421ae/woutergeraedts-headshot.jpg 150w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/58d6d/woutergeraedts-headshot.jpg 300w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/6c985/woutergeraedts-headshot.jpg 375w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://woutergeraedts.nl/","twitter":"https://twitter.com/Wassasin","linkedin":"","github":"https://github.com/Wassasin","gitlab":"","behance":"","medium":"","discord":""}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-about-js-1bfa546f55c0edb215cc.js.map