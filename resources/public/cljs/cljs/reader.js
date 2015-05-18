goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
void 0;cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3546__auto____285515 = reader;
if(and__3546__auto____285515)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3546__auto____285515;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{return (function (){var or__3548__auto____285516 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);
if(or__3548__auto____285516)
{return or__3548__auto____285516;
} else
{var or__3548__auto____285517 = (cljs.reader.read_char["_"]);
if(or__3548__auto____285517)
{return or__3548__auto____285517;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3546__auto____285518 = reader;
if(and__3546__auto____285518)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3546__auto____285518;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{return (function (){var or__3548__auto____285519 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);
if(or__3548__auto____285519)
{return or__3548__auto____285519;
} else
{var or__3548__auto____285520 = (cljs.reader.unread["_"]);
if(or__3548__auto____285520)
{return or__3548__auto____285520;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
void 0;
/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__458__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__285521 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__285521.buffer_atom)))
{var idx__285522 = cljs.core.deref.call(null,this__285521.index_atom);
cljs.core.swap_BANG_.call(null,this__285521.index_atom,cljs.core.inc);
return (this__285521.s[idx__285522]);
} else
{var buf__285523 = cljs.core.deref.call(null,this__285521.buffer_atom);
cljs.core.swap_BANG_.call(null,this__285521.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__285523);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__285524 = this;
return cljs.core.swap_BANG_.call(null,this__285524.buffer_atom,(function (p1__285514_SHARP_){
return cljs.core.cons.call(null,ch,p1__285514_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____285525 = goog.string.isBreakingWhitespace.call(null,ch);
if(cljs.core.truth_(or__3548__auto____285525))
{return or__3548__auto____285525;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____285526 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3548__auto____285526)
{return or__3548__auto____285526;
} else
{var and__3546__auto____285528 = (function (){var or__3548__auto____285527 = ("+" === initch);
if(or__3548__auto____285527)
{return or__3548__auto____285527;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3546__auto____285528))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__285529 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__285529);
return next_ch__285529;
})());
} else
{return and__3546__auto____285528;
}
}
});
void 0;
void 0;
void 0;
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__285530){
var rdr = cljs.core.first(arglist__285530);
var msg = cljs.core.rest(arglist__285530);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____285531 = (ch != "#");
if(and__3546__auto____285531)
{var and__3546__auto____285532 = (ch != "'");
if(and__3546__auto____285532)
{var and__3546__auto____285533 = (ch != ":");
if(and__3546__auto____285533)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3546__auto____285533;
}
} else
{return and__3546__auto____285532;
}
} else
{return and__3546__auto____285531;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__285534 = (new goog.string.StringBuffer(initch));
var ch__285535 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3548__auto____285536 = (ch__285535 == null);
if(or__3548__auto____285536)
{return or__3548__auto____285536;
} else
{var or__3548__auto____285537 = cljs.reader.whitespace_QMARK_.call(null,ch__285535);
if(or__3548__auto____285537)
{return or__3548__auto____285537;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__285535);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__285535);
return sb__285534.toString();
} else
{{
var G__285538 = (function (){sb__285534.append(ch__285535);
return sb__285534;
})();
var G__285539 = cljs.reader.read_char.call(null,rdr);
sb__285534 = G__285538;
ch__285535 = G__285539;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__285540 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3548__auto____285541 = (ch__285540 === "n");
if(or__3548__auto____285541)
{return or__3548__auto____285541;
} else
{var or__3548__auto____285542 = (ch__285540 === "r");
if(or__3548__auto____285542)
{return or__3548__auto____285542;
} else
{return (ch__285540 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__285543 = re.exec(s);
if((matches__285543 != null))
{if((matches__285543.length === 1))
{return (matches__285543[0]);
} else
{return matches__285543;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){
var groups__285544 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__285545 = (groups__285544[2]);
if((!(function (){var or__3548__auto____285546 = (group3__285545 == null);
if(or__3548__auto____285546)
{return or__3548__auto____285546;
} else
{return (group3__285545.length < 1);
}
})()))
{return 0;
} else
{var negate__285547 = ((("-" === (groups__285544[1])))?-1:1);
var a__285548 = (cljs.core.truth_((groups__285544[3]))?[(groups__285544[3]),10]:(cljs.core.truth_((groups__285544[4]))?[(groups__285544[4]),16]:(cljs.core.truth_((groups__285544[5]))?[(groups__285544[5]),8]:(cljs.core.truth_((groups__285544[7]))?[(groups__285544[7]),parseInt((groups__285544[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__285549 = (a__285548[0]);
var radix__285550 = (a__285548[1]);
if((n__285549 == null))
{return null;
} else
{return (negate__285547 * parseInt(n__285549,radix__285550));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__285551 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__285552 = (groups__285551[1]);
var denominator__285553 = (groups__285551[2]);
return (parseInt(numinator__285552) / parseInt(denominator__285553));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__285554 = re.exec(s);
if((function (){var and__3546__auto____285555 = (matches__285554 != null);
if(and__3546__auto____285555)
{return ((matches__285554[0]) === s);
} else
{return and__3546__auto____285555;
}
})())
{if((matches__285554.length === 1))
{return (matches__285554[0]);
} else
{return matches__285554;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if(("f" === c))
{return "\f";
} else
{if(("b" === c))
{return "\b";
} else
{if(("\"" === c))
{return "\"";
} else
{if(("\\" === c))
{return "\\";
} else
{if(("n" === c))
{return "\n";
} else
{if(("r" === c))
{return "\r";
} else
{if(("t" === c))
{return "\t";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__285556 = cljs.reader.read_char.call(null,reader);
var mapresult__285557 = cljs.reader.escape_char_map.call(null,ch__285556);
if(cljs.core.truth_(mapresult__285557))
{return mapresult__285557;
} else
{if((function (){var or__3548__auto____285558 = ("u" === ch__285556);
if(or__3548__auto____285558)
{return or__3548__auto____285558;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__285556);
}
})())
{return cljs.reader.read_unicode_char.call(null,reader,ch__285556);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape character: \\",ch__285556);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__285559 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__285559)))
{{
var G__285560 = cljs.reader.read_char.call(null,rdr);
ch__285559 = G__285560;
continue;
}
} else
{return ch__285559;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__285561 = cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([]));
while(true){
var ch__285562 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__285562))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__285562))
{return cljs.core.persistent_BANG_.call(null,a__285561);
} else
{var temp__3695__auto____285563 = cljs.reader.macros.call(null,ch__285562);
if(cljs.core.truth_(temp__3695__auto____285563))
{var macrofn__285564 = temp__3695__auto____285563;
var mret__285565 = macrofn__285564.call(null,rdr,ch__285562);
{
var G__285567 = (((mret__285565 === rdr))?a__285561:cljs.core.conj_BANG_.call(null,a__285561,mret__285565));
a__285561 = G__285567;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__285562);
var o__285566 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__285568 = (((o__285566 === rdr))?a__285561:cljs.core.conj_BANG_.call(null,a__285561,o__285566));
a__285561 = G__285568;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
void 0;
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__285569 = cljs.reader.read_char.call(null,rdr);
var dm__285570 = cljs.reader.dispatch_macros.call(null,ch__285569);
if(cljs.core.truth_(dm__285570))
{return dm__285570.call(null,rdr,_);
} else
{var temp__3695__auto____285571 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__285569);
if(cljs.core.truth_(temp__3695__auto____285571))
{var obj__285572 = temp__3695__auto____285571;
return obj__285572;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__285569);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__285573 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__285573)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__285573);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__285574 = (new goog.string.StringBuffer(initch));
var ch__285575 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3548__auto____285576 = (ch__285575 == null);
if(or__3548__auto____285576)
{return or__3548__auto____285576;
} else
{var or__3548__auto____285577 = cljs.reader.whitespace_QMARK_.call(null,ch__285575);
if(or__3548__auto____285577)
{return or__3548__auto____285577;
} else
{return cljs.reader.macros.call(null,ch__285575);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__285575);
var s__285578 = buffer__285574.toString();
var or__3548__auto____285579 = cljs.reader.match_number.call(null,s__285578);
if(cljs.core.truth_(or__3548__auto____285579))
{return or__3548__auto____285579;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__285578,"]");
}
} else
{{
var G__285580 = (function (){buffer__285574.append(ch__285575);
return buffer__285574;
})();
var G__285581 = cljs.reader.read_char.call(null,reader);
buffer__285574 = G__285580;
ch__285575 = G__285581;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__285582 = (new goog.string.StringBuffer());
var ch__285583 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__285583 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__285583))
{{
var G__285584 = (function (){buffer__285582.append(cljs.reader.escape_char.call(null,buffer__285582,reader));
return buffer__285582;
})();
var G__285585 = cljs.reader.read_char.call(null,reader);
buffer__285582 = G__285584;
ch__285583 = G__285585;
continue;
}
} else
{if(("\"" === ch__285583))
{return buffer__285582.toString();
} else
{if("\uFDD0'default")
{{
var G__285586 = (function (){buffer__285582.append(ch__285583);
return buffer__285582;
})();
var G__285587 = cljs.reader.read_char.call(null,reader);
buffer__285582 = G__285586;
ch__285583 = G__285587;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__285588 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains.call(null,token__285588,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__285588,0,token__285588.indexOf("/")),cljs.core.subs.call(null,token__285588,(token__285588.indexOf("/") + 1),token__285588.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__285588,cljs.core.symbol.call(null,token__285588));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__285589 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__285590 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__285589);
var token__285591 = (a__285590[0]);
var ns__285592 = (a__285590[1]);
var name__285593 = (a__285590[2]);
if(cljs.core.truth_((function (){var or__3548__auto____285595 = (function (){var and__3546__auto____285594 = (!(void 0 === ns__285592));
if(and__3546__auto____285594)
{return (ns__285592.substring((ns__285592.length - 2),ns__285592.length) === ":/");
} else
{return and__3546__auto____285594;
}
})();
if(cljs.core.truth_(or__3548__auto____285595))
{return or__3548__auto____285595;
} else
{var or__3548__auto____285596 = ((name__285593[(name__285593.length - 1)]) === ":");
if(or__3548__auto____285596)
{return or__3548__auto____285596;
} else
{return (!(token__285591.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__285591);
} else
{if(cljs.core.truth_(ns__285592))
{return cljs.core.keyword.call(null,ns__285592.substring(0,ns__285592.indexOf("/")),name__285593);
} else
{return cljs.core.keyword.call(null,token__285591);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__285597 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__285597))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__285598 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__285599__285600 = o__285598;
if((G__285599__285600 != null))
{if((function (){var or__3548__auto____285601 = (G__285599__285600.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3548__auto____285601)
{return or__3548__auto____285601;
} else
{return G__285599__285600.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__285599__285600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__285599__285600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__285599__285600);
}
})())
{return cljs.core.with_meta.call(null,o__285598,cljs.core.merge.call(null,cljs.core.meta.call(null,o__285598),m__285597));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if(("@" === c))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if(("`" === c))
{return cljs.reader.not_implemented;
} else
{if(("\"" === c))
{return cljs.reader.read_string_STAR_;
} else
{if(("#" === c))
{return cljs.reader.read_dispatch;
} else
{if(("%" === c))
{return cljs.reader.not_implemented;
} else
{if(("'" === c))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if(("(" === c))
{return cljs.reader.read_list;
} else
{if((")" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((":" === c))
{return cljs.reader.read_keyword;
} else
{if((";" === c))
{return cljs.reader.not_implemented;
} else
{if(("[" === c))
{return cljs.reader.read_vector;
} else
{if(("{" === c))
{return cljs.reader.read_map;
} else
{if(("\\" === c))
{return cljs.reader.read_char;
} else
{if(("]" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if(("}" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if(("^" === c))
{return cljs.reader.read_meta;
} else
{if(("~" === c))
{return cljs.reader.not_implemented;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if(("_" === s))
{return cljs.reader.read_discard;
} else
{if(("!" === s))
{return cljs.reader.read_comment;
} else
{if(("\"" === s))
{return cljs.reader.read_regex;
} else
{if(("<" === s))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if(("{" === s))
{return cljs.reader.read_set;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__285602 = cljs.reader.read_char.call(null,reader);
if((ch__285602 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__285602))
{{
var G__285605 = reader;
var G__285606 = eof_is_error;
var G__285607 = sentinel;
var G__285608 = is_recursive;
reader = G__285605;
eof_is_error = G__285606;
sentinel = G__285607;
is_recursive = G__285608;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__285602))
{{
var G__285609 = cljs.reader.read_comment.call(null,reader,ch__285602);
var G__285610 = eof_is_error;
var G__285611 = sentinel;
var G__285612 = is_recursive;
reader = G__285609;
eof_is_error = G__285610;
sentinel = G__285611;
is_recursive = G__285612;
continue;
}
} else
{if("\uFDD0'else")
{var f__285603 = cljs.reader.macros.call(null,ch__285602);
var res__285604 = (cljs.core.truth_(f__285603)?f__285603.call(null,reader,ch__285602):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__285602))?cljs.reader.read_number.call(null,reader,ch__285602):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__285602):null)));
if((res__285604 === reader))
{{
var G__285613 = reader;
var G__285614 = eof_is_error;
var G__285615 = sentinel;
var G__285616 = is_recursive;
reader = G__285613;
eof_is_error = G__285614;
sentinel = G__285615;
is_recursive = G__285616;
continue;
}
} else
{return res__285604;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__285617 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__285617,true,null,false);
});
cljs.reader.read_date = (function read_date(str){
return (new Date(Date.parse.call(null,str)));
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.core.identity,"uuid":cljs.core.identity,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__285618 = cljs.reader.read_symbol.call(null,rdr,initch);
var form__285619 = cljs.reader.read.call(null,rdr,true,null,false);
var pfn__285620 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__285618));
if(cljs.core.truth_(pfn__285620))
{return pfn__285620.call(null,form__285619);
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__285618),cljs.core.pr_str.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__285621 = cljs.core.name.call(null,tag);
var old_parser__285622 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__285621);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__285621,f);
return old_parser__285622;
});
