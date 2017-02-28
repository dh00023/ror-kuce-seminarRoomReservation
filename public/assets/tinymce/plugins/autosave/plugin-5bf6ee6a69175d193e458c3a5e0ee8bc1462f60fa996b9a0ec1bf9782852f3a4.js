tinymce._beforeUnloadHandler=function(){var e;return tinymce.each(tinymce.editors,function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&t.getParam("autosave_ask_before_unload",!0)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))}),e},tinymce.PluginManager.add("autosave",function(e){function t(e,t){var n={s:1e3,m:6e4};return e=/^(\d+)([ms]?)$/.exec(""+(e||t)),(e[2]?n[e[2]]:1)*parseInt(e,10)}function n(){var e=parseInt(h.getItem(u+"time"),10)||0;return!((new Date).getTime()-e>f.autosave_retention&&(i(!1),1))}function i(t){h.removeItem(u+"draft"),h.removeItem(u+"time"),t!==!1&&e.fire("RemoveDraft")}function r(){!c()&&e.isDirty()&&(h.setItem(u+"draft",e.getContent({format:"raw",no_events:!0})),h.setItem(u+"time",(new Date).getTime()),e.fire("StoreDraft"))}function o(){n()&&(e.setContent(h.getItem(u+"draft"),{format:"raw"}),e.fire("RestoreDraft"))}function a(){d||(setInterval(function(){e.removed||r()},f.autosave_interval),d=!0)}function s(){var t=this;t.disabled(!n()),e.on("StoreDraft RestoreDraft RemoveDraft",function(){t.disabled(!n())}),a()}function l(){e.undoManager.beforeChange(),o(),i(),e.undoManager.add()}function c(t){var n=e.settings.forced_root_block;return t=tinymce.trim("undefined"==typeof t?e.getBody().innerHTML:t),""===t||new RegExp("^<"+n+"[^>]*>((\xa0|&nbsp;|[ \t]|<br[^>]*>)+?|)</"+n+">|<br>$","i").test(t)}var u,d,f=e.settings,h=tinymce.util.LocalStorage;u=f.autosave_prefix||"tinymce-autosave-{path}{query}-{id}-",u=u.replace(/\{path\}/g,document.location.pathname),u=u.replace(/\{query\}/g,document.location.search),u=u.replace(/\{id\}/g,e.id),f.autosave_interval=t(f.autosave_interval,"30s"),f.autosave_retention=t(f.autosave_retention,"20m"),e.addButton("restoredraft",{title:"Restore last draft",onclick:l,onPostRender:s}),e.addMenuItem("restoredraft",{text:"Restore last draft",onclick:l,onPostRender:s,context:"file"}),e.settings.autosave_restore_when_empty!==!1&&(e.on("init",function(){n()&&c()&&o()}),e.on("saveContent",function(){i()})),window.onbeforeunload=tinymce._beforeUnloadHandler,this.hasDraft=n,this.storeDraft=r,this.restoreDraft=o,this.removeDraft=i,this.isEmpty=c});