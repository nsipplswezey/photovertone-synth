goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__282951__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__282951 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__282951__delegate.call(this, array, i, idxs);
};
G__282951.cljs$lang$maxFixedArity = 2;
G__282951.cljs$lang$applyTo = (function (arglist__282952){
var array = cljs.core.first(arglist__282952);
var i = cljs.core.first(cljs.core.next(arglist__282952));
var idxs = cljs.core.rest(cljs.core.next(arglist__282952));
return G__282951__delegate(array, i, idxs);
});
G__282951.cljs$lang$arity$variadic = G__282951__delegate;
return G__282951;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3546__auto____282953 = this$;
if(and__3546__auto____282953)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3546__auto____282953;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3548__auto____282954 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282954)
{return or__3548__auto____282954;
} else
{var or__3548__auto____282955 = (cljs.core._invoke["_"]);
if(or__3548__auto____282955)
{return or__3548__auto____282955;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3546__auto____282956 = this$;
if(and__3546__auto____282956)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3546__auto____282956;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3548__auto____282957 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282957)
{return or__3548__auto____282957;
} else
{var or__3548__auto____282958 = (cljs.core._invoke["_"]);
if(or__3548__auto____282958)
{return or__3548__auto____282958;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3546__auto____282959 = this$;
if(and__3546__auto____282959)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3546__auto____282959;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3548__auto____282960 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282960)
{return or__3548__auto____282960;
} else
{var or__3548__auto____282961 = (cljs.core._invoke["_"]);
if(or__3548__auto____282961)
{return or__3548__auto____282961;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3546__auto____282962 = this$;
if(and__3546__auto____282962)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3546__auto____282962;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____282963 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282963)
{return or__3548__auto____282963;
} else
{var or__3548__auto____282964 = (cljs.core._invoke["_"]);
if(or__3548__auto____282964)
{return or__3548__auto____282964;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3546__auto____282965 = this$;
if(and__3546__auto____282965)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3546__auto____282965;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____282966 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282966)
{return or__3548__auto____282966;
} else
{var or__3548__auto____282967 = (cljs.core._invoke["_"]);
if(or__3548__auto____282967)
{return or__3548__auto____282967;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3546__auto____282968 = this$;
if(and__3546__auto____282968)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3546__auto____282968;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____282969 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282969)
{return or__3548__auto____282969;
} else
{var or__3548__auto____282970 = (cljs.core._invoke["_"]);
if(or__3548__auto____282970)
{return or__3548__auto____282970;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3546__auto____282971 = this$;
if(and__3546__auto____282971)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3546__auto____282971;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____282972 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282972)
{return or__3548__auto____282972;
} else
{var or__3548__auto____282973 = (cljs.core._invoke["_"]);
if(or__3548__auto____282973)
{return or__3548__auto____282973;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3546__auto____282974 = this$;
if(and__3546__auto____282974)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3546__auto____282974;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____282975 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282975)
{return or__3548__auto____282975;
} else
{var or__3548__auto____282976 = (cljs.core._invoke["_"]);
if(or__3548__auto____282976)
{return or__3548__auto____282976;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3546__auto____282977 = this$;
if(and__3546__auto____282977)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3546__auto____282977;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____282978 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282978)
{return or__3548__auto____282978;
} else
{var or__3548__auto____282979 = (cljs.core._invoke["_"]);
if(or__3548__auto____282979)
{return or__3548__auto____282979;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3546__auto____282980 = this$;
if(and__3546__auto____282980)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3546__auto____282980;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____282981 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282981)
{return or__3548__auto____282981;
} else
{var or__3548__auto____282982 = (cljs.core._invoke["_"]);
if(or__3548__auto____282982)
{return or__3548__auto____282982;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3546__auto____282983 = this$;
if(and__3546__auto____282983)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3546__auto____282983;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____282984 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282984)
{return or__3548__auto____282984;
} else
{var or__3548__auto____282985 = (cljs.core._invoke["_"]);
if(or__3548__auto____282985)
{return or__3548__auto____282985;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3546__auto____282986 = this$;
if(and__3546__auto____282986)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3546__auto____282986;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____282987 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282987)
{return or__3548__auto____282987;
} else
{var or__3548__auto____282988 = (cljs.core._invoke["_"]);
if(or__3548__auto____282988)
{return or__3548__auto____282988;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3546__auto____282989 = this$;
if(and__3546__auto____282989)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3546__auto____282989;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____282990 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282990)
{return or__3548__auto____282990;
} else
{var or__3548__auto____282991 = (cljs.core._invoke["_"]);
if(or__3548__auto____282991)
{return or__3548__auto____282991;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3546__auto____282992 = this$;
if(and__3546__auto____282992)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3546__auto____282992;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____282993 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282993)
{return or__3548__auto____282993;
} else
{var or__3548__auto____282994 = (cljs.core._invoke["_"]);
if(or__3548__auto____282994)
{return or__3548__auto____282994;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3546__auto____282995 = this$;
if(and__3546__auto____282995)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3546__auto____282995;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____282996 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282996)
{return or__3548__auto____282996;
} else
{var or__3548__auto____282997 = (cljs.core._invoke["_"]);
if(or__3548__auto____282997)
{return or__3548__auto____282997;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3546__auto____282998 = this$;
if(and__3546__auto____282998)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3546__auto____282998;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____282999 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____282999)
{return or__3548__auto____282999;
} else
{var or__3548__auto____283000 = (cljs.core._invoke["_"]);
if(or__3548__auto____283000)
{return or__3548__auto____283000;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3546__auto____283001 = this$;
if(and__3546__auto____283001)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3546__auto____283001;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____283002 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283002)
{return or__3548__auto____283002;
} else
{var or__3548__auto____283003 = (cljs.core._invoke["_"]);
if(or__3548__auto____283003)
{return or__3548__auto____283003;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3546__auto____283004 = this$;
if(and__3546__auto____283004)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3546__auto____283004;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____283005 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283005)
{return or__3548__auto____283005;
} else
{var or__3548__auto____283006 = (cljs.core._invoke["_"]);
if(or__3548__auto____283006)
{return or__3548__auto____283006;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3546__auto____283007 = this$;
if(and__3546__auto____283007)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3546__auto____283007;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____283008 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283008)
{return or__3548__auto____283008;
} else
{var or__3548__auto____283009 = (cljs.core._invoke["_"]);
if(or__3548__auto____283009)
{return or__3548__auto____283009;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3546__auto____283010 = this$;
if(and__3546__auto____283010)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3546__auto____283010;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____283011 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283011)
{return or__3548__auto____283011;
} else
{var or__3548__auto____283012 = (cljs.core._invoke["_"]);
if(or__3548__auto____283012)
{return or__3548__auto____283012;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3546__auto____283013 = this$;
if(and__3546__auto____283013)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3546__auto____283013;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____283014 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283014)
{return or__3548__auto____283014;
} else
{var or__3548__auto____283015 = (cljs.core._invoke["_"]);
if(or__3548__auto____283015)
{return or__3548__auto____283015;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3546__auto____283016 = coll;
if(and__3546__auto____283016)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3546__auto____283016;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3548__auto____283017 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283017)
{return or__3548__auto____283017;
} else
{var or__3548__auto____283018 = (cljs.core._count["_"]);
if(or__3548__auto____283018)
{return or__3548__auto____283018;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3546__auto____283019 = coll;
if(and__3546__auto____283019)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3546__auto____283019;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3548__auto____283020 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283020)
{return or__3548__auto____283020;
} else
{var or__3548__auto____283021 = (cljs.core._empty["_"]);
if(or__3548__auto____283021)
{return or__3548__auto____283021;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3546__auto____283022 = coll;
if(and__3546__auto____283022)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3546__auto____283022;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3548__auto____283023 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283023)
{return or__3548__auto____283023;
} else
{var or__3548__auto____283024 = (cljs.core._conj["_"]);
if(or__3548__auto____283024)
{return or__3548__auto____283024;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3546__auto____283025 = coll;
if(and__3546__auto____283025)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3546__auto____283025;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3548__auto____283026 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283026)
{return or__3548__auto____283026;
} else
{var or__3548__auto____283027 = (cljs.core._nth["_"]);
if(or__3548__auto____283027)
{return or__3548__auto____283027;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3546__auto____283028 = coll;
if(and__3546__auto____283028)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3546__auto____283028;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____283029 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283029)
{return or__3548__auto____283029;
} else
{var or__3548__auto____283030 = (cljs.core._nth["_"]);
if(or__3548__auto____283030)
{return or__3548__auto____283030;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3546__auto____283031 = coll;
if(and__3546__auto____283031)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3546__auto____283031;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3548__auto____283032 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283032)
{return or__3548__auto____283032;
} else
{var or__3548__auto____283033 = (cljs.core._first["_"]);
if(or__3548__auto____283033)
{return or__3548__auto____283033;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3546__auto____283034 = coll;
if(and__3546__auto____283034)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3546__auto____283034;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3548__auto____283035 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283035)
{return or__3548__auto____283035;
} else
{var or__3548__auto____283036 = (cljs.core._rest["_"]);
if(or__3548__auto____283036)
{return or__3548__auto____283036;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3546__auto____283037 = o;
if(and__3546__auto____283037)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3546__auto____283037;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3548__auto____283038 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____283038)
{return or__3548__auto____283038;
} else
{var or__3548__auto____283039 = (cljs.core._lookup["_"]);
if(or__3548__auto____283039)
{return or__3548__auto____283039;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3546__auto____283040 = o;
if(and__3546__auto____283040)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3546__auto____283040;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3548__auto____283041 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____283041)
{return or__3548__auto____283041;
} else
{var or__3548__auto____283042 = (cljs.core._lookup["_"]);
if(or__3548__auto____283042)
{return or__3548__auto____283042;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3546__auto____283043 = coll;
if(and__3546__auto____283043)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3546__auto____283043;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____283044 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283044)
{return or__3548__auto____283044;
} else
{var or__3548__auto____283045 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3548__auto____283045)
{return or__3548__auto____283045;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3546__auto____283046 = coll;
if(and__3546__auto____283046)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3546__auto____283046;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3548__auto____283047 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283047)
{return or__3548__auto____283047;
} else
{var or__3548__auto____283048 = (cljs.core._assoc["_"]);
if(or__3548__auto____283048)
{return or__3548__auto____283048;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3546__auto____283049 = coll;
if(and__3546__auto____283049)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3546__auto____283049;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____283050 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283050)
{return or__3548__auto____283050;
} else
{var or__3548__auto____283051 = (cljs.core._dissoc["_"]);
if(or__3548__auto____283051)
{return or__3548__auto____283051;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3546__auto____283052 = coll;
if(and__3546__auto____283052)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3546__auto____283052;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3548__auto____283053 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283053)
{return or__3548__auto____283053;
} else
{var or__3548__auto____283054 = (cljs.core._key["_"]);
if(or__3548__auto____283054)
{return or__3548__auto____283054;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3546__auto____283055 = coll;
if(and__3546__auto____283055)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3546__auto____283055;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3548__auto____283056 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283056)
{return or__3548__auto____283056;
} else
{var or__3548__auto____283057 = (cljs.core._val["_"]);
if(or__3548__auto____283057)
{return or__3548__auto____283057;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3546__auto____283058 = coll;
if(and__3546__auto____283058)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3546__auto____283058;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3548__auto____283059 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283059)
{return or__3548__auto____283059;
} else
{var or__3548__auto____283060 = (cljs.core._disjoin["_"]);
if(or__3548__auto____283060)
{return or__3548__auto____283060;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3546__auto____283061 = coll;
if(and__3546__auto____283061)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3546__auto____283061;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3548__auto____283062 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283062)
{return or__3548__auto____283062;
} else
{var or__3548__auto____283063 = (cljs.core._peek["_"]);
if(or__3548__auto____283063)
{return or__3548__auto____283063;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3546__auto____283064 = coll;
if(and__3546__auto____283064)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3546__auto____283064;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3548__auto____283065 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283065)
{return or__3548__auto____283065;
} else
{var or__3548__auto____283066 = (cljs.core._pop["_"]);
if(or__3548__auto____283066)
{return or__3548__auto____283066;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3546__auto____283067 = coll;
if(and__3546__auto____283067)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3546__auto____283067;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3548__auto____283068 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283068)
{return or__3548__auto____283068;
} else
{var or__3548__auto____283069 = (cljs.core._assoc_n["_"]);
if(or__3548__auto____283069)
{return or__3548__auto____283069;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3546__auto____283070 = o;
if(and__3546__auto____283070)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3546__auto____283070;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3548__auto____283071 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3548__auto____283071)
{return or__3548__auto____283071;
} else
{var or__3548__auto____283072 = (cljs.core._deref["_"]);
if(or__3548__auto____283072)
{return or__3548__auto____283072;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3546__auto____283073 = o;
if(and__3546__auto____283073)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3546__auto____283073;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____283074 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3548__auto____283074)
{return or__3548__auto____283074;
} else
{var or__3548__auto____283075 = (cljs.core._deref_with_timeout["_"]);
if(or__3548__auto____283075)
{return or__3548__auto____283075;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3546__auto____283076 = o;
if(and__3546__auto____283076)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3546__auto____283076;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3548__auto____283077 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____283077)
{return or__3548__auto____283077;
} else
{var or__3548__auto____283078 = (cljs.core._meta["_"]);
if(or__3548__auto____283078)
{return or__3548__auto____283078;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3546__auto____283079 = o;
if(and__3546__auto____283079)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3546__auto____283079;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3548__auto____283080 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____283080)
{return or__3548__auto____283080;
} else
{var or__3548__auto____283081 = (cljs.core._with_meta["_"]);
if(or__3548__auto____283081)
{return or__3548__auto____283081;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3546__auto____283082 = coll;
if(and__3546__auto____283082)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3546__auto____283082;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3548__auto____283083 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283083)
{return or__3548__auto____283083;
} else
{var or__3548__auto____283084 = (cljs.core._reduce["_"]);
if(or__3548__auto____283084)
{return or__3548__auto____283084;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3546__auto____283085 = coll;
if(and__3546__auto____283085)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3546__auto____283085;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3548__auto____283086 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283086)
{return or__3548__auto____283086;
} else
{var or__3548__auto____283087 = (cljs.core._reduce["_"]);
if(or__3548__auto____283087)
{return or__3548__auto____283087;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3546__auto____283088 = coll;
if(and__3546__auto____283088)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3546__auto____283088;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3548__auto____283089 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283089)
{return or__3548__auto____283089;
} else
{var or__3548__auto____283090 = (cljs.core._kv_reduce["_"]);
if(or__3548__auto____283090)
{return or__3548__auto____283090;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3546__auto____283091 = o;
if(and__3546__auto____283091)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3546__auto____283091;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3548__auto____283092 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3548__auto____283092)
{return or__3548__auto____283092;
} else
{var or__3548__auto____283093 = (cljs.core._equiv["_"]);
if(or__3548__auto____283093)
{return or__3548__auto____283093;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3546__auto____283094 = o;
if(and__3546__auto____283094)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3546__auto____283094;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3548__auto____283095 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3548__auto____283095)
{return or__3548__auto____283095;
} else
{var or__3548__auto____283096 = (cljs.core._hash["_"]);
if(or__3548__auto____283096)
{return or__3548__auto____283096;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3546__auto____283097 = o;
if(and__3546__auto____283097)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3546__auto____283097;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3548__auto____283098 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____283098)
{return or__3548__auto____283098;
} else
{var or__3548__auto____283099 = (cljs.core._seq["_"]);
if(or__3548__auto____283099)
{return or__3548__auto____283099;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3546__auto____283100 = coll;
if(and__3546__auto____283100)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3546__auto____283100;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3548__auto____283101 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283101)
{return or__3548__auto____283101;
} else
{var or__3548__auto____283102 = (cljs.core._rseq["_"]);
if(or__3548__auto____283102)
{return or__3548__auto____283102;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3546__auto____283103 = coll;
if(and__3546__auto____283103)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3546__auto____283103;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____283104 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283104)
{return or__3548__auto____283104;
} else
{var or__3548__auto____283105 = (cljs.core._sorted_seq["_"]);
if(or__3548__auto____283105)
{return or__3548__auto____283105;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3546__auto____283106 = coll;
if(and__3546__auto____283106)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3546__auto____283106;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____283107 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283107)
{return or__3548__auto____283107;
} else
{var or__3548__auto____283108 = (cljs.core._sorted_seq_from["_"]);
if(or__3548__auto____283108)
{return or__3548__auto____283108;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3546__auto____283109 = coll;
if(and__3546__auto____283109)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3546__auto____283109;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3548__auto____283110 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283110)
{return or__3548__auto____283110;
} else
{var or__3548__auto____283111 = (cljs.core._entry_key["_"]);
if(or__3548__auto____283111)
{return or__3548__auto____283111;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3546__auto____283112 = coll;
if(and__3546__auto____283112)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3546__auto____283112;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3548__auto____283113 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283113)
{return or__3548__auto____283113;
} else
{var or__3548__auto____283114 = (cljs.core._comparator["_"]);
if(or__3548__auto____283114)
{return or__3548__auto____283114;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3546__auto____283115 = o;
if(and__3546__auto____283115)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3546__auto____283115;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3548__auto____283116 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____283116)
{return or__3548__auto____283116;
} else
{var or__3548__auto____283117 = (cljs.core._pr_seq["_"]);
if(or__3548__auto____283117)
{return or__3548__auto____283117;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3546__auto____283118 = d;
if(and__3546__auto____283118)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3546__auto____283118;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3548__auto____283119 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3548__auto____283119)
{return or__3548__auto____283119;
} else
{var or__3548__auto____283120 = (cljs.core._realized_QMARK_["_"]);
if(or__3548__auto____283120)
{return or__3548__auto____283120;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3546__auto____283121 = this$;
if(and__3546__auto____283121)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3546__auto____283121;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____283122 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283122)
{return or__3548__auto____283122;
} else
{var or__3548__auto____283123 = (cljs.core._notify_watches["_"]);
if(or__3548__auto____283123)
{return or__3548__auto____283123;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3546__auto____283124 = this$;
if(and__3546__auto____283124)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3546__auto____283124;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3548__auto____283125 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283125)
{return or__3548__auto____283125;
} else
{var or__3548__auto____283126 = (cljs.core._add_watch["_"]);
if(or__3548__auto____283126)
{return or__3548__auto____283126;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3546__auto____283127 = this$;
if(and__3546__auto____283127)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3546__auto____283127;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3548__auto____283128 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____283128)
{return or__3548__auto____283128;
} else
{var or__3548__auto____283129 = (cljs.core._remove_watch["_"]);
if(or__3548__auto____283129)
{return or__3548__auto____283129;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3546__auto____283130 = coll;
if(and__3546__auto____283130)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3546__auto____283130;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3548__auto____283131 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3548__auto____283131)
{return or__3548__auto____283131;
} else
{var or__3548__auto____283132 = (cljs.core._as_transient["_"]);
if(or__3548__auto____283132)
{return or__3548__auto____283132;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3546__auto____283133 = tcoll;
if(and__3546__auto____283133)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3546__auto____283133;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3548__auto____283134 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283134)
{return or__3548__auto____283134;
} else
{var or__3548__auto____283135 = (cljs.core._conj_BANG_["_"]);
if(or__3548__auto____283135)
{return or__3548__auto____283135;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3546__auto____283136 = tcoll;
if(and__3546__auto____283136)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3546__auto____283136;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____283137 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283137)
{return or__3548__auto____283137;
} else
{var or__3548__auto____283138 = (cljs.core._persistent_BANG_["_"]);
if(or__3548__auto____283138)
{return or__3548__auto____283138;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3546__auto____283139 = tcoll;
if(and__3546__auto____283139)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3546__auto____283139;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3548__auto____283140 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283140)
{return or__3548__auto____283140;
} else
{var or__3548__auto____283141 = (cljs.core._assoc_BANG_["_"]);
if(or__3548__auto____283141)
{return or__3548__auto____283141;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3546__auto____283142 = tcoll;
if(and__3546__auto____283142)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3546__auto____283142;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3548__auto____283143 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283143)
{return or__3548__auto____283143;
} else
{var or__3548__auto____283144 = (cljs.core._dissoc_BANG_["_"]);
if(or__3548__auto____283144)
{return or__3548__auto____283144;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3546__auto____283145 = tcoll;
if(and__3546__auto____283145)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3546__auto____283145;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3548__auto____283146 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283146)
{return or__3548__auto____283146;
} else
{var or__3548__auto____283147 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3548__auto____283147)
{return or__3548__auto____283147;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3546__auto____283148 = tcoll;
if(and__3546__auto____283148)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3546__auto____283148;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____283149 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283149)
{return or__3548__auto____283149;
} else
{var or__3548__auto____283150 = (cljs.core._pop_BANG_["_"]);
if(or__3548__auto____283150)
{return or__3548__auto____283150;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3546__auto____283151 = tcoll;
if(and__3546__auto____283151)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3546__auto____283151;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3548__auto____283152 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____283152)
{return or__3548__auto____283152;
} else
{var or__3548__auto____283153 = (cljs.core._disjoin_BANG_["_"]);
if(or__3548__auto____283153)
{return or__3548__auto____283153;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3548__auto____283154 = (x === y);
if(or__3548__auto____283154)
{return or__3548__auto____283154;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__283155__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283156 = y;
var G__283157 = cljs.core.first.call(null,more);
var G__283158 = cljs.core.next.call(null,more);
x = G__283156;
y = G__283157;
more = G__283158;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283155 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283155__delegate.call(this, x, y, more);
};
G__283155.cljs$lang$maxFixedArity = 2;
G__283155.cljs$lang$applyTo = (function (arglist__283159){
var x = cljs.core.first(arglist__283159);
var y = cljs.core.first(cljs.core.next(arglist__283159));
var more = cljs.core.rest(cljs.core.next(arglist__283159));
return G__283155__delegate(x, y, more);
});
G__283155.cljs$lang$arity$variadic = G__283155__delegate;
return G__283155;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3548__auto____283160 = (x == null);
if(or__3548__auto____283160)
{return or__3548__auto____283160;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__283161 = null;
var G__283161__2 = (function (o,k){
return null;
});
var G__283161__3 = (function (o,k,not_found){
return not_found;
});
G__283161 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__283161__2.call(this,o,k);
case 3:
return G__283161__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283161;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__283162 = null;
var G__283162__2 = (function (_,f){
return f.call(null);
});
var G__283162__3 = (function (_,f,start){
return start;
});
G__283162 = function(_,f,start){
switch(arguments.length){
case 2:
return G__283162__2.call(this,_,f);
case 3:
return G__283162__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283162;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__283163 = null;
var G__283163__2 = (function (_,n){
return null;
});
var G__283163__3 = (function (_,n,not_found){
return not_found;
});
G__283163 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__283163__2.call(this,_,n);
case 3:
return G__283163__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283163;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__283164 = cljs.core._nth.call(null,cicoll,0);
var n__283165 = 1;
while(true){
if((n__283165 < cljs.core._count.call(null,cicoll)))
{var nval__283166 = f.call(null,val__283164,cljs.core._nth.call(null,cicoll,n__283165));
if(cljs.core.reduced_QMARK_.call(null,nval__283166))
{return cljs.core.deref.call(null,nval__283166);
} else
{{
var G__283173 = nval__283166;
var G__283174 = (n__283165 + 1);
val__283164 = G__283173;
n__283165 = G__283174;
continue;
}
}
} else
{return val__283164;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__283167 = val;
var n__283168 = 0;
while(true){
if((n__283168 < cljs.core._count.call(null,cicoll)))
{var nval__283169 = f.call(null,val__283167,cljs.core._nth.call(null,cicoll,n__283168));
if(cljs.core.reduced_QMARK_.call(null,nval__283169))
{return cljs.core.deref.call(null,nval__283169);
} else
{{
var G__283175 = nval__283169;
var G__283176 = (n__283168 + 1);
val__283167 = G__283175;
n__283168 = G__283176;
continue;
}
}
} else
{return val__283167;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__283170 = val;
var n__283171 = idx;
while(true){
if((n__283171 < cljs.core._count.call(null,cicoll)))
{var nval__283172 = f.call(null,val__283170,cljs.core._nth.call(null,cicoll,n__283171));
if(cljs.core.reduced_QMARK_.call(null,nval__283172))
{return cljs.core.deref.call(null,nval__283172);
} else
{{
var G__283177 = nval__283172;
var G__283178 = (n__283171 + 1);
val__283170 = G__283177;
n__283171 = G__283178;
continue;
}
}
} else
{return val__283170;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283179 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283180 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__283181 = this;
var this$__283182 = this;
return cljs.core.pr_str.call(null,this$__283182);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__283183 = this;
if(cljs.core.counted_QMARK_.call(null,this__283183.a))
{return cljs.core.ci_reduce.call(null,this__283183.a,f,(this__283183.a[this__283183.i]),(this__283183.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__283183.a[this__283183.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__283184 = this;
if(cljs.core.counted_QMARK_.call(null,this__283184.a))
{return cljs.core.ci_reduce.call(null,this__283184.a,f,start,this__283184.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__283185 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__283186 = this;
return (this__283186.a.length - this__283186.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__283187 = this;
return (this__283187.a[this__283187.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__283188 = this;
if(((this__283188.i + 1) < this__283188.a.length))
{return (new cljs.core.IndexedSeq(this__283188.a,(this__283188.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283189 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__283190 = this;
var i__283191 = (n + this__283190.i);
if((i__283191 < this__283190.a.length))
{return (this__283190.a[i__283191]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__283192 = this;
var i__283193 = (n + this__283192.i);
if((i__283193 < this__283192.a.length))
{return (this__283192.a[i__283193]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__283194 = null;
var G__283194__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__283194__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__283194 = function(array,f,start){
switch(arguments.length){
case 2:
return G__283194__2.call(this,array,f);
case 3:
return G__283194__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283194;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__283195 = null;
var G__283195__2 = (function (array,k){
return (array[k]);
});
var G__283195__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__283195 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__283195__2.call(this,array,k);
case 3:
return G__283195__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283195;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__283196 = null;
var G__283196__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__283196__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__283196 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__283196__2.call(this,array,n);
case 3:
return G__283196__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283196;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll != null))
{if((function (){var G__283197__283198 = coll;
if((G__283197__283198 != null))
{if((function (){var or__3548__auto____283199 = (G__283197__283198.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____283199)
{return or__3548__auto____283199;
} else
{return G__283197__283198.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__283197__283198.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__283197__283198);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__283197__283198);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__283200__283201 = coll;
if((G__283200__283201 != null))
{if((function (){var or__3548__auto____283202 = (G__283200__283201.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____283202)
{return or__3548__auto____283202;
} else
{return G__283200__283201.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__283200__283201.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283200__283201);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283200__283201);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__283203 = cljs.core.seq.call(null,coll);
if((s__283203 != null))
{return cljs.core._first.call(null,s__283203);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__283204__283205 = coll;
if((G__283204__283205 != null))
{if((function (){var or__3548__auto____283206 = (G__283204__283205.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____283206)
{return or__3548__auto____283206;
} else
{return G__283204__283205.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__283204__283205.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283204__283205);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283204__283205);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__283207 = cljs.core.seq.call(null,coll);
if((s__283207 != null))
{return cljs.core._rest.call(null,s__283207);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__283208__283209 = coll;
if((G__283208__283209 != null))
{if((function (){var or__3548__auto____283210 = (G__283208__283209.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____283210)
{return or__3548__auto____283210;
} else
{return G__283208__283209.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__283208__283209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283208__283209);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283208__283209);
}
})())
{var coll__283211 = cljs.core._rest.call(null,coll);
if((coll__283211 != null))
{if((function (){var G__283212__283213 = coll__283211;
if((G__283212__283213 != null))
{if((function (){var or__3548__auto____283214 = (G__283212__283213.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____283214)
{return or__3548__auto____283214;
} else
{return G__283212__283213.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__283212__283213.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__283212__283213);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__283212__283213);
}
})())
{return coll__283211;
} else
{return cljs.core._seq.call(null,coll__283211);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__283215 = cljs.core.next.call(null,s);
s = G__283215;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__283216__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__283217 = conj.call(null,coll,x);
var G__283218 = cljs.core.first.call(null,xs);
var G__283219 = cljs.core.next.call(null,xs);
coll = G__283217;
x = G__283218;
xs = G__283219;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__283216 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283216__delegate.call(this, coll, x, xs);
};
G__283216.cljs$lang$maxFixedArity = 2;
G__283216.cljs$lang$applyTo = (function (arglist__283220){
var coll = cljs.core.first(arglist__283220);
var x = cljs.core.first(cljs.core.next(arglist__283220));
var xs = cljs.core.rest(cljs.core.next(arglist__283220));
return G__283216__delegate(coll, x, xs);
});
G__283216.cljs$lang$arity$variadic = G__283216__delegate;
return G__283216;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__283221 = cljs.core.seq.call(null,coll);
var acc__283222 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__283221))
{return (acc__283222 + cljs.core._count.call(null,s__283221));
} else
{{
var G__283223 = cljs.core.next.call(null,s__283221);
var G__283224 = (acc__283222 + 1);
s__283221 = G__283223;
acc__283222 = G__283224;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll != null))
{if((function (){var G__283225__283226 = coll;
if((G__283225__283226 != null))
{if((function (){var or__3548__auto____283227 = (G__283225__283226.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____283227)
{return or__3548__auto____283227;
} else
{return G__283225__283226.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__283225__283226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283225__283226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283225__283226);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
} else
{return null;
}
});
var nth__3 = (function (coll,n,not_found){
if((coll != null))
{if((function (){var G__283228__283229 = coll;
if((G__283228__283229 != null))
{if((function (){var or__3548__auto____283230 = (G__283228__283229.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____283230)
{return or__3548__auto____283230;
} else
{return G__283228__283229.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__283228__283229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283228__283229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283228__283229);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__283232__delegate = function (coll,k,v,kvs){
while(true){
var ret__283231 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__283233 = ret__283231;
var G__283234 = cljs.core.first.call(null,kvs);
var G__283235 = cljs.core.second.call(null,kvs);
var G__283236 = cljs.core.nnext.call(null,kvs);
coll = G__283233;
k = G__283234;
v = G__283235;
kvs = G__283236;
continue;
}
} else
{return ret__283231;
}
break;
}
};
var G__283232 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283232__delegate.call(this, coll, k, v, kvs);
};
G__283232.cljs$lang$maxFixedArity = 3;
G__283232.cljs$lang$applyTo = (function (arglist__283237){
var coll = cljs.core.first(arglist__283237);
var k = cljs.core.first(cljs.core.next(arglist__283237));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283237)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283237)));
return G__283232__delegate(coll, k, v, kvs);
});
G__283232.cljs$lang$arity$variadic = G__283232__delegate;
return G__283232;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__283239__delegate = function (coll,k,ks){
while(true){
var ret__283238 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__283240 = ret__283238;
var G__283241 = cljs.core.first.call(null,ks);
var G__283242 = cljs.core.next.call(null,ks);
coll = G__283240;
k = G__283241;
ks = G__283242;
continue;
}
} else
{return ret__283238;
}
break;
}
};
var G__283239 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283239__delegate.call(this, coll, k, ks);
};
G__283239.cljs$lang$maxFixedArity = 2;
G__283239.cljs$lang$applyTo = (function (arglist__283243){
var coll = cljs.core.first(arglist__283243);
var k = cljs.core.first(cljs.core.next(arglist__283243));
var ks = cljs.core.rest(cljs.core.next(arglist__283243));
return G__283239__delegate(coll, k, ks);
});
G__283239.cljs$lang$arity$variadic = G__283239__delegate;
return G__283239;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__283244__283245 = o;
if((G__283244__283245 != null))
{if((function (){var or__3548__auto____283246 = (G__283244__283245.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____283246)
{return or__3548__auto____283246;
} else
{return G__283244__283245.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__283244__283245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__283244__283245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__283244__283245);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__283248__delegate = function (coll,k,ks){
while(true){
var ret__283247 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__283249 = ret__283247;
var G__283250 = cljs.core.first.call(null,ks);
var G__283251 = cljs.core.next.call(null,ks);
coll = G__283249;
k = G__283250;
ks = G__283251;
continue;
}
} else
{return ret__283247;
}
break;
}
};
var G__283248 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283248__delegate.call(this, coll, k, ks);
};
G__283248.cljs$lang$maxFixedArity = 2;
G__283248.cljs$lang$applyTo = (function (arglist__283252){
var coll = cljs.core.first(arglist__283252);
var k = cljs.core.first(cljs.core.next(arglist__283252));
var ks = cljs.core.rest(cljs.core.next(arglist__283252));
return G__283248__delegate(coll, k, ks);
});
G__283248.cljs$lang$arity$variadic = G__283248__delegate;
return G__283248;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__283253__283254 = x;
if((G__283253__283254 != null))
{if((function (){var or__3548__auto____283255 = (G__283253__283254.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3548__auto____283255)
{return or__3548__auto____283255;
} else
{return G__283253__283254.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__283253__283254.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__283253__283254);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__283253__283254);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__283256__283257 = x;
if((G__283256__283257 != null))
{if((function (){var or__3548__auto____283258 = (G__283256__283257.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3548__auto____283258)
{return or__3548__auto____283258;
} else
{return G__283256__283257.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__283256__283257.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__283256__283257);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__283256__283257);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__283259__283260 = x;
if((G__283259__283260 != null))
{if((function (){var or__3548__auto____283261 = (G__283259__283260.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3548__auto____283261)
{return or__3548__auto____283261;
} else
{return G__283259__283260.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__283259__283260.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__283259__283260);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__283259__283260);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__283262__283263 = x;
if((G__283262__283263 != null))
{if((function (){var or__3548__auto____283264 = (G__283262__283263.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3548__auto____283264)
{return or__3548__auto____283264;
} else
{return G__283262__283263.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__283262__283263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__283262__283263);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__283262__283263);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__283265__283266 = x;
if((G__283265__283266 != null))
{if((function (){var or__3548__auto____283267 = (G__283265__283266.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3548__auto____283267)
{return or__3548__auto____283267;
} else
{return G__283265__283266.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__283265__283266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__283265__283266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__283265__283266);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__283268__283269 = x;
if((G__283268__283269 != null))
{if((function (){var or__3548__auto____283270 = (G__283268__283269.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____283270)
{return or__3548__auto____283270;
} else
{return G__283268__283269.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__283268__283269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283268__283269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__283268__283269);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__283271__283272 = x;
if((G__283271__283272 != null))
{if((function (){var or__3548__auto____283273 = (G__283271__283272.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____283273)
{return or__3548__auto____283273;
} else
{return G__283271__283272.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__283271__283272.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283271__283272);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283271__283272);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__283274__283275 = x;
if((G__283274__283275 != null))
{if((function (){var or__3548__auto____283276 = (G__283274__283275.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3548__auto____283276)
{return or__3548__auto____283276;
} else
{return G__283274__283275.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__283274__283275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__283274__283275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__283274__283275);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__283277__283278 = x;
if((G__283277__283278 != null))
{if((function (){var or__3548__auto____283279 = (G__283277__283278.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3548__auto____283279)
{return or__3548__auto____283279;
} else
{return G__283277__283278.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__283277__283278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__283277__283278);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__283277__283278);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__283280__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__283280 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283280__delegate.call(this, keyvals);
};
G__283280.cljs$lang$maxFixedArity = 0;
G__283280.cljs$lang$applyTo = (function (arglist__283281){
var keyvals = cljs.core.seq(arglist__283281);;
return G__283280__delegate(keyvals);
});
G__283280.cljs$lang$arity$variadic = G__283280__delegate;
return G__283280;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__283282 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__283282.push(key);
}));
return keys__283282;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__283283 = i;
var j__283284 = j;
var len__283285 = len;
while(true){
if((len__283285 === 0))
{return to;
} else
{(to[j__283284] = (from[i__283283]));
{
var G__283286 = (i__283283 + 1);
var G__283287 = (j__283284 + 1);
var G__283288 = (len__283285 - 1);
i__283283 = G__283286;
j__283284 = G__283287;
len__283285 = G__283288;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__283289 = (i + (len - 1));
var j__283290 = (j + (len - 1));
var len__283291 = len;
while(true){
if((len__283291 === 0))
{return to;
} else
{(to[j__283290] = (from[i__283289]));
{
var G__283292 = (i__283289 - 1);
var G__283293 = (j__283290 - 1);
var G__283294 = (len__283291 - 1);
i__283289 = G__283292;
j__283290 = G__283293;
len__283291 = G__283294;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__283295__283296 = s;
if((G__283295__283296 != null))
{if((function (){var or__3548__auto____283297 = (G__283295__283296.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____283297)
{return or__3548__auto____283297;
} else
{return G__283295__283296.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__283295__283296.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283295__283296);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283295__283296);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__283298__283299 = s;
if((G__283298__283299 != null))
{if((function (){var or__3548__auto____283300 = (G__283298__283299.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3548__auto____283300)
{return or__3548__auto____283300;
} else
{return G__283298__283299.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__283298__283299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__283298__283299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__283298__283299);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____283301 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____283301))
{return cljs.core.not.call(null,(function (){var or__3548__auto____283302 = (x.charAt(0) === "\uFDD0");
if(or__3548__auto____283302)
{return or__3548__auto____283302;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3546__auto____283301;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____283303 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____283303))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3546__auto____283303;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____283304 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____283304))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3546__auto____283304;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____283305 = cljs.core.fn_QMARK_.call(null,f);
if(or__3548__auto____283305)
{return or__3548__auto____283305;
} else
{var G__283306__283307 = f;
if((G__283306__283307 != null))
{if((function (){var or__3548__auto____283308 = (G__283306__283307.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3548__auto____283308)
{return or__3548__auto____283308;
} else
{return G__283306__283307.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__283306__283307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__283306__283307);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__283306__283307);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____283309 = cljs.core.number_QMARK_.call(null,n);
if(and__3546__auto____283309)
{return (n == n.toFixed());
} else
{return and__3546__auto____283309;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____283310 = coll;
if(cljs.core.truth_(and__3546__auto____283310))
{var and__3546__auto____283311 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3546__auto____283311)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____283311;
}
} else
{return and__3546__auto____283310;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__283316__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__283312 = cljs.core.set([y,x]);
var xs__283313 = more;
while(true){
var x__283314 = cljs.core.first.call(null,xs__283313);
var etc__283315 = cljs.core.next.call(null,xs__283313);
if(cljs.core.truth_(xs__283313))
{if(cljs.core.contains_QMARK_.call(null,s__283312,x__283314))
{return false;
} else
{{
var G__283317 = cljs.core.conj.call(null,s__283312,x__283314);
var G__283318 = etc__283315;
s__283312 = G__283317;
xs__283313 = G__283318;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__283316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283316__delegate.call(this, x, y, more);
};
G__283316.cljs$lang$maxFixedArity = 2;
G__283316.cljs$lang$applyTo = (function (arglist__283319){
var x = cljs.core.first(arglist__283319);
var y = cljs.core.first(cljs.core.next(arglist__283319));
var more = cljs.core.rest(cljs.core.next(arglist__283319));
return G__283316__delegate(x, y, more);
});
G__283316.cljs$lang$arity$variadic = G__283316__delegate;
return G__283316;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__283320 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__283320))
{return r__283320;
} else
{if(cljs.core.truth_(r__283320))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__283321 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__283321,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__283321);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3695__auto____283322 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____283322))
{var s__283323 = temp__3695__auto____283322;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__283323),cljs.core.next.call(null,s__283323));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__283324 = val;
var coll__283325 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__283325))
{var nval__283326 = f.call(null,val__283324,cljs.core.first.call(null,coll__283325));
if(cljs.core.reduced_QMARK_.call(null,nval__283326))
{return cljs.core.deref.call(null,nval__283326);
} else
{{
var G__283327 = nval__283326;
var G__283328 = cljs.core.next.call(null,coll__283325);
val__283324 = G__283327;
coll__283325 = G__283328;
continue;
}
}
} else
{return val__283324;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__283329__283330 = coll;
if((G__283329__283330 != null))
{if((function (){var or__3548__auto____283331 = (G__283329__283330.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____283331)
{return or__3548__auto____283331;
} else
{return G__283329__283330.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__283329__283330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283329__283330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283329__283330);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__283332__283333 = coll;
if((G__283332__283333 != null))
{if((function (){var or__3548__auto____283334 = (G__283332__283333.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____283334)
{return or__3548__auto____283334;
} else
{return G__283332__283333.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__283332__283333.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283332__283333);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__283332__283333);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__283335 = this;
return this__283335.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__283336__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__283336 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283336__delegate.call(this, x, y, more);
};
G__283336.cljs$lang$maxFixedArity = 2;
G__283336.cljs$lang$applyTo = (function (arglist__283337){
var x = cljs.core.first(arglist__283337);
var y = cljs.core.first(cljs.core.next(arglist__283337));
var more = cljs.core.rest(cljs.core.next(arglist__283337));
return G__283336__delegate(x, y, more);
});
G__283336.cljs$lang$arity$variadic = G__283336__delegate;
return G__283336;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__283338__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__283338 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283338__delegate.call(this, x, y, more);
};
G__283338.cljs$lang$maxFixedArity = 2;
G__283338.cljs$lang$applyTo = (function (arglist__283339){
var x = cljs.core.first(arglist__283339);
var y = cljs.core.first(cljs.core.next(arglist__283339));
var more = cljs.core.rest(cljs.core.next(arglist__283339));
return G__283338__delegate(x, y, more);
});
G__283338.cljs$lang$arity$variadic = G__283338__delegate;
return G__283338;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__283340__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__283340 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283340__delegate.call(this, x, y, more);
};
G__283340.cljs$lang$maxFixedArity = 2;
G__283340.cljs$lang$applyTo = (function (arglist__283341){
var x = cljs.core.first(arglist__283341);
var y = cljs.core.first(cljs.core.next(arglist__283341));
var more = cljs.core.rest(cljs.core.next(arglist__283341));
return G__283340__delegate(x, y, more);
});
G__283340.cljs$lang$arity$variadic = G__283340__delegate;
return G__283340;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__283342__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__283342 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283342__delegate.call(this, x, y, more);
};
G__283342.cljs$lang$maxFixedArity = 2;
G__283342.cljs$lang$applyTo = (function (arglist__283343){
var x = cljs.core.first(arglist__283343);
var y = cljs.core.first(cljs.core.next(arglist__283343));
var more = cljs.core.rest(cljs.core.next(arglist__283343));
return G__283342__delegate(x, y, more);
});
G__283342.cljs$lang$arity$variadic = G__283342__delegate;
return G__283342;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__283344__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283345 = y;
var G__283346 = cljs.core.first.call(null,more);
var G__283347 = cljs.core.next.call(null,more);
x = G__283345;
y = G__283346;
more = G__283347;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283344__delegate.call(this, x, y, more);
};
G__283344.cljs$lang$maxFixedArity = 2;
G__283344.cljs$lang$applyTo = (function (arglist__283348){
var x = cljs.core.first(arglist__283348);
var y = cljs.core.first(cljs.core.next(arglist__283348));
var more = cljs.core.rest(cljs.core.next(arglist__283348));
return G__283344__delegate(x, y, more);
});
G__283344.cljs$lang$arity$variadic = G__283344__delegate;
return G__283344;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__283349__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283350 = y;
var G__283351 = cljs.core.first.call(null,more);
var G__283352 = cljs.core.next.call(null,more);
x = G__283350;
y = G__283351;
more = G__283352;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283349__delegate.call(this, x, y, more);
};
G__283349.cljs$lang$maxFixedArity = 2;
G__283349.cljs$lang$applyTo = (function (arglist__283353){
var x = cljs.core.first(arglist__283353);
var y = cljs.core.first(cljs.core.next(arglist__283353));
var more = cljs.core.rest(cljs.core.next(arglist__283353));
return G__283349__delegate(x, y, more);
});
G__283349.cljs$lang$arity$variadic = G__283349__delegate;
return G__283349;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__283354__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283355 = y;
var G__283356 = cljs.core.first.call(null,more);
var G__283357 = cljs.core.next.call(null,more);
x = G__283355;
y = G__283356;
more = G__283357;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283354__delegate.call(this, x, y, more);
};
G__283354.cljs$lang$maxFixedArity = 2;
G__283354.cljs$lang$applyTo = (function (arglist__283358){
var x = cljs.core.first(arglist__283358);
var y = cljs.core.first(cljs.core.next(arglist__283358));
var more = cljs.core.rest(cljs.core.next(arglist__283358));
return G__283354__delegate(x, y, more);
});
G__283354.cljs$lang$arity$variadic = G__283354__delegate;
return G__283354;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__283359__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283360 = y;
var G__283361 = cljs.core.first.call(null,more);
var G__283362 = cljs.core.next.call(null,more);
x = G__283360;
y = G__283361;
more = G__283362;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283359 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283359__delegate.call(this, x, y, more);
};
G__283359.cljs$lang$maxFixedArity = 2;
G__283359.cljs$lang$applyTo = (function (arglist__283363){
var x = cljs.core.first(arglist__283363);
var y = cljs.core.first(cljs.core.next(arglist__283363));
var more = cljs.core.rest(cljs.core.next(arglist__283363));
return G__283359__delegate(x, y, more);
});
G__283359.cljs$lang$arity$variadic = G__283359__delegate;
return G__283359;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__283364__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__283364 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283364__delegate.call(this, x, y, more);
};
G__283364.cljs$lang$maxFixedArity = 2;
G__283364.cljs$lang$applyTo = (function (arglist__283365){
var x = cljs.core.first(arglist__283365);
var y = cljs.core.first(cljs.core.next(arglist__283365));
var more = cljs.core.rest(cljs.core.next(arglist__283365));
return G__283364__delegate(x, y, more);
});
G__283364.cljs$lang$arity$variadic = G__283364__delegate;
return G__283364;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__283366__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__283366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283366__delegate.call(this, x, y, more);
};
G__283366.cljs$lang$maxFixedArity = 2;
G__283366.cljs$lang$applyTo = (function (arglist__283367){
var x = cljs.core.first(arglist__283367);
var y = cljs.core.first(cljs.core.next(arglist__283367));
var more = cljs.core.rest(cljs.core.next(arglist__283367));
return G__283366__delegate(x, y, more);
});
G__283366.cljs$lang$arity$variadic = G__283366__delegate;
return G__283366;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__283368 = (n % d);
return cljs.core.fix.call(null,((n - rem__283368) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__283369 = cljs.core.quot.call(null,n,d);
return (n - (d * q__283369));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__283370 = 0;
var n__283371 = n;
while(true){
if((n__283371 === 0))
{return c__283370;
} else
{{
var G__283372 = (c__283370 + 1);
var G__283373 = (n__283371 & (n__283371 - 1));
c__283370 = G__283372;
n__283371 = G__283373;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__283374__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__283375 = y;
var G__283376 = cljs.core.first.call(null,more);
var G__283377 = cljs.core.next.call(null,more);
x = G__283375;
y = G__283376;
more = G__283377;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__283374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283374__delegate.call(this, x, y, more);
};
G__283374.cljs$lang$maxFixedArity = 2;
G__283374.cljs$lang$applyTo = (function (arglist__283378){
var x = cljs.core.first(arglist__283378);
var y = cljs.core.first(cljs.core.next(arglist__283378));
var more = cljs.core.rest(cljs.core.next(arglist__283378));
return G__283374__delegate(x, y, more);
});
G__283374.cljs$lang$arity$variadic = G__283374__delegate;
return G__283374;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__283379 = n;
var xs__283380 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____283381 = xs__283380;
if(cljs.core.truth_(and__3546__auto____283381))
{return (n__283379 > 0);
} else
{return and__3546__auto____283381;
}
})()))
{{
var G__283382 = (n__283379 - 1);
var G__283383 = cljs.core.next.call(null,xs__283380);
n__283379 = G__283382;
xs__283380 = G__283383;
continue;
}
} else
{return xs__283380;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__283384__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__283385 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__283386 = cljs.core.next.call(null,more);
sb = G__283385;
more = G__283386;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__283384 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__283384__delegate.call(this, x, ys);
};
G__283384.cljs$lang$maxFixedArity = 1;
G__283384.cljs$lang$applyTo = (function (arglist__283387){
var x = cljs.core.first(arglist__283387);
var ys = cljs.core.rest(arglist__283387);
return G__283384__delegate(x, ys);
});
G__283384.cljs$lang$arity$variadic = G__283384__delegate;
return G__283384;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__283388__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__283389 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__283390 = cljs.core.next.call(null,more);
sb = G__283389;
more = G__283390;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__283388 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__283388__delegate.call(this, x, ys);
};
G__283388.cljs$lang$maxFixedArity = 1;
G__283388.cljs$lang$applyTo = (function (arglist__283391){
var x = cljs.core.first(arglist__283391);
var ys = cljs.core.rest(arglist__283391);
return G__283388__delegate(x, ys);
});
G__283388.cljs$lang$arity$variadic = G__283388__delegate;
return G__283388;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__283392 = cljs.core.seq.call(null,x);
var ys__283393 = cljs.core.seq.call(null,y);
while(true){
if((xs__283392 == null))
{return (ys__283393 == null);
} else
{if((ys__283393 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__283392),cljs.core.first.call(null,ys__283393)))
{{
var G__283394 = cljs.core.next.call(null,xs__283392);
var G__283395 = cljs.core.next.call(null,ys__283393);
xs__283392 = G__283394;
ys__283393 = G__283395;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__283396_SHARP_,p2__283397_SHARP_){
return cljs.core.hash_combine.call(null,p1__283396_SHARP_,cljs.core.hash.call(null,p2__283397_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__283398 = 0;
var s__283399 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__283399))
{var e__283400 = cljs.core.first.call(null,s__283399);
{
var G__283401 = ((h__283398 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__283400)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__283400)))) % 4503599627370496);
var G__283402 = cljs.core.next.call(null,s__283399);
h__283398 = G__283401;
s__283399 = G__283402;
continue;
}
} else
{return h__283398;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__283403 = 0;
var s__283404 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__283404))
{var e__283405 = cljs.core.first.call(null,s__283404);
{
var G__283406 = ((h__283403 + cljs.core.hash.call(null,e__283405)) % 4503599627370496);
var G__283407 = cljs.core.next.call(null,s__283404);
h__283403 = G__283406;
s__283404 = G__283407;
continue;
}
} else
{return h__283403;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__283408__283409 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__283408__283409))
{var G__283411__283413 = cljs.core.first.call(null,G__283408__283409);
var vec__283412__283414 = G__283411__283413;
var key_name__283415 = cljs.core.nth.call(null,vec__283412__283414,0,null);
var f__283416 = cljs.core.nth.call(null,vec__283412__283414,1,null);
var G__283408__283417 = G__283408__283409;
var G__283411__283418 = G__283411__283413;
var G__283408__283419 = G__283408__283417;
while(true){
var vec__283420__283421 = G__283411__283418;
var key_name__283422 = cljs.core.nth.call(null,vec__283420__283421,0,null);
var f__283423 = cljs.core.nth.call(null,vec__283420__283421,1,null);
var G__283408__283424 = G__283408__283419;
var str_name__283425 = cljs.core.name.call(null,key_name__283422);
obj[str_name__283425] = f__283423;
var temp__3698__auto____283426 = cljs.core.next.call(null,G__283408__283424);
if(cljs.core.truth_(temp__3698__auto____283426))
{var G__283408__283427 = temp__3698__auto____283426;
{
var G__283428 = cljs.core.first.call(null,G__283408__283427);
var G__283429 = G__283408__283427;
G__283411__283418 = G__283428;
G__283408__283419 = G__283429;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283430 = this;
var h__368__auto____283431 = this__283430.__hash;
if((h__368__auto____283431 != null))
{return h__368__auto____283431;
} else
{var h__368__auto____283432 = cljs.core.hash_coll.call(null,coll);
this__283430.__hash = h__368__auto____283432;
return h__368__auto____283432;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283433 = this;
return (new cljs.core.List(this__283433.meta,o,coll,(this__283433.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__283434 = this;
var this$__283435 = this;
return cljs.core.pr_str.call(null,this$__283435);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283436 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__283437 = this;
return this__283437.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__283438 = this;
return this__283438.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__283439 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__283440 = this;
return this__283440.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__283441 = this;
return this__283441.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283442 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283443 = this;
return (new cljs.core.List(meta,this__283443.first,this__283443.rest,this__283443.count,this__283443.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283444 = this;
return this__283444.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283445 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283446 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283447 = this;
return (new cljs.core.List(this__283447.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__283448 = this;
var this$__283449 = this;
return cljs.core.pr_str.call(null,this$__283449);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283450 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__283451 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__283452 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__283453 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__283454 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__283455 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283456 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283457 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283458 = this;
return this__283458.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283459 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__283460__283461 = coll;
if((G__283460__283461 != null))
{if((function (){var or__3548__auto____283462 = (G__283460__283461.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3548__auto____283462)
{return or__3548__auto____283462;
} else
{return G__283460__283461.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__283460__283461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__283460__283461);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__283460__283461);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__283463){
var items = cljs.core.seq(arglist__283463);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283464 = this;
var h__368__auto____283465 = this__283464.__hash;
if((h__368__auto____283465 != null))
{return h__368__auto____283465;
} else
{var h__368__auto____283466 = cljs.core.hash_coll.call(null,coll);
this__283464.__hash = h__368__auto____283466;
return h__368__auto____283466;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283467 = this;
return (new cljs.core.Cons(null,o,coll,this__283467.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__283468 = this;
var this$__283469 = this;
return cljs.core.pr_str.call(null,this$__283469);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283470 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__283471 = this;
return this__283471.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__283472 = this;
if((this__283472.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__283472.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283473 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283474 = this;
return (new cljs.core.Cons(meta,this__283474.first,this__283474.rest,this__283474.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283475 = this;
return this__283475.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283476 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__283476.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3548__auto____283477 = (coll == null);
if(or__3548__auto____283477)
{return or__3548__auto____283477;
} else
{var G__283478__283479 = coll;
if((G__283478__283479 != null))
{if((function (){var or__3548__auto____283480 = (G__283478__283479.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____283480)
{return or__3548__auto____283480;
} else
{return G__283478__283479.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__283478__283479.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283478__283479);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__283478__283479);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__283481__283482 = x;
if((G__283481__283482 != null))
{if((function (){var or__3548__auto____283483 = (G__283481__283482.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3548__auto____283483)
{return or__3548__auto____283483;
} else
{return G__283481__283482.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__283481__283482.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__283481__283482);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__283481__283482);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__283484 = null;
var G__283484__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__283484__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__283484 = function(string,f,start){
switch(arguments.length){
case 2:
return G__283484__2.call(this,string,f);
case 3:
return G__283484__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283484;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__283485 = null;
var G__283485__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__283485__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__283485 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__283485__2.call(this,string,k);
case 3:
return G__283485__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283485;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__283486 = null;
var G__283486__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__283486__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__283486 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__283486__2.call(this,string,n);
case 3:
return G__283486__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283486;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__283495 = null;
var G__283495__2 = (function (tsym283489,coll){
var tsym283489__283491 = this;
var this$__283492 = tsym283489__283491;
return cljs.core.get.call(null,coll,this$__283492.toString());
});
var G__283495__3 = (function (tsym283490,coll,not_found){
var tsym283490__283493 = this;
var this$__283494 = tsym283490__283493;
return cljs.core.get.call(null,coll,this$__283494.toString(),not_found);
});
G__283495 = function(tsym283490,coll,not_found){
switch(arguments.length){
case 2:
return G__283495__2.call(this,tsym283490,coll);
case 3:
return G__283495__3.call(this,tsym283490,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283495;
})()
;
String.prototype.apply = (function (tsym283487,args283488){
return tsym283487.call.apply(tsym283487,[tsym283487].concat(cljs.core.aclone.call(null,args283488)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__283496 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__283496;
} else
{lazy_seq.x = x__283496.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283497 = this;
var h__368__auto____283498 = this__283497.__hash;
if((h__368__auto____283498 != null))
{return h__368__auto____283498;
} else
{var h__368__auto____283499 = cljs.core.hash_coll.call(null,coll);
this__283497.__hash = h__368__auto____283499;
return h__368__auto____283499;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283500 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__283501 = this;
var this$__283502 = this;
return cljs.core.pr_str.call(null,this$__283502);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283503 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__283504 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__283505 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283507 = this;
return (new cljs.core.LazySeq(meta,this__283507.realized,this__283507.x,this__283507.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283508 = this;
return this__283508.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283509 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__283509.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__283510 = [];
var s__283511 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__283511)))
{ary__283510.push(cljs.core.first.call(null,s__283511));
{
var G__283512 = cljs.core.next.call(null,s__283511);
s__283511 = G__283512;
continue;
}
} else
{return ary__283510;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__283513 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__283514 = 0;
var xs__283515 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__283515))
{(ret__283513[i__283514] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__283515)));
{
var G__283516 = (i__283514 + 1);
var G__283517 = cljs.core.next.call(null,xs__283515);
i__283514 = G__283516;
xs__283515 = G__283517;
continue;
}
} else
{}
break;
}
return ret__283513;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__283518 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__283519 = cljs.core.seq.call(null,init_val_or_seq);
var i__283520 = 0;
var s__283521 = s__283519;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____283522 = s__283521;
if(cljs.core.truth_(and__3546__auto____283522))
{return (i__283520 < size);
} else
{return and__3546__auto____283522;
}
})()))
{(a__283518[i__283520] = cljs.core.first.call(null,s__283521));
{
var G__283525 = (i__283520 + 1);
var G__283526 = cljs.core.next.call(null,s__283521);
i__283520 = G__283525;
s__283521 = G__283526;
continue;
}
} else
{return a__283518;
}
break;
}
} else
{var n__689__auto____283523 = size;
var i__283524 = 0;
while(true){
if((i__283524 < n__689__auto____283523))
{(a__283518[i__283524] = init_val_or_seq);
{
var G__283527 = (i__283524 + 1);
i__283524 = G__283527;
continue;
}
} else
{}
break;
}
return a__283518;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__283528 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__283529 = cljs.core.seq.call(null,init_val_or_seq);
var i__283530 = 0;
var s__283531 = s__283529;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____283532 = s__283531;
if(cljs.core.truth_(and__3546__auto____283532))
{return (i__283530 < size);
} else
{return and__3546__auto____283532;
}
})()))
{(a__283528[i__283530] = cljs.core.first.call(null,s__283531));
{
var G__283535 = (i__283530 + 1);
var G__283536 = cljs.core.next.call(null,s__283531);
i__283530 = G__283535;
s__283531 = G__283536;
continue;
}
} else
{return a__283528;
}
break;
}
} else
{var n__689__auto____283533 = size;
var i__283534 = 0;
while(true){
if((i__283534 < n__689__auto____283533))
{(a__283528[i__283534] = init_val_or_seq);
{
var G__283537 = (i__283534 + 1);
i__283534 = G__283537;
continue;
}
} else
{}
break;
}
return a__283528;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__283538 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__283539 = cljs.core.seq.call(null,init_val_or_seq);
var i__283540 = 0;
var s__283541 = s__283539;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____283542 = s__283541;
if(cljs.core.truth_(and__3546__auto____283542))
{return (i__283540 < size);
} else
{return and__3546__auto____283542;
}
})()))
{(a__283538[i__283540] = cljs.core.first.call(null,s__283541));
{
var G__283545 = (i__283540 + 1);
var G__283546 = cljs.core.next.call(null,s__283541);
i__283540 = G__283545;
s__283541 = G__283546;
continue;
}
} else
{return a__283538;
}
break;
}
} else
{var n__689__auto____283543 = size;
var i__283544 = 0;
while(true){
if((i__283544 < n__689__auto____283543))
{(a__283538[i__283544] = init_val_or_seq);
{
var G__283547 = (i__283544 + 1);
i__283544 = G__283547;
continue;
}
} else
{}
break;
}
return a__283538;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__283548 = s;
var i__283549 = n;
var sum__283550 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____283551 = (i__283549 > 0);
if(and__3546__auto____283551)
{return cljs.core.seq.call(null,s__283548);
} else
{return and__3546__auto____283551;
}
})()))
{{
var G__283552 = cljs.core.next.call(null,s__283548);
var G__283553 = (i__283549 - 1);
var G__283554 = (sum__283550 + 1);
s__283548 = G__283552;
i__283549 = G__283553;
sum__283550 = G__283554;
continue;
}
} else
{return sum__283550;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__283555 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__283555))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__283555),concat.call(null,cljs.core.rest.call(null,s__283555),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__283558__delegate = function (x,y,zs){
var cat__283557 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__283556 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__283556))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__283556),cat.call(null,cljs.core.rest.call(null,xys__283556),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__283557.call(null,concat.call(null,x,y),zs);
};
var G__283558 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283558__delegate.call(this, x, y, zs);
};
G__283558.cljs$lang$maxFixedArity = 2;
G__283558.cljs$lang$applyTo = (function (arglist__283559){
var x = cljs.core.first(arglist__283559);
var y = cljs.core.first(cljs.core.next(arglist__283559));
var zs = cljs.core.rest(cljs.core.next(arglist__283559));
return G__283558__delegate(x, y, zs);
});
G__283558.cljs$lang$arity$variadic = G__283558__delegate;
return G__283558;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__283560__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__283560 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__283560__delegate.call(this, a, b, c, d, more);
};
G__283560.cljs$lang$maxFixedArity = 4;
G__283560.cljs$lang$applyTo = (function (arglist__283561){
var a = cljs.core.first(arglist__283561);
var b = cljs.core.first(cljs.core.next(arglist__283561));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283561)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283561))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283561))));
return G__283560__delegate(a, b, c, d, more);
});
G__283560.cljs$lang$arity$variadic = G__283560__delegate;
return G__283560;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__283562 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__283563 = cljs.core._first.call(null,args__283562);
var args__283564 = cljs.core._rest.call(null,args__283562);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__283563);
} else
{return f.call(null,a__283563);
}
} else
{var b__283565 = cljs.core._first.call(null,args__283564);
var args__283566 = cljs.core._rest.call(null,args__283564);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__283563,b__283565);
} else
{return f.call(null,a__283563,b__283565);
}
} else
{var c__283567 = cljs.core._first.call(null,args__283566);
var args__283568 = cljs.core._rest.call(null,args__283566);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__283563,b__283565,c__283567);
} else
{return f.call(null,a__283563,b__283565,c__283567);
}
} else
{var d__283569 = cljs.core._first.call(null,args__283568);
var args__283570 = cljs.core._rest.call(null,args__283568);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__283563,b__283565,c__283567,d__283569);
} else
{return f.call(null,a__283563,b__283565,c__283567,d__283569);
}
} else
{var e__283571 = cljs.core._first.call(null,args__283570);
var args__283572 = cljs.core._rest.call(null,args__283570);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__283563,b__283565,c__283567,d__283569,e__283571);
} else
{return f.call(null,a__283563,b__283565,c__283567,d__283569,e__283571);
}
} else
{var f__283573 = cljs.core._first.call(null,args__283572);
var args__283574 = cljs.core._rest.call(null,args__283572);
if((argc === 6))
{if(f__283573.cljs$lang$arity$6)
{return f__283573.cljs$lang$arity$6(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573);
}
} else
{var g__283575 = cljs.core._first.call(null,args__283574);
var args__283576 = cljs.core._rest.call(null,args__283574);
if((argc === 7))
{if(f__283573.cljs$lang$arity$7)
{return f__283573.cljs$lang$arity$7(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575);
}
} else
{var h__283577 = cljs.core._first.call(null,args__283576);
var args__283578 = cljs.core._rest.call(null,args__283576);
if((argc === 8))
{if(f__283573.cljs$lang$arity$8)
{return f__283573.cljs$lang$arity$8(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577);
}
} else
{var i__283579 = cljs.core._first.call(null,args__283578);
var args__283580 = cljs.core._rest.call(null,args__283578);
if((argc === 9))
{if(f__283573.cljs$lang$arity$9)
{return f__283573.cljs$lang$arity$9(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579);
}
} else
{var j__283581 = cljs.core._first.call(null,args__283580);
var args__283582 = cljs.core._rest.call(null,args__283580);
if((argc === 10))
{if(f__283573.cljs$lang$arity$10)
{return f__283573.cljs$lang$arity$10(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581);
}
} else
{var k__283583 = cljs.core._first.call(null,args__283582);
var args__283584 = cljs.core._rest.call(null,args__283582);
if((argc === 11))
{if(f__283573.cljs$lang$arity$11)
{return f__283573.cljs$lang$arity$11(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583);
}
} else
{var l__283585 = cljs.core._first.call(null,args__283584);
var args__283586 = cljs.core._rest.call(null,args__283584);
if((argc === 12))
{if(f__283573.cljs$lang$arity$12)
{return f__283573.cljs$lang$arity$12(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585);
}
} else
{var m__283587 = cljs.core._first.call(null,args__283586);
var args__283588 = cljs.core._rest.call(null,args__283586);
if((argc === 13))
{if(f__283573.cljs$lang$arity$13)
{return f__283573.cljs$lang$arity$13(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587);
}
} else
{var n__283589 = cljs.core._first.call(null,args__283588);
var args__283590 = cljs.core._rest.call(null,args__283588);
if((argc === 14))
{if(f__283573.cljs$lang$arity$14)
{return f__283573.cljs$lang$arity$14(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589);
}
} else
{var o__283591 = cljs.core._first.call(null,args__283590);
var args__283592 = cljs.core._rest.call(null,args__283590);
if((argc === 15))
{if(f__283573.cljs$lang$arity$15)
{return f__283573.cljs$lang$arity$15(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591);
}
} else
{var p__283593 = cljs.core._first.call(null,args__283592);
var args__283594 = cljs.core._rest.call(null,args__283592);
if((argc === 16))
{if(f__283573.cljs$lang$arity$16)
{return f__283573.cljs$lang$arity$16(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593);
}
} else
{var q__283595 = cljs.core._first.call(null,args__283594);
var args__283596 = cljs.core._rest.call(null,args__283594);
if((argc === 17))
{if(f__283573.cljs$lang$arity$17)
{return f__283573.cljs$lang$arity$17(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595);
}
} else
{var r__283597 = cljs.core._first.call(null,args__283596);
var args__283598 = cljs.core._rest.call(null,args__283596);
if((argc === 18))
{if(f__283573.cljs$lang$arity$18)
{return f__283573.cljs$lang$arity$18(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597);
}
} else
{var s__283599 = cljs.core._first.call(null,args__283598);
var args__283600 = cljs.core._rest.call(null,args__283598);
if((argc === 19))
{if(f__283573.cljs$lang$arity$19)
{return f__283573.cljs$lang$arity$19(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597,s__283599);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597,s__283599);
}
} else
{var t__283601 = cljs.core._first.call(null,args__283600);
var args__283602 = cljs.core._rest.call(null,args__283600);
if((argc === 20))
{if(f__283573.cljs$lang$arity$20)
{return f__283573.cljs$lang$arity$20(a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597,s__283599,t__283601);
} else
{return f__283573.call(null,a__283563,b__283565,c__283567,d__283569,e__283571,f__283573,g__283575,h__283577,i__283579,j__283581,k__283583,l__283585,m__283587,n__283589,o__283591,p__283593,q__283595,r__283597,s__283599,t__283601);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__283603 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__283604 = cljs.core.bounded_count.call(null,args,(fixed_arity__283603 + 1));
if((bc__283604 <= fixed_arity__283603))
{return cljs.core.apply_to.call(null,f,bc__283604,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__283605 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__283606 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__283607 = cljs.core.bounded_count.call(null,arglist__283605,(fixed_arity__283606 + 1));
if((bc__283607 <= fixed_arity__283606))
{return cljs.core.apply_to.call(null,f,bc__283607,arglist__283605);
} else
{return f.cljs$lang$applyTo(arglist__283605);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__283605));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__283608 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__283609 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__283610 = cljs.core.bounded_count.call(null,arglist__283608,(fixed_arity__283609 + 1));
if((bc__283610 <= fixed_arity__283609))
{return cljs.core.apply_to.call(null,f,bc__283610,arglist__283608);
} else
{return f.cljs$lang$applyTo(arglist__283608);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__283608));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__283611 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__283612 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__283613 = cljs.core.bounded_count.call(null,arglist__283611,(fixed_arity__283612 + 1));
if((bc__283613 <= fixed_arity__283612))
{return cljs.core.apply_to.call(null,f,bc__283613,arglist__283611);
} else
{return f.cljs$lang$applyTo(arglist__283611);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__283611));
}
});
var apply__6 = (function() { 
var G__283617__delegate = function (f,a,b,c,d,args){
var arglist__283614 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__283615 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__283616 = cljs.core.bounded_count.call(null,arglist__283614,(fixed_arity__283615 + 1));
if((bc__283616 <= fixed_arity__283615))
{return cljs.core.apply_to.call(null,f,bc__283616,arglist__283614);
} else
{return f.cljs$lang$applyTo(arglist__283614);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__283614));
}
};
var G__283617 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__283617__delegate.call(this, f, a, b, c, d, args);
};
G__283617.cljs$lang$maxFixedArity = 5;
G__283617.cljs$lang$applyTo = (function (arglist__283618){
var f = cljs.core.first(arglist__283618);
var a = cljs.core.first(cljs.core.next(arglist__283618));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283618)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283618))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283618)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283618)))));
return G__283617__delegate(f, a, b, c, d, args);
});
G__283617.cljs$lang$arity$variadic = G__283617__delegate;
return G__283617;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__283619){
var obj = cljs.core.first(arglist__283619);
var f = cljs.core.first(cljs.core.next(arglist__283619));
var args = cljs.core.rest(cljs.core.next(arglist__283619));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__283620__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__283620 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283620__delegate.call(this, x, y, more);
};
G__283620.cljs$lang$maxFixedArity = 2;
G__283620.cljs$lang$applyTo = (function (arglist__283621){
var x = cljs.core.first(arglist__283621);
var y = cljs.core.first(cljs.core.next(arglist__283621));
var more = cljs.core.rest(cljs.core.next(arglist__283621));
return G__283620__delegate(x, y, more);
});
G__283620.cljs$lang$arity$variadic = G__283620__delegate;
return G__283620;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__283622 = pred;
var G__283623 = cljs.core.next.call(null,coll);
pred = G__283622;
coll = G__283623;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____283624 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3548__auto____283624))
{return or__3548__auto____283624;
} else
{{
var G__283625 = pred;
var G__283626 = cljs.core.next.call(null,coll);
pred = G__283625;
coll = G__283626;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__283627 = null;
var G__283627__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__283627__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__283627__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__283627__3 = (function() { 
var G__283628__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__283628 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283628__delegate.call(this, x, y, zs);
};
G__283628.cljs$lang$maxFixedArity = 2;
G__283628.cljs$lang$applyTo = (function (arglist__283629){
var x = cljs.core.first(arglist__283629);
var y = cljs.core.first(cljs.core.next(arglist__283629));
var zs = cljs.core.rest(cljs.core.next(arglist__283629));
return G__283628__delegate(x, y, zs);
});
G__283628.cljs$lang$arity$variadic = G__283628__delegate;
return G__283628;
})()
;
G__283627 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__283627__0.call(this);
case 1:
return G__283627__1.call(this,x);
case 2:
return G__283627__2.call(this,x,y);
default:
return G__283627__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__283627.cljs$lang$maxFixedArity = 2;
G__283627.cljs$lang$applyTo = G__283627__3.cljs$lang$applyTo;
return G__283627;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__283630__delegate = function (args){
return x;
};
var G__283630 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283630__delegate.call(this, args);
};
G__283630.cljs$lang$maxFixedArity = 0;
G__283630.cljs$lang$applyTo = (function (arglist__283631){
var args = cljs.core.seq(arglist__283631);;
return G__283630__delegate(args);
});
G__283630.cljs$lang$arity$variadic = G__283630__delegate;
return G__283630;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__283635 = null;
var G__283635__0 = (function (){
return f.call(null,g.call(null));
});
var G__283635__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__283635__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__283635__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__283635__4 = (function() { 
var G__283636__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__283636 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283636__delegate.call(this, x, y, z, args);
};
G__283636.cljs$lang$maxFixedArity = 3;
G__283636.cljs$lang$applyTo = (function (arglist__283637){
var x = cljs.core.first(arglist__283637);
var y = cljs.core.first(cljs.core.next(arglist__283637));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283637)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283637)));
return G__283636__delegate(x, y, z, args);
});
G__283636.cljs$lang$arity$variadic = G__283636__delegate;
return G__283636;
})()
;
G__283635 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__283635__0.call(this);
case 1:
return G__283635__1.call(this,x);
case 2:
return G__283635__2.call(this,x,y);
case 3:
return G__283635__3.call(this,x,y,z);
default:
return G__283635__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__283635.cljs$lang$maxFixedArity = 3;
G__283635.cljs$lang$applyTo = G__283635__4.cljs$lang$applyTo;
return G__283635;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__283638 = null;
var G__283638__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__283638__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__283638__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__283638__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__283638__4 = (function() { 
var G__283639__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__283639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283639__delegate.call(this, x, y, z, args);
};
G__283639.cljs$lang$maxFixedArity = 3;
G__283639.cljs$lang$applyTo = (function (arglist__283640){
var x = cljs.core.first(arglist__283640);
var y = cljs.core.first(cljs.core.next(arglist__283640));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283640)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283640)));
return G__283639__delegate(x, y, z, args);
});
G__283639.cljs$lang$arity$variadic = G__283639__delegate;
return G__283639;
})()
;
G__283638 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__283638__0.call(this);
case 1:
return G__283638__1.call(this,x);
case 2:
return G__283638__2.call(this,x,y);
case 3:
return G__283638__3.call(this,x,y,z);
default:
return G__283638__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__283638.cljs$lang$maxFixedArity = 3;
G__283638.cljs$lang$applyTo = G__283638__4.cljs$lang$applyTo;
return G__283638;
})()
});
var comp__4 = (function() { 
var G__283641__delegate = function (f1,f2,f3,fs){
var fs__283632 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__283642__delegate = function (args){
var ret__283633 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__283632),args);
var fs__283634 = cljs.core.next.call(null,fs__283632);
while(true){
if(cljs.core.truth_(fs__283634))
{{
var G__283643 = cljs.core.first.call(null,fs__283634).call(null,ret__283633);
var G__283644 = cljs.core.next.call(null,fs__283634);
ret__283633 = G__283643;
fs__283634 = G__283644;
continue;
}
} else
{return ret__283633;
}
break;
}
};
var G__283642 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283642__delegate.call(this, args);
};
G__283642.cljs$lang$maxFixedArity = 0;
G__283642.cljs$lang$applyTo = (function (arglist__283645){
var args = cljs.core.seq(arglist__283645);;
return G__283642__delegate(args);
});
G__283642.cljs$lang$arity$variadic = G__283642__delegate;
return G__283642;
})()
;
};
var G__283641 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283641__delegate.call(this, f1, f2, f3, fs);
};
G__283641.cljs$lang$maxFixedArity = 3;
G__283641.cljs$lang$applyTo = (function (arglist__283646){
var f1 = cljs.core.first(arglist__283646);
var f2 = cljs.core.first(cljs.core.next(arglist__283646));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283646)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283646)));
return G__283641__delegate(f1, f2, f3, fs);
});
G__283641.cljs$lang$arity$variadic = G__283641__delegate;
return G__283641;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__283647__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__283647 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283647__delegate.call(this, args);
};
G__283647.cljs$lang$maxFixedArity = 0;
G__283647.cljs$lang$applyTo = (function (arglist__283648){
var args = cljs.core.seq(arglist__283648);;
return G__283647__delegate(args);
});
G__283647.cljs$lang$arity$variadic = G__283647__delegate;
return G__283647;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__283649__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__283649 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283649__delegate.call(this, args);
};
G__283649.cljs$lang$maxFixedArity = 0;
G__283649.cljs$lang$applyTo = (function (arglist__283650){
var args = cljs.core.seq(arglist__283650);;
return G__283649__delegate(args);
});
G__283649.cljs$lang$arity$variadic = G__283649__delegate;
return G__283649;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__283651__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__283651 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283651__delegate.call(this, args);
};
G__283651.cljs$lang$maxFixedArity = 0;
G__283651.cljs$lang$applyTo = (function (arglist__283652){
var args = cljs.core.seq(arglist__283652);;
return G__283651__delegate(args);
});
G__283651.cljs$lang$arity$variadic = G__283651__delegate;
return G__283651;
})()
;
});
var partial__5 = (function() { 
var G__283653__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__283654__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__283654 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__283654__delegate.call(this, args);
};
G__283654.cljs$lang$maxFixedArity = 0;
G__283654.cljs$lang$applyTo = (function (arglist__283655){
var args = cljs.core.seq(arglist__283655);;
return G__283654__delegate(args);
});
G__283654.cljs$lang$arity$variadic = G__283654__delegate;
return G__283654;
})()
;
};
var G__283653 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__283653__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__283653.cljs$lang$maxFixedArity = 4;
G__283653.cljs$lang$applyTo = (function (arglist__283656){
var f = cljs.core.first(arglist__283656);
var arg1 = cljs.core.first(cljs.core.next(arglist__283656));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283656)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283656))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283656))));
return G__283653__delegate(f, arg1, arg2, arg3, more);
});
G__283653.cljs$lang$arity$variadic = G__283653__delegate;
return G__283653;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__283657 = null;
var G__283657__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__283657__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__283657__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__283657__4 = (function() { 
var G__283658__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__283658 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283658__delegate.call(this, a, b, c, ds);
};
G__283658.cljs$lang$maxFixedArity = 3;
G__283658.cljs$lang$applyTo = (function (arglist__283659){
var a = cljs.core.first(arglist__283659);
var b = cljs.core.first(cljs.core.next(arglist__283659));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283659)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283659)));
return G__283658__delegate(a, b, c, ds);
});
G__283658.cljs$lang$arity$variadic = G__283658__delegate;
return G__283658;
})()
;
G__283657 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__283657__1.call(this,a);
case 2:
return G__283657__2.call(this,a,b);
case 3:
return G__283657__3.call(this,a,b,c);
default:
return G__283657__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__283657.cljs$lang$maxFixedArity = 3;
G__283657.cljs$lang$applyTo = G__283657__4.cljs$lang$applyTo;
return G__283657;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__283660 = null;
var G__283660__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__283660__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__283660__4 = (function() { 
var G__283661__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__283661 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283661__delegate.call(this, a, b, c, ds);
};
G__283661.cljs$lang$maxFixedArity = 3;
G__283661.cljs$lang$applyTo = (function (arglist__283662){
var a = cljs.core.first(arglist__283662);
var b = cljs.core.first(cljs.core.next(arglist__283662));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283662)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283662)));
return G__283661__delegate(a, b, c, ds);
});
G__283661.cljs$lang$arity$variadic = G__283661__delegate;
return G__283661;
})()
;
G__283660 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__283660__2.call(this,a,b);
case 3:
return G__283660__3.call(this,a,b,c);
default:
return G__283660__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__283660.cljs$lang$maxFixedArity = 3;
G__283660.cljs$lang$applyTo = G__283660__4.cljs$lang$applyTo;
return G__283660;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__283663 = null;
var G__283663__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__283663__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__283663__4 = (function() { 
var G__283664__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__283664 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283664__delegate.call(this, a, b, c, ds);
};
G__283664.cljs$lang$maxFixedArity = 3;
G__283664.cljs$lang$applyTo = (function (arglist__283665){
var a = cljs.core.first(arglist__283665);
var b = cljs.core.first(cljs.core.next(arglist__283665));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283665)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283665)));
return G__283664__delegate(a, b, c, ds);
});
G__283664.cljs$lang$arity$variadic = G__283664__delegate;
return G__283664;
})()
;
G__283663 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__283663__2.call(this,a,b);
case 3:
return G__283663__3.call(this,a,b,c);
default:
return G__283663__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__283663.cljs$lang$maxFixedArity = 3;
G__283663.cljs$lang$applyTo = G__283663__4.cljs$lang$applyTo;
return G__283663;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__283668 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283666 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283666))
{var s__283667 = temp__3698__auto____283666;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__283667)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__283667)));
} else
{return null;
}
})));
});
return mapi__283668.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283669 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283669))
{var s__283670 = temp__3698__auto____283669;
var x__283671 = f.call(null,cljs.core.first.call(null,s__283670));
if((x__283671 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__283670));
} else
{return cljs.core.cons.call(null,x__283671,keep.call(null,f,cljs.core.rest.call(null,s__283670)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__283681 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283678 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283678))
{var s__283679 = temp__3698__auto____283678;
var x__283680 = f.call(null,idx,cljs.core.first.call(null,s__283679));
if((x__283680 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__283679));
} else
{return cljs.core.cons.call(null,x__283680,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__283679)));
}
} else
{return null;
}
})));
});
return keepi__283681.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283688 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____283688))
{return p.call(null,y);
} else
{return and__3546__auto____283688;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283689 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____283689))
{var and__3546__auto____283690 = p.call(null,y);
if(cljs.core.truth_(and__3546__auto____283690))
{return p.call(null,z);
} else
{return and__3546__auto____283690;
}
} else
{return and__3546__auto____283689;
}
})());
});
var ep1__4 = (function() { 
var G__283726__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283691 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____283691))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____283691;
}
})());
};
var G__283726 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283726__delegate.call(this, x, y, z, args);
};
G__283726.cljs$lang$maxFixedArity = 3;
G__283726.cljs$lang$applyTo = (function (arglist__283727){
var x = cljs.core.first(arglist__283727);
var y = cljs.core.first(cljs.core.next(arglist__283727));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283727)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283727)));
return G__283726__delegate(x, y, z, args);
});
G__283726.cljs$lang$arity$variadic = G__283726__delegate;
return G__283726;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283692 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283692))
{return p2.call(null,x);
} else
{return and__3546__auto____283692;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283693 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283693))
{var and__3546__auto____283694 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____283694))
{var and__3546__auto____283695 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____283695))
{return p2.call(null,y);
} else
{return and__3546__auto____283695;
}
} else
{return and__3546__auto____283694;
}
} else
{return and__3546__auto____283693;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283696 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283696))
{var and__3546__auto____283697 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____283697))
{var and__3546__auto____283698 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____283698))
{var and__3546__auto____283699 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____283699))
{var and__3546__auto____283700 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____283700))
{return p2.call(null,z);
} else
{return and__3546__auto____283700;
}
} else
{return and__3546__auto____283699;
}
} else
{return and__3546__auto____283698;
}
} else
{return and__3546__auto____283697;
}
} else
{return and__3546__auto____283696;
}
})());
});
var ep2__4 = (function() { 
var G__283728__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283701 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____283701))
{return cljs.core.every_QMARK_.call(null,(function (p1__283672_SHARP_){
var and__3546__auto____283702 = p1.call(null,p1__283672_SHARP_);
if(cljs.core.truth_(and__3546__auto____283702))
{return p2.call(null,p1__283672_SHARP_);
} else
{return and__3546__auto____283702;
}
}),args);
} else
{return and__3546__auto____283701;
}
})());
};
var G__283728 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283728__delegate.call(this, x, y, z, args);
};
G__283728.cljs$lang$maxFixedArity = 3;
G__283728.cljs$lang$applyTo = (function (arglist__283729){
var x = cljs.core.first(arglist__283729);
var y = cljs.core.first(cljs.core.next(arglist__283729));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283729)));
return G__283728__delegate(x, y, z, args);
});
G__283728.cljs$lang$arity$variadic = G__283728__delegate;
return G__283728;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283703 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283703))
{var and__3546__auto____283704 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____283704))
{return p3.call(null,x);
} else
{return and__3546__auto____283704;
}
} else
{return and__3546__auto____283703;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283705 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283705))
{var and__3546__auto____283706 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____283706))
{var and__3546__auto____283707 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____283707))
{var and__3546__auto____283708 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____283708))
{var and__3546__auto____283709 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____283709))
{return p3.call(null,y);
} else
{return and__3546__auto____283709;
}
} else
{return and__3546__auto____283708;
}
} else
{return and__3546__auto____283707;
}
} else
{return and__3546__auto____283706;
}
} else
{return and__3546__auto____283705;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283710 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____283710))
{var and__3546__auto____283711 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____283711))
{var and__3546__auto____283712 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____283712))
{var and__3546__auto____283713 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____283713))
{var and__3546__auto____283714 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____283714))
{var and__3546__auto____283715 = p3.call(null,y);
if(cljs.core.truth_(and__3546__auto____283715))
{var and__3546__auto____283716 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____283716))
{var and__3546__auto____283717 = p2.call(null,z);
if(cljs.core.truth_(and__3546__auto____283717))
{return p3.call(null,z);
} else
{return and__3546__auto____283717;
}
} else
{return and__3546__auto____283716;
}
} else
{return and__3546__auto____283715;
}
} else
{return and__3546__auto____283714;
}
} else
{return and__3546__auto____283713;
}
} else
{return and__3546__auto____283712;
}
} else
{return and__3546__auto____283711;
}
} else
{return and__3546__auto____283710;
}
})());
});
var ep3__4 = (function() { 
var G__283730__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283718 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____283718))
{return cljs.core.every_QMARK_.call(null,(function (p1__283673_SHARP_){
var and__3546__auto____283719 = p1.call(null,p1__283673_SHARP_);
if(cljs.core.truth_(and__3546__auto____283719))
{var and__3546__auto____283720 = p2.call(null,p1__283673_SHARP_);
if(cljs.core.truth_(and__3546__auto____283720))
{return p3.call(null,p1__283673_SHARP_);
} else
{return and__3546__auto____283720;
}
} else
{return and__3546__auto____283719;
}
}),args);
} else
{return and__3546__auto____283718;
}
})());
};
var G__283730 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283730__delegate.call(this, x, y, z, args);
};
G__283730.cljs$lang$maxFixedArity = 3;
G__283730.cljs$lang$applyTo = (function (arglist__283731){
var x = cljs.core.first(arglist__283731);
var y = cljs.core.first(cljs.core.next(arglist__283731));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283731)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283731)));
return G__283730__delegate(x, y, z, args);
});
G__283730.cljs$lang$arity$variadic = G__283730__delegate;
return G__283730;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__283732__delegate = function (p1,p2,p3,ps){
var ps__283721 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__283674_SHARP_){
return p1__283674_SHARP_.call(null,x);
}),ps__283721);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__283675_SHARP_){
var and__3546__auto____283722 = p1__283675_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____283722))
{return p1__283675_SHARP_.call(null,y);
} else
{return and__3546__auto____283722;
}
}),ps__283721);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__283676_SHARP_){
var and__3546__auto____283723 = p1__283676_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____283723))
{var and__3546__auto____283724 = p1__283676_SHARP_.call(null,y);
if(cljs.core.truth_(and__3546__auto____283724))
{return p1__283676_SHARP_.call(null,z);
} else
{return and__3546__auto____283724;
}
} else
{return and__3546__auto____283723;
}
}),ps__283721);
});
var epn__4 = (function() { 
var G__283733__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____283725 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____283725))
{return cljs.core.every_QMARK_.call(null,(function (p1__283677_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__283677_SHARP_,args);
}),ps__283721);
} else
{return and__3546__auto____283725;
}
})());
};
var G__283733 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283733__delegate.call(this, x, y, z, args);
};
G__283733.cljs$lang$maxFixedArity = 3;
G__283733.cljs$lang$applyTo = (function (arglist__283734){
var x = cljs.core.first(arglist__283734);
var y = cljs.core.first(cljs.core.next(arglist__283734));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283734)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283734)));
return G__283733__delegate(x, y, z, args);
});
G__283733.cljs$lang$arity$variadic = G__283733__delegate;
return G__283733;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__283732 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283732__delegate.call(this, p1, p2, p3, ps);
};
G__283732.cljs$lang$maxFixedArity = 3;
G__283732.cljs$lang$applyTo = (function (arglist__283735){
var p1 = cljs.core.first(arglist__283735);
var p2 = cljs.core.first(cljs.core.next(arglist__283735));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283735)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283735)));
return G__283732__delegate(p1, p2, p3, ps);
});
G__283732.cljs$lang$arity$variadic = G__283732__delegate;
return G__283732;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3548__auto____283737 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____283737))
{return or__3548__auto____283737;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____283738 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____283738))
{return or__3548__auto____283738;
} else
{var or__3548__auto____283739 = p.call(null,y);
if(cljs.core.truth_(or__3548__auto____283739))
{return or__3548__auto____283739;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__283775__delegate = function (x,y,z,args){
var or__3548__auto____283740 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____283740))
{return or__3548__auto____283740;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__283775 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283775__delegate.call(this, x, y, z, args);
};
G__283775.cljs$lang$maxFixedArity = 3;
G__283775.cljs$lang$applyTo = (function (arglist__283776){
var x = cljs.core.first(arglist__283776);
var y = cljs.core.first(cljs.core.next(arglist__283776));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283776)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283776)));
return G__283775__delegate(x, y, z, args);
});
G__283775.cljs$lang$arity$variadic = G__283775__delegate;
return G__283775;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3548__auto____283741 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283741))
{return or__3548__auto____283741;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____283742 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283742))
{return or__3548__auto____283742;
} else
{var or__3548__auto____283743 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____283743))
{return or__3548__auto____283743;
} else
{var or__3548__auto____283744 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____283744))
{return or__3548__auto____283744;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____283745 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283745))
{return or__3548__auto____283745;
} else
{var or__3548__auto____283746 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____283746))
{return or__3548__auto____283746;
} else
{var or__3548__auto____283747 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____283747))
{return or__3548__auto____283747;
} else
{var or__3548__auto____283748 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____283748))
{return or__3548__auto____283748;
} else
{var or__3548__auto____283749 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____283749))
{return or__3548__auto____283749;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__283777__delegate = function (x,y,z,args){
var or__3548__auto____283750 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____283750))
{return or__3548__auto____283750;
} else
{return cljs.core.some.call(null,(function (p1__283682_SHARP_){
var or__3548__auto____283751 = p1.call(null,p1__283682_SHARP_);
if(cljs.core.truth_(or__3548__auto____283751))
{return or__3548__auto____283751;
} else
{return p2.call(null,p1__283682_SHARP_);
}
}),args);
}
};
var G__283777 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283777__delegate.call(this, x, y, z, args);
};
G__283777.cljs$lang$maxFixedArity = 3;
G__283777.cljs$lang$applyTo = (function (arglist__283778){
var x = cljs.core.first(arglist__283778);
var y = cljs.core.first(cljs.core.next(arglist__283778));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283778)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283778)));
return G__283777__delegate(x, y, z, args);
});
G__283777.cljs$lang$arity$variadic = G__283777__delegate;
return G__283777;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3548__auto____283752 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283752))
{return or__3548__auto____283752;
} else
{var or__3548__auto____283753 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____283753))
{return or__3548__auto____283753;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____283754 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283754))
{return or__3548__auto____283754;
} else
{var or__3548__auto____283755 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____283755))
{return or__3548__auto____283755;
} else
{var or__3548__auto____283756 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____283756))
{return or__3548__auto____283756;
} else
{var or__3548__auto____283757 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____283757))
{return or__3548__auto____283757;
} else
{var or__3548__auto____283758 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____283758))
{return or__3548__auto____283758;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____283759 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____283759))
{return or__3548__auto____283759;
} else
{var or__3548__auto____283760 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____283760))
{return or__3548__auto____283760;
} else
{var or__3548__auto____283761 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____283761))
{return or__3548__auto____283761;
} else
{var or__3548__auto____283762 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____283762))
{return or__3548__auto____283762;
} else
{var or__3548__auto____283763 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____283763))
{return or__3548__auto____283763;
} else
{var or__3548__auto____283764 = p3.call(null,y);
if(cljs.core.truth_(or__3548__auto____283764))
{return or__3548__auto____283764;
} else
{var or__3548__auto____283765 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____283765))
{return or__3548__auto____283765;
} else
{var or__3548__auto____283766 = p2.call(null,z);
if(cljs.core.truth_(or__3548__auto____283766))
{return or__3548__auto____283766;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__283779__delegate = function (x,y,z,args){
var or__3548__auto____283767 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____283767))
{return or__3548__auto____283767;
} else
{return cljs.core.some.call(null,(function (p1__283683_SHARP_){
var or__3548__auto____283768 = p1.call(null,p1__283683_SHARP_);
if(cljs.core.truth_(or__3548__auto____283768))
{return or__3548__auto____283768;
} else
{var or__3548__auto____283769 = p2.call(null,p1__283683_SHARP_);
if(cljs.core.truth_(or__3548__auto____283769))
{return or__3548__auto____283769;
} else
{return p3.call(null,p1__283683_SHARP_);
}
}
}),args);
}
};
var G__283779 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283779__delegate.call(this, x, y, z, args);
};
G__283779.cljs$lang$maxFixedArity = 3;
G__283779.cljs$lang$applyTo = (function (arglist__283780){
var x = cljs.core.first(arglist__283780);
var y = cljs.core.first(cljs.core.next(arglist__283780));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283780)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283780)));
return G__283779__delegate(x, y, z, args);
});
G__283779.cljs$lang$arity$variadic = G__283779__delegate;
return G__283779;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__283781__delegate = function (p1,p2,p3,ps){
var ps__283770 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__283684_SHARP_){
return p1__283684_SHARP_.call(null,x);
}),ps__283770);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__283685_SHARP_){
var or__3548__auto____283771 = p1__283685_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____283771))
{return or__3548__auto____283771;
} else
{return p1__283685_SHARP_.call(null,y);
}
}),ps__283770);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__283686_SHARP_){
var or__3548__auto____283772 = p1__283686_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____283772))
{return or__3548__auto____283772;
} else
{var or__3548__auto____283773 = p1__283686_SHARP_.call(null,y);
if(cljs.core.truth_(or__3548__auto____283773))
{return or__3548__auto____283773;
} else
{return p1__283686_SHARP_.call(null,z);
}
}
}),ps__283770);
});
var spn__4 = (function() { 
var G__283782__delegate = function (x,y,z,args){
var or__3548__auto____283774 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____283774))
{return or__3548__auto____283774;
} else
{return cljs.core.some.call(null,(function (p1__283687_SHARP_){
return cljs.core.some.call(null,p1__283687_SHARP_,args);
}),ps__283770);
}
};
var G__283782 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283782__delegate.call(this, x, y, z, args);
};
G__283782.cljs$lang$maxFixedArity = 3;
G__283782.cljs$lang$applyTo = (function (arglist__283783){
var x = cljs.core.first(arglist__283783);
var y = cljs.core.first(cljs.core.next(arglist__283783));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283783)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283783)));
return G__283782__delegate(x, y, z, args);
});
G__283782.cljs$lang$arity$variadic = G__283782__delegate;
return G__283782;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__283781 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__283781__delegate.call(this, p1, p2, p3, ps);
};
G__283781.cljs$lang$maxFixedArity = 3;
G__283781.cljs$lang$applyTo = (function (arglist__283784){
var p1 = cljs.core.first(arglist__283784);
var p2 = cljs.core.first(cljs.core.next(arglist__283784));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283784)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283784)));
return G__283781__delegate(p1, p2, p3, ps);
});
G__283781.cljs$lang$arity$variadic = G__283781__delegate;
return G__283781;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283785 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283785))
{var s__283786 = temp__3698__auto____283785;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__283786)),map.call(null,f,cljs.core.rest.call(null,s__283786)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__283787 = cljs.core.seq.call(null,c1);
var s2__283788 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____283789 = s1__283787;
if(cljs.core.truth_(and__3546__auto____283789))
{return s2__283788;
} else
{return and__3546__auto____283789;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__283787),cljs.core.first.call(null,s2__283788)),map.call(null,f,cljs.core.rest.call(null,s1__283787),cljs.core.rest.call(null,s2__283788)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__283790 = cljs.core.seq.call(null,c1);
var s2__283791 = cljs.core.seq.call(null,c2);
var s3__283792 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3546__auto____283793 = s1__283790;
if(cljs.core.truth_(and__3546__auto____283793))
{var and__3546__auto____283794 = s2__283791;
if(cljs.core.truth_(and__3546__auto____283794))
{return s3__283792;
} else
{return and__3546__auto____283794;
}
} else
{return and__3546__auto____283793;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__283790),cljs.core.first.call(null,s2__283791),cljs.core.first.call(null,s3__283792)),map.call(null,f,cljs.core.rest.call(null,s1__283790),cljs.core.rest.call(null,s2__283791),cljs.core.rest.call(null,s3__283792)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__283797__delegate = function (f,c1,c2,c3,colls){
var step__283796 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__283795 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__283795))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__283795),step.call(null,map.call(null,cljs.core.rest,ss__283795)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__283736_SHARP_){
return cljs.core.apply.call(null,f,p1__283736_SHARP_);
}),step__283796.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__283797 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__283797__delegate.call(this, f, c1, c2, c3, colls);
};
G__283797.cljs$lang$maxFixedArity = 4;
G__283797.cljs$lang$applyTo = (function (arglist__283798){
var f = cljs.core.first(arglist__283798);
var c1 = cljs.core.first(cljs.core.next(arglist__283798));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283798)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283798))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283798))));
return G__283797__delegate(f, c1, c2, c3, colls);
});
G__283797.cljs$lang$arity$variadic = G__283797__delegate;
return G__283797;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3698__auto____283799 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283799))
{var s__283800 = temp__3698__auto____283799;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__283800),take.call(null,(n - 1),cljs.core.rest.call(null,s__283800)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__283803 = (function (n,coll){
while(true){
var s__283801 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____283802 = (n > 0);
if(and__3546__auto____283802)
{return s__283801;
} else
{return and__3546__auto____283802;
}
})()))
{{
var G__283804 = (n - 1);
var G__283805 = cljs.core.rest.call(null,s__283801);
n = G__283804;
coll = G__283805;
continue;
}
} else
{return s__283801;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__283803.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__283806 = cljs.core.seq.call(null,coll);
var lead__283807 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__283807))
{{
var G__283808 = cljs.core.next.call(null,s__283806);
var G__283809 = cljs.core.next.call(null,lead__283807);
s__283806 = G__283808;
lead__283807 = G__283809;
continue;
}
} else
{return s__283806;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__283812 = (function (pred,coll){
while(true){
var s__283810 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____283811 = s__283810;
if(cljs.core.truth_(and__3546__auto____283811))
{return pred.call(null,cljs.core.first.call(null,s__283810));
} else
{return and__3546__auto____283811;
}
})()))
{{
var G__283813 = pred;
var G__283814 = cljs.core.rest.call(null,s__283810);
pred = G__283813;
coll = G__283814;
continue;
}
} else
{return s__283810;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__283812.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283815 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283815))
{var s__283816 = temp__3698__auto____283815;
return cljs.core.concat.call(null,s__283816,cycle.call(null,s__283816));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__283817 = cljs.core.seq.call(null,c1);
var s2__283818 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____283819 = s1__283817;
if(cljs.core.truth_(and__3546__auto____283819))
{return s2__283818;
} else
{return and__3546__auto____283819;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__283817),cljs.core.cons.call(null,cljs.core.first.call(null,s2__283818),interleave.call(null,cljs.core.rest.call(null,s1__283817),cljs.core.rest.call(null,s2__283818))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__283821__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__283820 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__283820))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__283820),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__283820)));
} else
{return null;
}
})));
};
var G__283821 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283821__delegate.call(this, c1, c2, colls);
};
G__283821.cljs$lang$maxFixedArity = 2;
G__283821.cljs$lang$applyTo = (function (arglist__283822){
var c1 = cljs.core.first(arglist__283822);
var c2 = cljs.core.first(cljs.core.next(arglist__283822));
var colls = cljs.core.rest(cljs.core.next(arglist__283822));
return G__283821__delegate(c1, c2, colls);
});
G__283821.cljs$lang$arity$variadic = G__283821__delegate;
return G__283821;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__283825 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____283823 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____283823))
{var coll__283824 = temp__3695__auto____283823;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__283824),cat.call(null,cljs.core.rest.call(null,coll__283824),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__283825.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__283826__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__283826 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__283826__delegate.call(this, f, coll, colls);
};
G__283826.cljs$lang$maxFixedArity = 2;
G__283826.cljs$lang$applyTo = (function (arglist__283827){
var f = cljs.core.first(arglist__283827);
var coll = cljs.core.first(cljs.core.next(arglist__283827));
var colls = cljs.core.rest(cljs.core.next(arglist__283827));
return G__283826__delegate(f, coll, colls);
});
G__283826.cljs$lang$arity$variadic = G__283826__delegate;
return G__283826;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283828 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283828))
{var s__283829 = temp__3698__auto____283828;
var f__283830 = cljs.core.first.call(null,s__283829);
var r__283831 = cljs.core.rest.call(null,s__283829);
if(cljs.core.truth_(pred.call(null,f__283830)))
{return cljs.core.cons.call(null,f__283830,filter.call(null,pred,r__283831));
} else
{return filter.call(null,pred,r__283831);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__283833 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__283833.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__283832_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__283832_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__283834__283835 = to;
if((G__283834__283835 != null))
{if((function (){var or__3548__auto____283836 = (G__283834__283835.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3548__auto____283836)
{return or__3548__auto____283836;
} else
{return G__283834__283835.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__283834__283835.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__283834__283835);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__283834__283835);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__283837__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__283837 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__283837__delegate.call(this, f, c1, c2, c3, colls);
};
G__283837.cljs$lang$maxFixedArity = 4;
G__283837.cljs$lang$applyTo = (function (arglist__283838){
var f = cljs.core.first(arglist__283838);
var c1 = cljs.core.first(cljs.core.next(arglist__283838));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283838)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283838))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__283838))));
return G__283837__delegate(f, c1, c2, c3, colls);
});
G__283837.cljs$lang$arity$variadic = G__283837__delegate;
return G__283837;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283839 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283839))
{var s__283840 = temp__3698__auto____283839;
var p__283841 = cljs.core.take.call(null,n,s__283840);
if((n === cljs.core.count.call(null,p__283841)))
{return cljs.core.cons.call(null,p__283841,partition.call(null,n,step,cljs.core.drop.call(null,step,s__283840)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____283842 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____283842))
{var s__283843 = temp__3698__auto____283842;
var p__283844 = cljs.core.take.call(null,n,s__283843);
if((n === cljs.core.count.call(null,p__283844)))
{return cljs.core.cons.call(null,p__283844,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__283843)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__283844,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__283845 = cljs.core.lookup_sentinel;
var m__283846 = m;
var ks__283847 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__283847))
{var m__283848 = cljs.core.get.call(null,m__283846,cljs.core.first.call(null,ks__283847),sentinel__283845);
if((sentinel__283845 === m__283848))
{return not_found;
} else
{{
var G__283849 = sentinel__283845;
var G__283850 = m__283848;
var G__283851 = cljs.core.next.call(null,ks__283847);
sentinel__283845 = G__283849;
m__283846 = G__283850;
ks__283847 = G__283851;
continue;
}
}
} else
{return m__283846;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__283852,v){
var vec__283853__283854 = p__283852;
var k__283855 = cljs.core.nth.call(null,vec__283853__283854,0,null);
var ks__283856 = cljs.core.nthnext.call(null,vec__283853__283854,1);
if(cljs.core.truth_(ks__283856))
{return cljs.core.assoc.call(null,m,k__283855,assoc_in.call(null,cljs.core.get.call(null,m,k__283855),ks__283856,v));
} else
{return cljs.core.assoc.call(null,m,k__283855,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__283857,f,args){
var vec__283858__283859 = p__283857;
var k__283860 = cljs.core.nth.call(null,vec__283858__283859,0,null);
var ks__283861 = cljs.core.nthnext.call(null,vec__283858__283859,1);
if(cljs.core.truth_(ks__283861))
{return cljs.core.assoc.call(null,m,k__283860,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__283860),ks__283861,f,args));
} else
{return cljs.core.assoc.call(null,m,k__283860,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__283860),args));
}
};
var update_in = function (m,p__283857,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__283857, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__283862){
var m = cljs.core.first(arglist__283862);
var p__283857 = cljs.core.first(cljs.core.next(arglist__283862));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__283862)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__283862)));
return update_in__delegate(m, p__283857, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283867 = this;
var h__368__auto____283868 = this__283867.__hash;
if((h__368__auto____283868 != null))
{return h__368__auto____283868;
} else
{var h__368__auto____283869 = cljs.core.hash_coll.call(null,coll);
this__283867.__hash = h__368__auto____283869;
return h__368__auto____283869;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__283870 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__283871 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__283872 = this;
var new_array__283873 = cljs.core.aclone.call(null,this__283872.array);
(new_array__283873[k] = v);
return (new cljs.core.Vector(this__283872.meta,new_array__283873,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__283902 = null;
var G__283902__2 = (function (tsym283865,k){
var this__283874 = this;
var tsym283865__283875 = this;
var coll__283876 = tsym283865__283875;
return cljs.core._lookup.call(null,coll__283876,k);
});
var G__283902__3 = (function (tsym283866,k,not_found){
var this__283877 = this;
var tsym283866__283878 = this;
var coll__283879 = tsym283866__283878;
return cljs.core._lookup.call(null,coll__283879,k,not_found);
});
G__283902 = function(tsym283866,k,not_found){
switch(arguments.length){
case 2:
return G__283902__2.call(this,tsym283866,k);
case 3:
return G__283902__3.call(this,tsym283866,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283902;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym283863,args283864){
return tsym283863.call.apply(tsym283863,[tsym283863].concat(cljs.core.aclone.call(null,args283864)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283880 = this;
var new_array__283881 = cljs.core.aclone.call(null,this__283880.array);
new_array__283881.push(o);
return (new cljs.core.Vector(this__283880.meta,new_array__283881,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__283882 = this;
var this$__283883 = this;
return cljs.core.pr_str.call(null,this$__283883);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__283884 = this;
return cljs.core.ci_reduce.call(null,this__283884.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__283885 = this;
return cljs.core.ci_reduce.call(null,this__283885.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283886 = this;
if((this__283886.array.length > 0))
{var vector_seq__283887 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__283886.array.length))
{return cljs.core.cons.call(null,(this__283886.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__283887.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__283888 = this;
return this__283888.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__283889 = this;
var count__283890 = this__283889.array.length;
if((count__283890 > 0))
{return (this__283889.array[(count__283890 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__283891 = this;
if((this__283891.array.length > 0))
{var new_array__283892 = cljs.core.aclone.call(null,this__283891.array);
new_array__283892.pop();
return (new cljs.core.Vector(this__283891.meta,new_array__283892,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__283893 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283894 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283895 = this;
return (new cljs.core.Vector(meta,this__283895.array,this__283895.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283896 = this;
return this__283896.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__283898 = this;
if((function (){var and__3546__auto____283899 = (0 <= n);
if(and__3546__auto____283899)
{return (n < this__283898.array.length);
} else
{return and__3546__auto____283899;
}
})())
{return (this__283898.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__283900 = this;
if((function (){var and__3546__auto____283901 = (0 <= n);
if(and__3546__auto____283901)
{return (n < this__283900.array.length);
} else
{return and__3546__auto____283901;
}
})())
{return (this__283900.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283897 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__283897.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__459__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__283903 = pv.cnt;
if((cnt__283903 < 32))
{return 0;
} else
{return (((cnt__283903 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__283904 = level;
var ret__283905 = node;
while(true){
if((ll__283904 === 0))
{return ret__283905;
} else
{var embed__283906 = ret__283905;
var r__283907 = cljs.core.pv_fresh_node.call(null,edit);
var ___283908 = cljs.core.pv_aset.call(null,r__283907,0,embed__283906);
{
var G__283909 = (ll__283904 - 5);
var G__283910 = r__283907;
ll__283904 = G__283909;
ret__283905 = G__283910;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__283911 = cljs.core.pv_clone_node.call(null,parent);
var subidx__283912 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__283911,subidx__283912,tailnode);
return ret__283911;
} else
{var temp__3695__auto____283913 = cljs.core.pv_aget.call(null,parent,subidx__283912);
if(cljs.core.truth_(temp__3695__auto____283913))
{var child__283914 = temp__3695__auto____283913;
var node_to_insert__283915 = push_tail.call(null,pv,(level - 5),child__283914,tailnode);
cljs.core.pv_aset.call(null,ret__283911,subidx__283912,node_to_insert__283915);
return ret__283911;
} else
{var node_to_insert__283916 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__283911,subidx__283912,node_to_insert__283916);
return ret__283911;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3546__auto____283917 = (0 <= i);
if(and__3546__auto____283917)
{return (i < pv.cnt);
} else
{return and__3546__auto____283917;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__283918 = pv.root;
var level__283919 = pv.shift;
while(true){
if((level__283919 > 0))
{{
var G__283920 = cljs.core.pv_aget.call(null,node__283918,((i >>> level__283919) & 31));
var G__283921 = (level__283919 - 5);
node__283918 = G__283920;
level__283919 = G__283921;
continue;
}
} else
{return node__283918.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__283922 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__283922,(i & 31),val);
return ret__283922;
} else
{var subidx__283923 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__283922,subidx__283923,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__283923),i,val));
return ret__283922;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__283924 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__283925 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__283924));
if((function (){var and__3546__auto____283926 = (new_child__283925 == null);
if(and__3546__auto____283926)
{return (subidx__283924 === 0);
} else
{return and__3546__auto____283926;
}
})())
{return null;
} else
{var ret__283927 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__283927,subidx__283924,new_child__283925);
return ret__283927;
}
} else
{if((subidx__283924 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__283928 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__283928,subidx__283924,null);
return ret__283928;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__283929 = cljs.core._count.call(null,v);
if((c__283929 > 0))
{if((void 0 === cljs.core.t283930))
{
/**
* @constructor
*/
cljs.core.t283930 = (function (c,offset,v,vector_seq,__meta__393__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__393__auto__ = __meta__393__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t283930.cljs$lang$type = true;
cljs.core.t283930.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.t283930");
});
cljs.core.t283930.prototype.cljs$core$ISeqable$ = true;
cljs.core.t283930.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__283931 = this;
return vseq;
});
cljs.core.t283930.prototype.cljs$core$ISeq$ = true;
cljs.core.t283930.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__283932 = this;
return cljs.core._nth.call(null,this__283932.v,this__283932.offset);
});
cljs.core.t283930.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__283933 = this;
var offset__283934 = (this__283933.offset + 1);
if((offset__283934 < this__283933.c))
{return this__283933.vector_seq.call(null,this__283933.v,offset__283934);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t283930.prototype.cljs$core$ASeq$ = true;
cljs.core.t283930.prototype.cljs$core$IEquiv$ = true;
cljs.core.t283930.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__283935 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t283930.prototype.cljs$core$ISequential$ = true;
cljs.core.t283930.prototype.cljs$core$IPrintable$ = true;
cljs.core.t283930.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__283936 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t283930.prototype.cljs$core$IMeta$ = true;
cljs.core.t283930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___394__auto__){
var this__283937 = this;
return this__283937.__meta__393__auto__;
});
cljs.core.t283930.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t283930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___394__auto__,__meta__393__auto__){
var this__283938 = this;
return (new cljs.core.t283930(this__283938.c,this__283938.offset,this__283938.v,this__283938.vector_seq,__meta__393__auto__));
});
cljs.core.t283930;
} else
{}
return (new cljs.core.t283930(c__283929,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__283943 = this;
return (new cljs.core.TransientVector(this__283943.cnt,this__283943.shift,cljs.core.tv_editable_root.call(null,this__283943.root),cljs.core.tv_editable_tail.call(null,this__283943.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__283944 = this;
var h__368__auto____283945 = this__283944.__hash;
if((h__368__auto____283945 != null))
{return h__368__auto____283945;
} else
{var h__368__auto____283946 = cljs.core.hash_coll.call(null,coll);
this__283944.__hash = h__368__auto____283946;
return h__368__auto____283946;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__283947 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__283948 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__283949 = this;
if((function (){var and__3546__auto____283950 = (0 <= k);
if(and__3546__auto____283950)
{return (k < this__283949.cnt);
} else
{return and__3546__auto____283950;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__283951 = cljs.core.aclone.call(null,this__283949.tail);
(new_tail__283951[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__283949.meta,this__283949.cnt,this__283949.shift,this__283949.root,new_tail__283951,null));
} else
{return (new cljs.core.PersistentVector(this__283949.meta,this__283949.cnt,this__283949.shift,cljs.core.do_assoc.call(null,coll,this__283949.shift,this__283949.root,k,v),this__283949.tail,null));
}
} else
{if((k === this__283949.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__283949.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__283996 = null;
var G__283996__2 = (function (tsym283941,k){
var this__283952 = this;
var tsym283941__283953 = this;
var coll__283954 = tsym283941__283953;
return cljs.core._lookup.call(null,coll__283954,k);
});
var G__283996__3 = (function (tsym283942,k,not_found){
var this__283955 = this;
var tsym283942__283956 = this;
var coll__283957 = tsym283942__283956;
return cljs.core._lookup.call(null,coll__283957,k,not_found);
});
G__283996 = function(tsym283942,k,not_found){
switch(arguments.length){
case 2:
return G__283996__2.call(this,tsym283942,k);
case 3:
return G__283996__3.call(this,tsym283942,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__283996;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym283939,args283940){
return tsym283939.call.apply(tsym283939,[tsym283939].concat(cljs.core.aclone.call(null,args283940)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__283958 = this;
var step_init__283959 = [0,init];
var i__283960 = 0;
while(true){
if((i__283960 < this__283958.cnt))
{var arr__283961 = cljs.core.array_for.call(null,v,i__283960);
var len__283962 = arr__283961.length;
var init__283966 = (function (){var j__283963 = 0;
var init__283964 = (step_init__283959[1]);
while(true){
if((j__283963 < len__283962))
{var init__283965 = f.call(null,init__283964,(j__283963 + i__283960),(arr__283961[j__283963]));
if(cljs.core.reduced_QMARK_.call(null,init__283965))
{return init__283965;
} else
{{
var G__283997 = (j__283963 + 1);
var G__283998 = init__283965;
j__283963 = G__283997;
init__283964 = G__283998;
continue;
}
}
} else
{(step_init__283959[0] = len__283962);
(step_init__283959[1] = init__283964);
return init__283964;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__283966))
{return cljs.core.deref.call(null,init__283966);
} else
{{
var G__283999 = (i__283960 + (step_init__283959[0]));
i__283960 = G__283999;
continue;
}
}
} else
{return (step_init__283959[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__283967 = this;
if(((this__283967.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__283968 = cljs.core.aclone.call(null,this__283967.tail);
new_tail__283968.push(o);
return (new cljs.core.PersistentVector(this__283967.meta,(this__283967.cnt + 1),this__283967.shift,this__283967.root,new_tail__283968,null));
} else
{var root_overflow_QMARK___283969 = ((this__283967.cnt >>> 5) > (1 << this__283967.shift));
var new_shift__283970 = ((root_overflow_QMARK___283969)?(this__283967.shift + 5):this__283967.shift);
var new_root__283972 = ((root_overflow_QMARK___283969)?(function (){var n_r__283971 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__283971,0,this__283967.root);
cljs.core.pv_aset.call(null,n_r__283971,1,cljs.core.new_path.call(null,null,this__283967.shift,(new cljs.core.VectorNode(null,this__283967.tail))));
return n_r__283971;
})():cljs.core.push_tail.call(null,coll,this__283967.shift,this__283967.root,(new cljs.core.VectorNode(null,this__283967.tail))));
return (new cljs.core.PersistentVector(this__283967.meta,(this__283967.cnt + 1),new_shift__283970,new_root__283972,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__283973 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__283974 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__283975 = this;
var this$__283976 = this;
return cljs.core.pr_str.call(null,this$__283976);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__283977 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__283978 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__283979 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__283980 = this;
return this__283980.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__283981 = this;
if((this__283981.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__283981.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__283982 = this;
if((this__283982.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__283982.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__283982.meta);
} else
{if((1 < (this__283982.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__283982.meta,(this__283982.cnt - 1),this__283982.shift,this__283982.root,this__283982.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__283983 = cljs.core.array_for.call(null,coll,(this__283982.cnt - 2));
var nr__283984 = cljs.core.pop_tail.call(null,coll,this__283982.shift,this__283982.root);
var new_root__283985 = (((nr__283984 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__283984);
var cnt_1__283986 = (this__283982.cnt - 1);
if((function (){var and__3546__auto____283987 = (5 < this__283982.shift);
if(and__3546__auto____283987)
{return (cljs.core.pv_aget.call(null,new_root__283985,1) == null);
} else
{return and__3546__auto____283987;
}
})())
{return (new cljs.core.PersistentVector(this__283982.meta,cnt_1__283986,(this__283982.shift - 5),cljs.core.pv_aget.call(null,new_root__283985,0),new_tail__283983,null));
} else
{return (new cljs.core.PersistentVector(this__283982.meta,cnt_1__283986,this__283982.shift,new_root__283985,new_tail__283983,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__283989 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__283990 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__283991 = this;
return (new cljs.core.PersistentVector(meta,this__283991.cnt,this__283991.shift,this__283991.root,this__283991.tail,this__283991.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__283992 = this;
return this__283992.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__283993 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__283994 = this;
if((function (){var and__3546__auto____283995 = (0 <= n);
if(and__3546__auto____283995)
{return (n < this__283994.cnt);
} else
{return and__3546__auto____283995;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__283988 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__283988.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__284000 = cljs.core.seq.call(null,xs);
var out__284001 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__284000))
{{
var G__284002 = cljs.core.next.call(null,xs__284000);
var G__284003 = cljs.core.conj_BANG_.call(null,out__284001,cljs.core.first.call(null,xs__284000));
xs__284000 = G__284002;
out__284001 = G__284003;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__284001);
}
break;
}
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__284004){
var args = cljs.core.seq(arglist__284004);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284009 = this;
var h__368__auto____284010 = this__284009.__hash;
if((h__368__auto____284010 != null))
{return h__368__auto____284010;
} else
{var h__368__auto____284011 = cljs.core.hash_coll.call(null,coll);
this__284009.__hash = h__368__auto____284011;
return h__368__auto____284011;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284012 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284013 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__284014 = this;
var v_pos__284015 = (this__284014.start + key);
return (new cljs.core.Subvec(this__284014.meta,cljs.core._assoc.call(null,this__284014.v,v_pos__284015,val),this__284014.start,((this__284014.end > (v_pos__284015 + 1)) ? this__284014.end : (v_pos__284015 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__284039 = null;
var G__284039__2 = (function (tsym284007,k){
var this__284016 = this;
var tsym284007__284017 = this;
var coll__284018 = tsym284007__284017;
return cljs.core._lookup.call(null,coll__284018,k);
});
var G__284039__3 = (function (tsym284008,k,not_found){
var this__284019 = this;
var tsym284008__284020 = this;
var coll__284021 = tsym284008__284020;
return cljs.core._lookup.call(null,coll__284021,k,not_found);
});
G__284039 = function(tsym284008,k,not_found){
switch(arguments.length){
case 2:
return G__284039__2.call(this,tsym284008,k);
case 3:
return G__284039__3.call(this,tsym284008,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284039;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym284005,args284006){
return tsym284005.call.apply(tsym284005,[tsym284005].concat(cljs.core.aclone.call(null,args284006)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284022 = this;
return (new cljs.core.Subvec(this__284022.meta,cljs.core._assoc_n.call(null,this__284022.v,this__284022.end,o),this__284022.start,(this__284022.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__284023 = this;
var this$__284024 = this;
return cljs.core.pr_str.call(null,this$__284024);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__284025 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__284026 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284027 = this;
var subvec_seq__284028 = (function subvec_seq(i){
if((i === this__284027.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__284027.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__284028.call(null,this__284027.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284029 = this;
return (this__284029.end - this__284029.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__284030 = this;
return cljs.core._nth.call(null,this__284030.v,(this__284030.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__284031 = this;
if((this__284031.start === this__284031.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__284031.meta,this__284031.v,this__284031.start,(this__284031.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__284032 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284033 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284034 = this;
return (new cljs.core.Subvec(meta,this__284034.v,this__284034.start,this__284034.end,this__284034.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284035 = this;
return this__284035.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__284037 = this;
return cljs.core._nth.call(null,this__284037.v,(this__284037.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__284038 = this;
return cljs.core._nth.call(null,this__284038.v,(this__284038.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284036 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__284036.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__284040 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__284040,0,tl.length);
return ret__284040;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__284041 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__284042 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__284041,subidx__284042,(((level === 5))?tail_node:(function (){var child__284043 = cljs.core.pv_aget.call(null,ret__284041,subidx__284042);
if((child__284043 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__284043,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__284041;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__284044 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__284045 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__284046 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__284044,subidx__284045));
if((function (){var and__3546__auto____284047 = (new_child__284046 == null);
if(and__3546__auto____284047)
{return (subidx__284045 === 0);
} else
{return and__3546__auto____284047;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__284044,subidx__284045,new_child__284046);
return node__284044;
}
} else
{if((subidx__284045 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__284044,subidx__284045,null);
return node__284044;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3546__auto____284048 = (0 <= i);
if(and__3546__auto____284048)
{return (i < tv.cnt);
} else
{return and__3546__auto____284048;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__284049 = tv.root;
var node__284050 = root__284049;
var level__284051 = tv.shift;
while(true){
if((level__284051 > 0))
{{
var G__284052 = cljs.core.tv_ensure_editable.call(null,root__284049.edit,cljs.core.pv_aget.call(null,node__284050,((i >>> level__284051) & 31)));
var G__284053 = (level__284051 - 5);
node__284050 = G__284052;
level__284051 = G__284053;
continue;
}
} else
{return node__284050.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__284091 = null;
var G__284091__2 = (function (tsym284056,k){
var this__284058 = this;
var tsym284056__284059 = this;
var coll__284060 = tsym284056__284059;
return cljs.core._lookup.call(null,coll__284060,k);
});
var G__284091__3 = (function (tsym284057,k,not_found){
var this__284061 = this;
var tsym284057__284062 = this;
var coll__284063 = tsym284057__284062;
return cljs.core._lookup.call(null,coll__284063,k,not_found);
});
G__284091 = function(tsym284057,k,not_found){
switch(arguments.length){
case 2:
return G__284091__2.call(this,tsym284057,k);
case 3:
return G__284091__3.call(this,tsym284057,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284091;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym284054,args284055){
return tsym284054.call.apply(tsym284054,[tsym284054].concat(cljs.core.aclone.call(null,args284055)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284064 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284065 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__284066 = this;
if(cljs.core.truth_(this__284066.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__284067 = this;
if((function (){var and__3546__auto____284068 = (0 <= n);
if(and__3546__auto____284068)
{return (n < this__284067.cnt);
} else
{return and__3546__auto____284068;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284069 = this;
if(cljs.core.truth_(this__284069.root.edit))
{return this__284069.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__284070 = this;
if(cljs.core.truth_(this__284070.root.edit))
{if((function (){var and__3546__auto____284071 = (0 <= n);
if(and__3546__auto____284071)
{return (n < this__284070.cnt);
} else
{return and__3546__auto____284071;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__284070.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__284074 = (function go(level,node){
var node__284072 = cljs.core.tv_ensure_editable.call(null,this__284070.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__284072,(n & 31),val);
return node__284072;
} else
{var subidx__284073 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__284072,subidx__284073,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__284072,subidx__284073)));
return node__284072;
}
}).call(null,this__284070.shift,this__284070.root);
this__284070.root = new_root__284074;
return tcoll;
}
} else
{if((n === this__284070.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__284070.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__284075 = this;
if(cljs.core.truth_(this__284075.root.edit))
{if((this__284075.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__284075.cnt))
{this__284075.cnt = 0;
return tcoll;
} else
{if((((this__284075.cnt - 1) & 31) > 0))
{this__284075.cnt = (this__284075.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__284076 = cljs.core.editable_array_for.call(null,tcoll,(this__284075.cnt - 2));
var new_root__284078 = (function (){var nr__284077 = cljs.core.tv_pop_tail.call(null,tcoll,this__284075.shift,this__284075.root);
if((nr__284077 != null))
{return nr__284077;
} else
{return (new cljs.core.VectorNode(this__284075.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3546__auto____284079 = (5 < this__284075.shift);
if(and__3546__auto____284079)
{return (cljs.core.pv_aget.call(null,new_root__284078,1) == null);
} else
{return and__3546__auto____284079;
}
})())
{var new_root__284080 = cljs.core.tv_ensure_editable.call(null,this__284075.root.edit,cljs.core.pv_aget.call(null,new_root__284078,0));
this__284075.root = new_root__284080;
this__284075.shift = (this__284075.shift - 5);
this__284075.cnt = (this__284075.cnt - 1);
this__284075.tail = new_tail__284076;
return tcoll;
} else
{this__284075.root = new_root__284078;
this__284075.cnt = (this__284075.cnt - 1);
this__284075.tail = new_tail__284076;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__284081 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__284082 = this;
if(cljs.core.truth_(this__284082.root.edit))
{if(((this__284082.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__284082.tail[(this__284082.cnt & 31)] = o);
this__284082.cnt = (this__284082.cnt + 1);
return tcoll;
} else
{var tail_node__284083 = (new cljs.core.VectorNode(this__284082.root.edit,this__284082.tail));
var new_tail__284084 = cljs.core.make_array.call(null,32);
(new_tail__284084[0] = o);
this__284082.tail = new_tail__284084;
if(((this__284082.cnt >>> 5) > (1 << this__284082.shift)))
{var new_root_array__284085 = cljs.core.make_array.call(null,32);
var new_shift__284086 = (this__284082.shift + 5);
(new_root_array__284085[0] = this__284082.root);
(new_root_array__284085[1] = cljs.core.new_path.call(null,this__284082.root.edit,this__284082.shift,tail_node__284083));
this__284082.root = (new cljs.core.VectorNode(this__284082.root.edit,new_root_array__284085));
this__284082.shift = new_shift__284086;
this__284082.cnt = (this__284082.cnt + 1);
return tcoll;
} else
{var new_root__284087 = cljs.core.tv_push_tail.call(null,tcoll,this__284082.shift,this__284082.root,tail_node__284083);
this__284082.root = new_root__284087;
this__284082.cnt = (this__284082.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__284088 = this;
if(cljs.core.truth_(this__284088.root.edit))
{this__284088.root.edit = null;
var len__284089 = (this__284088.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__284090 = cljs.core.make_array.call(null,len__284089);
cljs.core.array_copy.call(null,this__284088.tail,0,trimmed_tail__284090,0,len__284089);
return (new cljs.core.PersistentVector(null,this__284088.cnt,this__284088.shift,this__284088.root,trimmed_tail__284090,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284092 = this;
var h__368__auto____284093 = this__284092.__hash;
if((h__368__auto____284093 != null))
{return h__368__auto____284093;
} else
{var h__368__auto____284094 = cljs.core.hash_coll.call(null,coll);
this__284092.__hash = h__368__auto____284094;
return h__368__auto____284094;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284095 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__284096 = this;
var this$__284097 = this;
return cljs.core.pr_str.call(null,this$__284097);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284098 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__284099 = this;
return cljs.core._first.call(null,this__284099.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__284100 = this;
var temp__3695__auto____284101 = cljs.core.next.call(null,this__284100.front);
if(cljs.core.truth_(temp__3695__auto____284101))
{var f1__284102 = temp__3695__auto____284101;
return (new cljs.core.PersistentQueueSeq(this__284100.meta,f1__284102,this__284100.rear,null));
} else
{if((this__284100.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__284100.meta,this__284100.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284103 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284104 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__284104.front,this__284104.rear,this__284104.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284105 = this;
return this__284105.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284106 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__284106.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284107 = this;
var h__368__auto____284108 = this__284107.__hash;
if((h__368__auto____284108 != null))
{return h__368__auto____284108;
} else
{var h__368__auto____284109 = cljs.core.hash_coll.call(null,coll);
this__284107.__hash = h__368__auto____284109;
return h__368__auto____284109;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284110 = this;
if(cljs.core.truth_(this__284110.front))
{return (new cljs.core.PersistentQueue(this__284110.meta,(this__284110.count + 1),this__284110.front,cljs.core.conj.call(null,(function (){var or__3548__auto____284111 = this__284110.rear;
if(cljs.core.truth_(or__3548__auto____284111))
{return or__3548__auto____284111;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__284110.meta,(this__284110.count + 1),cljs.core.conj.call(null,this__284110.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__284112 = this;
var this$__284113 = this;
return cljs.core.pr_str.call(null,this$__284113);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284114 = this;
var rear__284115 = cljs.core.seq.call(null,this__284114.rear);
if(cljs.core.truth_((function (){var or__3548__auto____284116 = this__284114.front;
if(cljs.core.truth_(or__3548__auto____284116))
{return or__3548__auto____284116;
} else
{return rear__284115;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__284114.front,cljs.core.seq.call(null,rear__284115),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284117 = this;
return this__284117.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__284118 = this;
return cljs.core._first.call(null,this__284118.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__284119 = this;
if(cljs.core.truth_(this__284119.front))
{var temp__3695__auto____284120 = cljs.core.next.call(null,this__284119.front);
if(cljs.core.truth_(temp__3695__auto____284120))
{var f1__284121 = temp__3695__auto____284120;
return (new cljs.core.PersistentQueue(this__284119.meta,(this__284119.count - 1),f1__284121,this__284119.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__284119.meta,(this__284119.count - 1),cljs.core.seq.call(null,this__284119.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__284122 = this;
return cljs.core.first.call(null,this__284122.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__284123 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284124 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284125 = this;
return (new cljs.core.PersistentQueue(meta,this__284125.count,this__284125.front,this__284125.rear,this__284125.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284126 = this;
return this__284126.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284127 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__284128 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__284129 = array.length;
var i__284130 = 0;
while(true){
if((i__284130 < len__284129))
{if(cljs.core._EQ_.call(null,k,(array[i__284130])))
{return i__284130;
} else
{{
var G__284131 = (i__284130 + incr);
i__284130 = G__284131;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____284132 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____284132))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____284132;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__284133 = cljs.core.hash.call(null,a);
var b__284134 = cljs.core.hash.call(null,b);
if((a__284133 < b__284134))
{return -1;
} else
{if((a__284133 > b__284134))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__284136 = m.keys;
var len__284137 = ks__284136.length;
var so__284138 = m.strobj;
var out__284139 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__284140 = 0;
var out__284141 = cljs.core.transient$.call(null,out__284139);
while(true){
if((i__284140 < len__284137))
{var k__284142 = (ks__284136[i__284140]);
{
var G__284143 = (i__284140 + 1);
var G__284144 = cljs.core.assoc_BANG_.call(null,out__284141,k__284142,(so__284138[k__284142]));
i__284140 = G__284143;
out__284141 = G__284144;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__284141,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__284149 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284150 = this;
var h__368__auto____284151 = this__284150.__hash;
if((h__368__auto____284151 != null))
{return h__368__auto____284151;
} else
{var h__368__auto____284152 = cljs.core.hash_imap.call(null,coll);
this__284150.__hash = h__368__auto____284152;
return h__368__auto____284152;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284153 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284154 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__284154.strobj,(this__284154.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__284155 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___284156 = this__284155.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___284156))
{var new_strobj__284157 = goog.object.clone.call(null,this__284155.strobj);
(new_strobj__284157[k] = v);
return (new cljs.core.ObjMap(this__284155.meta,this__284155.keys,new_strobj__284157,(this__284155.update_count + 1),null));
} else
{if((this__284155.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__284158 = goog.object.clone.call(null,this__284155.strobj);
var new_keys__284159 = cljs.core.aclone.call(null,this__284155.keys);
(new_strobj__284158[k] = v);
new_keys__284159.push(k);
return (new cljs.core.ObjMap(this__284155.meta,new_keys__284159,new_strobj__284158,(this__284155.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__284160 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__284160.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__284180 = null;
var G__284180__2 = (function (tsym284147,k){
var this__284161 = this;
var tsym284147__284162 = this;
var coll__284163 = tsym284147__284162;
return cljs.core._lookup.call(null,coll__284163,k);
});
var G__284180__3 = (function (tsym284148,k,not_found){
var this__284164 = this;
var tsym284148__284165 = this;
var coll__284166 = tsym284148__284165;
return cljs.core._lookup.call(null,coll__284166,k,not_found);
});
G__284180 = function(tsym284148,k,not_found){
switch(arguments.length){
case 2:
return G__284180__2.call(this,tsym284148,k);
case 3:
return G__284180__3.call(this,tsym284148,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284180;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym284145,args284146){
return tsym284145.call.apply(tsym284145,[tsym284145].concat(cljs.core.aclone.call(null,args284146)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__284167 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__284168 = this;
var this$__284169 = this;
return cljs.core.pr_str.call(null,this$__284169);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284170 = this;
if((this__284170.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__284135_SHARP_){
return cljs.core.vector.call(null,p1__284135_SHARP_,(this__284170.strobj[p1__284135_SHARP_]));
}),this__284170.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284171 = this;
return this__284171.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284172 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284173 = this;
return (new cljs.core.ObjMap(meta,this__284173.keys,this__284173.strobj,this__284173.update_count,this__284173.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284174 = this;
return this__284174.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284175 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__284175.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__284176 = this;
if(cljs.core.truth_((function (){var and__3546__auto____284177 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____284177))
{return this__284176.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____284177;
}
})()))
{var new_keys__284178 = cljs.core.aclone.call(null,this__284176.keys);
var new_strobj__284179 = goog.object.clone.call(null,this__284176.strobj);
new_keys__284178.splice(cljs.core.scan_array.call(null,1,k,new_keys__284178),1);
cljs.core.js_delete.call(null,new_strobj__284179,k);
return (new cljs.core.ObjMap(this__284176.meta,new_keys__284178,new_strobj__284179,(this__284176.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284186 = this;
var h__368__auto____284187 = this__284186.__hash;
if((h__368__auto____284187 != null))
{return h__368__auto____284187;
} else
{var h__368__auto____284188 = cljs.core.hash_imap.call(null,coll);
this__284186.__hash = h__368__auto____284188;
return h__368__auto____284188;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284189 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284190 = this;
var bucket__284191 = (this__284190.hashobj[cljs.core.hash.call(null,k)]);
var i__284192 = (cljs.core.truth_(bucket__284191)?cljs.core.scan_array.call(null,2,k,bucket__284191):null);
if(cljs.core.truth_(i__284192))
{return (bucket__284191[(i__284192 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__284193 = this;
var h__284194 = cljs.core.hash.call(null,k);
var bucket__284195 = (this__284193.hashobj[h__284194]);
if(cljs.core.truth_(bucket__284195))
{var new_bucket__284196 = cljs.core.aclone.call(null,bucket__284195);
var new_hashobj__284197 = goog.object.clone.call(null,this__284193.hashobj);
(new_hashobj__284197[h__284194] = new_bucket__284196);
var temp__3695__auto____284198 = cljs.core.scan_array.call(null,2,k,new_bucket__284196);
if(cljs.core.truth_(temp__3695__auto____284198))
{var i__284199 = temp__3695__auto____284198;
(new_bucket__284196[(i__284199 + 1)] = v);
return (new cljs.core.HashMap(this__284193.meta,this__284193.count,new_hashobj__284197,null));
} else
{new_bucket__284196.push(k,v);
return (new cljs.core.HashMap(this__284193.meta,(this__284193.count + 1),new_hashobj__284197,null));
}
} else
{var new_hashobj__284200 = goog.object.clone.call(null,this__284193.hashobj);
(new_hashobj__284200[h__284194] = [k,v]);
return (new cljs.core.HashMap(this__284193.meta,(this__284193.count + 1),new_hashobj__284200,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__284201 = this;
var bucket__284202 = (this__284201.hashobj[cljs.core.hash.call(null,k)]);
var i__284203 = (cljs.core.truth_(bucket__284202)?cljs.core.scan_array.call(null,2,k,bucket__284202):null);
if(cljs.core.truth_(i__284203))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__284226 = null;
var G__284226__2 = (function (tsym284184,k){
var this__284204 = this;
var tsym284184__284205 = this;
var coll__284206 = tsym284184__284205;
return cljs.core._lookup.call(null,coll__284206,k);
});
var G__284226__3 = (function (tsym284185,k,not_found){
var this__284207 = this;
var tsym284185__284208 = this;
var coll__284209 = tsym284185__284208;
return cljs.core._lookup.call(null,coll__284209,k,not_found);
});
G__284226 = function(tsym284185,k,not_found){
switch(arguments.length){
case 2:
return G__284226__2.call(this,tsym284185,k);
case 3:
return G__284226__3.call(this,tsym284185,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284226;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym284182,args284183){
return tsym284182.call.apply(tsym284182,[tsym284182].concat(cljs.core.aclone.call(null,args284183)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__284210 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__284211 = this;
var this$__284212 = this;
return cljs.core.pr_str.call(null,this$__284212);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284213 = this;
if((this__284213.count > 0))
{var hashes__284214 = cljs.core.js_keys.call(null,this__284213.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__284181_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__284213.hashobj[p1__284181_SHARP_])));
}),hashes__284214);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284215 = this;
return this__284215.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284216 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284217 = this;
return (new cljs.core.HashMap(meta,this__284217.count,this__284217.hashobj,this__284217.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284218 = this;
return this__284218.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284219 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__284219.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__284220 = this;
var h__284221 = cljs.core.hash.call(null,k);
var bucket__284222 = (this__284220.hashobj[h__284221]);
var i__284223 = (cljs.core.truth_(bucket__284222)?cljs.core.scan_array.call(null,2,k,bucket__284222):null);
if(cljs.core.not.call(null,i__284223))
{return coll;
} else
{var new_hashobj__284224 = goog.object.clone.call(null,this__284220.hashobj);
if((3 > bucket__284222.length))
{cljs.core.js_delete.call(null,new_hashobj__284224,h__284221);
} else
{var new_bucket__284225 = cljs.core.aclone.call(null,bucket__284222);
new_bucket__284225.splice(i__284223,2);
(new_hashobj__284224[h__284221] = new_bucket__284225);
}
return (new cljs.core.HashMap(this__284220.meta,(this__284220.count - 1),new_hashobj__284224,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__284227 = ks.length;
var i__284228 = 0;
var out__284229 = cljs.core.HashMap.EMPTY;
while(true){
if((i__284228 < len__284227))
{{
var G__284230 = (i__284228 + 1);
var G__284231 = cljs.core.assoc.call(null,out__284229,(ks[i__284228]),(vs[i__284228]));
i__284228 = G__284230;
out__284229 = G__284231;
continue;
}
} else
{return out__284229;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__284232 = m.arr;
var len__284233 = arr__284232.length;
var i__284234 = 0;
while(true){
if((len__284233 <= i__284234))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__284232[i__284234]),k))
{return i__284234;
} else
{if("\uFDD0'else")
{{
var G__284235 = (i__284234 + 2);
i__284234 = G__284235;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__284240 = this;
return (new cljs.core.TransientArrayMap({},this__284240.arr.length,cljs.core.aclone.call(null,this__284240.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284241 = this;
var h__368__auto____284242 = this__284241.__hash;
if((h__368__auto____284242 != null))
{return h__368__auto____284242;
} else
{var h__368__auto____284243 = cljs.core.hash_imap.call(null,coll);
this__284241.__hash = h__368__auto____284243;
return h__368__auto____284243;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284244 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284245 = this;
var idx__284246 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__284246 === -1))
{return not_found;
} else
{return (this__284245.arr[(idx__284246 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__284247 = this;
var idx__284248 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__284248 === -1))
{if((this__284247.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__284247.meta,(this__284247.cnt + 1),(function (){var G__284249__284250 = cljs.core.aclone.call(null,this__284247.arr);
G__284249__284250.push(k);
G__284249__284250.push(v);
return G__284249__284250;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__284247.arr[(idx__284248 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__284247.meta,this__284247.cnt,(function (){var G__284251__284252 = cljs.core.aclone.call(null,this__284247.arr);
(G__284251__284252[(idx__284248 + 1)] = v);
return G__284251__284252;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__284253 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__284283 = null;
var G__284283__2 = (function (tsym284238,k){
var this__284254 = this;
var tsym284238__284255 = this;
var coll__284256 = tsym284238__284255;
return cljs.core._lookup.call(null,coll__284256,k);
});
var G__284283__3 = (function (tsym284239,k,not_found){
var this__284257 = this;
var tsym284239__284258 = this;
var coll__284259 = tsym284239__284258;
return cljs.core._lookup.call(null,coll__284259,k,not_found);
});
G__284283 = function(tsym284239,k,not_found){
switch(arguments.length){
case 2:
return G__284283__2.call(this,tsym284239,k);
case 3:
return G__284283__3.call(this,tsym284239,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284283;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym284236,args284237){
return tsym284236.call.apply(tsym284236,[tsym284236].concat(cljs.core.aclone.call(null,args284237)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__284260 = this;
var len__284261 = this__284260.arr.length;
var i__284262 = 0;
var init__284263 = init;
while(true){
if((i__284262 < len__284261))
{var init__284264 = f.call(null,init__284263,(this__284260.arr[i__284262]),(this__284260.arr[(i__284262 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__284264))
{return cljs.core.deref.call(null,init__284264);
} else
{{
var G__284284 = (i__284262 + 2);
var G__284285 = init__284264;
i__284262 = G__284284;
init__284263 = G__284285;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__284265 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__284266 = this;
var this$__284267 = this;
return cljs.core.pr_str.call(null,this$__284267);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284268 = this;
if((this__284268.cnt > 0))
{var len__284269 = this__284268.arr.length;
var array_map_seq__284270 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__284269))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__284268.arr[i]),(this__284268.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__284270.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284271 = this;
return this__284271.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284272 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284273 = this;
return (new cljs.core.PersistentArrayMap(meta,this__284273.cnt,this__284273.arr,this__284273.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284274 = this;
return this__284274.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284275 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__284275.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__284276 = this;
var idx__284277 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__284277 >= 0))
{var len__284278 = this__284276.arr.length;
var new_len__284279 = (len__284278 - 2);
if((new_len__284279 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__284280 = cljs.core.make_array.call(null,new_len__284279);
var s__284281 = 0;
var d__284282 = 0;
while(true){
if((s__284281 >= len__284278))
{return (new cljs.core.PersistentArrayMap(this__284276.meta,(this__284276.cnt - 1),new_arr__284280,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__284276.arr[s__284281])))
{{
var G__284286 = (s__284281 + 2);
var G__284287 = d__284282;
s__284281 = G__284286;
d__284282 = G__284287;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__284280[d__284282] = (this__284276.arr[s__284281]));
(new_arr__284280[(d__284282 + 1)] = (this__284276.arr[(s__284281 + 1)]));
{
var G__284288 = (s__284281 + 2);
var G__284289 = (d__284282 + 2);
s__284281 = G__284288;
d__284282 = G__284289;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__284290 = cljs.core.count.call(null,ks);
var i__284291 = 0;
var out__284292 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__284291 < len__284290))
{{
var G__284293 = (i__284291 + 1);
var G__284294 = cljs.core.assoc_BANG_.call(null,out__284292,(ks[i__284291]),(vs[i__284291]));
i__284291 = G__284293;
out__284292 = G__284294;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__284292);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__284295 = this;
if(cljs.core.truth_(this__284295.editable_QMARK_))
{var idx__284296 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__284296 >= 0))
{(this__284295.arr[idx__284296] = (this__284295.arr[(this__284295.len - 2)]));
(this__284295.arr[(idx__284296 + 1)] = (this__284295.arr[(this__284295.len - 1)]));
var G__284297__284298 = this__284295.arr;
G__284297__284298.pop();
G__284297__284298.pop();
G__284297__284298;
this__284295.len = (this__284295.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__284299 = this;
if(cljs.core.truth_(this__284299.editable_QMARK_))
{var idx__284300 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__284300 === -1))
{if(((this__284299.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__284299.len = (this__284299.len + 2);
this__284299.arr.push(key);
this__284299.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__284299.len,this__284299.arr),key,val);
}
} else
{if((val === (this__284299.arr[(idx__284300 + 1)])))
{return tcoll;
} else
{(this__284299.arr[(idx__284300 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__284301 = this;
if(cljs.core.truth_(this__284301.editable_QMARK_))
{if((function (){var G__284302__284303 = o;
if((G__284302__284303 != null))
{if((function (){var or__3548__auto____284304 = (G__284302__284303.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____284304)
{return or__3548__auto____284304;
} else
{return G__284302__284303.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__284302__284303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__284302__284303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__284302__284303);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__284305 = cljs.core.seq.call(null,o);
var tcoll__284306 = tcoll;
while(true){
var temp__3695__auto____284307 = cljs.core.first.call(null,es__284305);
if(cljs.core.truth_(temp__3695__auto____284307))
{var e__284308 = temp__3695__auto____284307;
{
var G__284314 = cljs.core.next.call(null,es__284305);
var G__284315 = cljs.core._assoc_BANG_.call(null,tcoll__284306,cljs.core.key.call(null,e__284308),cljs.core.val.call(null,e__284308));
es__284305 = G__284314;
tcoll__284306 = G__284315;
continue;
}
} else
{return tcoll__284306;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__284309 = this;
if(cljs.core.truth_(this__284309.editable_QMARK_))
{this__284309.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__284309.len,2),this__284309.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__284310 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__284311 = this;
if(cljs.core.truth_(this__284311.editable_QMARK_))
{var idx__284312 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__284312 === -1))
{return not_found;
} else
{return (this__284311.arr[(idx__284312 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__284313 = this;
if(cljs.core.truth_(this__284313.editable_QMARK_))
{return cljs.core.quot.call(null,this__284313.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__284316 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__284317 = 0;
while(true){
if((i__284317 < len))
{{
var G__284318 = cljs.core.assoc_BANG_.call(null,out__284316,(arr[i__284317]),(arr[(i__284317 + 1)]));
var G__284319 = (i__284317 + 2);
out__284316 = G__284318;
i__284317 = G__284319;
continue;
}
} else
{return out__284316;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__284320__284321 = cljs.core.aclone.call(null,arr);
(G__284320__284321[i] = a);
return G__284320__284321;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__284322__284323 = cljs.core.aclone.call(null,arr);
(G__284322__284323[i] = a);
(G__284322__284323[j] = b);
return G__284322__284323;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__284324 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__284324,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__284324,(2 * i),(new_arr__284324.length - (2 * i)));
return new_arr__284324;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__284325 = inode.ensure_editable(edit);
(editable__284325.arr[i] = a);
return editable__284325;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__284326 = inode.ensure_editable(edit);
(editable__284326.arr[i] = a);
(editable__284326.arr[j] = b);
return editable__284326;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__284327 = arr.length;
var i__284328 = 0;
var init__284329 = init;
while(true){
if((i__284328 < len__284327))
{var init__284332 = (function (){var k__284330 = (arr[i__284328]);
if((k__284330 != null))
{return f.call(null,init__284329,k__284330,(arr[(i__284328 + 1)]));
} else
{var node__284331 = (arr[(i__284328 + 1)]);
if((node__284331 != null))
{return node__284331.kv_reduce(f,init__284329);
} else
{return init__284329;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__284332))
{return cljs.core.deref.call(null,init__284332);
} else
{{
var G__284333 = (i__284328 + 2);
var G__284334 = init__284332;
i__284328 = G__284333;
init__284329 = G__284334;
continue;
}
}
} else
{return init__284329;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__284335 = this;
var inode__284336 = this;
if((this__284335.bitmap === bit))
{return null;
} else
{var editable__284337 = inode__284336.ensure_editable(e);
var earr__284338 = editable__284337.arr;
var len__284339 = earr__284338.length;
editable__284337.bitmap = (bit ^ editable__284337.bitmap);
cljs.core.array_copy.call(null,earr__284338,(2 * (i + 1)),earr__284338,(2 * i),(len__284339 - (2 * (i + 1))));
(earr__284338[(len__284339 - 2)] = null);
(earr__284338[(len__284339 - 1)] = null);
return editable__284337;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__284340 = this;
var inode__284341 = this;
var bit__284342 = (1 << ((hash >>> shift) & 0x01f));
var idx__284343 = cljs.core.bitmap_indexed_node_index.call(null,this__284340.bitmap,bit__284342);
if(((this__284340.bitmap & bit__284342) === 0))
{var n__284344 = cljs.core.bit_count.call(null,this__284340.bitmap);
if(((2 * n__284344) < this__284340.arr.length))
{var editable__284345 = inode__284341.ensure_editable(edit);
var earr__284346 = editable__284345.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__284346,(2 * idx__284343),earr__284346,(2 * (idx__284343 + 1)),(2 * (n__284344 - idx__284343)));
(earr__284346[(2 * idx__284343)] = key);
(earr__284346[((2 * idx__284343) + 1)] = val);
editable__284345.bitmap = (editable__284345.bitmap | bit__284342);
return editable__284345;
} else
{if((n__284344 >= 16))
{var nodes__284347 = cljs.core.make_array.call(null,32);
var jdx__284348 = ((hash >>> shift) & 0x01f);
(nodes__284347[jdx__284348] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__284349 = 0;
var j__284350 = 0;
while(true){
if((i__284349 < 32))
{if((((this__284340.bitmap >>> i__284349) & 1) === 0))
{{
var G__284403 = (i__284349 + 1);
var G__284404 = j__284350;
i__284349 = G__284403;
j__284350 = G__284404;
continue;
}
} else
{(nodes__284347[i__284349] = (((null != (this__284340.arr[j__284350])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__284340.arr[j__284350])),(this__284340.arr[j__284350]),(this__284340.arr[(j__284350 + 1)]),added_leaf_QMARK_):(this__284340.arr[(j__284350 + 1)])));
{
var G__284405 = (i__284349 + 1);
var G__284406 = (j__284350 + 2);
i__284349 = G__284405;
j__284350 = G__284406;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__284344 + 1),nodes__284347));
} else
{if("\uFDD0'else")
{var new_arr__284351 = cljs.core.make_array.call(null,(2 * (n__284344 + 4)));
cljs.core.array_copy.call(null,this__284340.arr,0,new_arr__284351,0,(2 * idx__284343));
(new_arr__284351[(2 * idx__284343)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__284351[((2 * idx__284343) + 1)] = val);
cljs.core.array_copy.call(null,this__284340.arr,(2 * idx__284343),new_arr__284351,(2 * (idx__284343 + 1)),(2 * (n__284344 - idx__284343)));
var editable__284352 = inode__284341.ensure_editable(edit);
editable__284352.arr = new_arr__284351;
editable__284352.bitmap = (editable__284352.bitmap | bit__284342);
return editable__284352;
} else
{return null;
}
}
}
} else
{var key_or_nil__284353 = (this__284340.arr[(2 * idx__284343)]);
var val_or_node__284354 = (this__284340.arr[((2 * idx__284343) + 1)]);
if((null == key_or_nil__284353))
{var n__284355 = val_or_node__284354.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__284355 === val_or_node__284354))
{return inode__284341;
} else
{return cljs.core.edit_and_set.call(null,inode__284341,edit,((2 * idx__284343) + 1),n__284355);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284353))
{if((val === val_or_node__284354))
{return inode__284341;
} else
{return cljs.core.edit_and_set.call(null,inode__284341,edit,((2 * idx__284343) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__284341,edit,(2 * idx__284343),null,((2 * idx__284343) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__284353,val_or_node__284354,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__284356 = this;
var inode__284357 = this;
return cljs.core.create_inode_seq.call(null,this__284356.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__284358 = this;
var inode__284359 = this;
var bit__284360 = (1 << ((hash >>> shift) & 0x01f));
if(((this__284358.bitmap & bit__284360) === 0))
{return inode__284359;
} else
{var idx__284361 = cljs.core.bitmap_indexed_node_index.call(null,this__284358.bitmap,bit__284360);
var key_or_nil__284362 = (this__284358.arr[(2 * idx__284361)]);
var val_or_node__284363 = (this__284358.arr[((2 * idx__284361) + 1)]);
if((null == key_or_nil__284362))
{var n__284364 = val_or_node__284363.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__284364 === val_or_node__284363))
{return inode__284359;
} else
{if((null != n__284364))
{return cljs.core.edit_and_set.call(null,inode__284359,edit,((2 * idx__284361) + 1),n__284364);
} else
{if((this__284358.bitmap === bit__284360))
{return null;
} else
{if("\uFDD0'else")
{return inode__284359.edit_and_remove_pair(edit,bit__284360,idx__284361);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284362))
{(removed_leaf_QMARK_[0] = true);
return inode__284359.edit_and_remove_pair(edit,bit__284360,idx__284361);
} else
{if("\uFDD0'else")
{return inode__284359;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__284365 = this;
var inode__284366 = this;
if((e === this__284365.edit))
{return inode__284366;
} else
{var n__284367 = cljs.core.bit_count.call(null,this__284365.bitmap);
var new_arr__284368 = cljs.core.make_array.call(null,(((n__284367 < 0))?4:(2 * (n__284367 + 1))));
cljs.core.array_copy.call(null,this__284365.arr,0,new_arr__284368,0,(2 * n__284367));
return (new cljs.core.BitmapIndexedNode(e,this__284365.bitmap,new_arr__284368));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__284369 = this;
var inode__284370 = this;
return cljs.core.inode_kv_reduce.call(null,this__284369.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__284407 = null;
var G__284407__3 = (function (shift,hash,key){
var this__284371 = this;
var inode__284372 = this;
var bit__284373 = (1 << ((hash >>> shift) & 0x01f));
if(((this__284371.bitmap & bit__284373) === 0))
{return null;
} else
{var idx__284374 = cljs.core.bitmap_indexed_node_index.call(null,this__284371.bitmap,bit__284373);
var key_or_nil__284375 = (this__284371.arr[(2 * idx__284374)]);
var val_or_node__284376 = (this__284371.arr[((2 * idx__284374) + 1)]);
if((null == key_or_nil__284375))
{return val_or_node__284376.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284375))
{return cljs.core.PersistentVector.fromArray([key_or_nil__284375,val_or_node__284376]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__284407__4 = (function (shift,hash,key,not_found){
var this__284377 = this;
var inode__284378 = this;
var bit__284379 = (1 << ((hash >>> shift) & 0x01f));
if(((this__284377.bitmap & bit__284379) === 0))
{return not_found;
} else
{var idx__284380 = cljs.core.bitmap_indexed_node_index.call(null,this__284377.bitmap,bit__284379);
var key_or_nil__284381 = (this__284377.arr[(2 * idx__284380)]);
var val_or_node__284382 = (this__284377.arr[((2 * idx__284380) + 1)]);
if((null == key_or_nil__284381))
{return val_or_node__284382.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284381))
{return cljs.core.PersistentVector.fromArray([key_or_nil__284381,val_or_node__284382]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__284407 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__284407__3.call(this,shift,hash,key);
case 4:
return G__284407__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284407;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__284383 = this;
var inode__284384 = this;
var bit__284385 = (1 << ((hash >>> shift) & 0x01f));
if(((this__284383.bitmap & bit__284385) === 0))
{return inode__284384;
} else
{var idx__284386 = cljs.core.bitmap_indexed_node_index.call(null,this__284383.bitmap,bit__284385);
var key_or_nil__284387 = (this__284383.arr[(2 * idx__284386)]);
var val_or_node__284388 = (this__284383.arr[((2 * idx__284386) + 1)]);
if((null == key_or_nil__284387))
{var n__284389 = val_or_node__284388.inode_without((shift + 5),hash,key);
if((n__284389 === val_or_node__284388))
{return inode__284384;
} else
{if((null != n__284389))
{return (new cljs.core.BitmapIndexedNode(null,this__284383.bitmap,cljs.core.clone_and_set.call(null,this__284383.arr,((2 * idx__284386) + 1),n__284389)));
} else
{if((this__284383.bitmap === bit__284385))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__284383.bitmap ^ bit__284385),cljs.core.remove_pair.call(null,this__284383.arr,idx__284386)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284387))
{return (new cljs.core.BitmapIndexedNode(null,(this__284383.bitmap ^ bit__284385),cljs.core.remove_pair.call(null,this__284383.arr,idx__284386)));
} else
{if("\uFDD0'else")
{return inode__284384;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__284390 = this;
var inode__284391 = this;
var bit__284392 = (1 << ((hash >>> shift) & 0x01f));
var idx__284393 = cljs.core.bitmap_indexed_node_index.call(null,this__284390.bitmap,bit__284392);
if(((this__284390.bitmap & bit__284392) === 0))
{var n__284394 = cljs.core.bit_count.call(null,this__284390.bitmap);
if((n__284394 >= 16))
{var nodes__284395 = cljs.core.make_array.call(null,32);
var jdx__284396 = ((hash >>> shift) & 0x01f);
(nodes__284395[jdx__284396] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__284397 = 0;
var j__284398 = 0;
while(true){
if((i__284397 < 32))
{if((((this__284390.bitmap >>> i__284397) & 1) === 0))
{{
var G__284408 = (i__284397 + 1);
var G__284409 = j__284398;
i__284397 = G__284408;
j__284398 = G__284409;
continue;
}
} else
{(nodes__284395[i__284397] = (((null != (this__284390.arr[j__284398])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__284390.arr[j__284398])),(this__284390.arr[j__284398]),(this__284390.arr[(j__284398 + 1)]),added_leaf_QMARK_):(this__284390.arr[(j__284398 + 1)])));
{
var G__284410 = (i__284397 + 1);
var G__284411 = (j__284398 + 2);
i__284397 = G__284410;
j__284398 = G__284411;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__284394 + 1),nodes__284395));
} else
{var new_arr__284399 = cljs.core.make_array.call(null,(2 * (n__284394 + 1)));
cljs.core.array_copy.call(null,this__284390.arr,0,new_arr__284399,0,(2 * idx__284393));
(new_arr__284399[(2 * idx__284393)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__284399[((2 * idx__284393) + 1)] = val);
cljs.core.array_copy.call(null,this__284390.arr,(2 * idx__284393),new_arr__284399,(2 * (idx__284393 + 1)),(2 * (n__284394 - idx__284393)));
return (new cljs.core.BitmapIndexedNode(null,(this__284390.bitmap | bit__284392),new_arr__284399));
}
} else
{var key_or_nil__284400 = (this__284390.arr[(2 * idx__284393)]);
var val_or_node__284401 = (this__284390.arr[((2 * idx__284393) + 1)]);
if((null == key_or_nil__284400))
{var n__284402 = val_or_node__284401.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__284402 === val_or_node__284401))
{return inode__284391;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__284390.bitmap,cljs.core.clone_and_set.call(null,this__284390.arr,((2 * idx__284393) + 1),n__284402)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__284400))
{if((val === val_or_node__284401))
{return inode__284391;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__284390.bitmap,cljs.core.clone_and_set.call(null,this__284390.arr,((2 * idx__284393) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__284390.bitmap,cljs.core.clone_and_set.call(null,this__284390.arr,(2 * idx__284393),null,((2 * idx__284393) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__284400,val_or_node__284401,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__284412 = array_node.arr;
var len__284413 = (2 * (array_node.cnt - 1));
var new_arr__284414 = cljs.core.make_array.call(null,len__284413);
var i__284415 = 0;
var j__284416 = 1;
var bitmap__284417 = 0;
while(true){
if((i__284415 < len__284413))
{if((function (){var and__3546__auto____284418 = (i__284415 != idx);
if(and__3546__auto____284418)
{return (null != (arr__284412[i__284415]));
} else
{return and__3546__auto____284418;
}
})())
{(new_arr__284414[j__284416] = (arr__284412[i__284415]));
{
var G__284419 = (i__284415 + 1);
var G__284420 = (j__284416 + 2);
var G__284421 = (bitmap__284417 | (1 << i__284415));
i__284415 = G__284419;
j__284416 = G__284420;
bitmap__284417 = G__284421;
continue;
}
} else
{{
var G__284422 = (i__284415 + 1);
var G__284423 = j__284416;
var G__284424 = bitmap__284417;
i__284415 = G__284422;
j__284416 = G__284423;
bitmap__284417 = G__284424;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__284417,new_arr__284414));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__284425 = this;
var inode__284426 = this;
var idx__284427 = ((hash >>> shift) & 0x01f);
var node__284428 = (this__284425.arr[idx__284427]);
if((null == node__284428))
{return (new cljs.core.ArrayNode(null,(this__284425.cnt + 1),cljs.core.clone_and_set.call(null,this__284425.arr,idx__284427,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__284429 = node__284428.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__284429 === node__284428))
{return inode__284426;
} else
{return (new cljs.core.ArrayNode(null,this__284425.cnt,cljs.core.clone_and_set.call(null,this__284425.arr,idx__284427,n__284429)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__284430 = this;
var inode__284431 = this;
var idx__284432 = ((hash >>> shift) & 0x01f);
var node__284433 = (this__284430.arr[idx__284432]);
if((null != node__284433))
{var n__284434 = node__284433.inode_without((shift + 5),hash,key);
if((n__284434 === node__284433))
{return inode__284431;
} else
{if((n__284434 == null))
{if((this__284430.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__284431,null,idx__284432);
} else
{return (new cljs.core.ArrayNode(null,(this__284430.cnt - 1),cljs.core.clone_and_set.call(null,this__284430.arr,idx__284432,n__284434)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__284430.cnt,cljs.core.clone_and_set.call(null,this__284430.arr,idx__284432,n__284434)));
} else
{return null;
}
}
}
} else
{return inode__284431;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__284466 = null;
var G__284466__3 = (function (shift,hash,key){
var this__284435 = this;
var inode__284436 = this;
var idx__284437 = ((hash >>> shift) & 0x01f);
var node__284438 = (this__284435.arr[idx__284437]);
if((null != node__284438))
{return node__284438.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__284466__4 = (function (shift,hash,key,not_found){
var this__284439 = this;
var inode__284440 = this;
var idx__284441 = ((hash >>> shift) & 0x01f);
var node__284442 = (this__284439.arr[idx__284441]);
if((null != node__284442))
{return node__284442.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__284466 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__284466__3.call(this,shift,hash,key);
case 4:
return G__284466__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284466;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__284443 = this;
var inode__284444 = this;
return cljs.core.create_array_node_seq.call(null,this__284443.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__284445 = this;
var inode__284446 = this;
if((e === this__284445.edit))
{return inode__284446;
} else
{return (new cljs.core.ArrayNode(e,this__284445.cnt,cljs.core.aclone.call(null,this__284445.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__284447 = this;
var inode__284448 = this;
var idx__284449 = ((hash >>> shift) & 0x01f);
var node__284450 = (this__284447.arr[idx__284449]);
if((null == node__284450))
{var editable__284451 = cljs.core.edit_and_set.call(null,inode__284448,edit,idx__284449,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__284451.cnt = (editable__284451.cnt + 1);
return editable__284451;
} else
{var n__284452 = node__284450.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__284452 === node__284450))
{return inode__284448;
} else
{return cljs.core.edit_and_set.call(null,inode__284448,edit,idx__284449,n__284452);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__284453 = this;
var inode__284454 = this;
var idx__284455 = ((hash >>> shift) & 0x01f);
var node__284456 = (this__284453.arr[idx__284455]);
if((null == node__284456))
{return inode__284454;
} else
{var n__284457 = node__284456.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__284457 === node__284456))
{return inode__284454;
} else
{if((null == n__284457))
{if((this__284453.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__284454,edit,idx__284455);
} else
{var editable__284458 = cljs.core.edit_and_set.call(null,inode__284454,edit,idx__284455,n__284457);
editable__284458.cnt = (editable__284458.cnt - 1);
return editable__284458;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__284454,edit,idx__284455,n__284457);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__284459 = this;
var inode__284460 = this;
var len__284461 = this__284459.arr.length;
var i__284462 = 0;
var init__284463 = init;
while(true){
if((i__284462 < len__284461))
{var node__284464 = (this__284459.arr[i__284462]);
if((node__284464 != null))
{var init__284465 = node__284464.kv_reduce(f,init__284463);
if(cljs.core.reduced_QMARK_.call(null,init__284465))
{return cljs.core.deref.call(null,init__284465);
} else
{{
var G__284467 = (i__284462 + 1);
var G__284468 = init__284465;
i__284462 = G__284467;
init__284463 = G__284468;
continue;
}
}
} else
{return null;
}
} else
{return init__284463;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__284469 = (2 * cnt);
var i__284470 = 0;
while(true){
if((i__284470 < lim__284469))
{if(cljs.core._EQ_.call(null,key,(arr[i__284470])))
{return i__284470;
} else
{{
var G__284471 = (i__284470 + 2);
i__284470 = G__284471;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__284472 = this;
var inode__284473 = this;
if((hash === this__284472.collision_hash))
{var idx__284474 = cljs.core.hash_collision_node_find_index.call(null,this__284472.arr,this__284472.cnt,key);
if((idx__284474 === -1))
{var len__284475 = this__284472.arr.length;
var new_arr__284476 = cljs.core.make_array.call(null,(len__284475 + 2));
cljs.core.array_copy.call(null,this__284472.arr,0,new_arr__284476,0,len__284475);
(new_arr__284476[len__284475] = key);
(new_arr__284476[(len__284475 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__284472.collision_hash,(this__284472.cnt + 1),new_arr__284476));
} else
{if(cljs.core._EQ_.call(null,(this__284472.arr[idx__284474]),val))
{return inode__284473;
} else
{return (new cljs.core.HashCollisionNode(null,this__284472.collision_hash,this__284472.cnt,cljs.core.clone_and_set.call(null,this__284472.arr,(idx__284474 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__284472.collision_hash >>> shift) & 0x01f)),[null,inode__284473])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__284477 = this;
var inode__284478 = this;
var idx__284479 = cljs.core.hash_collision_node_find_index.call(null,this__284477.arr,this__284477.cnt,key);
if((idx__284479 === -1))
{return inode__284478;
} else
{if((this__284477.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__284477.collision_hash,(this__284477.cnt - 1),cljs.core.remove_pair.call(null,this__284477.arr,cljs.core.quot.call(null,idx__284479,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__284506 = null;
var G__284506__3 = (function (shift,hash,key){
var this__284480 = this;
var inode__284481 = this;
var idx__284482 = cljs.core.hash_collision_node_find_index.call(null,this__284480.arr,this__284480.cnt,key);
if((idx__284482 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__284480.arr[idx__284482])))
{return cljs.core.PersistentVector.fromArray([(this__284480.arr[idx__284482]),(this__284480.arr[(idx__284482 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__284506__4 = (function (shift,hash,key,not_found){
var this__284483 = this;
var inode__284484 = this;
var idx__284485 = cljs.core.hash_collision_node_find_index.call(null,this__284483.arr,this__284483.cnt,key);
if((idx__284485 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__284483.arr[idx__284485])))
{return cljs.core.PersistentVector.fromArray([(this__284483.arr[idx__284485]),(this__284483.arr[(idx__284485 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__284506 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__284506__3.call(this,shift,hash,key);
case 4:
return G__284506__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284506;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__284486 = this;
var inode__284487 = this;
return cljs.core.create_inode_seq.call(null,this__284486.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__284507 = null;
var G__284507__1 = (function (e){
var this__284488 = this;
var inode__284489 = this;
if((e === this__284488.edit))
{return inode__284489;
} else
{var new_arr__284490 = cljs.core.make_array.call(null,(2 * (this__284488.cnt + 1)));
cljs.core.array_copy.call(null,this__284488.arr,0,new_arr__284490,0,(2 * this__284488.cnt));
return (new cljs.core.HashCollisionNode(e,this__284488.collision_hash,this__284488.cnt,new_arr__284490));
}
});
var G__284507__3 = (function (e,count,array){
var this__284491 = this;
var inode__284492 = this;
if((e === this__284491.edit))
{this__284491.arr = array;
this__284491.cnt = count;
return inode__284492;
} else
{return (new cljs.core.HashCollisionNode(this__284491.edit,this__284491.collision_hash,count,array));
}
});
G__284507 = function(e,count,array){
switch(arguments.length){
case 1:
return G__284507__1.call(this,e);
case 3:
return G__284507__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284507;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__284493 = this;
var inode__284494 = this;
if((hash === this__284493.collision_hash))
{var idx__284495 = cljs.core.hash_collision_node_find_index.call(null,this__284493.arr,this__284493.cnt,key);
if((idx__284495 === -1))
{if((this__284493.arr.length > (2 * this__284493.cnt)))
{var editable__284496 = cljs.core.edit_and_set.call(null,inode__284494,edit,(2 * this__284493.cnt),key,((2 * this__284493.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__284496.cnt = (editable__284496.cnt + 1);
return editable__284496;
} else
{var len__284497 = this__284493.arr.length;
var new_arr__284498 = cljs.core.make_array.call(null,(len__284497 + 2));
cljs.core.array_copy.call(null,this__284493.arr,0,new_arr__284498,0,len__284497);
(new_arr__284498[len__284497] = key);
(new_arr__284498[(len__284497 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__284494.ensure_editable(edit,(this__284493.cnt + 1),new_arr__284498);
}
} else
{if(((this__284493.arr[(idx__284495 + 1)]) === val))
{return inode__284494;
} else
{return cljs.core.edit_and_set.call(null,inode__284494,edit,(idx__284495 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__284493.collision_hash >>> shift) & 0x01f)),[null,inode__284494,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__284499 = this;
var inode__284500 = this;
var idx__284501 = cljs.core.hash_collision_node_find_index.call(null,this__284499.arr,this__284499.cnt,key);
if((idx__284501 === -1))
{return inode__284500;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__284499.cnt === 1))
{return null;
} else
{var editable__284502 = inode__284500.ensure_editable(edit);
var earr__284503 = editable__284502.arr;
(earr__284503[idx__284501] = (earr__284503[((2 * this__284499.cnt) - 2)]));
(earr__284503[(idx__284501 + 1)] = (earr__284503[((2 * this__284499.cnt) - 1)]));
(earr__284503[((2 * this__284499.cnt) - 1)] = null);
(earr__284503[((2 * this__284499.cnt) - 2)] = null);
editable__284502.cnt = (editable__284502.cnt - 1);
return editable__284502;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__284504 = this;
var inode__284505 = this;
return cljs.core.inode_kv_reduce.call(null,this__284504.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__284508 = cljs.core.hash.call(null,key1);
if((key1hash__284508 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__284508,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___284509 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__284508,key1,val1,added_leaf_QMARK___284509).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___284509);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__284510 = cljs.core.hash.call(null,key1);
if((key1hash__284510 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__284510,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___284511 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__284510,key1,val1,added_leaf_QMARK___284511).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___284511);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284512 = this;
var h__368__auto____284513 = this__284512.__hash;
if((h__368__auto____284513 != null))
{return h__368__auto____284513;
} else
{var h__368__auto____284514 = cljs.core.hash_coll.call(null,coll);
this__284512.__hash = h__368__auto____284514;
return h__368__auto____284514;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284515 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__284516 = this;
var this$__284517 = this;
return cljs.core.pr_str.call(null,this$__284517);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__284518 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__284519 = this;
if((this__284519.s == null))
{return cljs.core.PersistentVector.fromArray([(this__284519.nodes[this__284519.i]),(this__284519.nodes[(this__284519.i + 1)])]);
} else
{return cljs.core.first.call(null,this__284519.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__284520 = this;
if((this__284520.s == null))
{return cljs.core.create_inode_seq.call(null,this__284520.nodes,(this__284520.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__284520.nodes,this__284520.i,cljs.core.next.call(null,this__284520.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284522 = this;
return (new cljs.core.NodeSeq(meta,this__284522.nodes,this__284522.i,this__284522.s,this__284522.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284523 = this;
return this__284523.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284524 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__284524.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__284525 = nodes.length;
var j__284526 = i;
while(true){
if((j__284526 < len__284525))
{if((null != (nodes[j__284526])))
{return (new cljs.core.NodeSeq(null,nodes,j__284526,null,null));
} else
{var temp__3695__auto____284527 = (nodes[(j__284526 + 1)]);
if(cljs.core.truth_(temp__3695__auto____284527))
{var node__284528 = temp__3695__auto____284527;
var temp__3695__auto____284529 = node__284528.inode_seq();
if(cljs.core.truth_(temp__3695__auto____284529))
{var node_seq__284530 = temp__3695__auto____284529;
return (new cljs.core.NodeSeq(null,nodes,(j__284526 + 2),node_seq__284530,null));
} else
{{
var G__284531 = (j__284526 + 2);
j__284526 = G__284531;
continue;
}
}
} else
{{
var G__284532 = (j__284526 + 2);
j__284526 = G__284532;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284533 = this;
var h__368__auto____284534 = this__284533.__hash;
if((h__368__auto____284534 != null))
{return h__368__auto____284534;
} else
{var h__368__auto____284535 = cljs.core.hash_coll.call(null,coll);
this__284533.__hash = h__368__auto____284535;
return h__368__auto____284535;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284536 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__284537 = this;
var this$__284538 = this;
return cljs.core.pr_str.call(null,this$__284538);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__284539 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__284540 = this;
return cljs.core.first.call(null,this__284540.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__284541 = this;
return cljs.core.create_array_node_seq.call(null,null,this__284541.nodes,this__284541.i,cljs.core.next.call(null,this__284541.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284542 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284543 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__284543.nodes,this__284543.i,this__284543.s,this__284543.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284544 = this;
return this__284544.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284545 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__284545.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__284546 = nodes.length;
var j__284547 = i;
while(true){
if((j__284547 < len__284546))
{var temp__3695__auto____284548 = (nodes[j__284547]);
if(cljs.core.truth_(temp__3695__auto____284548))
{var nj__284549 = temp__3695__auto____284548;
var temp__3695__auto____284550 = nj__284549.inode_seq();
if(cljs.core.truth_(temp__3695__auto____284550))
{var ns__284551 = temp__3695__auto____284550;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__284547 + 1),ns__284551,null));
} else
{{
var G__284552 = (j__284547 + 1);
j__284547 = G__284552;
continue;
}
}
} else
{{
var G__284553 = (j__284547 + 1);
j__284547 = G__284553;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__284558 = this;
return (new cljs.core.TransientHashMap({},this__284558.root,this__284558.cnt,this__284558.has_nil_QMARK_,this__284558.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284559 = this;
var h__368__auto____284560 = this__284559.__hash;
if((h__368__auto____284560 != null))
{return h__368__auto____284560;
} else
{var h__368__auto____284561 = cljs.core.hash_imap.call(null,coll);
this__284559.__hash = h__368__auto____284561;
return h__368__auto____284561;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284562 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284563 = this;
if((k == null))
{if(cljs.core.truth_(this__284563.has_nil_QMARK_))
{return this__284563.nil_val;
} else
{return not_found;
}
} else
{if((this__284563.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__284563.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__284564 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3546__auto____284565 = this__284564.has_nil_QMARK_;
if(cljs.core.truth_(and__3546__auto____284565))
{return (v === this__284564.nil_val);
} else
{return and__3546__auto____284565;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__284564.meta,(cljs.core.truth_(this__284564.has_nil_QMARK_)?this__284564.cnt:(this__284564.cnt + 1)),this__284564.root,true,v,null));
}
} else
{var added_leaf_QMARK___284566 = [false];
var new_root__284567 = (((this__284564.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__284564.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___284566);
if((new_root__284567 === this__284564.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__284564.meta,(cljs.core.truth_((added_leaf_QMARK___284566[0]))?(this__284564.cnt + 1):this__284564.cnt),new_root__284567,this__284564.has_nil_QMARK_,this__284564.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__284568 = this;
if((k == null))
{return this__284568.has_nil_QMARK_;
} else
{if((this__284568.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__284568.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__284589 = null;
var G__284589__2 = (function (tsym284556,k){
var this__284569 = this;
var tsym284556__284570 = this;
var coll__284571 = tsym284556__284570;
return cljs.core._lookup.call(null,coll__284571,k);
});
var G__284589__3 = (function (tsym284557,k,not_found){
var this__284572 = this;
var tsym284557__284573 = this;
var coll__284574 = tsym284557__284573;
return cljs.core._lookup.call(null,coll__284574,k,not_found);
});
G__284589 = function(tsym284557,k,not_found){
switch(arguments.length){
case 2:
return G__284589__2.call(this,tsym284557,k);
case 3:
return G__284589__3.call(this,tsym284557,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284589;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym284554,args284555){
return tsym284554.call.apply(tsym284554,[tsym284554].concat(cljs.core.aclone.call(null,args284555)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__284575 = this;
var init__284576 = (cljs.core.truth_(this__284575.has_nil_QMARK_)?f.call(null,init,null,this__284575.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__284576))
{return cljs.core.deref.call(null,init__284576);
} else
{if((null != this__284575.root))
{return this__284575.root.kv_reduce(f,init__284576);
} else
{if("\uFDD0'else")
{return init__284576;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__284577 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__284578 = this;
var this$__284579 = this;
return cljs.core.pr_str.call(null,this$__284579);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284580 = this;
if((this__284580.cnt > 0))
{var s__284581 = (((null != this__284580.root))?this__284580.root.inode_seq():null);
if(cljs.core.truth_(this__284580.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__284580.nil_val]),s__284581);
} else
{return s__284581;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284582 = this;
return this__284582.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284583 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284584 = this;
return (new cljs.core.PersistentHashMap(meta,this__284584.cnt,this__284584.root,this__284584.has_nil_QMARK_,this__284584.nil_val,this__284584.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284585 = this;
return this__284585.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284586 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__284586.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__284587 = this;
if((k == null))
{if(cljs.core.truth_(this__284587.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__284587.meta,(this__284587.cnt - 1),this__284587.root,false,null,null));
} else
{return coll;
}
} else
{if((this__284587.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__284588 = this__284587.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__284588 === this__284587.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__284587.meta,(this__284587.cnt - 1),new_root__284588,this__284587.has_nil_QMARK_,this__284587.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__284590 = ks.length;
var i__284591 = 0;
var out__284592 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__284591 < len__284590))
{{
var G__284593 = (i__284591 + 1);
var G__284594 = cljs.core.assoc_BANG_.call(null,out__284592,(ks[i__284591]),(vs[i__284591]));
i__284591 = G__284593;
out__284592 = G__284594;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__284592);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__284595 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__284596 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__284597 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__284598 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__284599 = this;
if((k == null))
{if(cljs.core.truth_(this__284599.has_nil_QMARK_))
{return this__284599.nil_val;
} else
{return null;
}
} else
{if((this__284599.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__284599.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__284600 = this;
if((k == null))
{if(cljs.core.truth_(this__284600.has_nil_QMARK_))
{return this__284600.nil_val;
} else
{return not_found;
}
} else
{if((this__284600.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__284600.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284601 = this;
if(cljs.core.truth_(this__284601.edit))
{return this__284601.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__284602 = this;
var tcoll__284603 = this;
if(cljs.core.truth_(this__284602.edit))
{if((function (){var G__284604__284605 = o;
if((G__284604__284605 != null))
{if((function (){var or__3548__auto____284606 = (G__284604__284605.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____284606)
{return or__3548__auto____284606;
} else
{return G__284604__284605.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__284604__284605.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__284604__284605);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__284604__284605);
}
})())
{return tcoll__284603.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__284607 = cljs.core.seq.call(null,o);
var tcoll__284608 = tcoll__284603;
while(true){
var temp__3695__auto____284609 = cljs.core.first.call(null,es__284607);
if(cljs.core.truth_(temp__3695__auto____284609))
{var e__284610 = temp__3695__auto____284609;
{
var G__284621 = cljs.core.next.call(null,es__284607);
var G__284622 = tcoll__284608.assoc_BANG_(cljs.core.key.call(null,e__284610),cljs.core.val.call(null,e__284610));
es__284607 = G__284621;
tcoll__284608 = G__284622;
continue;
}
} else
{return tcoll__284608;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__284611 = this;
var tcoll__284612 = this;
if(cljs.core.truth_(this__284611.edit))
{if((k == null))
{if((this__284611.nil_val === v))
{} else
{this__284611.nil_val = v;
}
if(cljs.core.truth_(this__284611.has_nil_QMARK_))
{} else
{this__284611.count = (this__284611.count + 1);
this__284611.has_nil_QMARK_ = true;
}
return tcoll__284612;
} else
{var added_leaf_QMARK___284613 = [false];
var node__284614 = (((this__284611.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__284611.root).inode_assoc_BANG_(this__284611.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___284613);
if((node__284614 === this__284611.root))
{} else
{this__284611.root = node__284614;
}
if(cljs.core.truth_((added_leaf_QMARK___284613[0])))
{this__284611.count = (this__284611.count + 1);
} else
{}
return tcoll__284612;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__284615 = this;
var tcoll__284616 = this;
if(cljs.core.truth_(this__284615.edit))
{if((k == null))
{if(cljs.core.truth_(this__284615.has_nil_QMARK_))
{this__284615.has_nil_QMARK_ = false;
this__284615.nil_val = null;
this__284615.count = (this__284615.count - 1);
return tcoll__284616;
} else
{return tcoll__284616;
}
} else
{if((this__284615.root == null))
{return tcoll__284616;
} else
{var removed_leaf_QMARK___284617 = [false];
var node__284618 = this__284615.root.inode_without_BANG_(this__284615.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___284617);
if((node__284618 === this__284615.root))
{} else
{this__284615.root = node__284618;
}
if(cljs.core.truth_((removed_leaf_QMARK___284617[0])))
{this__284615.count = (this__284615.count - 1);
} else
{}
return tcoll__284616;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__284619 = this;
var tcoll__284620 = this;
if(cljs.core.truth_(this__284619.edit))
{this__284619.edit = null;
return (new cljs.core.PersistentHashMap(null,this__284619.count,this__284619.root,this__284619.has_nil_QMARK_,this__284619.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__284623 = node;
var stack__284624 = stack;
while(true){
if((t__284623 != null))
{{
var G__284625 = (cljs.core.truth_(ascending_QMARK_)?t__284623.left:t__284623.right);
var G__284626 = cljs.core.conj.call(null,stack__284624,t__284623);
t__284623 = G__284625;
stack__284624 = G__284626;
continue;
}
} else
{return stack__284624;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284627 = this;
var h__368__auto____284628 = this__284627.__hash;
if((h__368__auto____284628 != null))
{return h__368__auto____284628;
} else
{var h__368__auto____284629 = cljs.core.hash_coll.call(null,coll);
this__284627.__hash = h__368__auto____284629;
return h__368__auto____284629;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284630 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__284631 = this;
var this$__284632 = this;
return cljs.core.pr_str.call(null,this$__284632);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__284633 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284634 = this;
if((this__284634.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__284634.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__284635 = this;
return cljs.core.peek.call(null,this__284635.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__284636 = this;
var t__284637 = cljs.core.peek.call(null,this__284636.stack);
var next_stack__284638 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__284636.ascending_QMARK_)?t__284637.right:t__284637.left),cljs.core.pop.call(null,this__284636.stack),this__284636.ascending_QMARK_);
if((next_stack__284638 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__284638,this__284636.ascending_QMARK_,(this__284636.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284639 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284640 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__284640.stack,this__284640.ascending_QMARK_,this__284640.cnt,this__284640.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284641 = this;
return this__284641.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3546__auto____284642 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3546__auto____284642)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3546__auto____284642;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3546__auto____284643 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3546__auto____284643)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3546__auto____284643;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__284644 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__284644))
{return cljs.core.deref.call(null,init__284644);
} else
{var init__284645 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__284644):init__284644);
if(cljs.core.reduced_QMARK_.call(null,init__284645))
{return cljs.core.deref.call(null,init__284645);
} else
{var init__284646 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__284645):init__284645);
if(cljs.core.reduced_QMARK_.call(null,init__284646))
{return cljs.core.deref.call(null,init__284646);
} else
{return init__284646;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284651 = this;
var h__368__auto____284652 = this__284651.__hash;
if((h__368__auto____284652 != null))
{return h__368__auto____284652;
} else
{var h__368__auto____284653 = cljs.core.hash_coll.call(null,coll);
this__284651.__hash = h__368__auto____284653;
return h__368__auto____284653;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__284654 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__284655 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__284656 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__284656.key,this__284656.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__284703 = null;
var G__284703__2 = (function (tsym284649,k){
var this__284657 = this;
var tsym284649__284658 = this;
var node__284659 = tsym284649__284658;
return cljs.core._lookup.call(null,node__284659,k);
});
var G__284703__3 = (function (tsym284650,k,not_found){
var this__284660 = this;
var tsym284650__284661 = this;
var node__284662 = tsym284650__284661;
return cljs.core._lookup.call(null,node__284662,k,not_found);
});
G__284703 = function(tsym284650,k,not_found){
switch(arguments.length){
case 2:
return G__284703__2.call(this,tsym284650,k);
case 3:
return G__284703__3.call(this,tsym284650,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284703;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym284647,args284648){
return tsym284647.call.apply(tsym284647,[tsym284647].concat(cljs.core.aclone.call(null,args284648)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__284663 = this;
return cljs.core.PersistentVector.fromArray([this__284663.key,this__284663.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__284664 = this;
return this__284664.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__284665 = this;
return this__284665.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__284666 = this;
var node__284667 = this;
return ins.balance_right(node__284667);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__284668 = this;
var node__284669 = this;
return (new cljs.core.RedNode(this__284668.key,this__284668.val,this__284668.left,this__284668.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__284670 = this;
var node__284671 = this;
return cljs.core.balance_right_del.call(null,this__284670.key,this__284670.val,this__284670.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__284672 = this;
var node__284673 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__284674 = this;
var node__284675 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__284675,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__284676 = this;
var node__284677 = this;
return cljs.core.balance_left_del.call(null,this__284676.key,this__284676.val,del,this__284676.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__284678 = this;
var node__284679 = this;
return ins.balance_left(node__284679);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__284680 = this;
var node__284681 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__284681,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__284704 = null;
var G__284704__0 = (function (){
var this__284684 = this;
var this$__284685 = this;
return cljs.core.pr_str.call(null,this$__284685);
});
G__284704 = function(){
switch(arguments.length){
case 0:
return G__284704__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284704;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__284686 = this;
var node__284687 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__284687,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__284688 = this;
var node__284689 = this;
return node__284689;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__284690 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__284691 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__284692 = this;
return cljs.core.list.call(null,this__284692.key,this__284692.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__284694 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__284695 = this;
return this__284695.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__284696 = this;
return cljs.core.PersistentVector.fromArray([this__284696.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__284697 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__284697.key,this__284697.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284698 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__284699 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__284699.key,this__284699.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__284700 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__284701 = this;
if((n === 0))
{return this__284701.key;
} else
{if((n === 1))
{return this__284701.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__284702 = this;
if((n === 0))
{return this__284702.key;
} else
{if((n === 1))
{return this__284702.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__284693 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284709 = this;
var h__368__auto____284710 = this__284709.__hash;
if((h__368__auto____284710 != null))
{return h__368__auto____284710;
} else
{var h__368__auto____284711 = cljs.core.hash_coll.call(null,coll);
this__284709.__hash = h__368__auto____284711;
return h__368__auto____284711;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__284712 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__284713 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__284714 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__284714.key,this__284714.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__284761 = null;
var G__284761__2 = (function (tsym284707,k){
var this__284715 = this;
var tsym284707__284716 = this;
var node__284717 = tsym284707__284716;
return cljs.core._lookup.call(null,node__284717,k);
});
var G__284761__3 = (function (tsym284708,k,not_found){
var this__284718 = this;
var tsym284708__284719 = this;
var node__284720 = tsym284708__284719;
return cljs.core._lookup.call(null,node__284720,k,not_found);
});
G__284761 = function(tsym284708,k,not_found){
switch(arguments.length){
case 2:
return G__284761__2.call(this,tsym284708,k);
case 3:
return G__284761__3.call(this,tsym284708,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284761;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym284705,args284706){
return tsym284705.call.apply(tsym284705,[tsym284705].concat(cljs.core.aclone.call(null,args284706)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__284721 = this;
return cljs.core.PersistentVector.fromArray([this__284721.key,this__284721.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__284722 = this;
return this__284722.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__284723 = this;
return this__284723.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__284724 = this;
var node__284725 = this;
return (new cljs.core.RedNode(this__284724.key,this__284724.val,this__284724.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__284726 = this;
var node__284727 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__284728 = this;
var node__284729 = this;
return (new cljs.core.RedNode(this__284728.key,this__284728.val,this__284728.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__284730 = this;
var node__284731 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__284732 = this;
var node__284733 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__284733,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__284734 = this;
var node__284735 = this;
return (new cljs.core.RedNode(this__284734.key,this__284734.val,del,this__284734.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__284736 = this;
var node__284737 = this;
return (new cljs.core.RedNode(this__284736.key,this__284736.val,ins,this__284736.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__284738 = this;
var node__284739 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__284738.left))
{return (new cljs.core.RedNode(this__284738.key,this__284738.val,this__284738.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__284738.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__284738.right))
{return (new cljs.core.RedNode(this__284738.right.key,this__284738.right.val,(new cljs.core.BlackNode(this__284738.key,this__284738.val,this__284738.left,this__284738.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__284738.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__284739,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__284762 = null;
var G__284762__0 = (function (){
var this__284742 = this;
var this$__284743 = this;
return cljs.core.pr_str.call(null,this$__284743);
});
G__284762 = function(){
switch(arguments.length){
case 0:
return G__284762__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284762;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__284744 = this;
var node__284745 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__284744.right))
{return (new cljs.core.RedNode(this__284744.key,this__284744.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__284744.left,null)),this__284744.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__284744.left))
{return (new cljs.core.RedNode(this__284744.left.key,this__284744.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__284744.left.left,null)),(new cljs.core.BlackNode(this__284744.key,this__284744.val,this__284744.left.right,this__284744.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__284745,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__284746 = this;
var node__284747 = this;
return (new cljs.core.BlackNode(this__284746.key,this__284746.val,this__284746.left,this__284746.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__284748 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__284749 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__284750 = this;
return cljs.core.list.call(null,this__284750.key,this__284750.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__284752 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__284753 = this;
return this__284753.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__284754 = this;
return cljs.core.PersistentVector.fromArray([this__284754.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__284755 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__284755.key,this__284755.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284756 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__284757 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__284757.key,this__284757.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__284758 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__284759 = this;
if((n === 0))
{return this__284759.key;
} else
{if((n === 1))
{return this__284759.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__284760 = this;
if((n === 0))
{return this__284760.key;
} else
{if((n === 1))
{return this__284760.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__284751 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__284763 = comp.call(null,k,tree.key);
if((c__284763 === 0))
{(found[0] = tree);
return null;
} else
{if((c__284763 < 0))
{var ins__284764 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__284764 != null))
{return tree.add_left(ins__284764);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__284765 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__284765 != null))
{return tree.add_right(ins__284765);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__284766 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__284766))
{return (new cljs.core.RedNode(app__284766.key,app__284766.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__284766.left)),(new cljs.core.RedNode(right.key,right.val,app__284766.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__284766,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__284767 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__284767))
{return (new cljs.core.RedNode(app__284767.key,app__284767.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__284767.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__284767.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__284767,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__284768 = comp.call(null,k,tree.key);
if((c__284768 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__284768 < 0))
{var del__284769 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3548__auto____284770 = (del__284769 != null);
if(or__3548__auto____284770)
{return or__3548__auto____284770;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__284769,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__284769,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__284771 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3548__auto____284772 = (del__284771 != null);
if(or__3548__auto____284772)
{return or__3548__auto____284772;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__284771);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__284771,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__284773 = tree.key;
var c__284774 = comp.call(null,k,tk__284773);
if((c__284774 === 0))
{return tree.replace(tk__284773,v,tree.left,tree.right);
} else
{if((c__284774 < 0))
{return tree.replace(tk__284773,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__284773,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284779 = this;
var h__368__auto____284780 = this__284779.__hash;
if((h__368__auto____284780 != null))
{return h__368__auto____284780;
} else
{var h__368__auto____284781 = cljs.core.hash_imap.call(null,coll);
this__284779.__hash = h__368__auto____284781;
return h__368__auto____284781;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__284782 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__284783 = this;
var n__284784 = coll.entry_at(k);
if((n__284784 != null))
{return n__284784.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__284785 = this;
var found__284786 = [null];
var t__284787 = cljs.core.tree_map_add.call(null,this__284785.comp,this__284785.tree,k,v,found__284786);
if((t__284787 == null))
{var found_node__284788 = cljs.core.nth.call(null,found__284786,0);
if(cljs.core._EQ_.call(null,v,found_node__284788.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__284785.comp,cljs.core.tree_map_replace.call(null,this__284785.comp,this__284785.tree,k,v),this__284785.cnt,this__284785.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__284785.comp,t__284787.blacken(),(this__284785.cnt + 1),this__284785.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__284789 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__284821 = null;
var G__284821__2 = (function (tsym284777,k){
var this__284790 = this;
var tsym284777__284791 = this;
var coll__284792 = tsym284777__284791;
return cljs.core._lookup.call(null,coll__284792,k);
});
var G__284821__3 = (function (tsym284778,k,not_found){
var this__284793 = this;
var tsym284778__284794 = this;
var coll__284795 = tsym284778__284794;
return cljs.core._lookup.call(null,coll__284795,k,not_found);
});
G__284821 = function(tsym284778,k,not_found){
switch(arguments.length){
case 2:
return G__284821__2.call(this,tsym284778,k);
case 3:
return G__284821__3.call(this,tsym284778,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284821;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym284775,args284776){
return tsym284775.call.apply(tsym284775,[tsym284775].concat(cljs.core.aclone.call(null,args284776)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__284796 = this;
if((this__284796.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__284796.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__284797 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__284798 = this;
if((this__284798.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__284798.tree,false,this__284798.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__284799 = this;
var this$__284800 = this;
return cljs.core.pr_str.call(null,this$__284800);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__284801 = this;
var coll__284802 = this;
var t__284803 = this__284801.tree;
while(true){
if((t__284803 != null))
{var c__284804 = this__284801.comp.call(null,k,t__284803.key);
if((c__284804 === 0))
{return t__284803;
} else
{if((c__284804 < 0))
{{
var G__284822 = t__284803.left;
t__284803 = G__284822;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__284823 = t__284803.right;
t__284803 = G__284823;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__284805 = this;
if((this__284805.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__284805.tree,ascending_QMARK_,this__284805.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__284806 = this;
if((this__284806.cnt > 0))
{var stack__284807 = null;
var t__284808 = this__284806.tree;
while(true){
if((t__284808 != null))
{var c__284809 = this__284806.comp.call(null,k,t__284808.key);
if((c__284809 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__284807,t__284808),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__284809 < 0))
{{
var G__284824 = cljs.core.conj.call(null,stack__284807,t__284808);
var G__284825 = t__284808.left;
stack__284807 = G__284824;
t__284808 = G__284825;
continue;
}
} else
{{
var G__284826 = stack__284807;
var G__284827 = t__284808.right;
stack__284807 = G__284826;
t__284808 = G__284827;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__284809 > 0))
{{
var G__284828 = cljs.core.conj.call(null,stack__284807,t__284808);
var G__284829 = t__284808.right;
stack__284807 = G__284828;
t__284808 = G__284829;
continue;
}
} else
{{
var G__284830 = stack__284807;
var G__284831 = t__284808.left;
stack__284807 = G__284830;
t__284808 = G__284831;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__284807 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__284807,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__284810 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__284811 = this;
return this__284811.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284812 = this;
if((this__284812.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__284812.tree,true,this__284812.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284813 = this;
return this__284813.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284814 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284815 = this;
return (new cljs.core.PersistentTreeMap(this__284815.comp,this__284815.tree,this__284815.cnt,meta,this__284815.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284819 = this;
return this__284819.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284820 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__284820.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__284816 = this;
var found__284817 = [null];
var t__284818 = cljs.core.tree_map_remove.call(null,this__284816.comp,this__284816.tree,k,found__284817);
if((t__284818 == null))
{if((cljs.core.nth.call(null,found__284817,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__284816.comp,null,0,this__284816.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__284816.comp,t__284818.blacken(),(this__284816.cnt - 1),this__284816.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__284832 = cljs.core.seq.call(null,keyvals);
var out__284833 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__284832))
{{
var G__284834 = cljs.core.nnext.call(null,in$__284832);
var G__284835 = cljs.core.assoc_BANG_.call(null,out__284833,cljs.core.first.call(null,in$__284832),cljs.core.second.call(null,in$__284832));
in$__284832 = G__284834;
out__284833 = G__284835;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__284833);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__284836){
var keyvals = cljs.core.seq(arglist__284836);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__284837){
var keyvals = cljs.core.seq(arglist__284837);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__284838 = cljs.core.seq.call(null,keyvals);
var out__284839 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__284838))
{{
var G__284840 = cljs.core.nnext.call(null,in$__284838);
var G__284841 = cljs.core.assoc.call(null,out__284839,cljs.core.first.call(null,in$__284838),cljs.core.second.call(null,in$__284838));
in$__284838 = G__284840;
out__284839 = G__284841;
continue;
}
} else
{return out__284839;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__284842){
var keyvals = cljs.core.seq(arglist__284842);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__284843 = cljs.core.seq.call(null,keyvals);
var out__284844 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__284843))
{{
var G__284845 = cljs.core.nnext.call(null,in$__284843);
var G__284846 = cljs.core.assoc.call(null,out__284844,cljs.core.first.call(null,in$__284843),cljs.core.second.call(null,in$__284843));
in$__284843 = G__284845;
out__284844 = G__284846;
continue;
}
} else
{return out__284844;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__284847){
var comparator = cljs.core.first(arglist__284847);
var keyvals = cljs.core.rest(arglist__284847);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__284848_SHARP_,p2__284849_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____284850 = p1__284848_SHARP_;
if(cljs.core.truth_(or__3548__auto____284850))
{return or__3548__auto____284850;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__284849_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__284851){
var maps = cljs.core.seq(arglist__284851);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__284854 = (function (m,e){
var k__284852 = cljs.core.first.call(null,e);
var v__284853 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__284852))
{return cljs.core.assoc.call(null,m,k__284852,f.call(null,cljs.core.get.call(null,m,k__284852),v__284853));
} else
{return cljs.core.assoc.call(null,m,k__284852,v__284853);
}
});
var merge2__284856 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__284854,(function (){var or__3548__auto____284855 = m1;
if(cljs.core.truth_(or__3548__auto____284855))
{return or__3548__auto____284855;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__284856,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__284857){
var f = cljs.core.first(arglist__284857);
var maps = cljs.core.rest(arglist__284857);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__284858 = cljs.core.ObjMap.fromObject([],{});
var keys__284859 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__284859))
{var key__284860 = cljs.core.first.call(null,keys__284859);
var entry__284861 = cljs.core.get.call(null,map,key__284860,"\uFDD0'user/not-found");
{
var G__284862 = ((cljs.core.not_EQ_.call(null,entry__284861,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__284858,key__284860,entry__284861):ret__284858);
var G__284863 = cljs.core.next.call(null,keys__284859);
ret__284858 = G__284862;
keys__284859 = G__284863;
continue;
}
} else
{return ret__284858;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__284869 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__284869.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284870 = this;
var h__368__auto____284871 = this__284870.__hash;
if((h__368__auto____284871 != null))
{return h__368__auto____284871;
} else
{var h__368__auto____284872 = cljs.core.hash_iset.call(null,coll);
this__284870.__hash = h__368__auto____284872;
return h__368__auto____284872;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__284873 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__284874 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__284874.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__284893 = null;
var G__284893__2 = (function (tsym284867,k){
var this__284875 = this;
var tsym284867__284876 = this;
var coll__284877 = tsym284867__284876;
return cljs.core._lookup.call(null,coll__284877,k);
});
var G__284893__3 = (function (tsym284868,k,not_found){
var this__284878 = this;
var tsym284868__284879 = this;
var coll__284880 = tsym284868__284879;
return cljs.core._lookup.call(null,coll__284880,k,not_found);
});
G__284893 = function(tsym284868,k,not_found){
switch(arguments.length){
case 2:
return G__284893__2.call(this,tsym284868,k);
case 3:
return G__284893__3.call(this,tsym284868,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284893;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym284865,args284866){
return tsym284865.call.apply(tsym284865,[tsym284865].concat(cljs.core.aclone.call(null,args284866)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284881 = this;
return (new cljs.core.PersistentHashSet(this__284881.meta,cljs.core.assoc.call(null,this__284881.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__284882 = this;
var this$__284883 = this;
return cljs.core.pr_str.call(null,this$__284883);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284884 = this;
return cljs.core.keys.call(null,this__284884.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__284885 = this;
return (new cljs.core.PersistentHashSet(this__284885.meta,cljs.core.dissoc.call(null,this__284885.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284886 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284887 = this;
var and__3546__auto____284888 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____284888)
{var and__3546__auto____284889 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____284889)
{return cljs.core.every_QMARK_.call(null,(function (p1__284864_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__284864_SHARP_);
}),other);
} else
{return and__3546__auto____284889;
}
} else
{return and__3546__auto____284888;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284890 = this;
return (new cljs.core.PersistentHashSet(meta,this__284890.hash_map,this__284890.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284891 = this;
return this__284891.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284892 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__284892.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__284911 = null;
var G__284911__2 = (function (tsym284897,k){
var this__284899 = this;
var tsym284897__284900 = this;
var tcoll__284901 = tsym284897__284900;
if((cljs.core._lookup.call(null,this__284899.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__284911__3 = (function (tsym284898,k,not_found){
var this__284902 = this;
var tsym284898__284903 = this;
var tcoll__284904 = tsym284898__284903;
if((cljs.core._lookup.call(null,this__284902.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__284911 = function(tsym284898,k,not_found){
switch(arguments.length){
case 2:
return G__284911__2.call(this,tsym284898,k);
case 3:
return G__284911__3.call(this,tsym284898,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284911;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym284895,args284896){
return tsym284895.call.apply(tsym284895,[tsym284895].concat(cljs.core.aclone.call(null,args284896)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__284905 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__284906 = this;
if((cljs.core._lookup.call(null,this__284906.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__284907 = this;
return cljs.core.count.call(null,this__284907.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__284908 = this;
this__284908.transient_map = cljs.core.dissoc_BANG_.call(null,this__284908.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__284909 = this;
this__284909.transient_map = cljs.core.assoc_BANG_.call(null,this__284909.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__284910 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__284910.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__284916 = this;
var h__368__auto____284917 = this__284916.__hash;
if((h__368__auto____284917 != null))
{return h__368__auto____284917;
} else
{var h__368__auto____284918 = cljs.core.hash_iset.call(null,coll);
this__284916.__hash = h__368__auto____284918;
return h__368__auto____284918;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__284919 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__284920 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__284920.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__284944 = null;
var G__284944__2 = (function (tsym284914,k){
var this__284921 = this;
var tsym284914__284922 = this;
var coll__284923 = tsym284914__284922;
return cljs.core._lookup.call(null,coll__284923,k);
});
var G__284944__3 = (function (tsym284915,k,not_found){
var this__284924 = this;
var tsym284915__284925 = this;
var coll__284926 = tsym284915__284925;
return cljs.core._lookup.call(null,coll__284926,k,not_found);
});
G__284944 = function(tsym284915,k,not_found){
switch(arguments.length){
case 2:
return G__284944__2.call(this,tsym284915,k);
case 3:
return G__284944__3.call(this,tsym284915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__284944;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym284912,args284913){
return tsym284912.call.apply(tsym284912,[tsym284912].concat(cljs.core.aclone.call(null,args284913)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__284927 = this;
return (new cljs.core.PersistentTreeSet(this__284927.meta,cljs.core.assoc.call(null,this__284927.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__284928 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__284928.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__284929 = this;
var this$__284930 = this;
return cljs.core.pr_str.call(null,this$__284930);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__284931 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__284931.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__284932 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__284932.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__284933 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__284934 = this;
return cljs.core._comparator.call(null,this__284934.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__284935 = this;
return cljs.core.keys.call(null,this__284935.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__284936 = this;
return (new cljs.core.PersistentTreeSet(this__284936.meta,cljs.core.dissoc.call(null,this__284936.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__284937 = this;
return cljs.core.count.call(null,this__284937.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__284938 = this;
var and__3546__auto____284939 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____284939)
{var and__3546__auto____284940 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____284940)
{return cljs.core.every_QMARK_.call(null,(function (p1__284894_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__284894_SHARP_);
}),other);
} else
{return and__3546__auto____284940;
}
} else
{return and__3546__auto____284939;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__284941 = this;
return (new cljs.core.PersistentTreeSet(meta,this__284941.tree_map,this__284941.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__284942 = this;
return this__284942.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__284943 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__284943.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__284945 = cljs.core.seq.call(null,coll);
var out__284946 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__284945)))
{{
var G__284947 = cljs.core.next.call(null,in$__284945);
var G__284948 = cljs.core.conj_BANG_.call(null,out__284946,cljs.core.first.call(null,in$__284945));
in$__284945 = G__284947;
out__284946 = G__284948;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__284946);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__284949){
var keys = cljs.core.seq(arglist__284949);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__284951){
var comparator = cljs.core.first(arglist__284951);
var keys = cljs.core.rest(arglist__284951);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__284952 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____284953 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3695__auto____284953))
{var e__284954 = temp__3695__auto____284953;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__284954));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__284952,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__284950_SHARP_){
var temp__3695__auto____284955 = cljs.core.find.call(null,smap,p1__284950_SHARP_);
if(cljs.core.truth_(temp__3695__auto____284955))
{var e__284956 = temp__3695__auto____284955;
return cljs.core.second.call(null,e__284956);
} else
{return p1__284950_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__284964 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__284957,seen){
while(true){
var vec__284958__284959 = p__284957;
var f__284960 = cljs.core.nth.call(null,vec__284958__284959,0,null);
var xs__284961 = vec__284958__284959;
var temp__3698__auto____284962 = cljs.core.seq.call(null,xs__284961);
if(cljs.core.truth_(temp__3698__auto____284962))
{var s__284963 = temp__3698__auto____284962;
if(cljs.core.contains_QMARK_.call(null,seen,f__284960))
{{
var G__284965 = cljs.core.rest.call(null,s__284963);
var G__284966 = seen;
p__284957 = G__284965;
seen = G__284966;
continue;
}
} else
{return cljs.core.cons.call(null,f__284960,step.call(null,cljs.core.rest.call(null,s__284963),cljs.core.conj.call(null,seen,f__284960)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__284964.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__284967 = cljs.core.PersistentVector.fromArray([]);
var s__284968 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__284968)))
{{
var G__284969 = cljs.core.conj.call(null,ret__284967,cljs.core.first.call(null,s__284968));
var G__284970 = cljs.core.next.call(null,s__284968);
ret__284967 = G__284969;
s__284968 = G__284970;
continue;
}
} else
{return cljs.core.seq.call(null,ret__284967);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3548__auto____284971 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____284971)
{return or__3548__auto____284971;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__284972 = x.lastIndexOf("/");
if((i__284972 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__284972 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3548__auto____284973 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____284973)
{return or__3548__auto____284973;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__284974 = x.lastIndexOf("/");
if((i__284974 > -1))
{return cljs.core.subs.call(null,x,2,i__284974);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__284977 = cljs.core.ObjMap.fromObject([],{});
var ks__284978 = cljs.core.seq.call(null,keys);
var vs__284979 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____284980 = ks__284978;
if(cljs.core.truth_(and__3546__auto____284980))
{return vs__284979;
} else
{return and__3546__auto____284980;
}
})()))
{{
var G__284981 = cljs.core.assoc.call(null,map__284977,cljs.core.first.call(null,ks__284978),cljs.core.first.call(null,vs__284979));
var G__284982 = cljs.core.next.call(null,ks__284978);
var G__284983 = cljs.core.next.call(null,vs__284979);
map__284977 = G__284981;
ks__284978 = G__284982;
vs__284979 = G__284983;
continue;
}
} else
{return map__284977;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__284986__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__284975_SHARP_,p2__284976_SHARP_){
return max_key.call(null,k,p1__284975_SHARP_,p2__284976_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__284986 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__284986__delegate.call(this, k, x, y, more);
};
G__284986.cljs$lang$maxFixedArity = 3;
G__284986.cljs$lang$applyTo = (function (arglist__284987){
var k = cljs.core.first(arglist__284987);
var x = cljs.core.first(cljs.core.next(arglist__284987));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__284987)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__284987)));
return G__284986__delegate(k, x, y, more);
});
G__284986.cljs$lang$arity$variadic = G__284986__delegate;
return G__284986;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__284988__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__284984_SHARP_,p2__284985_SHARP_){
return min_key.call(null,k,p1__284984_SHARP_,p2__284985_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__284988 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__284988__delegate.call(this, k, x, y, more);
};
G__284988.cljs$lang$maxFixedArity = 3;
G__284988.cljs$lang$applyTo = (function (arglist__284989){
var k = cljs.core.first(arglist__284989);
var x = cljs.core.first(cljs.core.next(arglist__284989));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__284989)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__284989)));
return G__284988__delegate(k, x, y, more);
});
G__284988.cljs$lang$arity$variadic = G__284988__delegate;
return G__284988;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____284990 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____284990))
{var s__284991 = temp__3698__auto____284990;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__284991),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__284991)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____284992 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____284992))
{var s__284993 = temp__3698__auto____284992;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__284993))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__284993),take_while.call(null,pred,cljs.core.rest.call(null,s__284993)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__284994 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__284994.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__284995 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3698__auto____284996 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3698__auto____284996))
{var vec__284997__284998 = temp__3698__auto____284996;
var e__284999 = cljs.core.nth.call(null,vec__284997__284998,0,null);
var s__285000 = vec__284997__284998;
if(cljs.core.truth_(include__284995.call(null,e__284999)))
{return s__285000;
} else
{return cljs.core.next.call(null,s__285000);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__284995,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____285001 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3698__auto____285001))
{var vec__285002__285003 = temp__3698__auto____285001;
var e__285004 = cljs.core.nth.call(null,vec__285002__285003,0,null);
var s__285005 = vec__285002__285003;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__285004))?s__285005:cljs.core.next.call(null,s__285005)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__285006 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3698__auto____285007 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3698__auto____285007))
{var vec__285008__285009 = temp__3698__auto____285007;
var e__285010 = cljs.core.nth.call(null,vec__285008__285009,0,null);
var s__285011 = vec__285008__285009;
if(cljs.core.truth_(include__285006.call(null,e__285010)))
{return s__285011;
} else
{return cljs.core.next.call(null,s__285011);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__285006,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____285012 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3698__auto____285012))
{var vec__285013__285014 = temp__3698__auto____285012;
var e__285015 = cljs.core.nth.call(null,vec__285013__285014,0,null);
var s__285016 = vec__285013__285014;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__285015))?s__285016:cljs.core.next.call(null,s__285016)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__285017 = this;
var h__368__auto____285018 = this__285017.__hash;
if((h__368__auto____285018 != null))
{return h__368__auto____285018;
} else
{var h__368__auto____285019 = cljs.core.hash_coll.call(null,rng);
this__285017.__hash = h__368__auto____285019;
return h__368__auto____285019;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__285020 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__285021 = this;
var this$__285022 = this;
return cljs.core.pr_str.call(null,this$__285022);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__285023 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__285024 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__285025 = this;
var comp__285026 = (((this__285025.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__285026.call(null,this__285025.start,this__285025.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__285027 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__285027.end - this__285027.start) / this__285027.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__285028 = this;
return this__285028.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__285029 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__285029.meta,(this__285029.start + this__285029.step),this__285029.end,this__285029.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__285030 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__285031 = this;
return (new cljs.core.Range(meta,this__285031.start,this__285031.end,this__285031.step,this__285031.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__285032 = this;
return this__285032.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__285033 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__285033.start + (n * this__285033.step));
} else
{if((function (){var and__3546__auto____285034 = (this__285033.start > this__285033.end);
if(and__3546__auto____285034)
{return (this__285033.step === 0);
} else
{return and__3546__auto____285034;
}
})())
{return this__285033.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__285035 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__285035.start + (n * this__285035.step));
} else
{if((function (){var and__3546__auto____285036 = (this__285035.start > this__285035.end);
if(and__3546__auto____285036)
{return (this__285035.step === 0);
} else
{return and__3546__auto____285036;
}
})())
{return this__285035.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__285037 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__285037.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____285038 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____285038))
{var s__285039 = temp__3698__auto____285038;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__285039),take_nth.call(null,n,cljs.core.drop.call(null,n,s__285039)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____285041 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____285041))
{var s__285042 = temp__3698__auto____285041;
var fst__285043 = cljs.core.first.call(null,s__285042);
var fv__285044 = f.call(null,fst__285043);
var run__285045 = cljs.core.cons.call(null,fst__285043,cljs.core.take_while.call(null,(function (p1__285040_SHARP_){
return cljs.core._EQ_.call(null,fv__285044,f.call(null,p1__285040_SHARP_));
}),cljs.core.next.call(null,s__285042)));
return cljs.core.cons.call(null,run__285045,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__285045),s__285042))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____285056 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____285056))
{var s__285057 = temp__3695__auto____285056;
return reductions.call(null,f,cljs.core.first.call(null,s__285057),cljs.core.rest.call(null,s__285057));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____285058 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____285058))
{var s__285059 = temp__3698__auto____285058;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__285059)),cljs.core.rest.call(null,s__285059));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__285061 = null;
var G__285061__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__285061__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__285061__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__285061__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__285061__4 = (function() { 
var G__285062__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__285062 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__285062__delegate.call(this, x, y, z, args);
};
G__285062.cljs$lang$maxFixedArity = 3;
G__285062.cljs$lang$applyTo = (function (arglist__285063){
var x = cljs.core.first(arglist__285063);
var y = cljs.core.first(cljs.core.next(arglist__285063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285063)));
return G__285062__delegate(x, y, z, args);
});
G__285062.cljs$lang$arity$variadic = G__285062__delegate;
return G__285062;
})()
;
G__285061 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__285061__0.call(this);
case 1:
return G__285061__1.call(this,x);
case 2:
return G__285061__2.call(this,x,y);
case 3:
return G__285061__3.call(this,x,y,z);
default:
return G__285061__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__285061.cljs$lang$maxFixedArity = 3;
G__285061.cljs$lang$applyTo = G__285061__4.cljs$lang$applyTo;
return G__285061;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__285064 = null;
var G__285064__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__285064__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__285064__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__285064__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__285064__4 = (function() { 
var G__285065__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__285065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__285065__delegate.call(this, x, y, z, args);
};
G__285065.cljs$lang$maxFixedArity = 3;
G__285065.cljs$lang$applyTo = (function (arglist__285066){
var x = cljs.core.first(arglist__285066);
var y = cljs.core.first(cljs.core.next(arglist__285066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285066)));
return G__285065__delegate(x, y, z, args);
});
G__285065.cljs$lang$arity$variadic = G__285065__delegate;
return G__285065;
})()
;
G__285064 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__285064__0.call(this);
case 1:
return G__285064__1.call(this,x);
case 2:
return G__285064__2.call(this,x,y);
case 3:
return G__285064__3.call(this,x,y,z);
default:
return G__285064__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__285064.cljs$lang$maxFixedArity = 3;
G__285064.cljs$lang$applyTo = G__285064__4.cljs$lang$applyTo;
return G__285064;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__285067 = null;
var G__285067__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__285067__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__285067__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__285067__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__285067__4 = (function() { 
var G__285068__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__285068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__285068__delegate.call(this, x, y, z, args);
};
G__285068.cljs$lang$maxFixedArity = 3;
G__285068.cljs$lang$applyTo = (function (arglist__285069){
var x = cljs.core.first(arglist__285069);
var y = cljs.core.first(cljs.core.next(arglist__285069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285069)));
return G__285068__delegate(x, y, z, args);
});
G__285068.cljs$lang$arity$variadic = G__285068__delegate;
return G__285068;
})()
;
G__285067 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__285067__0.call(this);
case 1:
return G__285067__1.call(this,x);
case 2:
return G__285067__2.call(this,x,y);
case 3:
return G__285067__3.call(this,x,y,z);
default:
return G__285067__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__285067.cljs$lang$maxFixedArity = 3;
G__285067.cljs$lang$applyTo = G__285067__4.cljs$lang$applyTo;
return G__285067;
})()
});
var juxt__4 = (function() { 
var G__285070__delegate = function (f,g,h,fs){
var fs__285060 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__285071 = null;
var G__285071__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__285046_SHARP_,p2__285047_SHARP_){
return cljs.core.conj.call(null,p1__285046_SHARP_,p2__285047_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__285060);
});
var G__285071__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__285048_SHARP_,p2__285049_SHARP_){
return cljs.core.conj.call(null,p1__285048_SHARP_,p2__285049_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__285060);
});
var G__285071__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__285050_SHARP_,p2__285051_SHARP_){
return cljs.core.conj.call(null,p1__285050_SHARP_,p2__285051_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__285060);
});
var G__285071__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__285052_SHARP_,p2__285053_SHARP_){
return cljs.core.conj.call(null,p1__285052_SHARP_,p2__285053_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__285060);
});
var G__285071__4 = (function() { 
var G__285072__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__285054_SHARP_,p2__285055_SHARP_){
return cljs.core.conj.call(null,p1__285054_SHARP_,cljs.core.apply.call(null,p2__285055_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__285060);
};
var G__285072 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__285072__delegate.call(this, x, y, z, args);
};
G__285072.cljs$lang$maxFixedArity = 3;
G__285072.cljs$lang$applyTo = (function (arglist__285073){
var x = cljs.core.first(arglist__285073);
var y = cljs.core.first(cljs.core.next(arglist__285073));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285073)));
return G__285072__delegate(x, y, z, args);
});
G__285072.cljs$lang$arity$variadic = G__285072__delegate;
return G__285072;
})()
;
G__285071 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__285071__0.call(this);
case 1:
return G__285071__1.call(this,x);
case 2:
return G__285071__2.call(this,x,y);
case 3:
return G__285071__3.call(this,x,y,z);
default:
return G__285071__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__285071.cljs$lang$maxFixedArity = 3;
G__285071.cljs$lang$applyTo = G__285071__4.cljs$lang$applyTo;
return G__285071;
})()
};
var G__285070 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__285070__delegate.call(this, f, g, h, fs);
};
G__285070.cljs$lang$maxFixedArity = 3;
G__285070.cljs$lang$applyTo = (function (arglist__285074){
var f = cljs.core.first(arglist__285074);
var g = cljs.core.first(cljs.core.next(arglist__285074));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285074)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__285074)));
return G__285070__delegate(f, g, h, fs);
});
G__285070.cljs$lang$arity$variadic = G__285070__delegate;
return G__285070;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__285076 = cljs.core.next.call(null,coll);
coll = G__285076;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____285075 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3546__auto____285075))
{return (n > 0);
} else
{return and__3546__auto____285075;
}
})()))
{{
var G__285077 = (n - 1);
var G__285078 = cljs.core.next.call(null,coll);
n = G__285077;
coll = G__285078;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__285079 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__285079),s))
{if((cljs.core.count.call(null,matches__285079) === 1))
{return cljs.core.first.call(null,matches__285079);
} else
{return cljs.core.vec.call(null,matches__285079);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__285080 = re.exec(s);
if((matches__285080 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__285080) === 1))
{return cljs.core.first.call(null,matches__285080);
} else
{return cljs.core.vec.call(null,matches__285080);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__285081 = cljs.core.re_find.call(null,re,s);
var match_idx__285082 = s.search(re);
var match_str__285083 = ((cljs.core.coll_QMARK_.call(null,match_data__285081))?cljs.core.first.call(null,match_data__285081):match_data__285081);
var post_match__285084 = cljs.core.subs.call(null,s,(match_idx__285082 + cljs.core.count.call(null,match_str__285083)));
if(cljs.core.truth_(match_data__285081))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__285081,re_seq.call(null,re,post_match__285084));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__285086__285087 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___285088 = cljs.core.nth.call(null,vec__285086__285087,0,null);
var flags__285089 = cljs.core.nth.call(null,vec__285086__285087,1,null);
var pattern__285090 = cljs.core.nth.call(null,vec__285086__285087,2,null);
return (new RegExp(pattern__285090,flags__285089));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__285085_SHARP_){
return print_one.call(null,p1__285085_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____285091 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3546__auto____285091))
{var and__3546__auto____285095 = (function (){var G__285092__285093 = obj;
if((G__285092__285093 != null))
{if((function (){var or__3548__auto____285094 = (G__285092__285093.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____285094)
{return or__3548__auto____285094;
} else
{return G__285092__285093.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__285092__285093.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__285092__285093);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__285092__285093);
}
})();
if(cljs.core.truth_(and__3546__auto____285095))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____285095;
}
} else
{return and__3546__auto____285091;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3546__auto____285096 = (obj != null);
if(and__3546__auto____285096)
{return obj.cljs$lang$type;
} else
{return and__3546__auto____285096;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__285097__285098 = obj;
if((G__285097__285098 != null))
{if((function (){var or__3548__auto____285099 = (G__285097__285098.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3548__auto____285099)
{return or__3548__auto____285099;
} else
{return G__285097__285098.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__285097__285098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__285097__285098);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__285097__285098);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__285100 = cljs.core.first.call(null,objs);
var sb__285101 = (new goog.string.StringBuffer());
var G__285102__285103 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__285102__285103))
{var obj__285104 = cljs.core.first.call(null,G__285102__285103);
var G__285102__285105 = G__285102__285103;
while(true){
if((obj__285104 === first_obj__285100))
{} else
{sb__285101.append(" ");
}
var G__285106__285107 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__285104,opts));
if(cljs.core.truth_(G__285106__285107))
{var string__285108 = cljs.core.first.call(null,G__285106__285107);
var G__285106__285109 = G__285106__285107;
while(true){
sb__285101.append(string__285108);
var temp__3698__auto____285110 = cljs.core.next.call(null,G__285106__285109);
if(cljs.core.truth_(temp__3698__auto____285110))
{var G__285106__285111 = temp__3698__auto____285110;
{
var G__285114 = cljs.core.first.call(null,G__285106__285111);
var G__285115 = G__285106__285111;
string__285108 = G__285114;
G__285106__285109 = G__285115;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____285112 = cljs.core.next.call(null,G__285102__285105);
if(cljs.core.truth_(temp__3698__auto____285112))
{var G__285102__285113 = temp__3698__auto____285112;
{
var G__285116 = cljs.core.first.call(null,G__285102__285113);
var G__285117 = G__285102__285113;
obj__285104 = G__285116;
G__285102__285105 = G__285117;
continue;
}
} else
{}
break;
}
} else
{}
return sb__285101;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__285118 = cljs.core.pr_sb.call(null,objs,opts);
sb__285118.append("\n");
return [cljs.core.str(sb__285118)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__285119 = cljs.core.first.call(null,objs);
var G__285120__285121 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__285120__285121))
{var obj__285122 = cljs.core.first.call(null,G__285120__285121);
var G__285120__285123 = G__285120__285121;
while(true){
if((obj__285122 === first_obj__285119))
{} else
{cljs.core.string_print.call(null," ");
}
var G__285124__285125 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__285122,opts));
if(cljs.core.truth_(G__285124__285125))
{var string__285126 = cljs.core.first.call(null,G__285124__285125);
var G__285124__285127 = G__285124__285125;
while(true){
cljs.core.string_print.call(null,string__285126);
var temp__3698__auto____285128 = cljs.core.next.call(null,G__285124__285127);
if(cljs.core.truth_(temp__3698__auto____285128))
{var G__285124__285129 = temp__3698__auto____285128;
{
var G__285132 = cljs.core.first.call(null,G__285124__285129);
var G__285133 = G__285124__285129;
string__285126 = G__285132;
G__285124__285127 = G__285133;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____285130 = cljs.core.next.call(null,G__285120__285123);
if(cljs.core.truth_(temp__3698__auto____285130))
{var G__285120__285131 = temp__3698__auto____285130;
{
var G__285134 = cljs.core.first.call(null,G__285120__285131);
var G__285135 = G__285120__285131;
obj__285122 = G__285134;
G__285120__285123 = G__285135;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__285136){
var objs = cljs.core.seq(arglist__285136);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__285137){
var objs = cljs.core.seq(arglist__285137);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__285138){
var objs = cljs.core.seq(arglist__285138);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__285139){
var objs = cljs.core.seq(arglist__285139);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__285140){
var objs = cljs.core.seq(arglist__285140);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__285141){
var objs = cljs.core.seq(arglist__285141);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__285142){
var objs = cljs.core.seq(arglist__285142);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__285143){
var objs = cljs.core.seq(arglist__285143);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__285144 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__285144,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__285145 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__285145,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__285146 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__285146,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3698__auto____285147 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____285147))
{var nspc__285148 = temp__3698__auto____285147;
return [cljs.core.str(nspc__285148),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3698__auto____285149 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____285149))
{var nspc__285150 = temp__3698__auto____285149;
return [cljs.core.str(nspc__285150),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__285151 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__285151,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__285152 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__285152,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__285153 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__285154 = this;
var G__285155__285156 = cljs.core.seq.call(null,this__285154.watches);
if(cljs.core.truth_(G__285155__285156))
{var G__285158__285160 = cljs.core.first.call(null,G__285155__285156);
var vec__285159__285161 = G__285158__285160;
var key__285162 = cljs.core.nth.call(null,vec__285159__285161,0,null);
var f__285163 = cljs.core.nth.call(null,vec__285159__285161,1,null);
var G__285155__285164 = G__285155__285156;
var G__285158__285165 = G__285158__285160;
var G__285155__285166 = G__285155__285164;
while(true){
var vec__285167__285168 = G__285158__285165;
var key__285169 = cljs.core.nth.call(null,vec__285167__285168,0,null);
var f__285170 = cljs.core.nth.call(null,vec__285167__285168,1,null);
var G__285155__285171 = G__285155__285166;
f__285170.call(null,key__285169,this$,oldval,newval);
var temp__3698__auto____285172 = cljs.core.next.call(null,G__285155__285171);
if(cljs.core.truth_(temp__3698__auto____285172))
{var G__285155__285173 = temp__3698__auto____285172;
{
var G__285180 = cljs.core.first.call(null,G__285155__285173);
var G__285181 = G__285155__285173;
G__285158__285165 = G__285180;
G__285155__285166 = G__285181;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__285174 = this;
return this$.watches = cljs.core.assoc.call(null,this__285174.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__285175 = this;
return this$.watches = cljs.core.dissoc.call(null,this__285175.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__285176 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__285176.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__285177 = this;
return this__285177.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__285178 = this;
return this__285178.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__285179 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__285188__delegate = function (x,p__285182){
var map__285183__285184 = p__285182;
var map__285183__285185 = ((cljs.core.seq_QMARK_.call(null,map__285183__285184))?cljs.core.apply.call(null,cljs.core.hash_map,map__285183__285184):map__285183__285184);
var validator__285186 = cljs.core.get.call(null,map__285183__285185,"\uFDD0'validator");
var meta__285187 = cljs.core.get.call(null,map__285183__285185,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__285187,validator__285186,null));
};
var G__285188 = function (x,var_args){
var p__285182 = null;
if (goog.isDef(var_args)) {
  p__285182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__285188__delegate.call(this, x, p__285182);
};
G__285188.cljs$lang$maxFixedArity = 1;
G__285188.cljs$lang$applyTo = (function (arglist__285189){
var x = cljs.core.first(arglist__285189);
var p__285182 = cljs.core.rest(arglist__285189);
return G__285188__delegate(x, p__285182);
});
G__285188.cljs$lang$arity$variadic = G__285188__delegate;
return G__285188;
})()
;
atom = function(x,var_args){
var p__285182 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____285190 = a.validator;
if(cljs.core.truth_(temp__3698__auto____285190))
{var validate__285191 = temp__3698__auto____285190;
if(cljs.core.truth_(validate__285191.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5917))))].join('')));
}
} else
{}
var old_value__285192 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__285192,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__285193__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__285193 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__285193__delegate.call(this, a, f, x, y, z, more);
};
G__285193.cljs$lang$maxFixedArity = 5;
G__285193.cljs$lang$applyTo = (function (arglist__285194){
var a = cljs.core.first(arglist__285194);
var f = cljs.core.first(cljs.core.next(arglist__285194));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__285194)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__285194))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__285194)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__285194)))));
return G__285193__delegate(a, f, x, y, z, more);
});
G__285193.cljs$lang$arity$variadic = G__285193__delegate;
return G__285193;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__285195){
var iref = cljs.core.first(arglist__285195);
var f = cljs.core.first(cljs.core.next(arglist__285195));
var args = cljs.core.rest(cljs.core.next(arglist__285195));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__285196 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__285196.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__285197 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__285197.state,(function (p__285198){
var curr_state__285199 = p__285198;
var curr_state__285200 = ((cljs.core.seq_QMARK_.call(null,curr_state__285199))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__285199):curr_state__285199);
var done__285201 = cljs.core.get.call(null,curr_state__285200,"\uFDD0'done");
if(cljs.core.truth_(done__285201))
{return curr_state__285200;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__285197.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__285202__285203 = options;
var map__285202__285204 = ((cljs.core.seq_QMARK_.call(null,map__285202__285203))?cljs.core.apply.call(null,cljs.core.hash_map,map__285202__285203):map__285202__285203);
var keywordize_keys__285205 = cljs.core.get.call(null,map__285202__285204,"\uFDD0'keywordize-keys");
var keyfn__285206 = (cljs.core.truth_(keywordize_keys__285205)?cljs.core.keyword:cljs.core.str);
var f__285212 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__629__auto____285211 = (function iter__285207(s__285208){
return (new cljs.core.LazySeq(null,false,(function (){
var s__285208__285209 = s__285208;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__285208__285209)))
{var k__285210 = cljs.core.first.call(null,s__285208__285209);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__285206.call(null,k__285210),thisfn.call(null,(x[k__285210]))]),iter__285207.call(null,cljs.core.rest.call(null,s__285208__285209)));
} else
{return null;
}
break;
}
})));
});
return iter__629__auto____285211.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__285212.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__285213){
var x = cljs.core.first(arglist__285213);
var options = cljs.core.rest(arglist__285213);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__285214 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__285218__delegate = function (args){
var temp__3695__auto____285215 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__285214),args);
if(cljs.core.truth_(temp__3695__auto____285215))
{var v__285216 = temp__3695__auto____285215;
return v__285216;
} else
{var ret__285217 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__285214,cljs.core.assoc,args,ret__285217);
return ret__285217;
}
};
var G__285218 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__285218__delegate.call(this, args);
};
G__285218.cljs$lang$maxFixedArity = 0;
G__285218.cljs$lang$applyTo = (function (arglist__285219){
var args = cljs.core.seq(arglist__285219);;
return G__285218__delegate(args);
});
G__285218.cljs$lang$arity$variadic = G__285218__delegate;
return G__285218;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__285220 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__285220))
{{
var G__285221 = ret__285220;
f = G__285221;
continue;
}
} else
{return ret__285220;
}
break;
}
});
var trampoline__2 = (function() { 
var G__285222__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__285222 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__285222__delegate.call(this, f, args);
};
G__285222.cljs$lang$maxFixedArity = 1;
G__285222.cljs$lang$applyTo = (function (arglist__285223){
var f = cljs.core.first(arglist__285223);
var args = cljs.core.rest(arglist__285223);
return G__285222__delegate(f, args);
});
G__285222.cljs$lang$arity$variadic = G__285222__delegate;
return G__285222;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__285224 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__285224,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__285224,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3548__auto____285225 = cljs.core._EQ_.call(null,child,parent);
if(or__3548__auto____285225)
{return or__3548__auto____285225;
} else
{var or__3548__auto____285226 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3548__auto____285226)
{return or__3548__auto____285226;
} else
{var and__3546__auto____285227 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3546__auto____285227)
{var and__3546__auto____285228 = cljs.core.vector_QMARK_.call(null,child);
if(and__3546__auto____285228)
{var and__3546__auto____285229 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3546__auto____285229)
{var ret__285230 = true;
var i__285231 = 0;
while(true){
if((function (){var or__3548__auto____285232 = cljs.core.not.call(null,ret__285230);
if(or__3548__auto____285232)
{return or__3548__auto____285232;
} else
{return (i__285231 === cljs.core.count.call(null,parent));
}
})())
{return ret__285230;
} else
{{
var G__285233 = isa_QMARK_.call(null,h,child.call(null,i__285231),parent.call(null,i__285231));
var G__285234 = (i__285231 + 1);
ret__285230 = G__285233;
i__285231 = G__285234;
continue;
}
}
break;
}
} else
{return and__3546__auto____285229;
}
} else
{return and__3546__auto____285228;
}
} else
{return and__3546__auto____285227;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6201))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6205))))].join('')));
}
var tp__285238 = "\uFDD0'parents".call(null,h);
var td__285239 = "\uFDD0'descendants".call(null,h);
var ta__285240 = "\uFDD0'ancestors".call(null,h);
var tf__285241 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3548__auto____285242 = ((cljs.core.contains_QMARK_.call(null,tp__285238.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__285240.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__285240.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__285238,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__285241.call(null,"\uFDD0'ancestors".call(null,h),tag,td__285239,parent,ta__285240),"\uFDD0'descendants":tf__285241.call(null,"\uFDD0'descendants".call(null,h),parent,ta__285240,tag,td__285239)});
})());
if(cljs.core.truth_(or__3548__auto____285242))
{return or__3548__auto____285242;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__285243 = "\uFDD0'parents".call(null,h);
var childsParents__285244 = (cljs.core.truth_(parentMap__285243.call(null,tag))?cljs.core.disj.call(null,parentMap__285243.call(null,tag),parent):cljs.core.set([]));
var newParents__285245 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__285244))?cljs.core.assoc.call(null,parentMap__285243,tag,childsParents__285244):cljs.core.dissoc.call(null,parentMap__285243,tag));
var deriv_seq__285246 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__285235_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__285235_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__285235_SHARP_),cljs.core.second.call(null,p1__285235_SHARP_)));
}),cljs.core.seq.call(null,newParents__285245)));
if(cljs.core.contains_QMARK_.call(null,parentMap__285243.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__285236_SHARP_,p2__285237_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__285236_SHARP_,p2__285237_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__285246));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__285247 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3548__auto____285249 = (cljs.core.truth_((function (){var and__3546__auto____285248 = xprefs__285247;
if(cljs.core.truth_(and__3546__auto____285248))
{return xprefs__285247.call(null,y);
} else
{return and__3546__auto____285248;
}
})())?true:null);
if(cljs.core.truth_(or__3548__auto____285249))
{return or__3548__auto____285249;
} else
{var or__3548__auto____285251 = (function (){var ps__285250 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__285250) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__285250),prefer_table)))
{} else
{}
{
var G__285254 = cljs.core.rest.call(null,ps__285250);
ps__285250 = G__285254;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____285251))
{return or__3548__auto____285251;
} else
{var or__3548__auto____285253 = (function (){var ps__285252 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__285252) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__285252),y,prefer_table)))
{} else
{}
{
var G__285255 = cljs.core.rest.call(null,ps__285252);
ps__285252 = G__285255;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____285253))
{return or__3548__auto____285253;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____285256 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3548__auto____285256))
{return or__3548__auto____285256;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__285265 = cljs.core.reduce.call(null,(function (be,p__285257){
var vec__285258__285259 = p__285257;
var k__285260 = cljs.core.nth.call(null,vec__285258__285259,0,null);
var ___285261 = cljs.core.nth.call(null,vec__285258__285259,1,null);
var e__285262 = vec__285258__285259;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__285260))
{var be2__285264 = (cljs.core.truth_((function (){var or__3548__auto____285263 = (be == null);
if(or__3548__auto____285263)
{return or__3548__auto____285263;
} else
{return cljs.core.dominates.call(null,k__285260,cljs.core.first.call(null,be),prefer_table);
}
})())?e__285262:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__285264),k__285260,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__285260),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__285264)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__285264;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__285265))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__285265));
return cljs.core.second.call(null,best_entry__285265);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3546__auto____285266 = mf;
if(and__3546__auto____285266)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3546__auto____285266;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3548__auto____285267 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285267)
{return or__3548__auto____285267;
} else
{var or__3548__auto____285268 = (cljs.core._reset["_"]);
if(or__3548__auto____285268)
{return or__3548__auto____285268;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3546__auto____285269 = mf;
if(and__3546__auto____285269)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3546__auto____285269;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____285270 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285270)
{return or__3548__auto____285270;
} else
{var or__3548__auto____285271 = (cljs.core._add_method["_"]);
if(or__3548__auto____285271)
{return or__3548__auto____285271;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3546__auto____285272 = mf;
if(and__3546__auto____285272)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3546__auto____285272;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____285273 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285273)
{return or__3548__auto____285273;
} else
{var or__3548__auto____285274 = (cljs.core._remove_method["_"]);
if(or__3548__auto____285274)
{return or__3548__auto____285274;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3546__auto____285275 = mf;
if(and__3546__auto____285275)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3546__auto____285275;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____285276 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285276)
{return or__3548__auto____285276;
} else
{var or__3548__auto____285277 = (cljs.core._prefer_method["_"]);
if(or__3548__auto____285277)
{return or__3548__auto____285277;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3546__auto____285278 = mf;
if(and__3546__auto____285278)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3546__auto____285278;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____285279 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285279)
{return or__3548__auto____285279;
} else
{var or__3548__auto____285280 = (cljs.core._get_method["_"]);
if(or__3548__auto____285280)
{return or__3548__auto____285280;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3546__auto____285281 = mf;
if(and__3546__auto____285281)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3546__auto____285281;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3548__auto____285282 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285282)
{return or__3548__auto____285282;
} else
{var or__3548__auto____285283 = (cljs.core._methods["_"]);
if(or__3548__auto____285283)
{return or__3548__auto____285283;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3546__auto____285284 = mf;
if(and__3546__auto____285284)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3546__auto____285284;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3548__auto____285285 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285285)
{return or__3548__auto____285285;
} else
{var or__3548__auto____285286 = (cljs.core._prefers["_"]);
if(or__3548__auto____285286)
{return or__3548__auto____285286;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3546__auto____285287 = mf;
if(and__3546__auto____285287)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3546__auto____285287;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3548__auto____285288 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3548__auto____285288)
{return or__3548__auto____285288;
} else
{var or__3548__auto____285289 = (cljs.core._dispatch["_"]);
if(or__3548__auto____285289)
{return or__3548__auto____285289;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__285290 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__285291 = cljs.core._get_method.call(null,mf,dispatch_val__285290);
if(cljs.core.truth_(target_fn__285291))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__285290)].join('')));
}
return cljs.core.apply.call(null,target_fn__285291,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__285292 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__285293 = this;
cljs.core.swap_BANG_.call(null,this__285293.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__285293.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__285293.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__285293.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__285294 = this;
cljs.core.swap_BANG_.call(null,this__285294.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__285294.method_cache,this__285294.method_table,this__285294.cached_hierarchy,this__285294.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__285295 = this;
cljs.core.swap_BANG_.call(null,this__285295.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__285295.method_cache,this__285295.method_table,this__285295.cached_hierarchy,this__285295.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__285296 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__285296.cached_hierarchy),cljs.core.deref.call(null,this__285296.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__285296.method_cache,this__285296.method_table,this__285296.cached_hierarchy,this__285296.hierarchy);
}
var temp__3695__auto____285297 = cljs.core.deref.call(null,this__285296.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3695__auto____285297))
{var target_fn__285298 = temp__3695__auto____285297;
return target_fn__285298;
} else
{var temp__3695__auto____285299 = cljs.core.find_and_cache_best_method.call(null,this__285296.name,dispatch_val,this__285296.hierarchy,this__285296.method_table,this__285296.prefer_table,this__285296.method_cache,this__285296.cached_hierarchy);
if(cljs.core.truth_(temp__3695__auto____285299))
{var target_fn__285300 = temp__3695__auto____285299;
return target_fn__285300;
} else
{return cljs.core.deref.call(null,this__285296.method_table).call(null,this__285296.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__285301 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__285301.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__285301.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__285301.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__285301.method_cache,this__285301.method_table,this__285301.cached_hierarchy,this__285301.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__285302 = this;
return cljs.core.deref.call(null,this__285302.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__285303 = this;
return cljs.core.deref.call(null,this__285303.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__285304 = this;
return cljs.core.do_dispatch.call(null,mf,this__285304.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__285305__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__285305 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__285305__delegate.call(this, _, args);
};
G__285305.cljs$lang$maxFixedArity = 1;
G__285305.cljs$lang$applyTo = (function (arglist__285306){
var _ = cljs.core.first(arglist__285306);
var args = cljs.core.rest(arglist__285306);
return G__285305__delegate(_, args);
});
G__285305.cljs$lang$arity$variadic = G__285305__delegate;
return G__285305;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
