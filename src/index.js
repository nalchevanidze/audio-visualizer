import React from "react";
import LevelWaveForm from "./LevelWaveForm";
import DynamicGraphics from "./DynamicGraphics";
import AudioLevel from "./AudioLevel";
import LoadedGraph from "./LoadedGraph";
import AudioPlayer from "./AudioPlayer";
import SvgStage from "./utils/SvgStage";
import ReactDOM from "react-dom";

function ProcentFromAngle(angle, limit) {
    let d = angle * 180 / Math.PI - 90 + 40;
    d = d < 0 ? 360 + d : d;
    let procent = (360 - d) / limit;
    return (procent > 1 ? 1 : procent);
}

export default class AudioVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.hide = false;
        this.stage = {};
        const { gainer, waveForm, audio } = AudioPlayer;
        this.gainer = gainer;
        this.waveForm = waveForm;
        this.state = {
            mode: "paused",
            data: null,
            levelArray: [],
            fr: waveForm.fr,
            spec: waveForm.spec,
            pro: 0,
            time: 0,
            audio: audio
        };
        this.playAt = this.playAt.bind(this);
        this.updatewave = this.updatewave.bind(this);
    }
    componentWillMount() {
        let { par, src, play } = this.props;
        let { state: { audio }, updatewave } = this;

        par.rt = (audio.currentTime || 0).toFixed(1) * 2 / 10;
        this.par = par;


        if (src) {
            audio.src = src + ".mp3";
            if (play) {
                audio.playNew(src);
            }
            this.gainer.gain.value = 0.1;
            updatewave();
        }
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener("mousedown", this.playAt, false);
    }
    componentWillReceiveProps(next) {
        if (next.src) {
            this.state.audio.playNew(next.src);
        } else if (next.play) {
            this.state.audio.play();
        } else {
            this.state.audio.pause();
        }

    }
    updatewave() {
        if (!this.hide) {
            requestAnimationFrame(this.updatewave);
            if (!this.state.audio.paused) {
                let audio = this.state.audio;
                this.state.mode = "play";
                this.waveForm.render();
                let pro = audio.currentTime / audio.duration;
                this.setState(
                    {
                        pro: (isNaN(pro) ? 0 : pro),
                        time: audio.currentTime
                    }
                );

            } else if (this.state.mode === "play") {
                this.setState({ mode: "paused" });
            }

        }
    }
    componentWillUnmount() {
        this.hide = true;
        this.state.audio.pause();
        ReactDOM.findDOMNode(this).removeEventListener("mousedown", this.playAt, false);
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
            pro = ProcentFromAngle(angle, limit),
            time = this.state.audio.duration * pro;
        this.state.audio.currentTime = time;
        this.setState({ time, pro });
    }
    render() {
        let p = this.par;
        let { state, stage } = this;
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
                <DynamicGraphics {...state} par={this.par} toggle={state.audio.toggle} />
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