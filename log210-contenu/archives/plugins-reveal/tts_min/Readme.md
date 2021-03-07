
# Text to speech
# Audio recording

To initialise text to speech and audio recording use the following process

- edit /Users/rossypro/.vscode/extensions//Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/views/initialize.ejs
- in dependencies section add 
    { src: 'libs/reveal.js/3.8.0/plugin/tts_min/tts_min_reveal.js', async: false }, 
    { src: 'plugin/audio-slideshow/RecordRTC.js', condition: function( ) { return !!document.body.classList; } },				
		{ src: 'plugin/audio-slideshow/slideshow-recorder.js', condition: function( ) { return !!document.body.classList; } },				
		{ src: 'plugin/audio-slideshow/audio-slideshow.js', condition: function( ) { return !!document.body.classList; } },

- copy tts_min and audio-sideshow plugin directory at /Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/libs/reveal.js/3.8.0/plugin
- modify tts_min_reveal.js to our needs
- modify slideshow-recorder.js shortcuts to your needs
  
## press h to list keyboard shortcut.