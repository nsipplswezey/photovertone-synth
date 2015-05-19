(ns insane-noises.core
  (:use [overtone.live]
        [overtone.inst.piano]))
(stop)
(piano 72)
(piano 72)


;;Lets try chords
;;Doesn't like env-lin, nore does it like just lin...
;;BUT it does like lin-env
(definst saw-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (saw freq)
     vol))




(saw-wave 440 5 )
(saw-wave 523.25)
(saw-wave 261.25)

;;synths produce wave forms
;;multiple wave forms





;; We can also use midi
(saw-wave (midi->hz 69))
(saw-wave (midi->hz 72))
(saw-wave (midi->hz 60))


(note :A4)
(midi->hz (note :A4))
;; We can use standard music notes as well
(saw-wave (midi->hz (note :A4)))
(saw-wave (midi->hz (note :C5)))
(saw-wave (midi->hz (note :C4)))

;; Define a function for convenience
(defn note->hz [music-note]
      (midi->hz (note music-note)))


;Less -slightly- to type now
(saw-wave (note->hz :C5))

;; Let's make it even easier
(defn saw2 [music-note]
  (saw-wave (midi->hz (note music-note))))

(saw2 :A4)
(saw2 :C5)
(saw2 :C4)
;;Great. Nice.

;;Let's play chord
(defn play-chord [a-chord inst]
  (doseq [note a-chord] (inst note)))
(play-chord (chord :C4 :major) saw2)

(chord :C4 :major)

;;We can play a chord progression using times
;;I experimented with this earlier, and found that it's really tedious
;;Music timing is simultaneously absolute and relative.
;;The tempo is absolute
;;The next sound, is relative... I think.

(chord :C4 :minor7)
(chord :Ab4 :13)
(chord :F4 :13)
(chord :F4 :7)

(defn chord-progression-time []
  (let [time (now)]
    (at time (play-chord (chord :C4 :minor7) piano))
    (at (+ 2000 time) (play-chord (chord :Ab4 :13) piano))
    (at (+ 3000 time) (play-chord (chord :F4 :7) piano))
    (at (+ 3500 time) (play-chord (chord :Gb4 :7) piano))
    (at (+ 4000 time) (play-chord (chord :G4 :7) piano))))

(play-chord (chord :G3 :major) piano)

(chord-progression-time)


(definst steel-drum [note 60 amp 0.8]
  (let [freq (midicps note)]
    (* amp
       (env-gen (perc 0.01 0.2) 1 1 0 1 :action FREE)
       (+ (sin-osc (/ freq 2))
          (rlpf (saw freq) (* 1.1 freq) 0.4)))))


(steel-drum 72 2)

;;Ok now we're talking. Beats!
(defonce metro (metronome 120))


(metro)


