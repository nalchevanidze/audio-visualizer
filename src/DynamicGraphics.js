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
        let { pro, par, time, fr, spec, toggle, mode } = this.props,
            param = { ...par, pro, inside: [-40, 40] },
            lib = { play: "M20 0 L 90 50 20 100Z", paused: "M30,100V0 M70,0v100" };
        time = Math.floor(time / 60) + ":" + ("0" + Math.floor(time) % 60).slice(-2);
        let { cx, cy } = param;

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
                    <LoadedGraph
                        className={"loaded"}
                        {...param}
                        fill="#FFF"
                        fillOpacity={0.8}
                        dif={true}
                    />
                    <g stroke="#FFC107">
                        <LineTime

                            className={"line-time"}
                            {...param}
                            dif={true}
                        />
                    </g>
                </g >

                <g
                    className="time"
                    onClick={toggle}
                    fill={"#777"}
                    style={{ cursor: "pointer" }}
                >
                    <g
                        stroke="#777"
                        strokeWidth="10px"
                        strokeLinejoin="round"
                        fillOpacity={0}
                        strokeLinecap="round"
                        className="playpause-icon"
                        style={{
                            transform: `translate(${cx + 11}px,${cy - 6}px) scale(0.125)`
                        }}
                    >
                        <path d={lib[mode]} className="play" />
                    </g>
                    <text
                        x={param.cx - 7}
                        y={param.cy + 7}
                        className="prime"
                        fontSize="20px"
                        textAnchor="middle"
                    >
                        {
                            time
                        }
                    </text>
                    <circle
                        cx={cx}
                        cy={cy}
                        r={param.r2}
                        fillOpacity={0.0}

                    />
                </g>
            </g>
        );
    }
}
