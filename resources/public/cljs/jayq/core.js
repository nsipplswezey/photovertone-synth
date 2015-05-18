goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{return [cljs.core.str("[crateGroup="),cljs.core.str(jayq.core.crate_meta.call(null,sel)),cljs.core.str("]")].join('');
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__285397){
var vec__285398__285399 = p__285397;
var context__285400 = cljs.core.nth.call(null,vec__285398__285399,0,null);
if(cljs.core.not.call(null,context__285400))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__285400);
}
};
var $ = function (sel,var_args){
var p__285397 = null;
if (goog.isDef(var_args)) {
  p__285397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__285397);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__285401){
var sel = cljs.core.first(arglist__285401);
var p__285397 = cljs.core.rest(arglist__285401);
return $__delegate(sel, p__285397);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3548__auto____285402 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3548__auto____285402))
{return or__3548__auto____285402;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__285403 = null;
var G__285403__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__285403__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__285403 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__285403__2.call(this,_,k);
case 3:
return G__285403__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__285403;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__285404){
var vec__285405__285406 = p__285404;
var v__285407 = cljs.core.nth.call(null,vec__285405__285406,0,null);
var a__285408 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__285407))
{return $elem.attr(a__285408);
} else
{return $elem.attr(a__285408,v__285407);
}
};
var attr = function ($elem,a,var_args){
var p__285404 = null;
if (goog.isDef(var_args)) {
  p__285404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__285404);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__285409){
var $elem = cljs.core.first(arglist__285409);
var a = cljs.core.first(cljs.core.next(arglist__285409));
var p__285404 = cljs.core.rest(cljs.core.next(arglist__285409));
return attr__delegate($elem, a, p__285404);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__285410){
var vec__285411__285412 = p__285410;
var v__285413 = cljs.core.nth.call(null,vec__285411__285412,0,null);
var k__285414 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__285413))
{return $elem.data(k__285414);
} else
{return $elem.data(k__285414,v__285413);
}
};
var data = function ($elem,k,var_args){
var p__285410 = null;
if (goog.isDef(var_args)) {
  p__285410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__285410);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__285415){
var $elem = cljs.core.first(arglist__285415);
var k = cljs.core.first(cljs.core.next(arglist__285415));
var p__285410 = cljs.core.rest(cljs.core.next(arglist__285415));
return data__delegate($elem, k, p__285410);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__285416 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__285416);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__285417 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__285417);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__285418){
var vec__285419__285420 = p__285418;
var speed__285421 = cljs.core.nth.call(null,vec__285419__285420,0,null);
var on_finish__285422 = cljs.core.nth.call(null,vec__285419__285420,1,null);
return $elem.hide(speed__285421,on_finish__285422);
};
var hide = function ($elem,var_args){
var p__285418 = null;
if (goog.isDef(var_args)) {
  p__285418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__285418);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__285423){
var $elem = cljs.core.first(arglist__285423);
var p__285418 = cljs.core.rest(arglist__285423);
return hide__delegate($elem, p__285418);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__285424){
var vec__285425__285426 = p__285424;
var speed__285427 = cljs.core.nth.call(null,vec__285425__285426,0,null);
var on_finish__285428 = cljs.core.nth.call(null,vec__285425__285426,1,null);
return $elem.show(speed__285427,on_finish__285428);
};
var show = function ($elem,var_args){
var p__285424 = null;
if (goog.isDef(var_args)) {
  p__285424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__285424);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__285429){
var $elem = cljs.core.first(arglist__285429);
var p__285424 = cljs.core.rest(arglist__285429);
return show__delegate($elem, p__285424);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__285430){
var vec__285431__285432 = p__285430;
var speed__285433 = cljs.core.nth.call(null,vec__285431__285432,0,null);
var on_finish__285434 = cljs.core.nth.call(null,vec__285431__285432,1,null);
return $elem.fadeOut(speed__285433,on_finish__285434);
};
var fade_out = function ($elem,var_args){
var p__285430 = null;
if (goog.isDef(var_args)) {
  p__285430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__285430);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__285435){
var $elem = cljs.core.first(arglist__285435);
var p__285430 = cljs.core.rest(arglist__285435);
return fade_out__delegate($elem, p__285430);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__285436){
var vec__285437__285438 = p__285436;
var speed__285439 = cljs.core.nth.call(null,vec__285437__285438,0,null);
var on_finish__285440 = cljs.core.nth.call(null,vec__285437__285438,1,null);
return $elem.fadeIn(speed__285439,on_finish__285440);
};
var fade_in = function ($elem,var_args){
var p__285436 = null;
if (goog.isDef(var_args)) {
  p__285436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__285436);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__285441){
var $elem = cljs.core.first(arglist__285441);
var p__285436 = cljs.core.rest(arglist__285441);
return fade_in__delegate($elem, p__285436);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__285442){
var vec__285443__285444 = p__285442;
var speed__285445 = cljs.core.nth.call(null,vec__285443__285444,0,null);
var on_finish__285446 = cljs.core.nth.call(null,vec__285443__285444,1,null);
return $elem.slideUp(speed__285445,on_finish__285446);
};
var slide_up = function ($elem,var_args){
var p__285442 = null;
if (goog.isDef(var_args)) {
  p__285442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__285442);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__285447){
var $elem = cljs.core.first(arglist__285447);
var p__285442 = cljs.core.rest(arglist__285447);
return slide_up__delegate($elem, p__285442);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__285448){
var vec__285449__285450 = p__285448;
var speed__285451 = cljs.core.nth.call(null,vec__285449__285450,0,null);
var on_finish__285452 = cljs.core.nth.call(null,vec__285449__285450,1,null);
return $elem.slideDown(speed__285451,on_finish__285452);
};
var slide_down = function ($elem,var_args){
var p__285448 = null;
if (goog.isDef(var_args)) {
  p__285448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__285448);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__285453){
var $elem = cljs.core.first(arglist__285453);
var p__285448 = cljs.core.rest(arglist__285453);
return slide_down__delegate($elem, p__285448);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__285454){
var vec__285455__285456 = p__285454;
var v__285457 = cljs.core.nth.call(null,vec__285455__285456,0,null);
if(cljs.core.truth_(v__285457))
{return $elem.val(v__285457);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__285454 = null;
if (goog.isDef(var_args)) {
  p__285454 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__285454);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__285458){
var $elem = cljs.core.first(arglist__285458);
var p__285454 = cljs.core.rest(arglist__285458);
return val__delegate($elem, p__285454);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__285459,content,callback){
var vec__285460__285461 = p__285459;
var method__285462 = cljs.core.nth.call(null,vec__285460__285461,0,null);
var uri__285463 = cljs.core.nth.call(null,vec__285460__285461,1,null);
var params__285464 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__285462)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__285463,params__285464);
});
