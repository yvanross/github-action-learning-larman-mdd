
<style>
.speech {
    visibility: hidden;
    }
.francais {
    visibility: hidden;
    }
.english {
    visibility: hidden;
    }
</style>

To initialise text to speech use the following process
::: block {style=font-size:0.7em}
- sublime /Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/views/initialize.ejs
- in dependencies section add 
    - { src: 'libs/reveal.js/3.8.0/plugin/tts_min/tts_min_reveal.js', async: false }, 
- copy tts_min directory at /Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/libs/reveal.js/3.8.0/plugin
- modify tts_min_reveal.js to our needs
- press q to cancel speaking and clear speech queue.
- press t to toggle speech on/off
- press r to read content of class speech
- press e to toggle language french/english.  Should do it with english and french class instead of speech.
:::

::: block {class=speech style=font-size:0.2em}

Bonjour je m'appelle Amélie je suis la voie par défault de Chrome.  Vous avez besoin d'une configuration d'écran de 1920x1048 pour afficher sur les écran Creston de l'École de Technologie Supérieure
:::