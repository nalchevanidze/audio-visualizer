import * as React from "react";
import LevelWaveForm from "./LevelWaveForm";
import DynamicGraphics from "./DynamicGraphics";
import AudioLevel from "./AudioLevel";
import LoadedGraph from "./LoadedGraph";
import {gainer , audio , waveForm , AudioObject , WaveForm } from "./AudioPlayer";
import SvgStage from "./utils/SvgStage";
import { findDOMNode } from "react-dom";

function ProcentFromAngle(angle, limit) {
    let d = angle * 180 / Math.PI - 90 + 40;
    d = d < 0 ? 360 + d : d;
    let procent = (360 - d) / limit;
    return (procent > 1 ? 1 : procent);
}

interface Parameters {
    cx: number,
    cy: number,
    r1: number,
    r2: number,
    r3: number,
    r4: number
}

interface AudioVisualizerProps {
    par: Parameters,
    src: string,
    play: boolean,
}

interface State {
    
}

export default class AudioVisualizer extends React.Component<State , AudioVisualizerProps> {
    hide: boolean;
    stage : {};
    audio: AudioObject;
    waveForm : WaveForm;
    
    constructor(props) {
        super(props);
        this.hide = false;
        this.stage = {};
        this.gainer = gainer;
        this.waveForm = waveForm;
        this.audio = audio;
        this.state = {
            mode: "paused",
            data: null,
            levelArray: [],
            fr: waveForm.fr,
            spec: waveForm.spec,
            pro: 0,
            time: 0
        };
        this.playAt = this.playAt.bind(this);
        this.updatewave = this.updatewave.bind(this);
    }
    componentWillMount() {
        let { par, src, play } = this.props;
        let { audio , updatewave } = this;
        par.rt = (audio.currentTime || 0).toFixed(1) * 2 / 10;
        this.par = par;
        if (src) {
            audio.setSrc(src)
            if (play) {
                audio.playNew(src);
            }
            this.gainer.gain.setValueAtTime(0.1,0);
            updatewave();
        }
    }
    componentDidMount() {
        findDOMNode(this).addEventListener("mousedown", this.playAt, false);
    }
    componentWillReceiveProps(next) {
        if (next.src) {
            this.audio.playNew(next.src);
        } else if (next.play) {
            this.audio.play();
        } else {
            this.audio.pause();
        }

    }
    updatewave() {
        if (!this.hide) {
            requestAnimationFrame(this.updatewave);
            if (!this.audio.isPoaused()) {
                this.state.mode = "play";
                this.waveForm.render();
                this.setState(this.audio.getState());
            } else if (this.state.mode === "play") {
                this.setState({ mode: "paused" });
            }

        }
    }
    componentWillUnmount() {
        this.hide = true;
        this.audio.pause();
        findDOMNode(this).removeEventListener("mousedown", this.playAt, false);
    }
    playAt(event) {
        let { target } = event;
        if (!target || target.id !== "play_at") {
            return null;
        }

        let limit = 360 - 2 * 40,
            { x, y } = this.stage.convert(event),
            { cx, cy } = this.par;

        let angle = Math.atan2(x - cx, y - cy),
            pro = ProcentFromAngle(angle, limit);
    
        const newState = this.audio.setProcent(pro);
        this.setState(newState);
    }
    render() {
        let p = this.par;
        let { state, stage , audio } = this;
        return (
            <SvgStage viewBox="0 0 200 200" height="400px" id="stage" stage={this.stage} >
                <g className="static" >
                    <circle
                        cx={p.cx}
                        cy={p.cy}
                        r={p.r2}
                        fillOpacity={0.02} />
                    <LevelWaveForm
                        {...this.par} 
                        map={this.props.src + ".json"} 
                        fillOpacity={0.8} />
                    />
                </g>
                <DynamicGraphics {...state} par={this.par} toggle={audio.toggle} />
                <AudioLevel
                    cx={p.cx} cy={p.cy} r1={p.r1} r2={p.r2}
                    gain={this.gainer.gain}
                    convert={stage.convert}
                />
                <LoadedGraph
                    fillOpacity={0}
                    id='play_at'
                    cx={p.cx} cy={p.cy} r1={p.r1} r2={p.r2} pro={1}
                    inside={[-40, 40]}
                />
            </SvgStage>
        );
    }
}