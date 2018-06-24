if(!AudioContext) {
    throw new Error(`This site cannot be run in 
    your Browser. Try a recent Chrome or Firefox`);
}

const context = new AudioContext(),
    analyser = context.createAnalyser() ,
    gainer = context.createGain(),
    audio = document.createElement("AUDIO");
let audioSrc = context.createMediaElementSource(audio);

audioSrc.connect(analyser);
audioSrc.connect(gainer);
gainer.connect(context.destination);


audio.playNew = function SetSource(src){
    if(audio.src !== src + ".mp3" ){
        audio.src = src + ".mp3" ;
      
    }
    audio.onloadeddata = ()=> audio.play();
    
};
audio.toggle = function toggleAudio (){ 
    audio.paused? audio.play() : audio.pause();
};


// analiser Functions //
let waveForm = {
    fr: new Uint8Array(800),
    spec: new Uint8Array(600)
};

waveForm.render = function UpdateWaveForm (){
    analyser.getByteFrequencyData(waveForm.spec);
    analyser.getByteTimeDomainData(waveForm.fr);
};
    

const AudioPlayer = { gainer, audio, waveForm };


export default AudioPlayer ;