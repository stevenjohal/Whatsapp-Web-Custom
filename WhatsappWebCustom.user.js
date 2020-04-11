// ==UserScript==
// @name     Whatsapp Web Custom
// @namespace https://github.com/stevenjohal
// @description Adds some custom touches to whatsapp web.
// @include https://web.whatsapp.com*
// @version  1.1
// ==/UserScript==

//Allows for a wider screen on whatapp web.
var styles = `
    @media screen and (min-width: 1441px) {
    .app-wrapper-web .h70RQ { /* this classname may have to be updated if whatsapp pushes an updated. */
		width: 99% !important;
  }
}
`;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

window.onload = function(e){
  //The dark class is already coded in the CSS, but not option not added in whatsapp web UI. 
  document.getElementsByTagName("html")[0].classList.add("dark");
  document.getElementsByTagName("body")[0].classList.add("dark");
}


