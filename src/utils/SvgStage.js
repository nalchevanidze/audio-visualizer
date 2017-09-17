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
        let { children , ...props } = this.props;
        delete props.stage;
        return (
            <svg {...props} >
                {children}
            </svg>
        );
    }
}
export default SvgStage ;