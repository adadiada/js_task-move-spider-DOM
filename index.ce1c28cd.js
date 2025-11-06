document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=t.target.closest(".wall");if(i){var c=Math.max(t.offsetY-e.clientHeight/2,0),n=Math.max(t.offsetX-e.clientWidth/2,0);c=Math.min(c,i.clientHeight-e.clientHeight),n=Math.min(n,i.clientWidth-e.clientWidth),e.style.top="".concat(c,"px"),e.style.left="".concat(n,"px")}});
//# sourceMappingURL=index.ce1c28cd.js.map
