import * as React from "react";
import LoadedGraph from "./LoadedGraph";
import { findDOMNode } from "react-dom";

export default class AudioLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { levelmove: false, gain: 0.5 };
        this.hide = false;
        this.levelMove = this.levelMove.bind(this);
        this.mouseUp = this.listenLevel.bind(this, false);
        this.mouseDown = this.listenLevel.bind(this, true);
    }
    componentDidMount() {
        let target = findDOMNode(this);
        target.addEventListener("mousemove", this.levelMove, false);
        target.addEventListener("mouseup", this.mouseUp, false);
        target.addEventListener("mousedown", this.mouseDown, false);
    }
    componentWillUnmount() {
        this.hide = true;
        let target = findDOMNode(this);
        target.removeEventListener("mousemove", this.levelMove, false);
        target.removeEventListener("mouseup", this.mouseUp, false);
        target.removeEventListener("mousedown", this.mouseDown, false);
    }
    levelMove(event) {

        const { convert, gain, cx, cy, r1, r2 } = this.props;
        if (!this.hide) {
            if (this.state.levelmove) {

                let position = convert(event),
                    centerDiference = { x: position.x - cx, y: position.y - cy },
                    distance = Math.sqrt(centerDiference.x ** 2 + centerDiference.y ** 2),
                    newGain = (distance - r1) / (r2 - r1)
                    ;

                newGain = newGain > 0.98 ? 0.98 : newGain;
                newGain = newGain < 0.05 ? 0.05 : newGain;
                this.setState({ gain: newGain });
                gain.setValueAtTime(newGain ** 2,0);
            }
        }
    }
    listenLevel(e, a) {
        if (!this.hide) {
            let t = e && a.target && a.target.id && a.target.id === "levelgain" || false;
            this.setState({ levelmove: t });
        }
    }

    render() {
        let i = this.props;
        return (
            <g className="gainer" fill="#BBB" stroke="#BBB" strokeWidth={0.5} >
                <g>
                    <LoadedGraph
                        stroke="none"
                        cx={i.cx}
                        cy={i.cy}
                        r1={i.r1 + (i.r2 - i.r1) * this.state.gain}
                        r2={i.r1}
                        pro={1}
                        inside={[40, -40]}
                        fillOpacity={0.7}
                    />
                    <LoadedGraph
                        cx={i.cx}
                        cy={i.cy}
                        r1={i.r1 + (i.r2 - i.r1) * this.state.gain}
                        r2={i.r1}
                        pro={1}
                        inside={[-40, 40]}
                        fillOpacity={0.4}
                    />
                </g>
                <LoadedGraph
                    id={"levelgain"}
                    cx={i.cx}
                    cy={i.cy}
                    r1={i.r1}
                    r2={i.r2}
                    pro={1}
                    inside={[40, -40]}
                    //styles
                    fill="black"
                    fillOpacity="0"
                    style={{ cursor: "pointer" }}
                />
            </g>
        );
    }
}
