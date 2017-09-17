"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (!AudioContext) {
    throw new Error("This site cannot be run in \n    your Browser. Try a recent Chrome or Firefox");
}

var context = new AudioContext(),
    analyser = context.createAnalyser(),
    gainer = context.createGain(),
    audio = document.createElement("AUDIO");
var audioSrc = context.createMediaElementSource(audio);

audioSrc.connect(analyser);
audioSrc.connect(gainer);
gainer.connect(context.destination);

audio.playNew = function SetSource(src) {
    if (audio.src !== src + ".mp3") {
        audio.src = src + ".mp3";
    }
    audio.onloadeddata = function () {
        return audio.play();
    };
};
audio.toggle = function toggleAudio() {
    audio.paused ? audio.play() : audio.pause();
};

// analiser Functions //
var waveForm = {
    fr: new Uint8Array(800),
    spec: new Uint8Array(600)
};

waveForm.render = function UpdateWaveForm() {
    analyser.getByteFrequencyData(waveForm.spec);
    analyser.getByteTimeDomainData(waveForm.fr);
};

var AudioPlayer = { gainer: gainer, audio: audio, waveForm: waveForm };

exports.default = AudioPlayer;