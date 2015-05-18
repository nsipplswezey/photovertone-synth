goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__285374 = s;
var limit__285375 = limit;
var parts__285376 = cljs.core.PersistentVector.fromArray([]);
while(true){
if(cljs.core._EQ_.call(null,limit__285375,1))
{return cljs.core.conj.call(null,parts__285376,s__285374);
} else
{var temp__3695__auto____285377 = cljs.core.re_find.call(null,re,s__285374);
if(cljs.core.truth_(temp__3695__auto____285377))
{var m__285378 = temp__3695__auto____285377;
var index__285379 = s__285374.indexOf(m__285378);
{
var G__285380 = s__285374.substring((index__285379 + cljs.core.count.call(null,m__285378)));
var G__285381 = (limit__285375 - 1);
var G__285382 = cljs.core.conj.call(null,parts__285376,s__285374.substring(0,index__285379));
s__285374 = G__285380;
limit__285375 = G__285381;
parts__285376 = G__285382;
continue;
}
} else
{return cljs.core.conj.call(null,parts__285376,s__285374);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__285383 = s.length;
while(true){
if((index__285383 === 0))
{return "";
} else
{var ch__285384 = cljs.core.get.call(null,s,(index__285383 - 1));
if((function (){var or__3548__auto____285385 = cljs.core._EQ_.call(null,ch__285384,"\n");
if(or__3548__auto____285385)
{return or__3548__auto____285385;
} else
{return cljs.core._EQ_.call(null,ch__285384,"\r");
}
})())
{{
var G__285386 = (index__285383 - 1);
index__285383 = G__285386;
continue;
}
} else
{return s.substring(0,index__285383);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__285387 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3548__auto____285388 = cljs.core.not.call(null,s__285387);
if(or__3548__auto____285388)
{return or__3548__auto____285388;
} else
{var or__3548__auto____285389 = cljs.core._EQ_.call(null,"",s__285387);
if(or__3548__auto____285389)
{return or__3548__auto____285389;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__285387);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__285390 = (new goog.string.StringBuffer());
var length__285391 = s.length;
var index__285392 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__285391,index__285392))
{return buffer__285390.toString();
} else
{var ch__285393 = s.charAt(index__285392);
var temp__3695__auto____285394 = cljs.core.get.call(null,cmap,ch__285393);
if(cljs.core.truth_(temp__3695__auto____285394))
{var replacement__285395 = temp__3695__auto____285394;
buffer__285390.append([cljs.core.str(replacement__285395)].join(''));
} else
{buffer__285390.append(ch__285393);
}
{
var G__285396 = (index__285392 + 1);
index__285392 = G__285396;
continue;
}
}
break;
}
});
