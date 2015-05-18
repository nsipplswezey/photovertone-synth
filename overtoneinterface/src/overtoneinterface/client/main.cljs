(ns overtoneinterface.client.main
  (:require [crate.core :as crate] ;;We require crate. It has one power macro: defpartial for creating DOM
            [fetch.remotes :as remotes]) ;; Now we need fetch for server client interaction

  (:use [jayq.core :only [$ append delegate data]]) ;;We use jayq only for $ append delegate data
  (:use-macros [crate.macros :only [defpartial]])) ;; We use-macros grabbing crate.macros only defpartial

(def $body ($ :body))
(def $piano ($ :#piano))
(def $controls ($ :#controls))
(def $notes ($ :#notes))
(def $wobble ($ :#wobble))

(defpartial button [{:keys [label action param]}] ;; these looks like tags for buttons. A name, and action, and a param
  [:a.button {:href "#" :data-action action :data-param param} label]) ;;A general button? # for href

;;At this point we dont just do a 'lein run' we switch to 'lein cljsbuild auto'
;;So our work will update on every save. But of course it doesn't run.
;;Macintosh-7:overtoneinterface nsipplswezey$ lein cljsbuild auto
;;'cljsbuild' is not a task. See 'lein help'.
;; Had to back my ass up to a way older version of cljsbuild.



(def piano-notes (for [note (range 40 60)]  ;;This is an abstraction on the single button
                   {:label (str note) :action "play-note" :param note})) ;;For the action and param

(def dub-notes (for [note (range 40 80)]  ;;This is an abstraction on the single button
                   {:label (str note) :action "dub-note" :param note})) ;;For the action and param

(def dub-wobble (for [w (range 0 8)]  ;;This is an abstraction on the single button
                   {:label (str "w" w) :action "dub-wobble" :param w})) ;;For the action and param



(def control-buttons [{:label "start" :action "start-dub" :param ""}
                      {:label "stop" :action "stop-dub" :param ""}])


;(append $piano (button {:label "play note" ;; So that button that we created with def partial
;                :action "play-note" ;; It's now down here with a key for label, action, param
;                :param "40"})) ;; Even better, we can delegate :click to the button


(defn populate [container buttons]  ;; This is an abstraction on the single button for the button
  (doseq [b buttons]
    (append container (button b))))


(populate $piano piano-notes) ;; So this uses the populate function
;;to... fill the container with buttons?
(populate $controls control-buttons)
(populate $notes dub-notes)
(populate $wobble dub-wobble)

(delegate $body button :click ;; Click!
          (fn [e]  ;; A function that takes e and does preventDefault on e. That's some jquery stuff.
            (.preventDefault e)
            ;;(js/alert "clicked!"))) The alert was a place holder for a sound.
            (this-as me
                     (let [$me ($ me)
                           action (data $me :action) ;; Extracts the action and param from the button
                           param (data $me :param) ;; Extracts the param as well.
                           param (if (= param "")
                                    []
                                    [param])] ;; And gives it to the remote function
                       (remotes/remote-callback action param)))))
