function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r,e=document.querySelectorAll("th"),n=document.querySelector("table tbody"),o=function(r){if(Array.isArray(r))return t(r)}(r=n.querySelectorAll("tr"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();e.forEach(function(t,r){t.addEventListener("click",function(){o.sort(function(t,e){var n=t.cells[r].textContent,o=e.cells[r].textContent;return n.localeCompare(o,void 0,{numeric:!0})}),n.innerHTML="",o.forEach(function(t){return n.appendChild(t)})})});
//# sourceMappingURL=index.9610026b.js.map
