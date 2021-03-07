var tts = {};
tts.Synth = window.speechSynthesis;
tts.Voices = [];
tts.DvIndex = 0; //Used to help identify the default tts voice for Chrome or FF on the users platform.
tts.DvRate = 0.85; // used to set speech rate between 0 and 2, 1 = 'normal'- there are other seemingly optional parameters like pitch, language, volume.
tts.On = false; //Set to false to prevent tts production.
tts.Cancel = true; // Set to true if you want reading to stop with a slide change. Otherwise, all readable text is queued for speech output.
tts.readFrags = true; //Set to true to read fragment text content as it appears.
tts.readNotes = true; //set to true to read text content of any <aside class="notes">text content</aside> tag in a slide section

tts.ReadText = function(txt) {
    // Use tts to read text. A new speech synthesis utterance instance is required for each tts output for FF.
    // Chrome lets you redefine the SpeechSynthesizerUtterance.txt property-
    // as needed without having to create a new object every time you want speech.
    let ttsSpeechChunk = new SpeechSynthesisUtterance(txt);
    console.log("languages disponibles",     console.log("languages disponibles", tts.Voices);
    tts.DvIndex);

    ttsSpeechChunk.voice = tts.Voices[tts.DvIndex]; //use default voice -- some voice must be assigned for FF to work.
    ttsSpeechChunk.rate = tts.DvRate;
    tts.Synth.speak(ttsSpeechChunk);
};

tts.ReadVisElmts = function() {
    // Uses arguments[0] to denote a DOM element . Then read the innerText of the rest of the list of selectors that are contained in the arguments[0] element.
    // works in Chrome, Opera and FF.
    let focusElmt = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let xElmts = focusElmt.querySelectorAll(arguments[i]);
        for (let k = 0; k < xElmts.length; k++) {
            tts.ReadText(xElmts[k].innerText);
        }
    }

};

tts.ReadAnyElmts = function() {
    // Uses arguments[0] to denote a DOM element . Then read the textContent of the rest of the list of selectors, even hidden ones, that are contained in the arguments[0] element.
    // works in Chrome, Opera and FF.
    let focusElmt = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let xElmts = focusElmt.querySelectorAll(arguments[i]);
        for (let k = 0; k < xElmts.length; k++) {
            tts.ReadText(xElmts[k].textContent);
        }
    }

};

tts.ToggleSpeech = function() {
    // turn tts on/off with status announced
    tts.On = !(tts.On);
    if (tts.On) {
        tts.ReadText("Activation de la voie!")
    } else {
        tts.Synth.cancel();
        console.log(tts.DvIndex);
        ttsSpeechChunk.voice = tts.Voices[tts.DvIndex]
        tts.ReadText("Désactiver la voie!")
    };
};

tts.ToggleLanguage = function() {
    if (tts.DvIndex == 0) {
        tts.DvIndex = 1;
        tts.ReadText("The language is now in english!")
    } else {
        tts.DvIndex = 0;
        tts.ReadText("Le language est maintenant en français!")

    }

};

tts.ReadSpeech = function() {
    // turn tts on/off with status announced
    var thisSlide = Reveal.getCurrentSlide();
    tts.ReadText(tts.ReadAnyElmts(thisSlide, ".speech"));
};


for (var ix = 0; ix < tts.Voices.length; ix++) {
    //find the default voice-- needed for FF, in Chrome voices[0] works as the default.
    if (tts.Voices[ix].default) {
        tts.DvIndex = ix;
    }
    tts.DvIndex = 0;
    console.log("tts.DvIndex", tts.DvIndex)
};


Reveal.addEventListener('slidechanged', function(event) {
    var thisSlide = Reveal.getCurrentSlide();
    tts.Voices = tts.Synth.getVoices();
    console.log("slidechanged")

    if (tts.Cancel) tts.Synth.cancel(); //Stop reading anything still in the speech queue, if tts.Cancel.
    // Read the innerText for the listed elements of current slide after waiting 1 second to allow transitions to conclude.
    // The list of elements is read in the order shown. You can use other selectors like a ".readMe" class to simplify things.
    if (tts.On) {
        // setTimeout(function(){tts.ReadVisElmts(thisSlide,"h1","h2","h3","p","li");}, 1000);
        // if (tts.readNotes) setTimeout(function() { tts.ReadAnyElmts(thisSlide, ".notes"); }, 1000); // Then, conditionally, read hidden notes class.
        if (tts.readNotes) setTimeout(function() { tts.ReadAnyElmts(thisSlide, ".speech"); }, 1000); // Then, conditionally, read hidden notes class.
        if (tts.readNotes) setTimeout(function() {
            var currentIndex = tts.DvIndex
            tts.DvIndex = 0;
            tts.ReadAnyElmts(thisSlide, ".francais");
            tts.DvIndex = currentIndex;
        }, 1000); // Then, conditionally, read hidden notes class.
        if (tts.readNotes) setTimeout(function() {
            var currentIndex = tts.DvIndex
            tts.DvIndex = 33;
            tts.ReadAnyElmts(thisSlide, ".english");
            tts.DvIndex = currentIndex;
        }, 1000); // Then, conditionally, read hidden notes class.
    }
});

Reveal.addEventListener('fragmentshown', function(event) {
    // This reads the text content of fragments as they are shown.
    // event.fragment = the fragment element
    if (tts.readFrags && tts.On) {
        let txt = event.fragment.textContent;
        tts.ReadText(txt);
    }
});


Reveal.configure({
    keyboard: {
        81: function() { tts.Synth.cancel() }, // press q to cancel speaking and clear speech queue.
        84: function() { tts.ToggleSpeech() }, // press t to toggle speech on/off
        82: function() { tts.ReadSpeech() }, // press s to read speech content
        69: function() { tts.ToggleLanguage() } // press e to toogle language french/english

    }
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log("ready");
//     tts.Voices = tts.Synth.getVoices();
//     console.log("init", tts.Voices)
// })


function init() {
    tts.Voices = tts.Synth.getVoices();
    console.log("init tts_min_reveal.js", tts.Voices)
}

setTimeout(function() { init() }, 2000);