goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__285490__285491 = route;
var m__285492 = cljs.core.nth.call(null,vec__285490__285491,0,null);
var u__285493 = cljs.core.nth.call(null,vec__285490__285491,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__285492),u__285493]);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__285494 = fetch.util.clj__GT_js.call(null,d);
var query__285495 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__285494)));
return [cljs.core.str(query__285495)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__285496 = req.getResponseText();
return callback.call(null,data__285496);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__285497){
var vec__285498__285499 = p__285497;
var opts__285500 = cljs.core.nth.call(null,vec__285498__285499,0,null);
var req__285502 = (new goog.net.XhrIo());
var vec__285501__285503 = fetch.core.parse_route.call(null,route);
var method__285504 = cljs.core.nth.call(null,vec__285501__285503,0,null);
var uri__285505 = cljs.core.nth.call(null,vec__285501__285503,1,null);
var data__285506 = fetch.core.__GT_data.call(null,content);
var callback__285507 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__285507))
{goog.events.listen.call(null,req__285502,goog.net.EventType.COMPLETE,(function (){
return callback__285507.call(null,req__285502);
}));
} else
{}
return req__285502.send(uri__285505,method__285504,data__285506,(cljs.core.truth_(opts__285500)?fetch.util.clj__GT_js.call(null,opts__285500):null));
};
var xhr = function (route,content,callback,var_args){
var p__285497 = null;
if (goog.isDef(var_args)) {
  p__285497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__285497);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__285508){
var route = cljs.core.first(arglist__285508);
var content = cljs.core.first(cljs.core.next(arglist__285508));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285508)));
var p__285497 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285508)));
return xhr__delegate(route, content, callback, p__285497);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
