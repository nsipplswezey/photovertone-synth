goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__285465 = {};
var G__285466__285467 = cljs.core.seq.call(null,m);
if(cljs.core.truth_(G__285466__285467))
{var G__285469__285471 = cljs.core.first.call(null,G__285466__285467);
var vec__285470__285472 = G__285469__285471;
var k__285473 = cljs.core.nth.call(null,vec__285470__285472,0,null);
var v__285474 = cljs.core.nth.call(null,vec__285470__285472,1,null);
var G__285466__285475 = G__285466__285467;
var G__285469__285476 = G__285469__285471;
var G__285466__285477 = G__285466__285475;
while(true){
var vec__285478__285479 = G__285469__285476;
var k__285480 = cljs.core.nth.call(null,vec__285478__285479,0,null);
var v__285481 = cljs.core.nth.call(null,vec__285478__285479,1,null);
var G__285466__285482 = G__285466__285477;
(out__285465[cljs.core.name.call(null,k__285480)] = v__285481);
var temp__3698__auto____285483 = cljs.core.next.call(null,G__285466__285482);
if(cljs.core.truth_(temp__3698__auto____285483))
{var G__285466__285484 = temp__3698__auto____285483;
{
var G__285485 = cljs.core.first.call(null,G__285466__285484);
var G__285486 = G__285466__285484;
G__285469__285476 = G__285485;
G__285466__285477 = G__285486;
continue;
}
} else
{}
break;
}
} else
{}
return out__285465;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__285487 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__285487);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__285488){
var v = cljs.core.first(arglist__285488);
var text = cljs.core.rest(arglist__285488);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
