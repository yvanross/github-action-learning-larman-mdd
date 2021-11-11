<script>
      // More info about config & dependencies:
      // - https://github.com/hakimel/reveal.js#configuration
      // - https://github.com/hakimel/reveal.js#dependencies

       Reveal.initialize({
        backgroundTransition: 'zoom' ,
        keyboard: { 
          82: function() { Recorder.toggleRecording(); }, // press 'r' to start/stop recording
          90: function() { Recorder.downloadZip(); },   // press 'z' to download zip containing audio files
          84: function() { Recorder.fetchTTS(); }   // press 't' to fetch TTS audio files
          32: function() {alert("space pressed");}
        },
        audio: {
          prefix: 'audio/',   // audio files are stored in the "audio" folder
          suffix: '.ogg',   // audio files have the ".ogg" ending
          // textToSpeechURL: "http://api.voicerss.org/?key=9cb7fb28834c4995827a8fe87563bac6&hl=fr-ca&c=ogg&src=",  // the URL to the text to speech converter
          textToSpeechURL: "http://api.voicerss.org/?key=2603fa7d2c0f475a941b18cab8a1d5bb&hl=fr-ca&c=ogg&src=",  // the URL to the text to speech converter
          defaultNotes: false,  // use slide notes as default for the text to speech converter
          defaultText: false,   // use slide text as default for the text to speech converter
          advance: 0,     // advance to next slide after given time in milliseconds after audio has played, use negative value to not advance 
          autoplay: true, // automatically start slideshow
          defaultDuration: 5, // default duration in seconds if no audio is available 
          playerOpacity: 0.05,  // opacity value of audio player if unfocused
          startAtFragment: false, // when moving to a slide, start at the current fragment or at the start of the slide
        },
        dependencies: [
        { src: 'plugin/audio-slideshow/slideshow-recorder.js', condition: function( ) { return !!document.body.classList; } },        
        { src: 'plugin/audio-slideshow/audio-slideshow.js', condition: function( ) { return !!document.body.classList; } },
        ]
      });
    </script>

---

history: true
progress: true
controls: true
controlsTutorial: true
controlsBackArrows: faded
center: false
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: monokai
logoImg: assets/log_ets.svb
slideNumber: true
title: 'test '
height: 100%
width: 100%
margin: 0
minScale: 1
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'
viewDistance: 3


---


# test

---

http://www.mit.edu/activities/bgsa/splash/README.md

```html
<video data-autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
```

<video data-autoplay controls=true progress=true src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> 

---

allo mon coco

<audio data-autoplay controls=true progress=true src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></audio> 




    