import React from "react";
import LoadedGraph from "./LoadedGraph";
import LineTime from "./LineTime";
import WaveForms from "./WaveForms";

export default class DynamicSVG extends React.Component {
    constructor(props) {
        super(props);
        this.active = true;
        this.state = { pro: 0, time: 0, audio: document.createElement("AUDIO") };
    }
    render() {
        let { pro, par, time, fr, spec , toggle , mode } = this.props,
            param = { ...par, pro, inside: [-40, 40] },
            lib = { play: "M20 0 L 90 50 20 100Z", paused: "M30,100V0 M70,0v100" };
        time = Math.floor(time / 60) + ":" + ("0" + Math.floor(time) % 60).slice(-2);
        
        return (
            <g className="dynamic" >
                <g className="dynamic" >
                    <WaveForms fr={fr} 
                        spec={spec} {...par} 
                        r1={param.r2} r2={param.r3} 
                        r3={param.r4} 
                    />
                </g>

                <g className="loadedPart" >
                    <LoadedGraph className={"loaded"} {...param} dif={true} />
                    <LineTime className={"line-time"} {...param} dif={true} />
                </g >
                
                <g className="time" onClick={toggle} >
                    <circle cx={param.cx} cy={param.cy} r={param.r1} className="timespace dunkel" />
                    <g 
                        className="playpause-icon" 
                        style={
                            { transform: "translate(" 
                            + (param.cx + 12) + "px," + 
                            (param.cy - 8) + "px) scale(" + 0.15 + 
                            ")" }} 
                    >
                        <path d={lib[mode]} className="play" />
                    </g>
                    <text x={param.cx - 7} y={param.cy + 7} className="prime">{time}</text>
                </g>
            </g>
        );
    }
}
