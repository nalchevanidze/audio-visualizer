import React from "react";
import LoadedGraph from "./LoadedGraph";
import ReactDOM from "react-dom";


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
        let target = ReactDOM.findDOMNode(this);
        target.addEventListener("mousemove", this.levelMove, false);
        target.addEventListener("mouseup", this.mouseUp, false);
        target.addEventListener("mousedown", this.mouseDown, false);
    }
    componentWillUnmount() {
        this.hide = true; 
        let target = ReactDOM.findDOMNode(this);
        target.removeEventListener("mousemove", this.levelMove, false);
        target.removeEventListener("mouseup", this.mouseUp, false);
        target.removeEventListener("mousedown", this.mouseDown, false);   
    }
    levelMove(event) {

        const { convert , gain , cx ,cy , r1 , r2 } = this.props; 
        if (!this.hide) {
            if (this.state.levelmove) {

                let position = convert(event),
                    centerDiference = { x: position.x-cx, y: position.y-cy },
                    distance = Math.sqrt(centerDiference.x**2 + centerDiference.y**2),
                    newGain = (distance - r1)/(r2-r1)
                ;
                
                newGain = newGain > 0.98 ? 0.98 : newGain;
                newGain = newGain < 0.05 ? 0.05 : newGain;
                this.setState({ gain: newGain });
                gain.value = newGain**2;
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
            <g className="gainer">
                <LoadedGraph 
                    className={"gain-level2"} 
                    cx={i.cx} cy={i.cy} r1={i.r1 + (i.r2 - i.r1) * this.state.gain} 
                    r2={i.r1} pro={1} inside={[40, -40]} 
                />
                <LoadedGraph 
                    className={"gain-level"} 
                    cx={i.cx} cy={i.cy} r1={i.r1 + (i.r2 - i.r1) * this.state.gain} 
                    r2={i.r1} pro={1} inside={[-40, 40]} />
                <LoadedGraph id={"levelgain"} 
                    className={"gain"} cx={i.cx} cy={i.cy} r1={i.r1} r2={i.r2} pro={1} 
                    inside={[40, -40]} 
                />
            </g>
        );
    }
}
