if(!AudioContext) {
    throw new Error(`This site cannot be run in 
    your Browser. Try a recent Chrome or Firefox`);
}

const audioInstance : HTMLMediaElement= document.createElement("AUDIO") as HTMLMediaElement;




export class AudioObject {
    private context:AudioContext;
    public gainer;
    public analyser;
    constructor(){
        this.context = new AudioContext();
        this.analyser = this.context.createAnalyser();
        this.gainer = this.context.createGain(); 
        const { context , analyser , gainer} = this;
        const audioSrc = context.createMediaElementSource(audioInstance);
        audioSrc.connect(analyser);
        audioSrc.connect(gainer);
        gainer.connect(this.context.destination);
    }

    toggle = () => { 
        audioInstance.paused? audioInstance.play() : audioInstance.pause();
    };

    playNew = (src): void => {
        if(audioInstance.src !== src + ".mp3" ){
            audioInstance.src = src + ".mp3" ;
          
        }
        audioInstance.onloadeddata = ()=> audioInstance.play();
    };

    setSrc(src){
        audioInstance.src = src + ".mp3";
    }
    play = ()=> audioInstance.play();
    pause = ()=> audioInstance.pause();

    getCurrentTime = ():number => audioInstance.currentTime;

    getProcent = ():number => {
        const pro = this.getCurrentTime() / audioInstance.duration;
        return (isNaN(pro) ? 0 : pro)
    }

    setProcent = (pro: number )=>{
        const time = audioInstance.duration * pro;
        audioInstance.currentTime = time;
        return { pro , time };
    }

    getState = ()=> ({ time : this.getCurrentTime() , pro: this.getProcent() });

    isPoaused = () : boolean => audioInstance.paused;
} 

export class WaveForm {
    public fr: Uint8Array;
    public spec : Uint8Array;
    private analyser;
    constructor(analyser){
        this.analyser = analyser;
        this.fr = new Uint8Array(800);
        this.spec = new Uint8Array(600);
    }
    render = () : void => {
        this.analyser.getByteFrequencyData(this.spec);
        this.analyser.getByteTimeDomainData(this.fr);
    };
}

export const audio = new AudioObject();
export const waveForm = new WaveForm(audio.analyser);
export const gainer = audio.gainer;
