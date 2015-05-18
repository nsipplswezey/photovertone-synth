(ns overtoneinterface.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remotes])) ;; We need to require fetch

(server/load-views-ns 'overtoneinterface.views) ;;Why is there a ' here?
(server/add-middleware remotes/wrap-remotes) ;; And we do server/add-middleware on remotes/wrap-remotes

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'overtoneinterface})))

