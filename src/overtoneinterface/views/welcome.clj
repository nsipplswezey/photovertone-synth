(ns overtoneinterface.views.welcome
  (:require [overtoneinterface.views.common :as common]
            [overtoneinterface.models.dubstep :as dubstep])
  (:use [noir.core :only [defpage]]
        [overtone.live]
        [overtone.inst.sampled-piano]
        [noir.fetch.remotes :only [defremote]] ;; We only want on thing from fetch which is defremote
        [hiccup.core :only [html]]))

(defpage "/" []
  (common/layout
   [:p "Welcome to overtoneinterface"]
   [:div#piano] ;; Add div piano
   [:div#controls]
   [:div#notes]
   [:div#wobble]))

(defremote play-note [n]
  (println "Playing note:" n) ;;And we'll set defremote up here. And we just use it to print which note
  (sampled-piano n)) ;;Bam. Piano noises. Fuck yeah.

(defremote start-dub []
  (dubstep/start-dub))

(defremote stop-dub []
  (dubstep/stop-dub))

(defremote dub-note[n]
  (dubstep/alter-dub :note n)) ;;why :note n?

(defremote dub-wobble[n]
  (dubstep/alter-dub :wobble-factor n))
