tinymce.PluginManager.add("emoticons",function(e,t){function n(){var e;return e='<table role="list" class="mce-grid">',tinymce.each(i,function(n){e+="<tr>",tinymce.each(n,function(n){var i=t+"/img/smiley-"+n+".gif";e+='<td><a href="#" data-mce-url="'+i+'" data-mce-alt="'+n+'" tabindex="-1" role="option" aria-label="'+n+'"><img src="'+i+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),e+="</tr>"}),e+="</table>"}var i=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]];e.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:n,onclick:function(t){var n=e.dom.getParent(t.target,"a");n&&(e.insertContent('<img src="'+n.getAttribute("data-mce-url")+'" alt="'+n.getAttribute("data-mce-alt")+'" />'),this.hide())}},tooltip:"Emoticons"})});