(defn chord-progression-beat [m beat-num]
  (at (m (+ 0 beat-num)) (play-chord (chord :C4 :major) steel-drum))
  (at (m (+ 4 beat-num)) (play-chord (chord :G3 :major) steel-drum))
  (at (m (+ 8 beat-num)) (play-chord (chord :A3 :major) steel-drum))
  (at (m (+ 14 beat-num)) (play-chord (chord :F3 :major) steel-drum))
  (at (m (+ 18 beat-num)) (play-chord (chord :Bb3 :dim) steel-drum))
  ;;(apply-by (metro (inc beat)) #'chord-progression-beat metro (metro) [])
  )


(chord-progression-beat metro (metro))


(play-chord (chord :C3 :major) piano)
(play-chord (chord :C3 :minor) piano)

(at (+ 1000 (now) ) (play-chord (chord :C3 :minor) piano))

(let [time (now)]
  (at time (play-chord (chord :D3 :major7) piano))
  (at (+ 2000 time) (play-chord (chord :A3 :major) piano))
  (at (+ 3000 time) (play-chord (chord :A3 :major7) piano))
  (at (+ 4300 time) (play-chord (chord :F3 :major7) piano))
  (at (+ 5300 time) (play-chord (chord :F3 :major7) piano))
  (at (+ 5550 time) (play-chord (chord :F3 :major7) piano))
  (at (+ 6300 time) (play-chord (chord :F3 :major7) piano))
  (at (+ 6550 time) (play-chord (chord :F3 :major7) piano))

  )


;;Define a new insturment
(definst beep [note 60]
  (let [src (sin-osc (midicps note))
        env (env-gen (perc 0.01 1.0) :action FREE)]
    (* src env)))
(beep)


;;Hayling intro

(definst beep2 [note 60]
  (let [src (sin-osc (midicps note) 3.14)
        env (env-gen (perc 1 4) :action FREE)]
    (* src env)))

(beep2 (note :C4))
(beep2 (note :Eb4))
(beep2 (note :Bb3))
(beep2 (note :F3))


;;Let's try for hayling
;;Got hayling
(play-chord (chord :C4 :major) beep2)
(play-chord (chord :Eb4 :major) beep2)
(play-chord (chord :Bb3 :major) beep2)
(play-chord (chord :F3 :major) beep2)


;;The beep?
(beep2 (note :C4))
(beep2 (note :Eb4))
(beep2 (note :C4))
(beep2 (note :C4))

;;This one is great too...
(play-chord (chord :C4 :major) beep2)
(play-chord (chord :Eb4 :major) beep2)
(play-chord (chord :B3 :minor7) beep2)
(play-chord (chord :Bb3 :minor7) beep2)
(play-chord (chord :A3 :minor7) beep2)



;;I like this one
(play-chord (chord :C4 :major) beep2)
(play-chord (chord :Eb4 :major) beep2)
(play-chord (chord :D4 :minor7) beep2)



(play-chord (chord :G3 :major7) beep2)
(play-chord (chord :F3 :minor) beep2)


(beep)


;;And I can swap out instruments in my progression.
(let [time (now)]
  (at time (play-chord (chord :D3 :major7) beep))
  (at (+ 2000 time) (play-chord (chord :A3 :major) beep))
  (at (+ 3000 time) (play-chord (chord :A3 :major7) beep))
  (at (+ 4300 time) (play-chord (chord :F3 :major7) beep))
  (at (+ 5300 time) (play-chord (chord :F3 :major7) beep))
  (at (+ 5550 time) (play-chord (chord :F3 :major7) beep))
  (at (+ 6300 time) (play-chord (chord :F3 :major7) beep))
  (at (+ 6550 time) (play-chord (chord :F3 :major7) beep))

  )


;; Passing numbers to instruments
(for [i (range 110)] (at (+ (now) (* i 20)) (beep i)))
;; With randomization
(for [i (range 110)] (at (+ (now) (* i (rand 2) 20)) (beep i)))


;; Let's define a plucked string using magic
;; Thank god this is well written...
(definst plucked-string [note 60 amp 0.8 dur 2 decay 30 coef 0.3 gate 1]
  (let [freq (midicps note)
        noize (* 0.8 (white-noise))
        dly (/ 1.0 freq)
        plk (pluck noize gate dly dly decay coef)
        dist (distort plk)
        filt (rlpf dist (* 12 freq) 0.6)
        clp (clip2 filt 0.8)
        reverb (free-verb clp 0.4 0.8 0.2)]
    (* amp (env-gen (perc 0.0001 dur) :action FREE) reverb)))
;;Amazing. I only have the foggiest notion of what's happening here


(plucked-string)

;;I'm curious to disentangle this bit here.
(def reich-degrees [:vi :vii :i+ :_ :vii :_ :i+ :vii :vi :_ :vii :_])
(def pitches (degrees->pitches reich-degrees :diatonic :C4))


;temporal recursion
;we create a function that takes a time to a play a note,
;;All the notes to play and a seperation time
(defn play
  [time notes sep]
  (let [note (first notes)] ;we grab the first note to check it if exists
    (when note ;;here's the check for it's existance
      (at time (plucked-string note))) ;;if it does exist, play it at time


    (let [next-time (+ time sep)] ;;Then we schedule the function to call itself
      ;;At a later time
      ;;New time is the sum of current time and the seperation time
      ;;And when we call again, we pass new time, the rest of the notes, and sep
      (apply-at next-time play [next-time (rest notes) sep]))))

;;I wonder if a dynamic seperation time here could create
;;Those beautiful delays in the clicks and chirps.


(play (now) pitches 200)



;;Three things to extend this
;;1. Start two phases at the same time
;;2. Offset them with a delay
;;3. Cycle the pitches repeatedly

(let [t (+ 500 (now))]
  (play t (cycle pitches) 100)
  (play t (cycle pitches) 102)) ;;AH! Cycle is how we repeat!


(stop)
;; Let's try something simpler, just the oscillators tutorial
;;These are a bunch of oscillator ugens
(definst sin-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (sin-osc freq)
     vol))
