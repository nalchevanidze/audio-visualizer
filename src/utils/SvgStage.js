import React ,{ Component } from "react";
import ReactDOM from "react-dom";
import SvgCoordinates from "./SvgCoordinates";
class SvgStage extends Component {
    componentDidMount() {
        let $this = ReactDOM.findDOMNode(this);
        if(this.props.stage){
            this.props.stage.convert = event=> SvgCoordinates( $this , event );
        }
    }
    render () {
        let { children , className , id ,viewBox } = this.props;
        return (
            <svg className={className} id={id} viewBox={viewBox} >
                {children}
            </svg>
        );
    }
}
export default SvgStage ;