import LinearStatistic from "./LinearStatistic";
import ResoluteArray from "./ResoluteArray";

export default function FlatSoundForm ( WaveArray , props ) {

    let { width , height, resolution } = props ;

    if( resolution) { 
        resolution = Number(resolution);
        if(isNaN(resolution)) {
            throw new Error("FlatSoundForm.js : False Resolution");
        }
        WaveArray = ResoluteArray( WaveArray , resolution ); 
    }

    if ( WaveArray.length < 2 ) {
        return "";
    }

    return "M" + [
        LinearStatistic( WaveArray , width , height ),
        LinearStatistic( WaveArray , width , -height ).reverse()
    ].join(" ")+ "z";
    
}