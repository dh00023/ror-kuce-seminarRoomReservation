tinymce.PluginManager.add("tabfocus",function(e){function t(e){9!==e.keyCode||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()}function n(t){function n(n){function o(e){return"BODY"===e.nodeName||"hidden"!=e.type&&"none"!=e.style.display&&"hidden"!=e.style.visibility&&o(e.parentNode)}function l(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&tinymce.get(t.id)&&e.tabIndex!=-1&&o(e)}if(s=i.select(":input:enabled,*[tabindex]:not(iframe)"),r(s,function(t,n){if(t.id==e.id)return a=n,!1}),n>0){for(c=a+1;c<s.length;c++)if(l(s[c]))return s[c]}else for(c=a-1;c>=0;c--)if(l(s[c]))return s[c];return null}var a,s,l,c;if(!(9!==t.keyCode||t.ctrlKey||t.altKey||t.metaKey||t.isDefaultPrevented())&&(l=o(e.getParam("tab_focus",e.getParam("tabfocus_elements",":prev,:next"))),1==l.length&&(l[1]=l[0],l[0]=":prev"),s=t.shiftKey?":prev"==l[0]?n(-1):i.get(l[0]):":next"==l[1]?n(1):i.get(l[1]))){var u=tinymce.get(s.id||s.name);s.id&&u?u.focus():tinymce.util.Delay.setTimeout(function(){tinymce.Env.webkit||window.focus(),s.focus()},10),t.preventDefault()}}var i=tinymce.DOM,r=tinymce.each,o=tinymce.explode;e.on("init",function(){e.inline&&tinymce.DOM.setAttrib(e.getBody(),"tabIndex",null),e.on("keyup",t),tinymce.Env.gecko?e.on("keypress keydown",n):e.on("keydown",n)})});