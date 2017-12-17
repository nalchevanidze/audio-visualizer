import React from "react";
import FlatSoundForm from "./RadialMath/FlatSoundForm";
import axios from "axios";
const cache = {};
export default class WaveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            data: [],
        };
    }
    WaveFormRequest() {
        let { url, height = 50, width = 500, stepSize = 2 } = this.props;
        stepSize = Math.max(1, stepSize);
        this.state.url = url;
        if (cache[url]) {
            this.setState({ form: cache[url] });
        } else {
            axios.get(`${url}.json`)
                .then(({ data }) => {

                    let form = FlatSoundForm(
                        data,
                        { width, height, resolution: width / stepSize }
                    );
                    cache[url] = form;
                    this.setState({ form, data });
                });
        }
    }
    componentWillMount() {
        this.WaveFormRequest();
    }
    componentWillReceiveProps() {
        this.WaveFormRequest();
    }
    render() {
        const { color = "#777", strokeWidth = 1 , height = 50, width = 500 } = this.props;
        return (
            <svg viewBox={[0, -height / 2, width, height].join(" ")} >
                <path 
                    stroke={color} 
                    d={this.state.form} 
                    strokeWidth={strokeWidth}
                />
            </svg>
        );
    }
}