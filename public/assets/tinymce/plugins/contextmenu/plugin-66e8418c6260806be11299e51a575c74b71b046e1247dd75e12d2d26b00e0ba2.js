tinymce.PluginManager.add("contextmenu",function(e){var t,n,i=e.settings.contextmenu_never_use_native,r=function(e){return e.ctrlKey&&!i},o=function(){return tinymce.Env.mac&&tinymce.Env.webkit},a=function(){return n===!0};return e.on("mousedown",function(t){o()&&2===t.button&&!r(t)&&e.selection.isCollapsed()&&e.once("contextmenu",function(t){e.selection.placeCaretAt(t.clientX,t.clientY)})}),e.on("contextmenu",function(i){var o;if(!r(i)){if(i.preventDefault(),o=e.settings.contextmenu||"link openlink image inserttable | cell row column deletetable",t)t.show();else{var a=[];tinymce.each(o.split(/[ ,]/),function(t){var n=e.menuItems[t];"|"==t&&(n={text:t}),n&&(n.shortcut="",a.push(n))});for(var s=0;s<a.length;s++)"|"==a[s].text&&(0!==s&&s!=a.length-1||a.splice(s,1));t=new tinymce.ui.Menu({items:a,context:"contextmenu",classes:"contextmenu"}).renderTo(),t.on("hide",function(e){e.control===this&&(n=!1)}),e.on("remove",function(){t.remove(),t=null})}var l={x:i.pageX,y:i.pageY};e.inline||(l=tinymce.DOM.getPos(e.getContentAreaContainer()),l.x+=i.clientX,l.y+=i.clientY),t.moveTo(l.x,l.y),n=!0}}),{isContextMenuVisible:a}});