(sin-wave)

(definst square-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (lf-pulse:ar freq)
     vol))
(square-wave)

(definst noisey [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (pink-noise)
     vol))
(noisey)


(definst triangle-wave [freq 440 attack 0.01 sustain 0.1 release 0.4 vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (lf-tri freq)
     vol))

(triangle-wave)



;;You can also use these generators to control signals
;;To modify params in other ugens
(definst spooky-house-slow [freq 440 width 0.2
                       attack 0.3 sustain 10 release 0.3
                       vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (sin-osc (+ freq (* 20 (lf-pulse:kr 0.1 1 width))))
     vol))

(definst spooky-house-fast [freq 440 width 0.2
                       attack 0.3 sustain 10 release 0.3
                       vol 0.4]
  (* (env-gen (lin-env attack sustain release) 1 1 0 1 FREE)
     (sin-osc (+ freq (* 20 (lf-pulse:kr 0.9 1 width))))
     vol))


(spooky-house-slow)
(spooky-house-fast)



(saw 100)
;;Let's try filters
(demo 10 (lpf (saw 100) (mouse-x 40 5000 EXP)))
(demo 10 (lpf (saw 100) (mouse-y 40 10000 EXP)))
;;Low-pass, cuts out the high end as you increase threshold frequency
;;and uses the mouse to change threshold frequency?
;;Wow.

(demo 10 (hpf (saw 100) (mouse-x 40 5000 EXP)))
;;High pass filter, cuts out the low end as you increase the threshold frequency

(demo 30 (bpf (saw 100) (mouse-x 40 5000 EXP) (mouse-y 0.01 1 LIN)))
;;So we do a demo for 30 seconds, of a saw, with a band pass, that takes
;;Two arguments. The first argument is the threshold, the second is the band pass
;;And we use mouse position scaled from values 40 - 5000 as an expontial function
;;Of x position... and then 0.01 to 1 as a linear function of y position
;;Beautiful

;;Ok. Non-linnear filters.

[freq 220]
(let [freq 240]
  (demo (pluck (* (white-noise) (env-gen (perc 0.001 2) :action FREE))
               1
               3
               (/ 1 freq))))

(let [x 1
      y x] y)

;;Lets try metronome
(def kick (sample (freesound-path 2086)))
(kick)
;;Wow. Created a kick. Oh shit.


(def one-twenty-bpm (metronome 120))

(def sixty-bpm (metronome 60))


;;this function will play our sound at whatever tempo we've set our metronome to
(defn looper [nome sound]
  (let [beat (nome)]
    (at (nome beat) (sound))
    (apply-at (nome (inc beat)) looper nome sound [])))

;;metronome
(looper one-twenty-bpm kick)
(stop)

(def nome (metronome 200))
(def nome (metronome 29))

(looper nome kick)
(stop)
;; 29 bpm is about "All the time"


;; Let's try demoing some other freesound-path stuff
(def fsTest (sample (freesound-path 2086)))
(def fsTest (sample (freesound-path 2087)))
(def fsTest (sample (freesound-path 2085)))

(def fsTest (sample (freesound-path 201)))
(def fsTest (sample (freesound-path 200)))

(def fsTest (sample (freesound-path 666)))


(fsTest)
(stop)
;;no dice. goes into perpetual timeout retry




;;Let's test out a swing beat

(definst c-hat [amp 0.8 t 0.01]
  (let [env (env-gen (perc 0.001 t) 1 1 0 1 FREE)
        noise (white-noise)
        sqr (* (env-gen (perc 0.01 0.04)) (pulse 880 0.2))
        filt (bpf (+ sqr noise) 9000 0.5)]
    (* amp env filt)))

(definst o-hat [amp 0.8 t 0.015]
  (let [env (env-gen (perc 0.001 t) 1 1 0 1 FREE)
        noise (white-noise)
        sqr (* (env-gen (perc 0.01 0.04)) (pulse 880 0.2))
        filt (bpf (+ sqr noise) 9000 0.5)]
    (* amp env filt)))

(defn swinger [beat]
  (at (metro beat) (o-hat))
  (at (metro (inc beat)) (c-hat))
  (at (metro (+ 1.65 beat)) (c-hat))
  (apply-at (metro (+ 2 beat)) #'swinger (+ 2 beat) []))

(def metro (metronome 120))

(swinger (metro))

(stop)
