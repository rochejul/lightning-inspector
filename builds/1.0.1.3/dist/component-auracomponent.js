!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};b.m=a,b.c=c,b.p="",b(0)}({0:function(a,b,c){a.exports=c(8)},8:function(a,b){"use strict";var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(){function a(a,b){var d;d=!1===b.valid?"INVALID":b.descriptor.split("://")[1]||b.descriptor;var e=['&lt;<span class="component-tagname">'+d+'</span>\n            <span class="component-attribute">globalId</span>="'+b.globalId+'"'];if(b.attributes){var f;for(var g in b.attributes)"body"!==g&&(f=b.attributes[g],f&&Array.isArray(f)?f=f.length?'[<i class="component-array-length">'+f.length+"</i>]":"[]":f&&"object"===(void 0===f?"undefined":c(f))&&(f=Object.keys(f).length?"{...}":"{}"),e.push(' <span class="component-attribute">'+g+'</span>="'+f+'"'))}e.push("&gt;");var i=document.createElement("template");i.innerHTML=e.join("");var j=a.shadowRoot||a.createShadowRoot();j.innerHTML="",j.appendChild(document.importNode(h.querySelector("template").content,!0)),j.appendChild(i.content)}function b(a,b,c){var e=JSON.stringify({body:!1,attributes:!b.summarize}),f="window[Symbol.for('AuraDevTools')].Inspector.getComponent('"+a+"', "+e+");";chrome.devtools.inspectedWindow.eval(f,function(a,b){if(b&&console.error("AuraInspector: ",b),a){var e=JSON.parse(a);e=d(e),c(e)}}.bind(this))}function d(a){function b(a,f,g){if(!a)return a;if("object"===(void 0===a?"undefined":c(a))){if(a.hasOwnProperty("$serRefId$"))return d.has(a.$serRefId$)?d.get(a.$serRefId$):(e.push({parent:f,property:g,$serRefId$:a.$serRefId$}),a);a.hasOwnProperty("$serId$")&&(d.set(a.$serId$,a),delete a.$serId$);for(var g in a)a.hasOwnProperty(g)&&"object"===c(a[g])&&(a[g]=b(a[g],a,g))}return a}if(!a)return a;var d=new Map,e=[];a=b(a);for(var f,g=0,h=e.length;g<h;g++)f=e[g],f.parent[f.property]=d.get(f.$serRefId$);return a}function e(b){"object"===(void 0===b?"undefined":c(b))?this.setAttribute("componentData",JSON.stringify(b)):this.setAttribute("componentData",b),a(this,b)}function f(a){var b=this.getAttribute("globalId");if(b){var c="\n                $auraTemp = $A.getComponent('"+b+"'); undefined;\n            ";chrome.devtools.inspectedWindow.eval(c)}}function g(a){var b=this.getAttribute("globalId");if(b){var c="\n                $auraTemp = $A.getComponent('"+b+"'); \n                window[Symbol.for('AuraDevTools')].Inspector.publish(\"AuraInspector:ShowComponentInTree\", $auraTemp.getGlobalId());\n            ";chrome.devtools.inspectedWindow.eval(c)}}var h=document.currentScript.ownerDocument,i=Object.create(HTMLDivElement.prototype);i.createdCallback=function(){this.addEventListener("click",f.bind(this)),this.addEventListener("dblclick",g.bind(this))},i.attachedCallback=function(){var c=this.getAttribute("componentData");if(c)try{"string"==typeof c&&(c=d(JSON.parse(c))),Object.keys(c).length&&a(this,c)}catch(a){var f=(this.shadowRoot||this.createShadowRoot(),this.getAttribute("globalId"));f&&b(f,{summarize:this.getAttribute("summarize")||!1},e.bind(this))}else{var g=this.getAttribute("summarize")||!1;this.setAttribute("componentData","{}"),b(this.getAttribute("globalId"),{summarize:g},e.bind(this))}},document.registerElement("aurainspector-auracomponent",{prototype:i})}()}});