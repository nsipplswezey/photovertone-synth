goog.provide('overtoneinterface.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
overtoneinterface.client.main.$body = jayq.core.$.call(null,"\uFDD0'body");
overtoneinterface.client.main.$piano = jayq.core.$.call(null,"\uFDD0'#piano");
overtoneinterface.client.main.$controls = jayq.core.$.call(null,"\uFDD0'#controls");
overtoneinterface.client.main.$notes = jayq.core.$.call(null,"\uFDD0'#notes");
overtoneinterface.client.main.$wobble = jayq.core.$.call(null,"\uFDD0'#wobble");
var group__6523__auto____282914 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
overtoneinterface.client.main.button = (function button(p__282915){
var map__282916__282917 = p__282915;
var map__282916__282918 = ((cljs.core.seq_QMARK_.call(null,map__282916__282917))?cljs.core.apply.call(null,cljs.core.hash_map,map__282916__282917):map__282916__282917);
var param__282919 = cljs.core.get.call(null,map__282916__282918,"\uFDD0'param");
var action__282920 = cljs.core.get.call(null,map__282916__282918,"\uFDD0'action");
var label__282921 = cljs.core.get.call(null,map__282916__282918,"\uFDD0'label");
var elem__6524__auto____282922 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a.button",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'data-action","\uFDD0'data-param"],{"\uFDD0'href":"#","\uFDD0'data-action":action__282920,"\uFDD0'data-param":param__282919}),label__282921]));
elem__6524__auto____282922.setAttribute("crateGroup",group__6523__auto____282914);
return elem__6524__auto____282922;
});
overtoneinterface.client.main.button.prototype._crateGroup = group__6523__auto____282914;
overtoneinterface.client.main.piano_notes = (function (){var iter__629__auto____282927 = (function iter__282923(s__282924){
return (new cljs.core.LazySeq(null,false,(function (){
var s__282924__282925 = s__282924;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__282924__282925)))
{var note__282926 = cljs.core.first.call(null,s__282924__282925);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str(note__282926)].join(''),"\uFDD0'action":"play-note","\uFDD0'param":note__282926}),iter__282923.call(null,cljs.core.rest.call(null,s__282924__282925)));
} else
{return null;
}
break;
}
})));
});
return iter__629__auto____282927.call(null,cljs.core.range.call(null,40,60));
})();
overtoneinterface.client.main.dub_notes = (function (){var iter__629__auto____282932 = (function iter__282928(s__282929){
return (new cljs.core.LazySeq(null,false,(function (){
var s__282929__282930 = s__282929;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__282929__282930)))
{var note__282931 = cljs.core.first.call(null,s__282929__282930);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str(note__282931)].join(''),"\uFDD0'action":"dub-note","\uFDD0'param":note__282931}),iter__282928.call(null,cljs.core.rest.call(null,s__282929__282930)));
} else
{return null;
}
break;
}
})));
});
return iter__629__auto____282932.call(null,cljs.core.range.call(null,40,80));
})();
overtoneinterface.client.main.dub_wobble = (function (){var iter__629__auto____282937 = (function iter__282933(s__282934){
return (new cljs.core.LazySeq(null,false,(function (){
var s__282934__282935 = s__282934;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__282934__282935)))
{var w__282936 = cljs.core.first.call(null,s__282934__282935);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str("w"),cljs.core.str(w__282936)].join(''),"\uFDD0'action":"dub-wobble","\uFDD0'param":w__282936}),iter__282933.call(null,cljs.core.rest.call(null,s__282934__282935)));
} else
{return null;
}
break;
}
})));
});
return iter__629__auto____282937.call(null,cljs.core.range.call(null,0,8));
})();
overtoneinterface.client.main.control_buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"start","\uFDD0'action":"start-dub","\uFDD0'param":""}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"stop","\uFDD0'action":"stop-dub","\uFDD0'param":""})]);
overtoneinterface.client.main.populate = (function populate(container,buttons){
var G__282938__282939 = cljs.core.seq.call(null,buttons);
if(cljs.core.truth_(G__282938__282939))
{var b__282940 = cljs.core.first.call(null,G__282938__282939);
var G__282938__282941 = G__282938__282939;
while(true){
jayq.core.append.call(null,container,overtoneinterface.client.main.button.call(null,b__282940));
var temp__3698__auto____282942 = cljs.core.next.call(null,G__282938__282941);
if(cljs.core.truth_(temp__3698__auto____282942))
{var G__282938__282943 = temp__3698__auto____282942;
{
var G__282944 = cljs.core.first.call(null,G__282938__282943);
var G__282945 = G__282938__282943;
b__282940 = G__282944;
G__282938__282941 = G__282945;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$piano,overtoneinterface.client.main.piano_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$controls,overtoneinterface.client.main.control_buttons);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$notes,overtoneinterface.client.main.dub_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$wobble,overtoneinterface.client.main.dub_wobble);
jayq.core.delegate.call(null,overtoneinterface.client.main.$body,overtoneinterface.client.main.button,"\uFDD0'click",(function (e){
e.preventDefault();
var me__282946 = this;
var $me__282947 = jayq.core.$.call(null,me__282946);
var action__282948 = jayq.core.data.call(null,$me__282947,"\uFDD0'action");
var param__282949 = jayq.core.data.call(null,$me__282947,"\uFDD0'param");
var param__282950 = ((cljs.core._EQ_.call(null,param__282949,""))?cljs.core.PersistentVector.fromArray([]):cljs.core.PersistentVector.fromArray([param__282949]));
return fetch.remotes.remote_callback.call(null,action__282948,param__282950);
}));
