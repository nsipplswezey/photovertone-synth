(defproject overtoneinterface "0.1.0-SNAPSHOT"
  :plugins [[lein-cljsbuild "0.1.10"]]  ;;Have to go back to a ghetto old version of lein-cljsbuild
  :description "Chris's overtone interface, attempt #2 with checks from youtube video"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 ;;[ring/ring-devel "1.0.0"]
                 ;;[pinot "0.1.1-SNAPSHOT"]
                 [overtone "0.7.0-SNAPSHOT"]
                 [jayq "0.1.0-SNAPSHOT"];; Making sure to stick to his same versions
                 [crate "0.1.0-SNAPSHOT"]
                 [fetch "0.1.0-SNAPSHOT"]
                 ;;[hiccup "1.0.0"]
                 [noir "1.3.0-beta2"]] ;; Only way I could get it working was with noir beta2

  :cljsbuild {:source-path "src"
              :compiler {:output-dir "resources/public/cljs"
                         :output-to "resources/public/cljs/bootstrap.js"
                         :optimizations :simple
                         :pretty-print true}}
  :main overtoneinterface.server)

