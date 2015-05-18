goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
void 0;
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__285307__285308 = cljs.core.seq.call(null,attrs);
if(cljs.core.truth_(G__285307__285308))
{var G__285310__285312 = cljs.core.first.call(null,G__285307__285308);
var vec__285311__285313 = G__285310__285312;
var k__285314 = cljs.core.nth.call(null,vec__285311__285313,0,null);
var v__285315 = cljs.core.nth.call(null,vec__285311__285313,1,null);
var G__285307__285316 = G__285307__285308;
var G__285310__285317 = G__285310__285312;
var G__285307__285318 = G__285307__285316;
while(true){
var vec__285319__285320 = G__285310__285317;
var k__285321 = cljs.core.nth.call(null,vec__285319__285320,0,null);
var v__285322 = cljs.core.nth.call(null,vec__285319__285320,1,null);
var G__285307__285323 = G__285307__285318;
dom_attr.call(null,elem,k__285321,v__285322);
var temp__3698__auto____285324 = cljs.core.next.call(null,G__285307__285323);
if(cljs.core.truth_(temp__3698__auto____285324))
{var G__285307__285325 = temp__3698__auto____285324;
{
var G__285326 = cljs.core.first.call(null,G__285307__285325);
var G__285327 = G__285307__285325;
G__285310__285317 = G__285326;
G__285307__285318 = G__285327;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_attr.cljs$lang$arity$2 = dom_attr__2;
dom_attr.cljs$lang$arity$3 = dom_attr__3;
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__285328__285329 = cljs.core.seq.call(null,content);
if(cljs.core.truth_(G__285328__285329))
{var c__285330 = cljs.core.first.call(null,G__285328__285329);
var G__285328__285331 = G__285328__285329;
while(true){
var child__285332 = (((c__285330 == null))?null:((cljs.core.map_QMARK_.call(null,c__285330))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c__285330))?goog.dom.createTextNode.call(null,c__285330):((cljs.core.vector_QMARK_.call(null,c__285330))?crate.core.elem_factory.call(null,c__285330):((cljs.core.seq_QMARK_.call(null,c__285330))?as_content.call(null,parent,c__285330):(cljs.core.truth_(c__285330.nodeName)?c__285330:null))))));
if(cljs.core.truth_(child__285332))
{goog.dom.appendChild.call(null,parent,child__285332);
} else
{}
var temp__3698__auto____285333 = cljs.core.next.call(null,G__285328__285331);
if(cljs.core.truth_(temp__3698__auto____285333))
{var G__285328__285334 = temp__3698__auto____285333;
{
var G__285335 = cljs.core.first.call(null,G__285328__285334);
var G__285336 = G__285328__285334;
c__285330 = G__285335;
G__285328__285331 = G__285336;
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
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__285338){
var vec__285339__285340 = p__285338;
var tag__285341 = cljs.core.nth.call(null,vec__285339__285340,0,null);
var content__285342 = cljs.core.nthnext.call(null,vec__285339__285340,1);
if(cljs.core.not.call(null,(function (){var or__3548__auto____285343 = cljs.core.keyword_QMARK_.call(null,tag__285341);
if(or__3548__auto____285343)
{return or__3548__auto____285343;
} else
{var or__3548__auto____285344 = cljs.core.symbol_QMARK_.call(null,tag__285341);
if(or__3548__auto____285344)
{return or__3548__auto____285344;
} else
{return cljs.core.string_QMARK_.call(null,tag__285341);
}
}
})()))
{throw [cljs.core.str(tag__285341),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__285345__285347 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__285341));
var ___285348 = cljs.core.nth.call(null,vec__285345__285347,0,null);
var tag__285349 = cljs.core.nth.call(null,vec__285345__285347,1,null);
var id__285350 = cljs.core.nth.call(null,vec__285345__285347,2,null);
var class$__285351 = cljs.core.nth.call(null,vec__285345__285347,3,null);
var vec__285346__285358 = (function (){var vec__285352__285353 = clojure.string.split.call(null,tag__285349,/:/);
var nsp__285354 = cljs.core.nth.call(null,vec__285352__285353,0,null);
var t__285355 = cljs.core.nth.call(null,vec__285352__285353,1,null);
var ns_xmlns__285356 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__285354));
if(cljs.core.truth_(t__285355))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____285357 = ns_xmlns__285356;
if(cljs.core.truth_(or__3548__auto____285357))
{return or__3548__auto____285357;
} else
{return nsp__285354;
}
})(),t__285355]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__285354]);
}
})();
var nsp__285359 = cljs.core.nth.call(null,vec__285346__285358,0,null);
var tag__285360 = cljs.core.nth.call(null,vec__285346__285358,1,null);
var tag_attrs__285362 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__285337_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__285337_SHARP_) == null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____285361 = id__285350;
if(cljs.core.truth_(or__3548__auto____285361))
{return or__3548__auto____285361;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__285351)?clojure.string.replace.call(null,class$__285351,/\./," "):null)})));
var map_attrs__285363 = cljs.core.first.call(null,content__285342);
if(cljs.core.map_QMARK_.call(null,map_attrs__285363))
{return cljs.core.PersistentVector.fromArray([nsp__285359,tag__285360,cljs.core.merge.call(null,tag_attrs__285362,map_attrs__285363),cljs.core.next.call(null,content__285342)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__285359,tag__285360,tag_attrs__285362,content__285342]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__285364 = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs__285364))
{crate.core.dom_attr.call(null,elem,attrs__285364);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__285365__285366 = crate.core.normalize_element.call(null,tag_def);
var nsp__285367 = cljs.core.nth.call(null,vec__285365__285366,0,null);
var tag__285368 = cljs.core.nth.call(null,vec__285365__285366,1,null);
var attrs__285369 = cljs.core.nth.call(null,vec__285365__285366,2,null);
var content__285370 = cljs.core.nth.call(null,vec__285365__285366,3,null);
var elem__285371 = crate.core.create_elem.call(null,nsp__285367,tag__285368);
crate.core.dom_attr.call(null,elem__285371,cljs.core.merge.call(null,attrs__285369,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__285371,content__285370);
return elem__285371;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__285372 = cljs.core.map.call(null,crate.core.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res__285372)))
{return res__285372;
} else
{return cljs.core.first.call(null,res__285372);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__285373){
var tags = cljs.core.seq(arglist__285373);;
return html__delegate(tags);
});
html.cljs$lang$arity$variadic = html__delegate;
return html;
})()
;
