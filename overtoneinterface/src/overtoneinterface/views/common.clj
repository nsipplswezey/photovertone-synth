(ns overtoneinterface.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]])) ;; Had to include-js here

(defpartial layout [& content]
  (html5
   [:head
    [:title "overtoneinterface"]
    (include-css "/css/reset.css")
    (include-css "/css/default.css") ;; put in the default css. Doesn't seem to get read though.
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")] ;; go get jquery
   [:body
    [:div#wrapper
     content]
    (include-js "/cljs/bootstrap.js")])) ;; include the javascript output
