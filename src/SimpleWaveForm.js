import React from "react";
import FlatSoundForm from "./RadialMath/FlatSoundForm";
import axios from "axios";
const cache = {};
export default class WaveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { form: [] };
    }
    WaveFormRequest() {
        let { url } = this.props;
        this.state.url = url;
        if (cache[url]) {
            this.setState({ form: cache[url] });
        } else {
            axios.get(`${url}.json`)
                .then(({ data }) => {
                    let form = FlatSoundForm(
                        data,
                        { width: 500, height: 50, resolution: 200 }
                    );
                    cache[url] = form;
                    this.setState({ form });
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
        const { fill = "#777", steps = "1 2", height = 50, width = 500 } = this.props;
        return (
            <svg viewBox={[0, -height / 2, width, height].join(" ")} >
                <path d={this.state.form} fill={fill} />
                <path d='M0 0 L500 0'
                    strokeDasharray={steps}
                    strokeWidth= { height / 2 + "px"}
                    stroke="white"
                    fill="none"
                />
            </svg>
        );
    }
}