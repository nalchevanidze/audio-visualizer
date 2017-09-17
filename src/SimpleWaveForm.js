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
        this.state.url = url ;
        if(cache[url]) { 

            this.setState( { form: cache[url] } );

        } else{
            axios.get(`http://nalchevanidze.com/resource/audio/${url}.json`)
                .then(({data}) => {

                    let form = FlatSoundForm( 
                        data , 
                        {width: 500, height: 50 , resolution: 200 } 
                    );

                    cache[url] = form ;

                    this.setState({form});
                    
                });

        } 
    }
    componentWillMount() {
        this.WaveFormRequest();
    }
    componentWillReceiveProps(){
        this.WaveFormRequest();
    }
    render() {
        return (
            <svg viewBox="0 -25 500 50" >
                <path d={this.state.form} className="prime" />
                <path d='M0 0 L500 0' className="stepper" />
            </svg>
        );
    }
}
